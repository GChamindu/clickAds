import mediaData from "@/data/media.json"

export interface MediaItem {
  url: string
  alt?: string
  type: "image" | "video"
}

interface MediaCollection {
  [key: string]: MediaItem[]
}

// Type assertion for the imported JSON
const typedMediaData = mediaData as MediaCollection

/**
 * Get a random media item from a specific category
 */
export function getRandomMedia(category: string): MediaItem {
  const items = typedMediaData[category] || []

  if (items.length === 0) {
    // Return a placeholder if no items found
    return {
      url: "/placeholder.svg?height=600&width=800&text=Placeholder",
      alt: "Placeholder image",
      type: "image",
    }
  }

  const randomIndex = Math.floor(Math.random() * items.length)
  return items[randomIndex]
}

/**
 * Get an array of random media items from a specific category
 */
export function getRandomMediaArray(category: string, count: number): MediaItem[] {
  const items = typedMediaData[category] || []
  const result: MediaItem[] = []

  if (items.length === 0) {
    // Return placeholders if no items found
    for (let i = 0; i < count; i++) {
      result.push({
        url: `/placeholder.svg?height=400&width=400&text=Placeholder ${i + 1}`,
        alt: `Placeholder image ${i + 1}`,
        type: "image",
      })
    }
    return result
  }

  // If we have fewer items than requested, we'll repeat some
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * items.length)
    result.push(items[randomIndex])
  }

  return result
}
