// app/api/execute-paypal-payment/route.ts
import { NextResponse } from "next/server"
import { PAYPAL_CLIENT_ID, getPaypalApiUrl } from "@/lib/paypal-config"

export async function POST(request: Request) {
  const { orderId, productId, productName } = await request.json()

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

    const captureResponse = await fetch(`${getPaypalApiUrl()}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const captureData = await captureResponse.json()
    if (!captureResponse.ok) {
      console.error("PayPal Capture Error:", captureData)
      return NextResponse.json(
        { success: false, error: captureData.message || "Failed to capture PayPal payment." },
        { status: 500 },
      )
    }

    if (captureData.status === "COMPLETED") {
      // Payment successful, now you can trigger product delivery
      console.log(`Payment for product ${productName} (ID: ${productId}) completed. Order ID: ${orderId}`)
      // In a real application, you would update your database, send confirmation emails, etc.
      return NextResponse.json({ success: true, orderId: orderId, captureData })
    } else {
      console.warn(`Payment for order ${orderId} not completed. Status: ${captureData.status}`)
      return NextResponse.json({ success: false, error: `Payment status: ${captureData.status}` }, { status: 400 })
    }
  } catch (error: any) {
    console.error("Error executing PayPal payment:", error)
    return NextResponse.json({ success: false, error: error.message || "Internal server error." }, { status: 500 })
  }
}
