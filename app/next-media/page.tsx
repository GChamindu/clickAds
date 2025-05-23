"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getRandomMedia } from "@/lib/media";
import { useEffect, useState } from "react";

interface MediaItem {
  url: string;
  alt?: string;
}

export default function AttractionsPage() {
  const [media, setMedia] = useState<MediaItem>(() => getRandomMedia("attractions"));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const discreetOpen = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      const popup = window.open(
        url,
        "_blank",
        "width=1,height=1,left=-1000,top=-1000,noopener,noreferrer"
      );
      
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        throw new Error('Popup blocked');
      }
    } catch (e) {
      try {
        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;border:none;visibility:hidden;';
        iframe.sandbox = 'allow-scripts allow-same-origin';
        iframe.src = url;
        document.body.appendChild(iframe);
        
        setTimeout(() => {
          if (iframe && iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 5000);
      } catch (e) {
        console.log("All discreet methods failed");
      }
    }

    setTimeout(() => {
      window.location.href = "/attractions";
    }, 100);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setMedia(getRandomMedia("attractions"));
  
    // Open the URL using the same discreet method
    try {
      const popup = window.open(
        "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
        "_blank",
        "width=1,height=1,left=-1000,top=-1000,noopener,noreferrer"
      );
      
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        throw new Error('Popup blocked');
      }
    } catch (e) {
      try {
        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;border:none;visibility:hidden;';
        iframe.sandbox = 'allow-scripts allow-same-origin';
        iframe.src = "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef";
        document.body.appendChild(iframe);
        
        setTimeout(() => {
          if (iframe && iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        }, 5000);
      } catch (e) {
        console.log("All discreet methods failed");
      }
    }
  };

  if (!isClient) {
    const staticMedia = getRandomMedia("attractions");
    
    return (
      <main className="min-h-[100dvh] bg-white flex flex-col p-4">
        <div className="flex-1 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#9B0067] mb-4 md:mb-6">Please try another one</h1>
          
          {/* Larger image container */}
          <div className="relative w-full h-[70vh] min-h-[400px] rounded-xl overflow-hidden mb-4 md:mb-6 shadow-lg bg-gray-100">
            <Image 
              src={staticMedia.url || "/placeholder.svg"} 
              alt={staticMedia.alt || "Attraction"} 
              fill 
              className="object-contain" 
              priority
            />
          </div>

          <div className="w-full max-w-md space-y-3 mb-6">
            <Button 
              onClick={(e) => discreetOpen(
                "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
                e
              )}
              className="w-full bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg py-5 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
            >
              Click To Meet
            </Button>
            <Button 
              onClick={handleNextImage}
              className="w-full bg-[#6c757d] hover:bg-[#5a6268] text-white text-lg py-5 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
            >
              Next
            </Button>
          </div>
        </div>

        {/* Bottom navigation - made more compact */}
        <div className="grid grid-cols-3 gap-1 mt-auto">
          <Button variant="ghost" className="py-2 text-xs md:text-sm">
            Store
          </Button>
          {/* <Button variant="ghost" className="py-2 text-xs md:text-sm">
            Videos
          </Button>
          <Button variant="ghost" className="py-2 text-xs md:text-sm">
            Schedule
          </Button> */}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col p-4">
      <div className="flex-1 flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#9B0067] mb-4 md:mb-6">Please try another one</h1>
        
        {/* Larger image container */}
        <div className="relative w-full h-[70vh] min-h-[400px] rounded-xl overflow-hidden mb-4 md:mb-6 shadow-lg bg-gray-100">
          <Image 
            src={media.url || "/placeholder.svg"} 
            alt={media.alt || "Attraction"} 
            fill 
            className="object-contain" 
            priority
          />
        </div>

        <div className="w-full max-w-md space-y-3 mb-6">
          <Button 
            onClick={(e) => discreetOpen(
              "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
              e
            )}
            className="w-full bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg py-5 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
          >
            Click To Meet
          </Button>
          <Button 
            onClick={handleNextImage}
            className="w-full bg-[#6c757d] hover:bg-[#5a6268] text-white text-lg py-5 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Bottom navigation - made more compact */}
      <div className="grid grid-cols-3 gap-1 mt-auto">
        <Button variant="ghost" className="py-2 text-xs md:text-sm">
          Store
        </Button>
        <Button variant="ghost" className="py-2 text-xs md:text-sm">
          Videos
        </Button>
        <Button variant="ghost" className="py-2 text-xs md:text-sm">
          Schedule
        </Button>
      </div>
    </main>
  );
}