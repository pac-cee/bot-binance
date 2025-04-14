import * as React from "react"
import { cn } from "../../lib/utils"

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
  tabs: { label: string, value: string }[]
}

export function Tabs({ value, onValueChange, tabs, className, ...props }: TabsProps) {
  return (
    <div className={cn("flex gap-2", className)} {...props}>
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => onValueChange(tab.value)}
          className={cn(
            "px-3 py-1 rounded-md border transition-colors",
            value === tab.value ? "bg-primary text-primary-foreground" : "bg-background text-primary border-primary"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
