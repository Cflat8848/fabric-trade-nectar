
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d349a0be-eee9-479a-92d0-e52f3ba3695b.png" 
                alt="Paiyun Kalika Logo" 
                className="h-12 mr-3" 
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-fabric-800">Paiyun Kalika</span>
                <span className="text-xs font-medium text-textile-600">Textile Traders</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-textile-800 hover:text-fabric-600 font-medium">Home</Link>
            <a href="#products" className="text-textile-800 hover:text-fabric-600 font-medium">Products</a>
            <Link to="/updates" className="text-textile-800 hover:text-fabric-600 font-medium">Updates</Link>
            <a href="#about" className="text-textile-800 hover:text-fabric-600 font-medium">About Us</a>
            <a href="#contact" className="text-textile-800 hover:text-fabric-600 font-medium">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Home</Link>
            <a href="#products" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Products</a>
            <Link to="/updates" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Updates</Link>
            <a href="#about" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">About Us</a>
            <a href="#contact" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
