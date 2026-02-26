import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

// Import local video assets
import Video1 from "@/assets/Recording 2026-01-16 215217.mp4";
import Video2 from "@/assets/Recording 2026-01-16 215610.mp4";
import Video3 from "@/assets/Recording 2026-01-16 232635.mp4";

// Professional videos for optical/fashion showcase
const SHOWCASE_VIDEOS = [
  {
    id: 1,
    url: Video1,
    title: "Montures premium",
    subtitle: "Conçues pour la perfection",
  },
  {
    id: 2,
    url: Video2,
    title: "Style & Vision",
    subtitle: "Exprimez votre personnalité",
  },
  {
    id: 3,
    url: Video3,
    title: "Collection exclusive",
    subtitle: "Découvrez l'excellence",
  },
];

const MAIN_VIDEO_URL = Video1;

export function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const togglePlay = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-hero-dark overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
            Une expérience d'exception
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title text-primary-foreground mt-4"
          >
            Là où la vision rencontre l'art
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-primary-foreground/70 mt-4"
          >
            Découvrez notre collection à travers des expériences visuelles immersives
          </motion.p>
        </motion.div>

        {/* Main Video with Parallax */}
        <motion.div
          style={{ y, scale, opacity }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-8"
        >
          <video
            ref={mainVideoRef}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={MAIN_VIDEO_URL} type="video/mp4" />
          </video>

          {/* Video Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-6 right-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/30 transition-colors"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
              className="text-primary-foreground text-right"
            >
              <p className="font-display text-lg font-semibold">Collection premium</p>
              <p className="text-sm text-primary-foreground/70">Nouveautés 2024</p>
            </motion.div>
          </motion.div>

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 border-2 border-primary/0 rounded-3xl pointer-events-none"
            animate={{ borderColor: ["rgba(16,185,129,0)", "rgba(16,185,129,0.3)", "rgba(16,185,129,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              >
                <source src={video.url} type="video/mp4" />
              </video>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(160,30%,5%)] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"
              />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <motion.h3
                  className="font-display text-xl font-semibold text-primary-foreground"
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  {video.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-primary-foreground/70 mt-1"
                  initial={{ y: 10, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.9 + index * 0.2 }}
                >
                  {video.subtitle}
                </motion.p>
              </div>

              {/* Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                  <Play className="w-6 h-6 ml-1" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
