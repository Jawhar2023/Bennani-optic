import { Eye, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Lunettes de vue", href: "/shop/eyeglasses" },
  { name: "Lunettes de soleil", href: "/shop/sunglasses" },
  { name: "Lentilles de contact", href: "/shop/lenses" },
  { name: "Accessoires", href: "/shop/accessories" },
];

const companyLinks = [
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Test de vue", href: "/eye-test" },
  { name: "Avis", href: "/reviews" },
];

const legalLinks = [
  { name: "Politique de confidentialité", href: "/privacy" },
  { name: "Conditions d'utilisation", href: "/terms" },
  { name: "Politique de retour", href: "/returns" },
];

export function Footer() {
  return (
    <footer className="bg-hero-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Eye className="w-8 h-8 text-primary" />
              <span className="text-xl font-display font-bold tracking-wide">
                BENNANI OPTIC
              </span>
            </Link>
            <p className="text-primary-foreground/70 mt-4 text-sm leading-relaxed">
              Opticien à Ariana Soghra. Achats en magasin, retrait en magasin et livraison.
              Large choix de montures et conseils d'experts.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100083160220995&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/bennanioptic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Boutique</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  7 Rue Hamza Ibn Abdelmottaleb, Cebalat Ben Ammar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+21652832242"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  52 832 242
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Ouvre à 09:00 (jeu.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold text-lg">Restez informé</h4>
              <p className="text-sm text-primary-foreground/70 mt-1">
                Inscrivez-vous pour recevoir nos offres et nouveautés.
              </p>
            </div>
            <div className="flex gap-2 max-w-md w-full md:w-auto">
              <Input
                type="email"
                placeholder="Entrez votre email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                S'abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 BENNANI OPTIC Ariana. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
