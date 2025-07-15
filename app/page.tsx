import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign, Rocket, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-purple-400" />
          <span className="sr-only">Business Automatisé</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/products">
            Produits
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/sales-automation">
            Automatisation
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/marketing-automation">
            Marketing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/setup-paypal">
            PayPal Setup
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-400">
                    Votre Business Numérique 100% Automatisé
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Lancez et gérez votre empire de produits numériques sans effort. Automatisez les ventes, le
                    marketing et la livraison.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Link href="/signup-guide">Démarrer Maintenant</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-600 text-purple-400 hover:bg-purple-900 bg-transparent"
                  >
                    <Link href="/digital-platform">Découvrir la Plateforme</Link>
                  </Button>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="400"
                src="/placeholder.svg?height=400&width=400"
                width="400"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-600 px-3 py-1 text-sm text-white">
                  Fonctionnalités Clés
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">
                  Tout ce dont vous avez besoin pour réussir en ligne
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De la création de produits à la gestion des ventes et au marketing, notre plateforme couvre tout.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-700 text-white border-gray-600">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-green-400" />
                  <CardTitle>Ventes Automatisées</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Configurez vos produits une fois et laissez le système gérer les ventes et les livraisons 24/7.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white border-gray-600">
                <CardHeader>
                  <Rocket className="h-8 w-8 text-blue-400" />
                  <CardTitle>Marketing Intelligent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Des outils intégrés pour promouvoir vos produits et attirer de nouveaux clients sans effort.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-700 text-white border-gray-600">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-yellow-400" />
                  <CardTitle>Gestion Simplifiée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Un tableau de bord intuitif pour suivre vos performances et gérer votre business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-400">
                Prêt à lancer votre business automatisé ?
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Rejoignez des centaines d'entrepreneurs qui transforment leurs idées en revenus passifs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/signup-guide">Commencer Gratuitement</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-600 text-purple-400 hover:bg-purple-900 bg-transparent"
              >
                <Link href="/contact">Contactez-nous</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-900 text-gray-400">
        <p className="text-xs">&copy; 2024 Business Automatisé. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Politique de confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}
