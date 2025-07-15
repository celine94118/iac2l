// app/api/send-product-email/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { productId, userEmail } = await req.json()

    // In a real application, you would fetch product details from your database
    // based on productId to get the actual download link.
    const productDetails = {
      test_prod_001: {
        name: "Produit Test",
        downloadLink: "https://example.com/downloads/test-product.pdf", // Dummy link
      },
      // Add other product details here
      prod_001: {
        name: "Guide Complet du Business Automatisé",
        downloadLink: "/downloads/business-automatise.pdf",
      },
      prod_002: {
        name: "Formation Affiliation Pro",
        downloadLink: "/downloads/formation-affiliation.pdf",
      },
      prod_003: {
        name: "Pack de Templates Marketing",
        downloadLink: "/downloads/templates-pack.zip",
      },
      prod_004: {
        name: "Stratégie de Trafic Avancée",
        downloadLink: "/downloads/strategie-trafic.pdf",
      },
    }

    const product = (productDetails as any)[productId]

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 })
    }

    // Simulate sending email
    console.log(`Sending product email for "${product.name}" to ${userEmail}`)
    console.log(`Download Link: ${product.downloadLink}`)

    // Uncomment the following block to use Resend for actual email sending
    /*
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Email sending is simulated.");
      return NextResponse.json({ success: true, message: "Email simulated." });
    }

    const { data, error } = await resend.emails.send({
      from: 'Your Business <onboarding@yourdomain.com>', // Replace with your verified sender email
      to: [userEmail],
      subject: `Votre produit : ${product.name}`,
      html: `
        <h1>Merci pour votre achat !</h1>
        <p>Voici votre lien de téléchargement pour <strong>${product.name}</strong> :</p>
        <p><a href="${product.downloadLink}">Cliquez ici pour télécharger</a></p>
        <p>Si vous avez des questions, n'hésitez pas à nous contacter.</p>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json({ error: error.message || "Failed to send email." }, { status: 500 });
    }
    */

    return NextResponse.json({ success: true, message: "Product email sent (or simulated) successfully." })
  } catch (error: any) {
    console.error("Failed to send product email:", error)
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
