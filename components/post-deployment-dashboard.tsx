// components/post-deployment-dashboard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Gauge, DollarSign, Rocket } from "lucide-react"
import { PostDeploymentChecklist } from "./post-deployment-checklist"
import { RealRevenueWarning } from "./real-revenue-warning"

export function PostDeploymentDashboard() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Gauge className="w-6 h-6 text-purple-400" />
            Vue d'Ensemble Post-Déploiement
          </CardTitle>
          <CardDescription className="text-gray-400">
            Votre business est en ligne ! Voici les prochaines étapes et un aperçu rapide.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <PostDeploymentChecklist />

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gray-700 text-white border-gray-600">
              <CardHeader>
                <DollarSign className="w-5 h-5 text-green-400" />
                <CardTitle>Configurez les Paiements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Assurez-vous que votre intégration PayPal est prête à recevoir des paiements.
                </p>
                <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/setup-paypal">Configurer PayPal</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gray-700 text-white border-gray-600">
              <CardHeader>
                <Rocket className="w-5 h-5 text-blue-400" />
                <CardTitle>Lancez vos Produits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Créez et publiez vos produits numériques pour qu'ils soient disponibles à la vente.
                </p>
                <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/create-product">Créer un Produit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <RealRevenueWarning />
        </CardContent>
      </Card>
    </div>
  )
}
