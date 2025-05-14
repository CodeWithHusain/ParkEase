
import { Clock, MapPin, CreditCard, Zap } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-parkease-blue" />,
      title: "Real-Time Parking Search",
      description: "Find available parking spots in real-time based on your current location or destination.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-parkease-blue" />,
      title: "Easy Booking & Payment",
      description: "Reserve and pay for parking spaces with just a few taps through our secure payment system.",
    },
    {
      icon: <Clock className="h-8 w-8 text-parkease-blue" />,
      title: "Dynamic Pricing",
      description: "Get the best rates with our dynamic pricing model that adjusts based on demand and location.",
    },
    {
      icon: <Zap className="h-8 w-8 text-parkease-blue" />,
      title: "AI-Powered Recommendations",
      description: "Our AI suggests optimal parking options based on your preferences and past behavior.",
    },
  ];

  return (
    <section className="py-16 bg-parkease-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-parkease-dark mb-4">
            Why Choose ParkEase?
          </h2>
          <p className="text-parkease-gray text-lg max-w-2xl mx-auto">
            Our smart parking solution uses advanced technology to make finding and booking parking spaces easier than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-parkease-blue/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-parkease-dark">
                {feature.title}
              </h3>
              <p className="text-parkease-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
