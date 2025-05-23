import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRandomMedia } from "@/lib/media"
import type { Metadata } from "next"

export const generateMetadata = (): Metadata => {
  const media = getRandomMedia("store")

  return {
    title: "Store | Interactive Experience",
    description: "Check out our store",
    openGraph: {
      images: [media.url],
    },
  }
}

export default function Store() {
  const media = getRandomMedia("store")

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center p-4 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#9B0067] mb-6 md:mb-12 text-center">Our Hot Guys</h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src={media.url || "/placeholder.svg"}
            alt={media.alt || "Store display"}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-xl md:text-1xl font-bold text-[#9B0067] mb-4"> 🚫 වයස අවුරුදු 18ට අඩු පුද්ගලයින් මෙම සේවාව ලබාගැනීමෙන් වලකින්න 🚫</h2>
          <p className="text-gray-700 mb-6">
         
❤️❤️Nethmi Cam Show ❤️❤️ 700 /=

Phone 0770876014

❤️ මම නෙත්මි…. ❤️ වයස අවුරුදු 30 ❤️

⭐I am a small cute girl
☎️ Numbr WHATSAPP —– 0770876014 MY PACKAGES
🌷5 MIN VIDEO CALL FUN Rs. 700/= ( Only Boobs show)
🌷 10 MIN VIDEO CALL FUN Rs. 1200/= ( Full body show)
🌷15 MIN VIDEO CALLFUN Rs. 1700/= ( Full body show)

🌷20 MIN VIDEO CALL FUN Rs. 2500/= (Full body show)

          </p>

          <Link href="/">
            <Button className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95 self-start">
              Video Call 
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
