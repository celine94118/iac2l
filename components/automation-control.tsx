// components/automation-control.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Play, Pause } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function AutomationControl() {
  const [automationEnabled, setAutomationEnabled] = useState(true) // Simulate global automation state
  const { toast } = useToast()

  const toggleAutomation = () => {
    setAutomationEnabled(!automationEnabled)
    toast({
      title: "Contrôle d'Automatisation",
      description: automationEnabled ? "Automatisation désactivée." : "Automatisation activée.",
      variant: automationEnabled ? "destructive" : "default",
    })
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-400" />
          Contrôle Global de l'Automatisation
        </CardTitle>
        <CardDescription className="text-gray-400">
          Activez ou désactivez toutes les tâches d'automatisation de votre business.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <div className="text-lg font-semibold">
          Statut Actuel :{" "}
          <span className={automationEnabled ? "text-green-400" : "text-red-400"}>
            {automationEnabled ? "Activé" : "Désactivé"}
          </span>
        </div>
        <Button
          onClick={toggleAutomation}
          className={
            automationEnabled ? "bg-red-600 hover:bg-red-700 text-white" : "bg-green-600 hover:bg-green-700 text-white"
          }
        >
          {automationEnabled ? (
            <>
              <Pause className="w-5 h-5 mr-2" /> Désactiver Tout
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2" /> Activer Tout
            </>
          )}
        </Button>
        <p className="text-sm text-gray-400 mt-2">
          Lorsque l'automatisation est désactivée, les ventes et les livraisons de produits ne seront pas traitées
          automatiquement.
        </p>
      </CardContent>
    </Card>
  )
}
