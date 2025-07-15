// components/automation-dashboard.tsx
"use client"

import { Badge } from "@/components/ui/badge"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Play, Pause, RefreshCw, Info, AlertTriangle, XCircle } from "lucide-react"
import type { AutomationTask, AutomationLog } from "@/types/automation"
import { useEffect, useState } from "react"
import {
  getAutomationTasks,
  getAutomationLogs,
  runAutomationTask,
  toggleAutomationTaskStatus,
} from "@/lib/automation-engine"
import { useToast } from "@/hooks/use-toast"

export function AutomationDashboard() {
  const [tasks, setTasks] = useState<AutomationTask[]>([])
  const [logs, setLogs] = useState<AutomationLog[]>([])
  const [loadingTasks, setLoadingTasks] = useState(true)
  const [loadingLogs, setLoadingLogs] = useState(true)
  const { toast } = useToast()

  const fetchTasks = async () => {
    setLoadingTasks(true)
    const fetchedTasks = await getAutomationTasks()
    setTasks(fetchedTasks)
    setLoadingTasks(false)
  }

  const fetchLogs = async () => {
    setLoadingLogs(true)
    const fetchedLogs = await getAutomationLogs()
    setLogs(fetchedLogs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()))
    setLoadingLogs(false)
  }

  useEffect(() => {
    fetchTasks()
    fetchLogs()
  }, [])

  const handleRunTask = async (taskId: string) => {
    const result = await runAutomationTask(taskId)
    if (result.success) {
      toast({ title: "Succès", description: result.message })
      fetchTasks() // Refresh tasks to update lastRun
      fetchLogs() // Refresh logs
    } else {
      toast({ title: "Erreur", description: result.message, variant: "destructive" })
    }
  }

  const handleToggleStatus = async (taskId: string) => {
    const result = await toggleAutomationTaskStatus(taskId)
    if (result.success) {
      toast({ title: "Succès", description: result.message })
      fetchTasks() // Refresh tasks to update status
      fetchLogs() // Refresh logs
    } else {
      toast({ title: "Erreur", description: result.message, variant: "destructive" })
    }
  }

  const getLogIcon = (level: AutomationLog["level"]) => {
    switch (level) {
      case "info":
        return <Info className="w-4 h-4 text-blue-400" />
      case "warn":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case "error":
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return null
    }
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Zap className="w-5 h-5 text-purple-400" />
          Tableau de Bord d'Automatisation
        </CardTitle>
        <CardDescription className="text-gray-400">Gérez et surveillez vos tâches d'automatisation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Tâches d'Automatisation</h3>
          {loadingTasks ? (
            <div className="text-center text-gray-400">Chargement des tâches...</div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between border border-gray-700 rounded-md p-3">
                  <div>
                    <p className="font-medium">{task.name}</p>
                    <p className="text-sm text-gray-400">{task.description}</p>
                    <p className="text-xs text-gray-500">
                      Dernière exécution: {new Date(task.lastRun).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={task.status === "active" ? "default" : "secondary"}
                      className={task.status === "active" ? "bg-green-500" : "bg-red-500"}
                    >
                      {task.status === "active" ? "Actif" : "Inactif"}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleToggleStatus(task.id)}
                      className="border-gray-500 text-gray-300 hover:bg-gray-700"
                    >
                      {task.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span className="sr-only">{task.status === "active" ? "Désactiver" : "Activer"}</span>
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleRunTask(task.id)}
                      disabled={task.status === "inactive"}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span className="sr-only">Exécuter</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Journaux d'Activités</h3>
          {loadingLogs ? (
            <div className="text-center text-gray-400">Chargement des journaux...</div>
          ) : (
            <div className="border border-gray-700 rounded-md p-4 max-h-60 overflow-y-auto">
              {logs.length > 0 ? (
                <ul className="space-y-2">
                  {logs.map((log) => (
                    <li key={log.id} className="flex items-start gap-2 text-sm text-gray-300">
                      {getLogIcon(log.level)}
                      <span>
                        [{new Date(log.timestamp).toLocaleTimeString()}] {log.message}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-400">Aucun journal d'activité.</p>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
