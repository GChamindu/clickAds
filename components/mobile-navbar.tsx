"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, ImageIcon, Store, Video, Calendar } from "lucide-react"

export default function MobileNavbar() {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/attractions", icon: ImageIcon, label: "Gallery" },
    { path: "/store", icon: Store, label: "Store" },
    // { path: "/story", icon: Video, label: "Videos" },
    // { path: "/thank-you", icon: Calendar, label: "Schedule" },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 md:hidden z-10">
      <div className="flex justify-between items-center">
        {navItems.map((item) => (
          <button
            key={item.path}
            className={`flex flex-col items-center justify-center p-2 rounded-lg ${
              isActive(item.path) ? "text-[#9B0067]" : "text-gray-500"
            }`}
            onClick={() => router.push(item.path)}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
