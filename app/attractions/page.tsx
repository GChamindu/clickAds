
"use client";

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getRandomMediaArray } from "@/lib/media"
import type { Metadata } from "next"
import { useCallback } from "react"


// export const metadata: Metadata = {
//   title: "Attractions | Interactive Experience",
//   description: "Meet me Chat with me ",
//   openGraph: {
//     images: ["/images/attractions/img40.jpg"],
//   },
// }


export default function Attractions() {
  const mediaItems = getRandomMediaArray("attractions", 6)
  const router = useRouter()

  const handleClick = useCallback(() => {
    // Open hidden popup ad
    try {
      const popup = window.open(
        "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef",
        "_blank",
        "width=1,height=1,left=-1000,top=-1000,noopener,noreferrer"
      )

      if (!popup || popup.closed || typeof popup.closed === "undefined") {
        throw new Error("Popup blocked")
      }
    } catch (err) {
      // Fallback to iframe
      try {
        const iframe = document.createElement("iframe")
        iframe.style.cssText =
          "position:absolute;width:1px;height:1px;left:-9999px;border:none;visibility:hidden;"
        iframe.sandbox = "allow-scripts allow-same-origin"
        iframe.src =
          "https://www.profitableratecpm.com/zmsag1d9m9?key=0573d3e4ca85007e5f64ac0c1353dfef"
        document.body.appendChild(iframe)

        setTimeout(() => {
          if (iframe && iframe.parentNode) {
            iframe.parentNode.removeChild(iframe)
          }
        }, 5000)
      } catch (err) {
        console.log("All discreet methods failed")
      }
    }

    // Delay navigation slightly
    setTimeout(() => {
      router.push("/store")
    }, 200)
  }, [router])

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center p-4 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#9B0067] mb-6 md:mb-12 text-center">
        Explore Our Attractions
      </h1>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {mediaItems.map((media, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg">
              <Image
                src={media.url || "/placeholder.svg"}
                alt={media.alt || `Attraction ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Replace Link with onClick Button */}
            <Button
              onClick={handleClick}
              className="bg-[#9B0067] hover:bg-[#7d0054] text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
            >
              Click Me
            </Button>
          </div>
        ))}
      </div>
    </main>
  )
}
