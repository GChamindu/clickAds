import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NextPhoto() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <div className="bg-[#9B0067]/10 p-6 rounded-lg mb-8">
          <p className="text-xl text-[#9B0067] font-medium">Sorry, please check another one</p>
        </div>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
          <Image src="/placeholder.svg?height=600&width=800" alt="Next photo" fill className="object-cover" />
        </div>

        <Link href="/attractions">
          <Button className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105">
            TRY THIS
          </Button>
        </Link>
      </div>
    </main>
  )
}
