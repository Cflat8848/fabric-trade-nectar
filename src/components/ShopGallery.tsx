
const ShopGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/cf4df587-4337-40fe-ad57-4da6a5e897b2.png",
      alt: "Fabric trade fair with customers examining textile samples",
      caption: "Our team at an international fabric trade fair"
    },
    {
      src: "/lovable-uploads/7af07122-6e5b-4380-b409-9fe02593d8a0.png",
      alt: "Warehouse with colorful fabric rolls",
      caption: "Our fabric inventory in our Butwal warehouse"
    },
    {
      src: "/lovable-uploads/49dc222c-4e01-470b-b44e-a58948c44395.png",
      alt: "Team members with textile partners",
      caption: "Paiyun Kalika team with our international partners"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            Our Shop & Operations
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            Take a glimpse into our fabric trading operations, warehouse, and international partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-textile-50">
                <p className="text-sm text-textile-600">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
