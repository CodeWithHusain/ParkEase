
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // In a real implementation, this would redirect to the search page with the query
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1900&auto=format&fit=crop')",
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-parkease-blue/20 to-white"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-parkease-dark mb-6">
            Find Perfect Parking Spaces in Real-Time
          </h1>
          <p className="text-lg md:text-xl text-parkease-gray mb-8">
            ParkEase uses AI to find you the best parking spots based on your location, preferences, and real-time availability.
          </p>
          
          <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row shadow-lg rounded-lg">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-parkease-gray" />
                </div>
                <Input
                  type="text"
                  placeholder="Enter destination or address"
                  className="search-input pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                className="search-button mt-2 sm:mt-0"
              >
                Find Parking
              </Button>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <span className="text-parkease-gray font-medium">Popular searches:</span>
            <Button variant="outline" className="rounded-full border-parkease-lightBlue hover:border-parkease-blue">
              Downtown
            </Button>
            <Button variant="outline" className="rounded-full border-parkease-lightBlue hover:border-parkease-blue">
              Shopping Mall
            </Button>
            <Button variant="outline" className="rounded-full border-parkease-lightBlue hover:border-parkease-blue">
              Airport
            </Button>
            <Button variant="outline" className="rounded-full border-parkease-lightBlue hover:border-parkease-blue">
              City Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
