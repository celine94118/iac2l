// components/ready-made-products.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { DollarSign } from "lucide-react"
import { PaypalPaymentButton } from "./paypal-payment-button"

interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  downloadUrl: string // This would be the actual file path or external URL
}

const products: Product[] = [
  {
    id: "prod_001",
    name: "Guide Complet du Business Automatisé",
    description: "Un guide étape par étape pour lancer votre business en ligne et générer des revenus passifs.",
    price: 49.99,
    currency: "EUR",
    downloadUrl: "/downloads/guide-argent-ligne.pdf",
  },
  {
    id: "prod_002",
    name: "Formation Affiliation Pro",
    description: "Maîtrisez l'affiliation marketing et générez des commissions élevées avec des stratégies éprouvées.",
    price: 99.0,
    currency: "EUR",
    downloadUrl: "/downloads/formation-affiliation.pdf",
  },
  {
    id: "prod_003",
    name: "Pack de Templates Marketing",
    description: "Des templates prêts à l'emploi pour vos emails, pages de vente et posts sur les réseaux sociaux.",
    price: 29.99,
    currency: "EUR",
    downloadUrl: "/downloads/templates-pack.zip",
  },
  {
    id: "prod_004",
    name: "Stratégie de Trafic Avancée",
    description: "Découvrez les secrets pour attirer un trafic qualifié et illimité vers vos offres.",
    price: 79.0,
    currency: "EUR",
    downloadUrl: "/downloads/strategie-trafic.pdf",
  },
]

export function ReadyMadeProducts() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-400" />
          Nos Produits Numériques Prêts à Vendre
        </CardTitle>
        <CardDescription className="text-gray-400">
          Commencez à vendre immédiatement avec nos produits numériques à fort potentiel.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
            <h3 className="font-semibold text-lg text-blue-400">{product.name}</h3>
            <p className="text-gray-300 text-sm mt-1">{product.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-lg font-bold text-white">
                {product.price.toFixed(2)} {product.currency}
              </span>
              <PaypalPaymentButton
                productId={product.id}
                productName={product.name}
                price={product.price}
                currency={product.currency}
                onPaymentSuccess={(orderId) => {
                  console.log(`Payment successful for ${product.name}, order ID: ${orderId}`)
                  // In a real app, you might redirect or show a download link directly here
                  // For now, the email API handles delivery.
                }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
