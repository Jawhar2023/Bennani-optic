import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed Ben Ali",
      rating: 5,
      date: "2 weeks ago",
      comment: "Excellent service! The staff is professional and helped me find the perfect frames. Highly recommended!",
      product: "Noir Cat-Eye"
    },
    {
      id: 2,
      name: "Fatima Khaled",
      rating: 5,
      date: "1 month ago",
      comment: "Great quality eyewear at reasonable prices. The eye examination was thorough and the optometrist was very knowledgeable.",
      product: "Havana Classic"
    },
    {
      id: 3,
      name: "Mohamed Hassen",
      rating: 4,
      date: "2 months ago",
      comment: "Good selection of frames and excellent customer service. The staff took time to help me choose the right style.",
      product: "Aviator Gold"
    },
    {
      id: 4,
      name: "Salma Trabelsi",
      rating: 5,
      date: "3 months ago",
      comment: "Best optical store in M'saken! Professional service, quality products, and fair prices. Will definitely come back.",
      product: "Lagoon Square"
    },
    {
      id: 5,
      name: "Youssef Ammar",
      rating: 5,
      date: "4 months ago",
      comment: "Very satisfied with my purchase. The frames are comfortable and stylish. The eye test was comprehensive.",
      product: "Modern Rectangle"
    },
    {
      id: 6,
      name: "Aicha Ben Salah",
      rating: 4,
      date: "5 months ago",
      comment: "Good experience overall. Nice selection and helpful staff. The store is clean and well-organized.",
      product: "Vintage Round"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating === 4).length,
    3: reviews.filter(r => r.rating === 3).length,
    2: reviews.filter(r => r.rating === 2).length,
    1: reviews.filter(r => r.rating === 1).length,
  };

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
                <Star className="w-8 h-8 text-primary fill-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Customer Reviews</h1>
              <p className="text-muted-foreground text-lg">
                See what our customers have to say about their experience with us
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reviews Summary */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Overall Rating */}
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 ${star <= Math.round(averageRating)
                            ? "text-primary fill-primary"
                            : "text-muted-foreground"
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
                </CardContent>
              </Card>

              {/* Rating Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Rating Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = ratingDistribution[rating as keyof typeof ratingDistribution];
                    const percentage = (count / reviews.length) * 100;
                    return (
                      <div key={rating} className="flex items-center gap-3">
                        <div className="flex items-center gap-1 w-20">
                          <span className="text-sm font-medium">{rating}</span>
                          <Star className="w-4 h-4 text-primary fill-primary" />
                        </div>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{count}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews List */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{review.name}</CardTitle>
                            <CardDescription>{review.date}</CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= review.rating
                                ? "text-primary fill-primary"
                                : "text-muted-foreground"
                              }`}
                          />
                        ))}
                      </div>
                      <CardDescription className="mt-2">Product: {review.product}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                        <p className="text-muted-foreground leading-relaxed pl-6">
                          {review.comment}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Write Review CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
                  <p className="text-muted-foreground mb-6">
                    Have you shopped with us? We'd love to hear about your experience!
                  </p>
                  <Button size="lg" asChild>
                    <a href="/contact">Write a Review</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
