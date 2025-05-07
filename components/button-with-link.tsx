"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ReactNode } from "react"

interface ButtonWithLinkProps {
  href: string
  externalLink?: string
  children: ReactNode
  className?: string
}

export function ButtonWithLink({ href, externalLink, children, className }: ButtonWithLinkProps) {
  const handleClick = () => {
    // Open external link in a new tab if provided
    if (externalLink) {
      window.open(externalLink, "_blank")
    }
  }

  return (
    <Link href={href}>
      <Button className={className} onClick={handleClick}>
        {children}
      </Button>
    </Link>
  )
}
