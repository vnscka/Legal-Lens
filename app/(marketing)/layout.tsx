import type { ReactNode } from "react"

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen flex flex-col">{children}</div>
}

