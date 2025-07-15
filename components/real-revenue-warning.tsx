// components/real-revenue-warning.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export function RealRevenueWarning() {
  return (
    <Card className="bg-red-600/20 backdrop-blur-sm border-red-500/30 text-red-100">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <AlertTriangle className="w-6 h-6" />
          Attention : Revenus Réels !
        </CardTitle>
        <CardDescription className="text-red-200">
          Une fois votre configuration PayPal en mode "Live", les transactions seront réelles.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Assurez-vous d'avoir testé votre système en mode Sandbox avant de passer en production. Toute transaction
          effectuée en mode Live entraînera des débits réels sur les comptes PayPal.
        </p>
        <p className="text-sm text-red-200">
          Vérifiez toujours vos paramètres PayPal et vos variables d'environnement.
        </p>
      </CardContent>
    </Card>
  )
}
