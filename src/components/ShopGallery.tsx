
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
    },
    {
      src: "/lovable-uploads/8fdd4aea-b623-449c-b758-c034ef114b0e.png",
      alt: "Team at China textile fair with manufacturing equipment",
      caption: "Our team exploring advanced textile machinery at Keqiao Textile Expo"
    },
    {
      src: "/lovable-uploads/e85c0c06-79b8-41e2-b635-a0818648bac5.png",
      alt: "International Textile Fair in China with flags display",
      caption: "Participation at the International Textile Conference in China"
    },
    {
      src: "/lovable-uploads/5f737a7e-f869-4bc1-8d91-021800563870.png",
      alt: "Textile expo entrance in Keqiao, China",
      caption: "At the 26th Keqiao Textile Expo in Shaoxing, China"
    },
    {
      src: "/lovable-uploads/34e4c7e7-6f89-4f95-a0fd-eda69681c90b.png",
      alt: "Keqiao Textile Expo entrance with team member",
      caption: "The 7th World Textile Merchandising Conference in China"
    },
    {
      src: "/lovable-uploads/93e368d0-fa25-45eb-8c9b-1001f3ed6206.png",
      alt: "Meeting with Chinese textile manufacturers",
      caption: "Building relationships with textile manufacturers in China"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-textile-800 mb-4">
            International Trade Fair Participation
          </h2>
          <p className="text-textile-600 max-w-2xl mx-auto">
            View our active participation in international textile trade fairs, particularly in China, where we source premium fabrics for the Nepali market.
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
