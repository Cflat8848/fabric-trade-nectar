
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
      imageUrl: "https://images.unsplash.com/photo-1589891685388-75b9a433c9a4?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Super Polly",
      description: "Versatile polyester blend with enhanced softness and breathability.",
      imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Honeycomb Fabric",
      description: "Textured fabric with distinctive honeycomb pattern, ideal for sportswear.",
      imageUrl: "https://images.unsplash.com/photo-1617796110702-9a4a02245728?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "NSY Fabric",
      description: "Premium synthetic fabric known for its smooth texture and performance features.",
      imageUrl: "https://images.unsplash.com/photo-1598030304671-5aa1d6f13fde?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Wrinkle Fabric",
      description: "Specialized fabric with intentional texture, adding visual interest to garments.",
      imageUrl: "https://images.unsplash.com/photo-1579478632731-c91fbcfc74be?q=80&w=700&auto=format&fit=crop"
    },
    {
      name: "Outlander Hosiery",
      description: "Durable knitted fabric, perfect for comfortable and long-lasting garments.",
      imageUrl: "https://images.unsplash.com/photo-1606988476352-6f21462382cf?q=80&w=700&auto=format&fit=crop"
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
