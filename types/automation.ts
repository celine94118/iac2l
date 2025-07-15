// types/automation.ts
export interface AutomationTask {
  id: string
  name: string
  description: string
  status: "active" | "inactive" | "error"
  lastRun: string
}

export interface AutomationLog {
  id: string
  taskId: string
  timestamp: string
  message: string
  level: "info" | "warn" | "error"
}
