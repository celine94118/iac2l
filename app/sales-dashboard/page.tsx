// app/sales-dashboard/page.tsx
// This page displays the sales dashboard.
import { SalesDashboard } from "@/components/sales-dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export default function SalesDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Dashboard des Ventes</h1>
        <p className="text-gray-300 mt-2">Suivez vos performances et votre croissance.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-4xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Aperçu des Revenus
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SalesDashboard />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
