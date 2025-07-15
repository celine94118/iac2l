// components/affiliate-dashboard.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign, Users, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { affiliatePrograms } from "@/data/affiliate-programs"
import type { AffiliateSale } from "@/types/affiliate"

export function AffiliateDashboard() {
  // Dummy data for demonstration
  const totalAffiliateEarnings = 520.5
  const totalReferrals = 25
  const recentSales: AffiliateSale[] = [
    { id: "sale_001", programId: "aff_001", amount: 100, commissionEarned: 30, date: "2024-07-14" },
    { id: "sale_002", programId: "aff_002", amount: 50, commissionEarned: 10, date: "2024-07-13" },
    { id: "sale_003", programId: "aff_001", amount: 150, commissionEarned: 45, date: "2024-07-12" },
  ]

  const getProgramName = (programId: string) => {
    return affiliatePrograms.find((p) => p.id === programId)?.name || "Programme Inconnu"
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Tableau de Bord d'Affiliation
        </CardTitle>
        <CardDescription className="text-gray-400">Suivez vos gains et performances d'affiliation.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gains Totaux</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAffiliateEarnings.toFixed(2)} EUR</div>
              <p className="text-xs text-muted-foreground text-gray-400">+12% par rapport au mois dernier</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700 text-white border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Références Totales</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalReferrals}</div>
              <p className="text-xs text-muted-foreground text-gray-400">+5% par rapport au mois dernier</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Ventes Récentes</h3>
          <div className="border border-gray-700 rounded-md p-4 text-gray-300">
            {recentSales.length > 0 ? (
              <ul className="space-y-2">
                {recentSales.map((sale) => (
                  <li key={sale.id} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{getProgramName(sale.programId)}</span> - {sale.date}
                    </div>
                    <Badge variant="secondary" className="bg-green-600 text-white">
                      +{sale.commissionEarned.toFixed(2)} EUR
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-400">Aucune vente récente.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
