// components/paypal-integration.tsx
// This component is a placeholder for the actual PayPal integration logic.
"use client"

import Link from "next/link"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign } from "lucide-react"
import { useEffect, useState } from "react"
import { PAYPAL_CLIENT_ID, PAYPAL_SANDBOX_MODE, getPaypalCheckoutScriptUrl } from "@/lib/paypal-config"
import { useToast } from "@/hooks/use-toast"

declare global {
  interface Window {
    paypal: any
  }
}

interface PaypalIntegrationProps {
  productId: string
  productName: string
  price: number
  currency: string
}

export function PaypalIntegration({ productId, productName, price, currency }: PaypalIntegrationProps) {
  const [sdkReady, setSdkReady] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script")
      script.src = getPaypalCheckoutScriptUrl()
      script.async = true
      script.onload = () => setSdkReady(true)
      script.onerror = () => {
        toast({
          title: "Erreur de chargement PayPal",
          description: "Impossible de charger le SDK PayPal. Vérifiez votre Client ID.",
          variant: "destructive",
        })
      }
      document.body.appendChild(script)
    }

    if (!window.paypal && PAYPAL_CLIENT_ID && PAYPAL_CLIENT_ID !== "YOUR_PAYPAL_CLIENT_ID") {
      addPaypalScript()
    } else if (window.paypal) {
      setSdkReady(true)
    } else {
      toast({
        title: "Client ID PayPal manquant",
        description: "Veuillez configurer votre Client ID PayPal dans les variables d'environnement.",
        variant: "destructive",
      })
    }
  }, [toast])

  const createOrder = async (data: any, actions: any) => {
    try {
      const response = await fetch("/api/create-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, productName, price, currency }),
      })
      const order = await response.json()
      if (order.id) {
        return order.id
      } else {
        throw new Error(order.error || "Failed to create PayPal order.")
      }
    } catch (error: any) {
      toast({
        title: "Erreur de création de commande",
        description: error.message,
        variant: "destructive",
      })
      throw error
    }
  }

  const onApprove = async (data: any, actions: any) => {
    try {
      const response = await fetch("/api/execute-paypal-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId: data.orderID, productId, productName }),
      })
      const result = await response.json()

      if (result.success) {
        toast({
          title: "Paiement réussi !",
          description: `Votre achat de ${productName} a été confirmé.`,
          variant: "default",
        })
        // Trigger product email delivery
        await fetch("/api/send-product-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, userEmail: "user@example.com" }), // Replace with actual user email
        })
      } else {
        throw new Error(result.error || "Paiement non réussi.")
      }
    } catch (error: any) {
      toast({
        title: "Erreur de traitement du paiement",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const onError = (err: any) => {
    toast({
      title: "Erreur PayPal",
      description: err.message || "Une erreur est survenue lors du paiement PayPal.",
      variant: "destructive",
    })
  }

  useEffect(() => {
    if (sdkReady && window.paypal) {
      window.paypal
        .Buttons({
          createOrder: createOrder,
          onApprove: onApprove,
          onError: onError,
        })
        .render("#paypal-button-container")
    }
  }, [sdkReady])

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-400" />
          Paiement via PayPal
        </CardTitle>
        <CardDescription className="text-gray-400">
          Cliquez sur le bouton ci-dessous pour acheter {productName} pour {price} {currency}.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {PAYPAL_CLIENT_ID === "YOUR_PAYPAL_CLIENT_ID" ? (
          <div className="text-red-400 text-center">
            Veuillez configurer votre `NEXT_PUBLIC_PAYPAL_CLIENT_ID` dans vos variables d'environnement Vercel.
            <Button asChild className="mt-4 bg-red-600 hover:bg-red-700 text-white">
              <Link href="/setup-paypal">Configurer PayPal</Link>
            </Button>
          </div>
        ) : (
          <>
            {!sdkReady ? (
              <div className="text-center text-gray-400">Chargement du SDK PayPal...</div>
            ) : (
              <div id="paypal-button-container"></div>
            )}
            {PAYPAL_SANDBOX_MODE && (
              <p className="text-yellow-400 text-sm text-center">
                Mode Sandbox activé : Les transactions ne sont pas réelles.
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
