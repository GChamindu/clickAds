import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRandomMediaArray } from "@/lib/media"
import type { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  const mediaItems = getRandomMediaArray("attractions", 6)

  return {
    title: "Attractions | Interactive Experience",
    description: "Explore our attractions",
    openGraph: {
      images: [mediaItems[0].url],
    },
  }
}

export default function Attractions() {
  const mediaItems = getRandomMediaArray("attractions", 6)

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

            <Link href="/store">
              <Button className="bg-[#9B0067] hover:bg-[#7d0054] text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95">
                Click Me
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
