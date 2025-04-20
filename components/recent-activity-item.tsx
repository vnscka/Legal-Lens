import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

interface RecentActivityItemProps {
  icon: ReactNode
  title: string
  description: string
  timestamp: string
}

export default function RecentActivityItem({ icon, title, description, timestamp }: RecentActivityItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent transition-colors">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-blue-100 p-2 text-blue-900">{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">{timestamp}</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}

