
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpdatesList from "@/components/UpdatesList";
import { Skeleton } from "@/components/ui/skeleton";

const Updates = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This would be replaced with actual data fetching once Supabase is connected
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col sky-gradient">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="card-glass p-6 md:p-8 rounded-xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-textile-950 border-b pb-4">
              Company Updates
            </h1>
            
            {loading ? (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                ))}
              </div>
            ) : (
              <UpdatesList />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
