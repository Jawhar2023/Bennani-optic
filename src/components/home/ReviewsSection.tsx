import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Star, MapPin, Clock, Phone, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Ranym Zribi",
    role: "2 avis",
    date: "il y a un mois",
    rating: 5,
    text: "Service parfait et accueil chaleureux avec une équipe très professionnelle",
    avatar: "R",
  },
  {
    id: 2,
    name: "Eya Hazami",
    role: "1 avis",
    date: "il y a un mois",
    rating: 5,
    text: "Large choix de montures et service rapide ❤️",
    avatar: "E",
  },
  {
    id: 3,
    name: "Meriem Nemlaghi",
    role: "1 avis",
    date: "il y a un an",
    rating: 5,
    text: "Je vous félicite pour votre service et professionnalisme ! Grâce à leur large sélection et à leurs conseils d'experts, trouver la paire de lunettes parfaite n'a jamais été aussi facile ! Fortement recommandé !",
    avatar: "M",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    }
  },
};

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mapY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-medium uppercase tracking-widest"
          >
            Avis clients
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title text-foreground mt-4"
          >
            Ce que disent nos clients
          </motion.h2>

          {/* Animated Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star, i) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-6 h-6 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <motion.span
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                5.0
              </motion.span>
            </div>
            <motion.span
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
            >
              Basé sur 33 avis
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              className="review-card relative group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
              >
                <Quote className="w-5 h-5 text-primary-foreground" />
              </motion.div>

              {/* Header */}
              <div className="flex items-start gap-4 mt-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {review.avatar}
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>

              {/* Rating & Date */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    >
                      <Star
                        className={`w-4 h-4 ${star <= review.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                {review.text}
              </p>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/0 pointer-events-none"
                whileHover={{ borderColor: "rgba(16,185,129,0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Google Maps Integration with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-card rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Map with Parallax – embed URL so map loads in iframe */}
            <motion.div
              style={{ y: mapY }}
              className="aspect-video lg:aspect-auto lg:h-[450px] relative overflow-hidden bg-muted/30"
            >
              <iframe
                src="https://www.google.com/maps?q=7+Rue+Hamza+Ibn+Abdelmottaleb+Cebalat+Ben+Ammar&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BENNANI OPTIC Ariana - Emplacement"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
              {/* Map Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 pointer-events-none lg:hidden" />
            </motion.div>

            {/* Info */}
            <motion.div
              className="p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.h3
                className="font-display text-2xl lg:text-3xl font-bold text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                BENNANI OPTIC
              </motion.h3>
              <motion.p
                className="text-lg text-muted-foreground mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                Opticien · Ariana Soghra
              </motion.p>

              <div className="space-y-4 mt-8">
                {[
                  { icon: MapPin, text: "7 Rue Hamza Ibn Abdelmottaleb, Cebalat Ben Ammar" },
                  { icon: Clock, text: "Ouvre à 09:00 (jeu.)" },
                  { icon: Phone, text: "52 832 242", isLink: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    {item.isLink ? (
                      <a href="tel:+21652832242" className="text-primary hover:underline">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => window.open("https://maps.app.goo.gl/qV3ENYNoKPgSdtbV8", "_blank")}
                  >
                    Itinéraire
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => window.open("https://maps.app.goo.gl/qV3ENYNoKPgSdtbV8", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir sur Google
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Write Review CTA - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 lg:p-12 overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative Elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-primary/15 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Floating Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${20 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <Star className="w-4 h-4 text-primary/30 fill-primary/20" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              {/* Google Logo/Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-white dark:bg-card px-4 py-2 rounded-full shadow-lg mb-6"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-medium text-foreground">Google Reviews</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.7 }}
                className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4"
              >
                Votre avis compte ! ⭐
              </motion.h3>

              {/* Persuasive Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8 }}
                className="text-muted-foreground mb-3 leading-relaxed"
              >
                Vous avez passé un bon moment chez <span className="text-primary font-semibold">BENNANI OPTIC</span> ?
                Votre avis compte ! Il nous aide à nous améliorer et permet à d'autres
                de découvrir nos services.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.9 }}
                className="text-sm text-muted-foreground/80 mb-8"
              >
                Il ne faut que 30 secondes pour partager votre expérience. Merci pour votre soutien ! 🙏
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                {[
                  "✓ Aider les autres à trouver de bons opticiens",
                  "✓ Soutenir le commerce local",
                  "✓ 30 secondes suffisent"
                ].map((benefit, i) => (
                  <motion.span
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 2.1 + i * 0.1 }}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-3 px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
                  onClick={() =>
                    window.open(
                      "https://search.google.com/local/writereview?placeid=ChIJeS8ZKWrL4hIRNTsdcGLk3wE",
                      "_blank",
                    )
                  }
                >
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </motion.div>
                  Rédiger un avis sur Google
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Trust Badge */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.4 }}
                className="text-xs text-muted-foreground/60 mt-6"
              >
                🔒 Vous serez redirigé vers Google pour laisser votre avis en toute sécurité
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
