import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Award, Users, Heart, MapPin, Clock, Phone } from "lucide-react";
import aboutStoreImg from "@/assets/about-store.png";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "We only carry premium eyewear brands and ensure every product meets our high standards."
    },
    {
      icon: Users,
      title: "Expert Care",
      description: "Our certified optometrists provide personalized eye care services tailored to your needs."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and eye health are our top priorities in everything we do."
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "15+" },
    { label: "Happy Customers", value: "10,000+" },
    { label: "Product Selection", value: "500+" },
    { label: "Expert Staff", value: "12+" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar forceDarkText />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About SPECTRO VISION +
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your trusted optical store in M'saken, dedicated to providing exceptional eye care and premium eyewear
                solutions for over 15 years. We combine modern technology with personalized service to ensure your vision
                and style needs are perfectly met.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to bring quality eye care to our community, SPECTRO VISION + has been
                    serving the people of our region for over 15 years. Named after the great
                    Islamic scholar and scientist Ibn al-Haytham, known as the "Father of Optics," we honor his
                    legacy by combining scientific excellence with compassionate care.
                  </p>
                  <p>
                    Our journey began with a simple mission: to make quality eyewear and professional eye care
                    accessible to everyone. Over the years, we've grown from a small local store to a trusted
                    destination for comprehensive optical services.
                  </p>
                  <p>
                    Today, we continue to evolve, bringing you the latest in eyewear fashion and eye care technology
                    while maintaining the personal touch that makes us a community favorite.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={aboutStoreImg}
                  alt="Intérieur du magasin BENNANI OPTIC – vitrines de lunettes et ambiance accueillante"
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl ring-1 ring-primary/10"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at SPECTRO VISION +
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Visit Our Store</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous vous accueillons avec plaisir à Cebalat Ben Ammar, Ariana
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Adresse</h3>
                          <p className="text-muted-foreground">
                            7 Rue Hamza Ibn Abdelmottaleb<br />
                            Cebalat Ben Ammar
                          </p>
                          <a href="https://maps.app.goo.gl/BzKicbnd5FZ3FkPi9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm mt-1 inline-block">
                            Voir sur la carte →
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Téléphone</h3>
                          <p className="text-muted-foreground">
                            <a href="tel:+21652832242" className="hover:text-primary">52 832 242</a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Horaires</h3>
                          <p className="text-muted-foreground">
                            Ouvre à 09:00 (jeu.)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border bg-muted/30 min-h-[280px]">
                      <iframe
                        src="https://www.google.com/maps?q=7+Rue+Hamza+Ibn+Abdelmottaleb+Cebalat+Ben+Ammar&output=embed"
                        width="100%"
                        height="100%"
                        className="min-h-[280px] w-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BENNANI OPTIC – Emplacement du magasin"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
