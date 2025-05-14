
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center bg-parkease-lightGray">
        <div className="text-center px-4">
          <div className="text-parkease-blue font-bold text-7xl md:text-9xl mb-6">404</div>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-parkease-dark">Oops! Parking Spot Not Found</h1>
          <p className="text-lg text-parkease-gray mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-parkease-blue hover:bg-parkease-accent" asChild>
              <a href="/">Return Home</a>
            </Button>
            <Button size="lg" variant="outline" className="border-parkease-blue text-parkease-blue hover:bg-parkease-blue/10" asChild>
              <a href="/search">Find Parking</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
