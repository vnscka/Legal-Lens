import type { ReactNode } from "react"

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen flex flex-col">{children}</div>
}

