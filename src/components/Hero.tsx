
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      <div 
        className="relative min-h-[70vh] flex items-center bg-gradient-to-r from-textile-100 to-fabric-50"
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-textile-950">
              Premium Textile <span className="text-fabric-700">Imports</span> for Nepal's Garment Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-textile-700 max-w-2xl">
              Sourcing high-quality fabrics from China and India for Nepali garment manufacturers. Your trusted supply partner located in Butwal, Kalikanagar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-fabric-700 hover:bg-fabric-800 text-white"
                size="lg"
              >
                Explore Fabrics
              </Button>
              <Button 
                variant="outline" 
                className="border-textile-300 text-textile-800"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
