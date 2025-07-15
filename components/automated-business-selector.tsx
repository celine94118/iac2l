// components/automated-business-selector.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lightbulb, ShoppingCart, Cloud, Users } from "lucide-react"

export function AutomatedBusinessSelector() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-yellow-400" />
          Choisissez Votre Business Automatisé
        </CardTitle>
        <CardDescription className="text-gray-400">
          Explorez différentes idées de business que vous pouvez automatiser avec notre plateforme.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <ShoppingCart className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Vente de Produits Numériques</h3>
            <p className="text-gray-300">
              Créez et vendez des ebooks, formations, templates, logiciels, etc. La livraison est instantanée et
              automatisée.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/digital-platform">En savoir plus</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Cloud className="w-5 h-5 text-blue-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">SaaS (Software as a Service) Simple</h3>
            <p className="text-gray-300">
              Développez un petit outil ou service en ligne et automatisez l'abonnement et l'accès.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#">Bientôt disponible</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <Users className="w-5 h-5 text-pink-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">Communauté Premium / Abonnement</h3>
            <p className="text-gray-300">
              Créez une communauté exclusive avec accès payant et gérez les abonnements automatiquement.
            </p>
            <Button asChild className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="#">Bientôt disponible</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
