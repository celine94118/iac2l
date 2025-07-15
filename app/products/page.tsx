// app/products/page.tsx
// This page lists ready-made digital products for sale.
import { ReadyMadeProducts } from "@/components/ready-made-products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Nos Produits</h1>
        <p className="text-gray-300 mt-2">Découvrez les produits numériques que vous pouvez vendre dès aujourd'hui.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ShoppingCart className="w-6 h-6 text-green-400" />
              Catalogue de Produits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReadyMadeProducts />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
