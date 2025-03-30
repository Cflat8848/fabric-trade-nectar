
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

const ProductCard = ({ name, description, imageUrl }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border border-textile-100 transition-all duration-300 hover:shadow-md">
      <div className="aspect-video bg-textile-50 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-textile-800">{name}</h3>
        <p className="text-textile-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeaturedProducts = () => {
  const products = [
    {
      name: "PSY PK Fabric",
      description: "High-quality polyester fabric with excellent durability and color retention.",
      imageUrl: "/lovable-uploads/493507fb-d08a-44b5-ae17-7736eb3ce961.png"
    },
    {
      name: "Super Polly",
      description: "Versatile polyester blend with enhanced softness and breathability.",
      imageUrl: "/lovable-uploads/49b8d078-1ba0-4087-8a8c-58787cfc65ad.png"
    },
    {
      name: "Honeycomb Fabric",
      description: "Textured fabric with distinctive honeycomb pattern, ideal for sportswear.",
      imageUrl: "/lovable-uploads/7cddec15-ffd1-4343-985b-4bf7b72263a8.png"
    },
    {
      name: "NSY Fabric",
      description: "Premium synthetic fabric known for its smooth texture and performance features.",
      imageUrl: "/lovable-uploads/16d67d17-d5da-49b6-b17f-1c4ec20fb34e.png"
    },
    {
      name: "Wrinkle Fabric",
      description: "Specialized fabric with intentional texture, adding visual interest to garments.",
      imageUrl: "/lovable-uploads/5894a7e7-07a8-4862-ad0a-203657833e88.png"
    },
    {
      name: "Sports Fabrics",
      description: "Durable knitted fabric, perfect for comfortable and long-lasting garments.",
      imageUrl: "/lovable-uploads/08d378d7-aeff-4af2-a022-7f75a85218f9.png"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            Our Premium Fabrics
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            We import a wide range of high-quality fabrics from China and India to support Nepal's growing garment manufacturing industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
