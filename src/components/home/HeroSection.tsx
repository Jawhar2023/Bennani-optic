import { motion, useScroll, useTransform } from "framer-motion";
import { Star, CheckCircle2, ArrowRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg-recolored.jpg";

const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/5529578/5529578-hd_1920_1080_25fps.mp4";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.05,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const floatingCardVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const title = "Vision";
  const subtitle = "Réinventée.";

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <section ref={containerRef} className="hero-section">
      {/* Video Background with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroBg}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Animated Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-[hsl(160,30%,5%)] via-[hsl(160,30%,5%,0.7)] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[hsl(160,30%,5%)] via-transparent to-transparent"
        />
      </motion.div>

      {/* Video Control Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-primary-foreground hover:bg-primary/40 transition-all duration-300"
      >
        {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
      </motion.button>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative container mx-auto px-4 lg:px-8 min-h-screen flex items-center"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-20">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Animated Title - Letter by Letter */}
            <div className="overflow-hidden">
              <h1 className="hero-title leading-tight flex flex-wrap">
                {title.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <div className="overflow-hidden">
              <h1 className="hero-title leading-tight flex flex-wrap">
                {subtitle.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + title.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.p
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="hero-subtitle mt-6 max-w-md"
            >
              Découvrez des lunettes de haute qualité qui s'adaptent à votre vision
              et à votre style. Explorez une collection soigneusement sélectionnée
              de lunettes de vue et de soleil alliant design et précision.
            </motion.p>

            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/shop">
                    <Button className="btn-hero group">
                    Nouveautés
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="inline-block ml-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/shop">
                  <Button className="btn-hero-outline">
                    Voir la collection
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex gap-8 mt-12"
            >
              {[
                { value: "500+", label: "Clients satisfaits" },
                { value: "50+", label: "Styles de montures" },
                { value: "5.0", label: "Note Google" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.p
                    className="text-2xl md:text-3xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Card with Animation */}
          <motion.div
            variants={floatingCardVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <motion.div
              className="floating-card max-w-sm ml-auto"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="font-display text-xl font-semibold text-foreground"
              >
                Lunettes & examens de vue,<br />directement chez vous.
              </motion.h3>
              <p className="text-sm text-muted-foreground mt-2">
                Service d'examen de vue et d'essai de montures
              </p>

              {/* Animated Rating */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex items-center gap-2 mt-4"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 1.6 + i * 0.1, type: "spring", stiffness: 300 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-medium text-primary">5.0 (33)</span>
              </motion.div>

              <div className="mt-6 space-y-3">
                <p className="text-sm font-medium text-foreground">À quoi vous attendre ?</p>
                {[
                  "Professionnels de la vue certifiés",
                  "Technologie de diagnostic avancée",
                  "Visites à domicile sans tracas",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + i * 0.15, duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.9 + i * 0.15, type: "spring" }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => window.open("https://calendly.com/jawharchahed49/new-meeting-1", "_blank")}
                >
                  Prendre rendez-vous
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
          animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.6)", "rgba(255,255,255,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70"
          />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-primary-foreground/50 mt-2 text-center"
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
}
