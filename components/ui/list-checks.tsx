// components/ui/list-checks.tsx
import { ListChecksIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

const ListChecks = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<typeof ListChecksIcon>>(
  ({ className, ...props }, ref) => <ListChecksIcon ref={ref} className={cn("h-4 w-4", className)} {...props} />,
)
ListChecks.displayName = "ListChecks"

export { ListChecks }
