
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-parkease-blue text-white font-bold text-xl p-2 rounded-md">P</div>
            <span className="text-parkease-dark font-bold text-xl">ParkEase</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${isActive('/') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/how-it-works" 
              className={`transition-colors font-medium ${isActive('/how-it-works') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
            >
              How It Works
            </Link>
            <Link 
              to="/search" 
              className={`transition-colors font-medium ${isActive('/search') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
            >
              Find Parking
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${isActive('/about') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
            >
              About Us
            </Link>
            <div className="flex space-x-4">
              <Button variant="outline" className="text-parkease-blue border-parkease-blue hover:bg-parkease-blue hover:text-white">
                Log in
              </Button>
              <Button className="bg-parkease-blue hover:bg-parkease-accent">Sign up</Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-parkease-dark focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors font-medium py-2 ${isActive('/') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/how-it-works" 
                className={`transition-colors font-medium py-2 ${isActive('/how-it-works') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
                onClick={toggleMobileMenu}
              >
                How It Works
              </Link>
              <Link 
                to="/search" 
                className={`transition-colors font-medium py-2 ${isActive('/search') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
                onClick={toggleMobileMenu}
              >
                Find Parking
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors font-medium py-2 ${isActive('/about') ? 'text-parkease-blue' : 'text-parkease-dark hover:text-parkease-blue'}`}
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="text-parkease-blue border-parkease-blue hover:bg-parkease-blue hover:text-white w-full">
                  Log in
                </Button>
                <Button className="bg-parkease-blue hover:bg-parkease-accent w-full">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
