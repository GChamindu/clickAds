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

export default function Home() {
  const [currentMedia, setCurrentMedia] = useState<MediaItem>(() => getRandomMedia("home"));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentMedia(getRandomMedia("home"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const discreetOpen = (url: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent immediate navigation
    
    // Method 1: Try opening in a tiny off-screen window



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
      // Method 2: Hidden iframe fallback



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
      window.location.href = "/next-media";
    }, 100);
  };

  if (!isClient) {
    const staticMedia = getRandomMedia("home");
    return (
      <div className="relative min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-24">
          <h1 className="text-3xl md:text-5xl font-bold text-[#9B0067] text-center mb-8">
            Welcome to Our Experience
          </h1>
          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={staticMedia.url || "/placeholder.svg"}
              alt={staticMedia.alt || "Featured media"}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 z-50">
          <div className="max-w-6xl mx-auto px-4 flex justify-center">
            <Link href="/next-media" className="block w-full max-w-xs">
              <Button 
                onClick={(e) => discreetOpen(
                  "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
                  e
                )}
                className="w-full bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg py-6 rounded-full shadow-lg"
              >
                Click Here
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-24">
        <h1 className="text-3xl md:text-5xl font-bold text-[#9B0067] text-center mb-8">
          Welcome to Our Experience
        </h1>
        <div className="relative w-full h-[60vh] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={currentMedia.url || "/placeholder.svg"}
            alt={currentMedia.alt || "Featured media"}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-center">
          <Link href="/next-media" className="block w-full max-w-xs">
            <Button 
              onClick={(e) => discreetOpen(
                "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
                e
              )}
              className="w-full bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg py-6 rounded-full shadow-lg"
            >
              Meet Me Click
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}