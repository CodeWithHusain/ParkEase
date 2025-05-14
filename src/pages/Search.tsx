
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MapPlaceholder from "@/components/MapPlaceholder";
import ParkingCard from "@/components/ParkingCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, X } from "lucide-react";

// Sample data
const PARKING_SPOTS = [
  {
    id: 1,
    name: "Downtown Parking Garage",
    address: "123 Main St, Downtown, CA 90001",
    price: 8.50,
    distance: "0.3 miles",
    rating: 4.7,
    covered: true,
    available: 5,
  },
  {
    id: 2,
    name: "Central Square Parking",
    address: "456 Center Ave, Downtown, CA 90001",
    price: 6.25,
    distance: "0.5 miles",
    rating: 4.2,
    covered: false,
    available: 12,
  },
  {
    id: 3,
    name: "City Center Secure Parking",
    address: "789 Market St, Downtown, CA 90002",
    price: 10.00,
    distance: "0.7 miles",
    rating: 4.8,
    covered: true,
    available: 3,
  },
  {
    id: 4,
    name: "West End Parking Lot",
    address: "321 West End Blvd, Downtown, CA 90002",
    price: 5.50,
    distance: "1.2 miles",
    rating: 3.9,
    covered: false,
    available: 20,
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("Downtown Los Angeles");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-parkease-blue py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="relative w-full max-w-lg">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-parkease-gray h-5 w-5" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-white"
                  placeholder="Search location"
                />
                {searchQuery && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-parkease-gray hover:text-parkease-dark"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              <Button 
                className="mt-2 sm:mt-0 sm:ml-2 bg-white text-parkease-blue hover:bg-blue-50"
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-6">
            {/* Main Content */}
            <div>
              <div className="mb-6">
                <MapPlaceholder />
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl text-parkease-dark">
                  {PARKING_SPOTS.length} Parking Spots Found
                </h2>
                <div className="text-sm text-parkease-gray">
                  ParkEase Premium Services Available
                </div>
              </div>
              
              {/* Premium Services Banner */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
                <h3 className="font-semibold text-parkease-blue mb-2">ParkEase Premium Services</h3>
                <p className="text-sm text-parkease-gray">
                  Enjoy premium services including reserved parking, valet service, and 24/7 security. 
                  <Button variant="link" className="text-parkease-blue p-0 h-auto font-semibold ml-1">
                    Learn More
                  </Button>
                </p>
              </div>
              
              <div className="space-y-4">
                {PARKING_SPOTS.map((spot) => (
                  <ParkingCard
                    key={spot.id}
                    name={spot.name}
                    address={spot.address}
                    price={spot.price}
                    distance={spot.distance}
                    rating={spot.rating}
                    covered={spot.covered}
                    available={spot.available}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
