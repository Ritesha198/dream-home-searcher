import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrendingPlots from "@/components/TrendingPlots";
import BHKOptions from "@/components/BHKOptions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrendingPlots />
      <BHKOptions />
      <Footer />
    </div>
  );
};

export default Index;
