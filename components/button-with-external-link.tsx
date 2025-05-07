"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ReactNode } from "react"

interface ButtonWithExternalLinkProps {
  href: string
  externalUrl: string
  children: ReactNode
  className?: string
}

export default function ButtonWithExternalLink({
  href,
  externalUrl,
  children,
  className,
}: ButtonWithExternalLinkProps) {
  const handleClick = () => {
    // Open the external URL in a new tab
    window.open(externalUrl, "_blank")
  }

  return (
    <Link href={href}>
      <Button className={className} onClick={handleClick}>
        {children}
      </Button>
    </Link>
  )
}
