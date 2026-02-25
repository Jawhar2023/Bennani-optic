import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
  Calendar,
  ArrowRight,
} from "lucide-react";

const CONTACT_ITEMS = [
  {
    label: "Téléphone",
    value: "52 832 242",
    href: "tel:+21652832242",
    icon: Phone,
    iconBg: "bg-orange-500",
  },
  {
    label: "WhatsApp",
    value: "+216 52 832 242",
    href: "https://wa.me/21652832242",
    icon: MessageCircle,
    iconBg: "bg-[#25D366]",
  },
  {
    label: "Email",
    value: "contact@bennanioptic.tn",
    href: "mailto:contact@bennanioptic.tn",
    icon: Mail,
    iconBg: "bg-teal-500",
  },
  {
    label: "Facebook",
    value: "BENNANI OPTIC",
    href: "https://www.facebook.com/profile.php?id=100083160220995&locale=fr_FR",
    icon: Facebook,
    iconBg: "bg-[#1877F2]",
  },
  {
    label: "Instagram",
    value: "@bennanioptic",
    href: "https://www.instagram.com/bennanioptic/",
    icon: Instagram,
    iconBg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    label: "Adresse",
    value: "7 Rue Hamza Ibn Abdelmottaleb, Cebalat Ben Ammar",
    subLink: { text: "Obtenir l'itinéraire", href: "https://maps.app.goo.gl/BzKicbnd5FZ3FkPi9" },
    icon: MapPin,
    iconBg: "bg-orange-500",
  },
  {
    label: "Horaires d'ouverture",
    value: "Ouvre à 09:00 (jeu.)",
    icon: Clock,
    iconBg: "bg-orange-500",
  },
];

const Contact = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    script.setAttribute("async", "true");
    head?.appendChild(script);
    return () => {
      if (head && head.contains(script)) head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar forceDarkText />
      <main className="pt-20">
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left: Informations de Contact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de Contact
                </h2>
                {CONTACT_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-zinc-300 transition-colors"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} text-white`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-muted-foreground text-sm font-medium">{item.label}</p>
                      {item.href && !item.subLink ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:underline break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground break-words">{item.value}</p>
                      )}
                      {item.subLink && (
                        <a
                          href={item.subLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-orange-500 hover:text-orange-600 mt-1"
                        >
                          {item.subLink.text}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: Prendre Rendez-vous */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Prendre Rendez-vous
                </h2>
                <div className="rounded-2xl bg-white border border-zinc-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-zinc-200">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold">Réservation en ligne</h3>
                        <p className="text-muted-foreground text-sm">Choisissez votre créneau horaire</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3">
                      Réservez votre consultation directement en ligne. Sélectionnez la date et
                      l'heure qui vous conviennent le mieux.
                    </p>
                  </div>
                  <div className="p-4 bg-zinc-50 rounded-b-2xl">
                    <div
                      className="calendly-inline-widget rounded-xl overflow-hidden shadow-lg"
                      data-url="https://calendly.com/jawharchahed49/new-meeting-1?hide_landing_page_details=1&hide_gdpr_banner=1"
                      style={{ minWidth: "100%", height: "700px" }}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm px-6 py-4 text-center border-t border-zinc-200">
                    Pour les urgences, veuillez nous appeler directement au{" "}
                    <a href="tel:+21652832242" className="text-orange-500 hover:underline">
                      52 832 242
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
