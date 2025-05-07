"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { getRandomMedia } from "@/lib/media"
import VideoPlayer from "@/components/video-player"

export default function Story() {
  const [showCallForm, setShowCallForm] = useState(false)
  const [media, setMedia] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Get random video for the story page
    setMedia(getRandomMedia("story"))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit the form data to your backend here
    router.push("/thank-you")
  }

  if (!media) return <div className="min-h-[100dvh] flex items-center justify-center">Loading...</div>

  return (
    <main className="min-h-[100dvh] bg-white flex flex-col items-center p-4 py-8 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#9B0067] mb-6 md:mb-12 text-center">Our Story</h1>

      <div className="max-w-4xl w-full mb-8 md:mb-12">
        <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
          {media.type === "video" ? (
            <VideoPlayer src={media.url} />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Video Content</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            className="bg-[#9B0067] hover:bg-[#7d0054] text-white text-lg px-8 py-6 rounded-full transition-all transform hover:scale-105 shadow-md active:scale-95"
            onClick={() => setShowCallForm(true)}
          >
            Get Video Call
          </Button>
        </div>
      </div>

      {showCallForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#9B0067] mb-4">Schedule Your Video Call</h2>

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
                <Button type="button" variant="outline" onClick={() => setShowCallForm(false)}>
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
