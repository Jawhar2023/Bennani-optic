import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <VideoShowcase />
        <CategorySection />
        <FeaturesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
