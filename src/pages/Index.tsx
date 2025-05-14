
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CtaSection from "@/components/CtaSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-parkease-dark mb-4">
                How ParkEase Works
              </h2>
              <p className="text-parkease-gray text-lg max-w-2xl mx-auto">
                Finding and booking parking has never been easier with our simple 3-step process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 bg-parkease-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-parkease-dark">
                  Search Location
                </h3>
                <p className="text-parkease-gray">
                  Enter your destination or use your current location to find nearby available parking spots.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-parkease-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-parkease-dark">
                  Choose & Book
                </h3>
                <p className="text-parkease-gray">
                  Browse available options, compare prices, and book the perfect spot with a single tap.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-parkease-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-parkease-dark">
                  Park with Ease
                </h3>
                <p className="text-parkease-gray">
                  Follow the directions to your spot and use your mobile pass for hassle-free entry and exit.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/how-it-works">
                <Button variant="outline" className="text-parkease-blue border-parkease-blue hover:bg-parkease-blue hover:text-white">
                  Learn More About How It Works
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
