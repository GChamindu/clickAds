import Image from "next/image"
import ButtonWithExternalLink from "@/components/button-with-external-link"
import { getRandomMediaArray } from "@/lib/media"

export default function AttractionsWithExternalLinks() {
  const mediaItems = getRandomMediaArray("attractions", 6)

  // Replace with your actual external URL
  const externalUrl = "https://example.com"

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-[#9B0067] mb-12">Explore Our Attractions</h1>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <ButtonWithExternalLink
              href="/store"
              externalUrl={externalUrl}
              className="bg-[#9B0067] hover:bg-[#7d0054] text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Click Me
            </ButtonWithExternalLink>
          </div>
        ))}
      </div>
    </main>
  )
}
