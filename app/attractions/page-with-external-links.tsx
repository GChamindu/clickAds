import Image from "next/image"
import { ButtonWithLink } from "@/components/button-with-link"

export default function AttractionsWithExternalLinks() {
  // Array of placeholder images for the attractions
  const attractions = [1, 2, 3, 4, 5, 6]

  // Replace this with your actual external link
  const externalLink = "https://example.com"

  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-[#9B0067] mb-12">Explore Our Attractions</h1>

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractions.map((id) => (
          <div key={id} className="flex flex-col items-center">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 shadow-lg">
              <Image
                src={`/placeholder.svg?height=400&width=400&text=Attraction ${id}`}
                alt={`Attraction ${id}`}
                fill
                className="object-cover"
              />
            </div>

            <ButtonWithLink
              href="/store"
              externalLink={externalLink}
              className="bg-[#9B0067] hover:bg-[#7d0054] text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Click Me
            </ButtonWithLink>
          </div>
        ))}
      </div>
    </main>
  )
}
