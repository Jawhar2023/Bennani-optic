import { motion, useInView } from "framer-motion";
import { Eye, Shield, Truck, Award, Clock, HeartHandshake } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Eye,
    title: "Professional Eye Tests",
    description: "Comprehensive eye exams by certified optometrists using advanced equipment",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All our frames come with a 2-year warranty and premium lens protection",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery available for orders within M'saken area",
  },
  {
    icon: Award,
    title: "Premium Brands",
    description: "Curated selection of top international and local eyewear brands",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Get your glasses ready within 24 hours with our express service",
  },
  {
    icon: HeartHandshake,
    title: "Personal Styling",
    description: "Expert consultants help you find the perfect frames for your face",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title text-foreground mt-4"
          >
            The BENNANI OPTIC Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground mt-4"
          >
            Experience exceptional eye care with our commitment to quality, service, and your perfect vision
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="relative bg-card rounded-2xl p-8 group hover:shadow-xl transition-shadow duration-500"
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    repeatDelay: 5,
                    delay: index * 0.5 
                  }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
              </motion.div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Number Badge */}
              <motion.div
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
