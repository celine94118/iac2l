// components/sales-dashboard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, TrendingUp, Users, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function SalesDashboard() {
  // Dummy data for demonstration
  const totalRevenue = 1250.75
  const totalSales = 45
  const newCustomers = 12
  const topProduct = "Guide Complet du Business Automatisé"

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Tableau de Bord des Ventes
        </CardTitle>
        <CardDescription className="text-gray-400">Suivez vos performances de vente en temps réel.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenu Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalRevenue.toFixed(2)} EUR</div>
              <p className="text-xs text-muted-foreground text-gray-400">+20.1% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ventes Totales</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalSales}</div>
              <p className="text-xs text-muted-foreground text-gray-400">+15% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nouveaux Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{newCustomers}</div>
              <p className="text-xs text-muted-foreground text-gray-400">+8% par rapport au mois dernier</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Produit le plus vendu</h3>
          <Badge variant="default" className="bg-purple-600 hover:bg-purple-700 text-white">
            {topProduct}
          </Badge>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Historique des Ventes (Exemple)</h3>
          <div className="border border-gray-700 rounded-md p-4 text-gray-300">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>2024-07-14 - Guide Complet</span>
                <span className="font-medium">49.99 EUR</span>
              </li>
              <li className="flex justify-between">
                <span>2024-07-13 - Formation Affiliation</span>
                <span className="font-medium">99.00 EUR</span>
              </li>
              <li className="flex justify-between">
                <span>2024-07-12 - Pack Templates</span>
                <span className="font-medium">29.99 EUR</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
