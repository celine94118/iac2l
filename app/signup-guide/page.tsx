// app/signup-guide/page.tsx
// This page provides a quick guide for new users to sign up.
import { QuickSignupGuide } from "@/components/quick-signup-guide"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus } from "lucide-react"

export default function SignupGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Rejoignez-nous !</h1>
        <p className="text-gray-300 mt-2">Votre chemin vers un business automatisé commence ici.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-3xl bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <UserPlus className="w-6 h-6 text-purple-400" />
              Guide d'Inscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <QuickSignupGuide />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
