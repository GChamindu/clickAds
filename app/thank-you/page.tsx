"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { getRandomMedia } from "@/lib/media"

export default function ThankYou() {
  const router = useRouter()
  const [media, setMedia] = useState<any>(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // Get random thank you image
    setMedia(getRandomMedia("thankyou"))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Get a new random image
    setMedia(getRandomMedia("thankyou"))
    setShowForm(false)
  }

  if (!media) return <div className="min-h-[100dvh] flex items-center justify-center">Loading...</div>

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#9B0067] mb-4 md:mb-8">Thank You!</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
          Your meeting has been scheduled. We'll be in touch soon!
        </p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image src={media.url || "/placeholder.svg"} alt={media.alt || "Thank you"} fill className="object-cover" />
        </div>

        <Button
          className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
          onClick={() => setShowForm(true)}
        >
          Schedule Another Meeting
        </Button>

        <Button
          className="mt-4 bg-transparent hover:bg-gray-100 text-[#9B0067] border border-[#9B0067] text-lg px-8 py-6 rounded-full transition-all shadow-md active:scale-95"
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#9B0067] mb-4">Schedule Another Meeting</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#9B0067] hover:bg-[#7d0054]">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
