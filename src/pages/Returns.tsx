import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, Package, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Returns = () => {
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
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Return & Exchange Policy</h1>
              <p className="text-muted-foreground text-lg">
                We want you to be completely satisfied with your purchase
              </p>
            </motion.div>
          </div>
        </section>

        {/* Return Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Return Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <CardTitle>Return Period</CardTitle>
                  </div>
                  <CardDescription>
                    You have 14 days from the date of purchase to return or exchange your items.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Items must be returned in their original condition, unused, and with all original packaging,
                    tags, and accessories included. Prescription eyewear and contact lenses that have been opened
                    or used cannot be returned for health and safety reasons.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Return Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Package className="w-6 h-6 text-primary" />
                    <CardTitle>How to Return</CardTitle>
                  </div>
                  <CardDescription>
                    Follow these simple steps to return your purchase
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                    <li>Contact us at contact@ibnalhaytham.tn or call +216 73 290 746 to initiate the return process.</li>
                    <li>Provide your order number and reason for return.</li>
                    <li>Package the item securely in its original packaging.</li>
                    <li>Bring the item to our store at PHHJ+984, Rue Farhat Hached, M'saken, Tunisia.</li>
                    <li>Our staff will inspect the item and process your refund or exchange.</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Refund Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Refund Policy</CardTitle>
                  <CardDescription>
                    Refunds will be processed within 5-7 business days
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Refunds will be issued to the original payment method used for purchase. If you paid by cash,
                    a store credit will be issued. Processing time for refunds is typically 5-7 business days after
                    we receive and inspect the returned item.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Shipping costs are non-refundable unless the item was defective or
                      incorrectly shipped.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Exchanges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Exchanges</CardTitle>
                  <CardDescription>
                    Need a different size or style? We're happy to help!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We offer exchanges for items in new, unworn condition with original packaging. If the item you
                    wish to exchange is more expensive, you'll need to pay the difference. If it's less expensive,
                    we'll refund the difference.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Exchanges must be made within the 14-day return period. Please visit our store for exchanges,
                    as we want to ensure the new item fits perfectly.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Non-Returnable Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                    <CardTitle>Non-Returnable Items</CardTitle>
                  </div>
                  <CardDescription>
                    Some items cannot be returned for health and safety reasons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Prescription eyewear that has been customized or fitted</li>
                    <li>Contact lenses that have been opened</li>
                    <li>Items damaged by misuse or normal wear</li>
                    <li>Items without original packaging or tags</li>
                    <li>Sale items marked as final sale</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need Help with a Return?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our customer service team is here to assist you with any questions or concerns about returns or exchanges.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
