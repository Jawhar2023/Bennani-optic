import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingBag,
  Heart,
  ArrowLeft,
  Plus,
  Minus,
  Check,
  Star,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

// Product database - in a real app, this would come from an API
const productDatabase: Record<number, any> = {
  1: {
    id: 1,
    name: "Noir Cat-Eye",
    price: 89.00,
    category: "eyeglasses",
    image: product1,
    images: [product1, product2, product3],
    isNew: true,
    rating: 4.8,
    reviews: 124,
    description: "Elegant cat-eye frames that combine vintage charm with modern sophistication. Perfect for making a bold fashion statement while maintaining optimal vision comfort.",
    features: [
      "Premium acetate frame material",
      "Anti-reflective lens coating included",
      "UV protection",
      "Lightweight and comfortable",
      "Available in multiple colors"
    ],
    specifications: {
      frame: "Acetate",
      lens: "Polycarbonate",
      size: "Medium",
      bridge: "18mm",
      temple: "140mm",
      lensWidth: "52mm"
    },
    inStock: true,
    stock: 15
  },
  2: {
    id: 2,
    name: "Havana Classic",
    price: 75.00,
    category: "eyeglasses",
    image: product2,
    images: [product2, product1, product4],
    isNew: true,
    rating: 4.6,
    reviews: 89,
    description: "Timeless tortoiseshell frames with a classic rectangular design. Versatile and stylish, perfect for both professional and casual settings.",
    features: [
      "Tortoiseshell pattern",
      "Durable frame construction",
      "Anti-scratch coating",
      "Comfortable nose pads",
      "Classic design"
    ],
    specifications: {
      frame: "Acetate",
      lens: "Polycarbonate",
      size: "Medium-Large",
      bridge: "20mm",
      temple: "145mm",
      lensWidth: "54mm"
    },
    inStock: true,
    stock: 8
  },
  3: {
    id: 3,
    name: "Aviator Gold",
    price: 95.00,
    category: "sunglasses",
    image: product3,
    images: [product3, product1, product2],
    isNew: true,
    rating: 4.9,
    reviews: 203,
    description: "Iconic aviator sunglasses with gold-tone metal frame and gradient lenses. A classic design that never goes out of style.",
    features: [
      "Gradient lens tint",
      "Polarized lenses",
      "100% UV protection",
      "Metal frame",
      "Premium lens quality"
    ],
    specifications: {
      frame: "Metal",
      lens: "Polarized Polycarbonate",
      size: "Large",
      bridge: "19mm",
      temple: "145mm",
      lensWidth: "58mm"
    },
    inStock: true,
    stock: 12
  },
  4: {
    id: 4,
    name: "Lagoon Square",
    price: 68.00,
    category: "sunglasses",
    image: product4,
    images: [product4, product3, product1],
    isNew: true,
    rating: 4.7,
    reviews: 156,
    description: "Modern square sunglasses with vibrant lagoon-tinted lenses. Perfect for sunny days and outdoor adventures.",
    features: [
      "Vibrant tinted lenses",
      "UV400 protection",
      "Lightweight design",
      "Contemporary style",
      "Comfortable fit"
    ],
    specifications: {
      frame: "Acetate",
      lens: "Polycarbonate",
      size: "Medium",
      bridge: "18mm",
      temple: "140mm",
      lensWidth: "54mm"
    },
    inStock: true,
    stock: 20
  }
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const productId = id ? parseInt(id) : null;
  const product = productId ? productDatabase[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar forceDarkText />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity
    );
    toast({
      title: "Added to Cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="min-h-screen">
      <Navbar forceDarkText />
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-4 border-b bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-foreground">Shop</Link>
              <span>/</span>
              <Link to={`/shop/${product.category}`} className="hover:text-foreground capitalize">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-square rounded-lg overflow-hidden bg-muted"
                >
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {product.images.length > 1 && (
                  <div className="flex gap-4">
                    {product.images.map((img: string, index: number) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square w-24 rounded-lg overflow-hidden border-2 transition-colors ${selectedImageIndex === index
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground/50"
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={img}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {product.isNew && (
                          <Badge className="bg-primary">New</Badge>
                        )}
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <h1 className="text-4xl font-display font-bold mb-4">{product.name}</h1>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${star <= Math.round(product.rating)
                                ? "text-primary fill-primary"
                                : "text-muted-foreground"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-semibold">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews} reviews)</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={isFavorite ? "text-primary border-primary" : ""}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-6">TND {product.price.toFixed(2)}</p>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <Separator />

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Quantity and Actions */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Quantity</label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <span className={`text-sm ${product.inStock ? "text-green-600" : "text-destructive"}`}>
                        {product.inStock ? `${product.stock} in stock` : "Out of stock"}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="flex-1"
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      <ShoppingBag className="w-5 h-5 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      size="lg"
                      variant="default"
                      className="flex-1"
                      onClick={handleBuyNow}
                      disabled={!product.inStock}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">Easy Returns</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">1 Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground capitalize">{key}:</span>
                          <span className="font-medium">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Average rating: {product.rating} out of 5 ({product.reviews} reviews)
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center py-8">
                      Reviews are displayed here. In a real application, this would show individual customer reviews.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
