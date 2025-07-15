// components/deployment-final-guide.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Rocket, CheckCircle, ExternalLink } from "lucide-react"

export function DeploymentFinalGuide() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Rocket className="w-5 h-5 text-purple-400" />
          Guide de Déploiement Final
        </CardTitle>
        <CardDescription className="text-gray-400">
          Félicitations ! Votre business est presque prêt à décoller.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">1. Vérifiez le Déploiement Vercel</h3>
            <p className="text-gray-300">
              Assurez-vous que votre projet est bien déployé sur Vercel et que toutes les pages sont accessibles.
            </p>
            <a
              href="https://vercel.com/dashboard" // Replace with actual Vercel project URL if known
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline inline-flex items-center gap-1 mt-2"
            >
              Aller au Dashboard Vercel <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">2. Configurez vos Variables d'Environnement</h3>
            <p className="text-gray-300">C'est crucial pour l'intégration PayPal et d'autres services.</p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/setup-paypal">Configurer PayPal</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">3. Effectuez un Test de Paiement</h3>
            <p className="text-gray-300">
              Avant de promouvoir votre business, assurez-vous que le processus de paiement fonctionne parfaitement.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/payment-reality">Tester le Paiement</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">4. Lancez vos Campagnes Marketing</h3>
            <p className="text-gray-300">Utilisez les outils d'automatisation pour attirer vos premiers clients.</p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/marketing-automation">Gérer le Marketing</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
