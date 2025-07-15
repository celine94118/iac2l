// app/signup-now/page.tsx
// This page is a placeholder for a direct signup/purchase link.
"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { UserPlus } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function SignupNowPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) {
      toast({
        title: "Erreur d'inscription",
        description: "Veuillez accepter les conditions générales.",
        variant: "destructive",
      })
      return
    }
    // Simulate signup process
    console.log("Email:", email)
    console.log("Password:", password)
    toast({
      title: "Inscription réussie !",
      description: "Bienvenue dans votre business automatisé.",
    })
    // In a real app, you'd send this data to your backend for user creation
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Inscrivez-vous Maintenant !</h1>
        <p className="text-gray-300 mt-2">Créez votre compte et commencez votre aventure.</p>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-700 text-white border-gray-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <UserPlus className="w-6 h-6 text-purple-400" />
              Créer un Compte
            </CardTitle>
            <CardDescription className="text-gray-400">
              Remplissez les champs ci-dessous pour vous inscrire.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(!!checked)}
                  className="data-[state=checked]:bg-purple-500 data-[state=checked]:text-white"
                />
                <Label htmlFor="terms">J'accepte les conditions générales</Label>
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                S'inscrire
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
