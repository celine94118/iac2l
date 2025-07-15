// components/ui/external-link.tsx
import { ExternalLinkIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

const ExternalLink = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<typeof ExternalLinkIcon>>(
  ({ className, ...props }, ref) => <ExternalLinkIcon ref={ref} className={cn("h-4 w-4", className)} {...props} />,
)
ExternalLink.displayName = "ExternalLink"

export { ExternalLink }
