// components/admin-panel.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, DollarSign, ShoppingCart, Zap, Tag, Gauge } from "lucide-react"
import { AutomationControl } from "./automation-control"
import { AutomationDashboard } from "./automation-dashboard"
import { AffiliateDashboard } from "./affiliate-dashboard"

export function AdminPanel() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-800 text-white border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Settings className="w-6 h-6 text-purple-400" />
            Panneau de Contrôle Principal
          </CardTitle>
          <CardDescription className="text-gray-400">
            Accédez rapidement aux sections clés de votre business.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <DollarSign className="w-5 h-5 text-green-400" />
              <CardTitle>Ventes & Revenus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Suivez vos performances de vente et vos gains.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/sales-dashboard">Voir le Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <ShoppingCart className="w-5 h-5 text-blue-400" />
              <CardTitle>Gestion des Produits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Créez, modifiez et gérez vos produits numériques.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/products">Gérer les Produits</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <Zap className="w-5 h-5 text-yellow-400" />
              <CardTitle>Automatisation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Contrôlez et surveillez vos tâches automatisées.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/sales-automation">Gérer l'Automatisation</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <Tag className="w-5 h-5 text-pink-400" />
              <CardTitle>Affiliation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Découvrez et suivez les programmes d'affiliation.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/programs">Voir les Programmes</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <Gauge className="w-5 h-5 text-orange-400" />
              <CardTitle>Marketing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Accédez à vos outils de marketing automatisé.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/marketing-automation">Gérer le Marketing</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader>
              <Settings className="w-5 h-5 text-cyan-400" />
              <CardTitle>Configuration PayPal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Configurez vos identifiants PayPal pour les paiements.</p>
              <Button asChild className="mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/setup-paypal">Configurer PayPal</Link>
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <AutomationControl />
      <AutomationDashboard />
      <AffiliateDashboard />
    </div>
  )
}
