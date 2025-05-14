
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-parkease-blue/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-parkease-dark mb-6">
                About ParkEase
              </h1>
              <p className="text-lg text-parkease-gray mb-8">
                We're revolutionizing the way people find, book, and pay for parking with our AI-powered smart parking solution.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-parkease-dark mb-6 text-center">Our Story</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  ParkEase was founded in 2022 by a team of urban mobility experts and technology enthusiasts who were fed up with the daily struggle of finding parking in busy city centers.
                </p>
                <p className="mb-4">
                  After spending countless hours circling blocks and overpaying for parking spots, our founders decided there had to be a better way. They combined their expertise in artificial intelligence, urban planning, and mobile technology to create a solution that makes parking hassle-free.
                </p>
                <p className="mb-8">
                  What started as a small pilot project in one city has now grown into a comprehensive parking solution trusted by thousands of drivers and hundreds of parking facility operators across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16 bg-parkease-lightGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-parkease-dark mb-6">Our Mission & Values</h2>
              <p className="text-lg text-parkease-gray">
                We're driven by a simple mission: to make parking easy, accessible, and stress-free for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-parkease-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-parkease-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Innovation</h3>
                <p className="text-parkease-gray text-center">
                  We constantly push the boundaries of what's possible in parking technology.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-parkease-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-parkease-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Efficiency</h3>
                <p className="text-parkease-gray text-center">
                  We believe time is precious and aim to save it by making parking quick and easy.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-parkease-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-parkease-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Community</h3>
                <p className="text-parkease-gray text-center">
                  We build solutions that benefit drivers, parking operators, and cities alike.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-parkease-dark mb-6">Our Team</h2>
              <p className="text-lg text-parkease-gray">
                We're a diverse team of experts passionate about solving urban mobility challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Alex Johnson",
                  position: "CEO & Co-founder",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
                },
                {
                  name: "Sarah Chen",
                  position: "CTO & Co-founder",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                },
                {
                  name: "Miguel Rodriguez",
                  position: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl text-parkease-dark">{member.name}</h3>
                  <p className="text-parkease-gray">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-parkease-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-blue-100 mb-8">
                We're always looking for talented individuals who are passionate about technology and urban mobility.
              </p>
              <Button size="lg" className="bg-white text-parkease-blue hover:bg-blue-50">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
