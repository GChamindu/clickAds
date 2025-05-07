import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const imageUrl = searchParams.get("imageUrl")
    const title = searchParams.get("title") || "Interactive Media Experience"

    // Use default image if none provided
    const finalImageUrl = imageUrl || "/images/home/image1.jpg"

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          fontSize: 40,
          color: "white",
          background: "#9B0067",
          width: "100%",
          height: "100%",
          padding: 50,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* We would normally use an image here, but for simplicity we're using text */}
          <div style={{ fontSize: 60, fontWeight: "bold", marginBottom: 20 }}>{title}</div>
          <div style={{ fontSize: 30 }}>Click to explore our interactive experience</div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.error(e)
    return new Response("Failed to generate OG image", { status: 500 })
  }
}
