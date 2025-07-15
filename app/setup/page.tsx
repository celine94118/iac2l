// app/setup/page.tsx
// This page serves as a general setup guide for the entire system.
import { PaymentSetupGuide } from "@/components/payment-setup-guide"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default function SetupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Configuration Initiale</h1>
        <p className="text-gray-300 mt-2">Suivez ce guide pour configurer votre business automatisé.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Settings className="w-6 h-6 text-blue-400" />
              Guide de Démarrage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentSetupGuide /> {/* Reusing PaymentSetupGuide as a general setup guide */}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
