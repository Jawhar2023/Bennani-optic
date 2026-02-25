import { motion, useInView } from "framer-motion";
import { ShoppingBag, Heart, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Noir Cat-Eye",
    price: 89.00,
    image: product1,
    isNew: true,
    isTrending: true,
  },
  {
    id: 2,
    name: "Havana Classic",
    price: 75.00,
    image: product2,
    isNew: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Aviator Gold",
    price: 95.00,
    image: product3,
    isNew: true,
    isTrending: true,
  },
  {
    id: 4,
    name: "Lagoon Square",
    price: 68.00,
    image: product4,
    isNew: true,
    isTrending: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    }
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export function FeaturedProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12"
        >
          <div className="flex items-center gap-8">
            <motion.button 
              className="text-sm font-medium text-primary border-b-2 border-primary pb-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              • New In
            </motion.button>
            <motion.button 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors pb-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              • Best Sellers
            </motion.button>
          </div>
          <motion.div whileHover={{ x: 5 }} className="inline-flex">
            <Button variant="link" className="text-primary hover:text-primary/80 gap-2">
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/product/${product.id}`}>
                {/* Badge */}
                {product.isTrending && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 left-4 z-10 flex items-center gap-2"
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Eye className="w-3 h-3 text-primary" />
                    </motion.div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      It's Trending Now
                    </span>
                  </motion.div>
                )}

                {/* Image */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                
                {/* Animated Overlay */}
                <div 
                  className="absolute inset-0 bg-foreground/0 flex items-center justify-center gap-3 pointer-events-none"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-auto"
                  >
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="pointer-events-auto"
                  >
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="rounded-full shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                </div>

                {/* Info */}
                <motion.div 
                  className="p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {product.isNew && (
                    <motion.span 
                      className="badge-trending text-[10px]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: 0.5 + index * 0.1 }}
                    >
                      New
                    </motion.span>
                  )}
                  <h3 className="font-medium text-foreground mt-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-muted-foreground">
                      TND {product.price.toFixed(2)}
                    </p>
                    <motion.span 
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      View Details
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
