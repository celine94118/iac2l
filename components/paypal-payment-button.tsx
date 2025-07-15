// components/paypal-payment-button.tsx
"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { PAYPAL_CLIENT_ID, PAYPAL_SANDBOX_MODE, getPaypalCheckoutScriptUrl } from "@/lib/paypal-config"

declare global {
  interface Window {
    paypal: any
  }
}

interface PaypalPaymentButtonProps {
  productId: string
  productName: string
  price: number
  currency: string
  onPaymentSuccess?: (orderId: string) => void
  onPaymentError?: (error: any) => void
}

export function PaypalPaymentButton({
  productId,
  productName,
  price,
  currency,
  onPaymentSuccess,
  onPaymentError,
}: PaypalPaymentButtonProps) {
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
        onPaymentError?.("Failed to load PayPal SDK")
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
      onPaymentError?.("PayPal Client ID is missing.")
    }
  }, [toast, onPaymentError])

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
      onPaymentError?.(error)
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
        onPaymentSuccess?.(data.orderID)
        // Trigger product email delivery
        await fetch("/api/send-product-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ productId, userEmail: "customer@example.com" }), // Replace with actual customer email
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
      onPaymentError?.(error)
    }
  }

  const onError = (err: any) => {
    toast({
      title: "Erreur PayPal",
      description: err.message || "Une erreur est survenue lors du paiement PayPal.",
      variant: "destructive",
    })
    onPaymentError?.(err)
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
  }, [sdkReady, productId, productName, price, currency]) // Re-render buttons if product details change

  if (PAYPAL_CLIENT_ID === "YOUR_PAYPAL_CLIENT_ID") {
    return (
      <div className="text-red-400 text-center p-4 border border-red-500 rounded-md">
        Veuillez configurer votre `NEXT_PUBLIC_PAYPAL_CLIENT_ID` dans vos variables d'environnement Vercel.
        <Button asChild className="mt-4 bg-red-600 hover:bg-red-700 text-white">
          <Link href="/setup-paypal">Configurer PayPal</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {!sdkReady ? (
        <div className="text-center text-gray-400">Chargement du bouton PayPal...</div>
      ) : (
        <div id="paypal-button-container"></div>
      )}
      {PAYPAL_SANDBOX_MODE && (
        <p className="text-yellow-400 text-sm text-center">
          Mode Sandbox activé : Les transactions ne sont pas réelles.
        </p>
      )}
    </div>
  )
}
