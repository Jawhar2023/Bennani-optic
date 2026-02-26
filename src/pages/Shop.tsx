import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Heart, Eye, Search, Filter, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const allProducts = [
  { id: 1, name: "Noir Cat-Eye", price: 89.00, category: "eyeglasses", image: product1, isNew: true },
  { id: 2, name: "Havana Classic", price: 75.00, category: "eyeglasses", image: product2, isNew: true },
  { id: 3, name: "Aviator Gold", price: 95.00, category: "sunglasses", image: product3, isNew: true },
  { id: 4, name: "Lagoon Square", price: 68.00, category: "sunglasses", image: product4, isNew: true },
  { id: 5, name: "Vintage Round", price: 85.00, category: "eyeglasses", image: product1, isNew: false },
  { id: 6, name: "Sport Shield", price: 120.00, category: "sunglasses", image: product2, isNew: false },
  { id: 7, name: "Modern Rectangle", price: 72.00, category: "eyeglasses", image: product3, isNew: false },
  { id: 8, name: "Classic Aviator", price: 88.00, category: "sunglasses", image: product4, isNew: false },
];

const Shop = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    { name: "Tous", value: null },
    { name: "Lunettes de vue", value: "eyeglasses" },
    { name: "Lunettes de soleil", value: "sunglasses" },
    { name: "Lentilles de contact", value: "lenses" },
    { name: "Accessoires", value: "accessories" },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar forceDarkText />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/50 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Notre collection</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Découvrez des montures premium conçues avec précision et style
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full md:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Rechercher un produit..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <Button
                    key={category.value || "all"}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Aucun produit ne correspond à vos critères.</p>
              </div>
            ) : (
              <div className={viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
              }>
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow group">
                      <Link to={`/product/${product.id}`}>
                        <CardHeader className="p-0 relative cursor-pointer">
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            {product.isNew && (
                              <Badge className="absolute top-2 right-2 bg-primary">New</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                          <p className="text-2xl font-bold text-primary">TND {product.price.toFixed(2)}</p>
                        </CardContent>
                      </Link>
                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button variant="outline" size="icon" className="flex-1">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Link to={`/product/${product.id}`} className="flex-1">
                          <Button variant="outline" size="icon" className="w-full">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button
                          className="flex-1"
                          onClick={() => {
                            addItem({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.image,
                            }, 1);
                            toast({
                              title: "Added to Cart!",
                              description: `${product.name} added to your cart.`,
                            });
                          }}
                        >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
