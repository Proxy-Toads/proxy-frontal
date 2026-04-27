import { cn } from "@/lib/utils"

interface RobotFrogIconProps {
  className?: string
}

export function RobotFrogIcon({ className }: RobotFrogIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      {/* Beanie hat */}
      <path d="M6 8c0-3 2.7-5 6-5s6 2 6 5" />
      <line x1="12" y1="3" x2="12" y2="1" />
      
      {/* Wide toad face */}
      <path d="M3 13c0-3 4-5 9-5s9 2 9 5c0 2.5-4 5-9 5s-9-2.5-9-5z" />
      
      {/* Round glasses - left */}
      <circle cx="8" cy="12" r="3" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      
      {/* Round glasses - right */}
      <circle cx="16" cy="12" r="3" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
      
      {/* Glasses bridge */}
      <line x1="11" y1="12" x2="13" y2="12" />
    </svg>
  )
}
