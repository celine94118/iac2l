// app/payment-reality/page.tsx
// This page allows users to perform a payment reality check.
import { PaymentRealityCheck } from "@/components/payment-reality-check"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function PaymentRealityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Test de Paiement</h1>
        <p className="text-gray-300 mt-2">Vérifiez que votre système de paiement est opérationnel.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              Vérification du Processus de Paiement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentRealityCheck />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
