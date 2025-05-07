import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRandomMedia } from "@/lib/media"
import type { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  const media = getRandomMedia("next")

  return {
    title: "Next Media | Interactive Experience",
    description: "Check out our next media item",
    openGraph: {
      images: [media.url],
    },
  }
}

export default function NextMedia() {
  const media = getRandomMedia("next")

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <div className="bg-[#9B0067]/10 p-6 rounded-lg mb-8 w-full">
          <p className="text-xl text-[#9B0067] font-medium">Sorry, please check another one</p>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image src={media.url || "/placeholder.svg"} alt={media.alt || "Next media"} fill className="object-cover" />
        </div>

        <Link href="/attractions">
          <Button className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95">
            TRY THIS
          </Button>
        </Link>
      </div>
    </main>
  )
}
