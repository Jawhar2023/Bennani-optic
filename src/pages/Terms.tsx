import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Terms = () => {
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground text-lg">
                Last updated: January 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using the بصريات ابن الهيثم website and services, you accept and agree to be
                    bound by the terms and provision of this agreement. If you do not agree to these terms, please
                    do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials on our website for
                    personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Products and Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide accurate descriptions and images of our products. However, we do not warrant
                    that product descriptions or other content is accurate, complete, reliable, current, or error-free.
                    We reserve the right to correct any errors, inaccuracies, or omissions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All prices are listed in Tunisian Dinar (TND) or as specified. We reserve the right to change
                    prices at any time without prior notice. Payment must be made in full at the time of purchase
                    unless otherwise agreed upon.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Medical Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information provided on this website is for general informational purposes only and is not
                    intended as medical advice. Eye examinations and prescriptions must be performed by a licensed
                    optometrist. We strongly recommend regular professional eye examinations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall بصريات ابن الهيثم or its suppliers be liable for any damages (including,
                    without limitation, damages for loss of data or profit, or due to business interruption) arising
                    out of the use or inability to use the materials on our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Revisions and Errata</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on our website could include technical, typographical, or photographic
                    errors. We do not warrant that any of the materials on its website are accurate, complete, or
                    current. We may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We have not reviewed all of the sites linked to our website and are not responsible for the
                    contents of any such linked site. The inclusion of any link does not imply endorsement by us.
                    Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of Tunisia
                    and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    <strong>Email:</strong> contact@ibnalhaytham.tn<br />
                    <strong>Phone:</strong> +216 73 290 746<br />
                    <strong>Address:</strong> PHHJ+984, Rue Farhat Hached, M'saken, Tunisia
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
