
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="font-serif text-2xl font-bold text-fabric-800">Paiyun Kalika</span>
              <span className="ml-2 text-sm font-medium text-textile-600">Textile Traders</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-textile-800 hover:text-fabric-600 font-medium">Home</a>
            <a href="#products" className="text-textile-800 hover:text-fabric-600 font-medium">Products</a>
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
            <a href="#" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Home</a>
            <a href="#products" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Products</a>
            <a href="#about" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">About Us</a>
            <a href="#contact" className="block py-2 px-4 text-textile-800 hover:bg-fabric-50 rounded-md">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
