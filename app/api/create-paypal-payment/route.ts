// app/api/create-paypal-payment/route.ts
import { NextResponse } from "next/server"
import { PAYPAL_CLIENT_ID, getPaypalApiUrl } from "@/lib/paypal-config"

export async function POST(request: Request) {
  const { productId, productName, price, currency } = await request.json()

  if (!PAYPAL_CLIENT_ID || PAYPAL_CLIENT_ID === "YOUR_PAYPAL_CLIENT_ID") {
    return NextResponse.json({ error: "PayPal Client ID not configured." }, { status: 500 })
  }

  try {
    const authResponse = await fetch(`${getPaypalApiUrl()}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(`${PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    })

    const authData = await authResponse.json()
    if (!authResponse.ok) {
      console.error("PayPal Auth Error:", authData)
      return NextResponse.json(
        { error: authData.error_description || "Failed to get PayPal access token." },
        { status: 500 },
      )
    }
    const accessToken = authData.access_token

    const orderResponse = await fetch(`${getPaypalApiUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: currency,
              value: price.toFixed(2),
            },
            description: `Achat de ${productName} (ID: ${productId})`,
            custom_id: productId, // Store product ID for later use
          },
        ],
        application_context: {
          return_url: `${process.env.VERCEL_URL || "http://localhost:3000"}/payment-success`, // Redirect after approval
          cancel_url: `${process.env.VERCEL_URL || "http://localhost:3000"}/payment-cancel`, // Redirect if cancelled
          brand_name: "Mon Business Automatisé",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
        },
      }),
    })

    const orderData = await orderResponse.json()
    if (!orderResponse.ok) {
      console.error("PayPal Order Creation Error:", orderData)
      return NextResponse.json({ error: orderData.message || "Failed to create PayPal order." }, { status: 500 })
    }

    return NextResponse.json(orderData)
  } catch (error: any) {
    console.error("Error creating PayPal payment:", error)
    return NextResponse.json({ error: error.message || "Internal server error." }, { status: 500 })
  }
}
