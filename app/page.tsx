"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getRandomMedia } from "@/lib/media";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentMedia, setCurrentMedia] = useState(() => getRandomMedia("home"));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setCurrentMedia(getRandomMedia("home"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          <Link
            href="https://www.profitableratecpm.com/e3im4auwrr?key=82bb82f51a0c59ef2e5bc796a08f07f0"
            className="block w-full max-w-xs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg py-6 rounded-full shadow-lg">
              Click Here
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}