
import Banner from "@/components/Banner";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import ChartTracker from "@/components/ChartTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#022a16] to-black">
      <Banner />
      <HeroSection />
      <ChartTracker />
      <Features />
    </div>
  );
};

export default Index;
