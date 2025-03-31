
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ImageCarousel = () => {
  const carouselImages = [
    {
      src: "/lovable-uploads/5f737a7e-f869-4bc1-8d91-021800563870.png",
      alt: "Textile expo entrance in Keqiao, China",
    },
    {
      src: "/lovable-uploads/e85c0c06-79b8-41e2-b635-a0818648bac5.png",
      alt: "International Textile Fair in China with flags display",
    },
    {
      src: "/lovable-uploads/8fdd4aea-b623-449c-b758-c034ef114b0e.png",
      alt: "Team at China textile fair with manufacturing equipment",
    },
    {
      src: "/lovable-uploads/34e4c7e7-6f89-4f95-a0fd-eda69681c90b.png",
      alt: "Keqiao Textile Expo entrance with team member",
    },
    {
      src: "/lovable-uploads/93e368d0-fa25-45eb-8c9b-1001f3ed6206.png",
      alt: "Meeting with Chinese textile manufacturers",
    },
  ];

  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    
    if (autoPlay) {
      interval = setInterval(() => {
        const nextButton = document.querySelector('[data-carousel-next]');
        if (nextButton) {
          (nextButton as HTMLButtonElement).click();
        }
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  return (
    <div className="relative w-full overflow-hidden bg-textile-50 py-2">
      <Carousel 
        className="max-w-5xl mx-auto"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="md:basis-2/3">
              <div className="relative h-[30vh] md:h-[50vh] overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious 
          className="left-4 bg-white/80 hover:bg-white dark:bg-textile-800/80 dark:hover:bg-textile-800 border-none"
          data-carousel-prev
          aria-label="Previous slide"
        />
        <CarouselNext 
          className="right-4 bg-white/80 hover:bg-white dark:bg-textile-800/80 dark:hover:bg-textile-800 border-none"
          data-carousel-next
          aria-label="Next slide"
        />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
