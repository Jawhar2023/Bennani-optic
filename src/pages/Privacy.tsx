import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

const Privacy = () => {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground text-lg">
                Last updated: January 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Card>
              <CardContent className="p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At بصريات ابن الهيثم ("we," "our," or "us"), we are committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                    you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information about you in various ways:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Personal information (name, email, phone number, address)</li>
                    <li>Medical information related to eye care services</li>
                    <li>Payment information for purchases</li>
                    <li>Usage data and website interaction information</li>
                    <li>Device information and browsing patterns</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect for various purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>To provide and maintain our services</li>
                    <li>To process your orders and transactions</li>
                    <li>To communicate with you about your account or services</li>
                    <li>To send you marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell your personal information. We may share your information only in the following
                    circumstances: with service providers who assist in our operations, when required by law, to
                    protect our rights, or with your explicit consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal information.
                    However, no method of transmission over the internet is 100% secure, and we cannot guarantee
                    absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate or incomplete data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain
                    information. You can instruct your browser to refuse all cookies or to indicate when a cookie is
                    being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect
                    personal information from children.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;
