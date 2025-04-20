"use client"

import type { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import { useState, useEffect } from "react"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  // This ensures hydration errors are avoided
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <SessionProvider>{children}</SessionProvider>
}

