import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
  const { items: cartItems, updateQuantity, removeItem, getTotalPrice } = useCart();

  const updateQuantityByChange = (id: number, change: number) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      updateQuantity(id, newQuantity);
    }
  };

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

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
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <ShoppingBag className="w-8 h-8 text-primary shrink-0" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Panier</h1>
              <p className="text-muted-foreground text-lg">
                Vérifiez vos articles puis passez à la commande
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-24 h-24 text-primary/40 mx-auto mb-6 shrink-0" strokeWidth={1.5} />
                <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
                <p className="text-muted-foreground mb-6">Ajoutez des produits pour commencer vos achats</p>
                <Button asChild size="lg">
                  <Link to="/shop">Voir les produits</Link>
                </Button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                              <p className="text-primary font-bold text-xl mb-4">TND {item.price.toFixed(2)}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 text-foreground hover:text-primary"
                                    onClick={() => updateQuantityByChange(item.id, -1)}
                                  >
                                    <Minus className="w-4 h-4" />
                                  </Button>
                                  <span className="w-12 text-center font-medium">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 text-foreground hover:text-primary"
                                    onClick={() => updateQuantityByChange(item.id, 1)}
                                  >
                                    <Plus className="w-4 h-4" />
                                  </Button>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                >
                                  <Trash2 className="w-5 h-5 shrink-0" />
                                </Button>
                              </div>
                              <p className="text-muted-foreground text-sm mt-2">
                                Sous-total : TND {(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="sticky top-24">
                      <CardHeader>
                        <CardTitle>Récapitulatif</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Sous-total</span>
                            <span>TND {subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Livraison</span>
                            <span>{shipping === 0 ? "Gratuite" : `TND ${shipping.toFixed(2)}`}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Taxe</span>
                            <span>TND {tax.toFixed(2)}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span className="text-primary">TND {total.toFixed(2)}</span>
                          </div>
                        </div>

                        {subtotal < 100 && (
                          <div className="p-3 bg-primary/10 rounded-lg text-sm text-center">
                            Ajoutez TND {(100 - subtotal).toFixed(2)} pour bénéficier de la livraison gratuite !
                          </div>
                        )}

                        <Button className="w-full text-primary-foreground" size="lg" asChild>
                          <Link to="/checkout" className="text-primary-foreground">
                            Passer la commande
                            <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                          </Link>
                        </Button>

                        <Button variant="outline" className="w-full" asChild>
                          <Link to="/shop">Continuer vos achats</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
