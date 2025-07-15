// app/digital-platform/page.tsx
// This page provides an overview of the digital products platform.
import { DigitalProductsPlatform } from "@/components/digital-products-platform"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function DigitalPlatformPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Plateforme de Produits Numériques</h1>
        <p className="text-gray-300 mt-2">Créez, vendez et automatisez vos produits en ligne.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <BookOpen className="w-6 h-6 text-blue-400" />
              Votre Boutique Automatisée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <DigitalProductsPlatform />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
