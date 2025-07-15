// app/deploy/page.tsx
// This page provides a final guide after deployment.
import { DeploymentFinalGuide } from "@/components/deployment-final-guide"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export default function DeployPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Déploiement Finalisé !</h1>
        <p className="text-gray-300 mt-2">Votre business est en ligne. Prochaines étapes cruciales.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Rocket className="w-6 h-6 text-purple-400" />
              Guide Post-Déploiement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DeploymentFinalGuide />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
