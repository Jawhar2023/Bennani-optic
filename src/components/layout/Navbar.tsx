import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, User, Menu, X, ChevronDown, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const navLinks = [
  { name: "Accueil", href: "/" },
  {
    name: "Boutique",
    href: "/shop",
    submenu: [
      { name: "Lunettes de vue", href: "/shop/eyeglasses" },
      { name: "Lunettes de soleil", href: "/shop/sunglasses" },
      { name: "Lentilles de contact", href: "/shop/lenses" },
      { name: "Accessoires", href: "/shop/accessories" },
    ]
  },
  { name: "Test de vue", href: "/eye-test" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
];

interface NavbarProps {
  forceDarkText?: boolean;
}

export function Navbar({ forceDarkText = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();

  // Use dark text if scrolled OR if forceDarkText is set (for light background pages)
  const useDarkText = forceDarkText || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Eye className={`w-8 h-8 ${useDarkText ? "text-primary" : "text-primary-foreground"}`} />
              <span
                className={`text-xl font-display font-bold tracking-wide ${useDarkText ? "text-foreground" : "text-primary-foreground"
                  }`}
              >
                BENNANI OPTIC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={link.href}
                  className={`nav-link flex items-center gap-1 ${useDarkText ? "text-foreground hover:text-primary" : "nav-link-light"
                    }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-lg overflow-hidden"
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/cart">
              <Button
                variant="outline"
                size="icon"
                className={`relative ${!useDarkText ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" : ""
                  }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${useDarkText ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card rounded-b-2xl overflow-hidden"
            >
              <div className="py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border flex justify-center">
                  <Link to="/cart">
                    <Button variant="outline" size="icon">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
