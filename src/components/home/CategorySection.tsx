import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import menCategory from "@/assets/men-category.jpg";
import womenCategory from "@/assets/women-category.jpg";

const categories = [
  {
    id: 1,
    name: "Homme",
    description: "Montures affirmées pour l'homme moderne",
    image: menCategory,
    href: "/shop/men",
  },
  {
    id: 2,
    name: "Femme",
    description: "Styles élégants qui attirent le regard",
    image: womenCategory,
    href: "/shop/women",
  },
];

export function CategorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={containerRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary text-sm font-medium uppercase tracking-widest"
          >
            Acheter par catégorie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="section-title text-foreground mt-4"
          >
            Trouvez votre style parfait
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              style={{ x: index === 0 ? x1 : x2 }}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Image with Parallax */}
              <motion.img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
              />
              
              {/* Animated Gradient Overlay */}
              <motion.div 
                className="absolute inset-0"
                initial={{ background: "linear-gradient(180deg, transparent 0%, rgba(13,28,25,0.7) 100%)" }}
                whileHover={{ background: "linear-gradient(180deg, transparent 0%, rgba(13,28,25,0.9) 100%)" }}
                transition={{ duration: 0.5 }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6">
                <motion.h3 
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  {category.name}
                </motion.h3>

                <motion.p
                  className="text-primary-foreground/70 text-center mt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                >
                  {category.description}
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6"
                >
                  <Link to={category.href}>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-primary/90 border-none group/btn gap-2 px-8"
                    >
                      Voir la sélection
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-primary/50 rounded-bl-2xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
