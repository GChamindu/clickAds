"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { addMediaToJson } from "@/lib/utils"

export default function AdminPage() {
  const [formData, setFormData] = useState({
    category: "",
    url: "",
    alt: "",
    type: "image" as "image" | "video",
  })
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.category || !formData.url || !formData.type) {
      setMessage("Please fill in all required fields")
      return
    }

    // Add media to JSON
    const result = addMediaToJson(formData.category, formData.url, formData.alt, formData.type)

    if (result.success) {
      setMessage(result.message)
      // Reset form
      setFormData({
        category: "",
        url: "",
        alt: "",
        type: "image",
      })
    } else {
      setMessage(result.message)
    }
  }

  return (
    <main className="min-h-screen bg-white p-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#9B0067] mb-8">Admin Panel</h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Media</h2>

          {message && (
            <div
              className={`p-4 mb-4 rounded-md ${message.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="next">Next</SelectItem>
                  <SelectItem value="attractions">Attractions</SelectItem>
                  <SelectItem value="store">Store</SelectItem>
                  <SelectItem value="story">Story</SelectItem>
                  <SelectItem value="thankyou">Thank You</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Media Type *</label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value as "image" | "video" })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">URL/File Path *</label>
              <Input
                type="text"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="/images/category/filename.jpg or /videos/category/filename.mp4"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Alt Text/Description</label>
              <Textarea
                value={formData.alt}
                onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                placeholder="Describe the media content"
              />
            </div>

            <Button type="submit" className="bg-[#9B0067] hover:bg-[#7d0054]">
              Add Media
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
