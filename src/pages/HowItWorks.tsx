
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HowItWorks = () => {
  // Steps data
  const steps = [
    {
      number: 1,
      title: "Search for Parking",
      description: "Enter your destination or use your current location to find available parking spots near you.",
      image: "https://images.unsplash.com/photo-1610645850835-6cd9429c7713?q=80&w=640&auto=format&fit=crop",
      details: [
        "Use the search bar to enter an address, landmark, or event venue",
        "Filter results by price, distance, or amenities",
        "View real-time availability information",
        "See prices and compare options"
      ]
    },
    {
      number: 2,
      title: "Choose and Book Your Spot",
      description: "Browse through the available parking options, compare prices, and reserve the perfect spot in advance.",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=640&auto=format&fit=crop",
      details: [
        "Select your preferred parking location",
        "Choose your entry and exit times",
        "Add your vehicle information",
        "Review your booking details before confirming"
      ]
    },
    {
      number: 3,
      title: "Park with Ease",
      description: "Follow the directions to your reserved space and use the ParkEase app for hassle-free entry and exit.",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=640&auto=format&fit=crop",
      details: [
        "Get turn-by-turn directions to your parking spot",
        "Use the ParkEase QR code for contactless entry",
        "Receive parking expiration reminders",
        "Extend your parking time if needed directly from the app"
      ]
    },
    {
      number: 4,
      title: "Pay Automatically",
      description: "Enjoy seamless payment - your linked payment method is automatically charged when you exit.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=640&auto=format&fit=crop",
      details: [
        "Store your preferred payment methods securely in the app",
        "Get digital receipts instantly via email",
        "Enjoy automatic payment when you exit (no waiting in line)",
        "Add business information for expense reporting"
      ]
    }
  ];

  // Features data
  const features = [
    {
      icon: "📱",
      title: "Mobile Pass",
      description: "Use our digital parking pass for contactless entry and exit"
    },
    {
      icon: "🔔",
      title: "Reminders",
      description: "Get notifications when your parking is about to expire"
    },
    {
      icon: "⏱️",
      title: "Time Extension",
      description: "Extend your parking duration remotely from your phone"
    },
    {
      icon: "🚗",
      title: "Vehicle Management",
      description: "Save multiple vehicles to quickly book parking spots"
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description: "We'll match any lower price you find elsewhere"
    },
    {
      icon: "📍",
      title: "Find My Car",
      description: "Never forget where you parked with our location feature"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-parkease-blue/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-parkease-dark mb-6">
                How ParkEase Works
              </h1>
              <p className="text-lg text-parkease-gray mb-8">
                Finding and booking parking has never been easier. Our simple process ensures a stress-free parking experience every time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">Get Started Now</Button>
                <Button size="lg" variant="outline">Watch Demo</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`max-w-6xl mx-auto mb-24 last:mb-0 grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr] md:[grid-template-areas:"info_image"]'} gap-12 items-center`}
              >
                <div className={index % 2 !== 0 ? "md:[grid-area:info]" : ""}>
                  <div className="inline-block bg-parkease-blue text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    {step.number}
                  </div>
                  <h2 className="text-3xl font-bold text-parkease-dark mb-4">{step.title}</h2>
                  <p className="text-lg text-parkease-gray mb-8">{step.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-parkease-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-parkease-gray">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 !== 0 ? "md:[grid-area:image]" : ""}`}>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-parkease-lightGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-parkease-dark mb-4">
                Smart Features for a Better Parking Experience
              </h2>
              <p className="text-lg text-parkease-gray">
                ParkEase is packed with features designed to make your parking experience as smooth as possible.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-parkease-dark">{feature.title}</h3>
                  <p className="text-parkease-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-parkease-dark mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-parkease-gray">
                Get answers to the most common questions about using ParkEase.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Can I cancel my parking reservation?",
                  answer: "Yes, you can cancel your parking reservation up to 2 hours before your scheduled arrival time. You'll receive a full refund processed back to your original payment method."
                },
                {
                  question: "What happens if I stay longer than my booking?",
                  answer: "If you need to extend your stay, you can easily add more time through the app. If you overstay without extending, additional charges will apply at the standard rate for that location."
                },
                {
                  question: "Is my payment information secure?",
                  answer: "Yes, we use industry-standard encryption and security protocols to protect your payment information. We never store your full credit card details on our servers."
                },
                {
                  question: "Can I reserve a specific parking spot?",
                  answer: "While you can reserve parking at a specific facility, individual spots are typically assigned upon arrival. Some premium locations do offer specific spot reservations for an additional fee."
                }
              ].map((item, index) => (
                <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg text-parkease-dark mb-2">{item.question}</h3>
                  <p className="text-parkease-gray">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-parkease-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Hassle-Free Parking?</h2>
              <p className="text-lg text-blue-100 mb-8">
                Join thousands of drivers who have simplified their parking experience with ParkEase.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-parkease-blue hover:bg-blue-50">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
