
import { useState } from "react";
import { Button } from "@/components/ui/button";
import UpdateCard from "@/components/UpdateCard";
import { dummyUpdates } from "@/lib/dummy-data";

const UpdatesList = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const hasMore = visibleCount < dummyUpdates.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, dummyUpdates.length));
  };

  return (
    <div className="space-y-8">
      <p className="text-textile-700">
        Stay updated with the latest news, events, and announcements from Paiyun Kalika.
      </p>
      
      <div className="space-y-6">
        {dummyUpdates.slice(0, visibleCount).map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={loadMore}
            className="bg-fabric-700 hover:bg-fabric-800 text-white"
          >
            Load More Updates
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpdatesList;
