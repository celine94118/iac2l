// components/payment-process-explanation.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, CreditCard, Mail, Download } from "lucide-react"

export function PaymentProcessExplanation() {
  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-blue-400" />
          Comprendre le Processus de Paiement
        </CardTitle>
        <CardDescription className="text-gray-400">
          Découvrez comment les paiements sont traités et les produits livrés automatiquement.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">1. Le Client Clique sur Acheter</h3>
            <p className="text-gray-300">
              Lorsqu'un client décide d'acheter votre produit numérique, il clique sur le bouton de paiement PayPal sur
              votre page de vente.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">2. Redirection vers PayPal</h3>
            <p className="text-gray-300">
              Le client est redirigé vers une page sécurisée de PayPal pour finaliser son paiement.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">3. Confirmation du Paiement</h3>
            <p className="text-gray-300">
              Une fois le paiement effectué, PayPal nous envoie une confirmation sécurisée.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">4. Envoi Automatique de l'Email</h3>
            <p className="text-gray-300">
              Notre système détecte le paiement et envoie automatiquement un email au client contenant le lien de
              téléchargement de son produit.
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              Email de livraison du produit
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
          <div>
            <h3 className="font-semibold text-lg">5. Accès au Produit</h3>
            <p className="text-gray-300">
              Le client clique sur le lien dans l'email et télécharge son produit numérique instantanément.
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
              <Download className="w-4 h-4" />
              Téléchargement instantané
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
