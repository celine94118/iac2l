// app/sales-automation/page.tsx
// This page provides an overview of the sales automation system.
import { SalesAutomationSystem } from "@/components/sales-automation-system"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from "lucide-react"

export default function SalesAutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Automatisation des Ventes</h1>
        <p className="text-gray-300 mt-2">Maximisez vos revenus avec un système de vente sans effort.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <DollarSign className="w-6 h-6 text-green-400" />
              Votre Moteur de Vente Automatisé
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SalesAutomationSystem />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
