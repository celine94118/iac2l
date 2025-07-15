// components/post-deployment-reality.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle, Lightbulb, DollarSign } from "lucide-react"

export function PostDeploymentReality() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          La Réalité Post-Déploiement
        </CardTitle>
        <CardDescription className="text-gray-400">
          Comprendre ce qui se passe après le déploiement et comment maximiser votre succès.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Votre Site est en Ligne</h3>
            <p className="text-gray-300">
              Votre plateforme est maintenant accessible au public. C'est une étape majeure !
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/">Visiter la Page d'Accueil</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <DollarSign className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Les Paiements Sont Prêts (Après Configuration)</h3>
            <p className="text-gray-300">
              Une fois vos variables PayPal configurées, votre système de paiement est opérationnel.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/setup-paypal">Vérifier la Configuration PayPal</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Lightbulb className="w-5 h-5 text-yellow-400 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">L'Automatisation Travaille pour Vous</h3>
            <p className="text-gray-300">
              Les ventes, les livraisons de produits et une partie du marketing sont désormais automatisés.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/sales-automation">Voir l'Automatisation</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
