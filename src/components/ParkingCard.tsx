
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

interface ParkingCardProps {
  name: string;
  address: string;
  price: number;
  distance: string;
  rating: number;
  covered: boolean;
  available: number;
}

const ParkingCard = ({
  name,
  address,
  price,
  distance,
  rating,
  covered,
  available,
}: ParkingCardProps) => {
  // Convert USD to INR (approximate conversion rate: 1 USD = 75 INR)
  const priceInRupees = price * 75;
  
  return (
    <div className="parking-card">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image/Map Thumbnail */}
        <div className="w-full md:w-36 h-28 md:h-auto bg-parkease-lightGray rounded flex items-center justify-center">
          <MapPin className="h-8 w-8 text-parkease-gray" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg text-parkease-dark">{name}</h3>
              <p className="text-sm text-parkease-gray">{address}</p>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline" className="bg-parkease-lightBlue border-0">
              {distance}
            </Badge>
            <Badge variant="outline" className="bg-parkease-lightBlue border-0">
              {covered ? "Covered" : "Uncovered"}
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-0">
              {available} spots available
            </Badge>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-xl font-bold text-parkease-dark">₹{priceInRupees.toFixed(2)}</span>
              <span className="text-sm text-parkease-gray"> / hour</span>
            </div>
            <Button className="bg-parkease-blue hover:bg-parkease-accent">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
