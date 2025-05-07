import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Helper function to add images to the public directory
 * This is just a placeholder - in a real app, you would implement
 * proper file upload functionality
 */
export function addMediaToJson(category: string, url: string, alt: string, type: "image" | "video") {
  // In a real application, this would:
  // 1. Validate the input
  // 2. Update the media.json file
  // 3. Handle file uploads

  console.log(`Added new ${type} to ${category}: ${url} (${alt})`)

  // Return success message
  return {
    success: true,
    message: `Added new ${type} to ${category} category`,
  }
}
