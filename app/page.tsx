import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRandomMedia } from "@/lib/media"
import type { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  const media = getRandomMedia("home")

  return {
    title: "Interactive Media Experience",
    description: "Explore our interactive media experience",
    openGraph: {
      images: [media.url],
    },
  }
}

export default function Home() {
  const media = getRandomMedia("home")

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[#9B0067] mb-8">Welcome to Our Experience</h1>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={media.url || "/placeholder.svg"}
            alt={media.alt || "Featured media"}
            fill
            className="object-cover"
            priority
          />
        </div>

        <Link href="/next-media">
          <Button className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95">
            Click Here
          </Button>
        </Link>
      </div>
    </main>
  )
}
