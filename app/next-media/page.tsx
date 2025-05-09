

"use client";

import Image from "next/image";
import Link from "next/link";
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

  if (!isClient) {



    const staticMedia = getRandomMedia("attractions");


    
    return (
      <main className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-[#9B0067] mb-8">User is currently busy. Please try another one.</h1>
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
            <Image 
              src={staticMedia.url || "/placeholder.svg"} 
              alt={staticMedia.alt || "Attraction"} 
              fill 
              className="object-cover" 
            />
          </div>

          <Button 
            onClick={(e) => discreetOpen(
              "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
              e
            )}
            className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
          >
Lets FUCK          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold text-[#9B0067] mb-8">User is currently busy. Please try another one</h1>
        
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image 
            src={media.url || "/placeholder.svg"} 
            alt={media.alt || "Attraction"} 
            fill 
            className="object-cover" 
          />
        </div>

        <Button 
          onClick={(e) => discreetOpen(
            "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
            e
          )}
          className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
        >
         Click To Meet
        </Button>
      </div>
    </main>
  );
}
