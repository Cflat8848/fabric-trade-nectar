
import { useState } from "react";
import { Calendar, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Update {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  videoUrl?: string;
  type: "news" | "event" | "announcement";
}

interface UpdateCardProps {
  update: Update;
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  const typeStyles = {
    news: "bg-blue-100 text-blue-800",
    event: "bg-green-100 text-green-800",
    announcement: "bg-amber-100 text-amber-800",
  };

  const hasMedia = !!update.image || !!update.videoUrl;

  return (
    <>
      <div className="border border-textile-200 rounded-lg overflow-hidden bg-white/80 hover:shadow-md transition-shadow">
        <div className="md:flex">
          {update.image && (
            <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
              <img 
                src={update.image} 
                alt={update.title}
                className="w-full h-full object-cover"
              />
              {update.videoUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Video className="w-12 h-12 text-white" />
                </div>
              )}
            </div>
          )}
          
          <div className="p-4 md:p-6 md:w-2/3">
            <div className="flex justify-between items-start mb-3">
              <span className={cn("px-2 py-1 text-xs rounded-full", typeStyles[update.type])}>
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </span>
              <div className="flex items-center text-textile-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{update.date}</span>
              </div>
            </div>
            
            <h3 className="font-serif text-xl font-bold text-textile-900 mb-2">
              {update.title}
            </h3>
            
            <p className="text-textile-700 mb-4">
              {expanded ? update.content : `${update.content.substring(0, 120)}...`}
              {!expanded && update.content.length > 120 && (
                <button 
                  onClick={() => setExpanded(true)} 
                  className="text-fabric-700 hover:text-fabric-800 font-medium ml-1"
                >
                  Read more
                </button>
              )}
            </p>
            
            <div className="flex justify-between items-center">
              <Button 
                variant="ghost" 
                className="text-fabric-700 hover:text-fabric-800 p-0"
                onClick={() => setIsOpen(true)}
              >
                View details <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-textile-900">
              {update.title}
            </DialogTitle>
            <DialogDescription className="text-textile-500 flex items-center">
              <Calendar className="w-4 h-4 mr-1" /> {update.date}
            </DialogDescription>
          </DialogHeader>
          
          {update.image && (
            <div className="rounded-md overflow-hidden">
              <img 
                src={update.image} 
                alt={update.title}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {update.videoUrl && (
            <div className="rounded-md overflow-hidden bg-black aspect-video flex items-center justify-center">
              <span className="text-white">Video would play here when connected to backend</span>
            </div>
          )}
          
          <div className="space-y-4 text-textile-700">
            <p>{update.content}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdateCard;
