import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, PhoneCall } from "lucide-react";

const Checkout = () => {
  const { items: cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [sending, setSending] = useState(false);

  const subtotal = getTotalPrice();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !address.trim()) {
      return;
    }
    if (cartItems.length === 0) {
      navigate("/cart");
      return;
    }

    setSending(true);

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const itemsDescription = cartItems
      .map(
        (item) =>
          `- ${item.quantity} x ${item.name} (TND ${item.price.toFixed(2)} each)`,
      )
      .join("\n");

    const message = `New order from SPECTRO VISION +\n\nCustomer name: ${fullName}\nCustomer phone: ${phone.trim()}\nCustomer address: ${address.trim()}\n\nTotal order amount: TND ${total.toFixed(
      2,
    )}\n\nItems:\n${itemsDescription}`;

    const whatsappUrl = `https://wa.me/21650577392?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");

    clearCart();
    navigate("/shop");
    setSending(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar forceDarkText />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/50 py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Checkout
              </h1>
              <p className="text-muted-foreground text-lg">
                Enter your details to complete your order via WhatsApp.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            required
                            autoComplete="given-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            required
                            autoComplete="family-name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          required
                          autoComplete="tel"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={address}
                          onChange={(event) => setAddress(event.target.value)}
                          required
                          placeholder="Street, city, postal code"
                          autoComplete="street-address"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full gap-2"
                        size="lg"
                        disabled={sending || cartItems.length === 0}
                      >
                        <PhoneCall className="w-4 h-4" />
                        {cartItems.length === 0
                          ? "Your cart is empty"
                          : "Send Order via WhatsApp"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>TND {subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>
                          {shipping === 0 ? "Free" : `TND ${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span>TND {tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-primary">
                          TND {total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {cartItems.length === 0 ? (
                      <p className="text-sm text-muted-foreground">
                        Your cart is empty. Please{" "}
                        <button
                          type="button"
                          onClick={() => navigate("/shop")}
                          className="text-primary underline-offset-2 hover:underline"
                        >
                          add products
                        </button>{" "}
                        before completing checkout.
                      </p>
                    ) : (
                      <ul className="space-y-2 text-sm">
                        {cartItems.map((item) => (
                          <li
                            key={item.id}
                            className="flex items-center justify-between"
                          >
                            <span className="text-muted-foreground">
                              {item.quantity} x {item.name}
                            </span>
                            <span className="font-medium">
                              TND {(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;

