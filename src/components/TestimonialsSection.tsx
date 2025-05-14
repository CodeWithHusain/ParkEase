
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ParkEase saved me so much time! I used to circle blocks looking for parking, but now I just book ahead and go straight to my spot.",
      author: "Sarah Johnson",
      position: "Regular User",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "As a parking space owner, I've increased my monthly revenue by 40% since listing on ParkEase. The platform makes everything so simple.",
      author: "Michael Chen",
      position: "Parking Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      quote: "The AI recommendations are spot on! ParkEase always suggests the most convenient spots based on my destination and preferences.",
      author: "Emily Rodriguez",
      position: "Premium User",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-parkease-dark mb-4">
            What Our Users Say
          </h2>
          <p className="text-parkease-gray text-lg max-w-2xl mx-auto">
            Join thousands of happy drivers and parking space owners who use ParkEase every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-16 h-16 rounded-full overflow-hidden border-2 border-parkease-blue">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <svg className="h-6 w-6 text-parkease-blue mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-parkease-gray mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="font-semibold text-parkease-dark">
                    {testimonial.author}
                  </h4>
                  <span className="text-sm text-parkease-gray">
                    {testimonial.position}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
