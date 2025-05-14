
import { MapPin } from "lucide-react";

const MapPlaceholder = () => {
  return (
    <div className="map-container bg-parkease-lightGray flex items-center justify-center">
      <div className="text-center">
        <MapPin size={60} className="text-parkease-blue mx-auto mb-4" />
        <p className="text-parkease-gray text-lg">
          ParkIt Interactive Map Coming Soon
        </p>
        <p className="text-sm text-parkease-gray mt-2">
          Find all available parking spots with our enhanced mapping service
        </p>
      </div>
    </div>
  );
};

export default MapPlaceholder;
