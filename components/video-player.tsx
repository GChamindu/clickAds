"use client"

import { useRef, useEffect } from "react"

interface VideoPlayerProps {
  src: string
}

export default function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Reset video when src changes
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      controls
      className="w-full h-full object-cover"
      preload="metadata"
      playsInline // Better mobile experience
      poster="/images/video-poster.jpg" // Placeholder until video loads
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
