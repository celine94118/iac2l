// components/direct-signup-links.tsx
"use client"

import { Input } from "@/components/ui/input"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LinkIcon, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface DirectSignupLinksProps {
  productName: string
  signupLink: string
  affiliateLink?: string
}

export function DirectSignupLinks({ productName, signupLink, affiliateLink }: DirectSignupLinksProps) {
  const { toast } = useToast()

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Lien copié !",
      description: `${label} a été copié dans le presse-papiers.`,
    })
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <LinkIcon className="w-5 h-5 text-blue-400" />
          Liens d'Inscription Directs pour {productName}
        </CardTitle>
        <CardDescription className="text-gray-400">
          Utilisez ces liens pour diriger directement les utilisateurs vers la page d'inscription ou d'achat.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg">Lien d'Inscription/Achat Direct</h3>
          <p className="text-gray-300 text-sm mt-1">
            Ce lien mène directement à la page où les utilisateurs peuvent s'inscrire ou acheter le produit.
          </p>
          <div className="flex items-center space-x-2 mt-2">
            <Input type="text" value={signupLink} readOnly className="flex-1 bg-gray-700 border-gray-600 text-white" />
            <Button
              variant="outline"
              size="icon"
              onClick={() => copyToClipboard(signupLink, "Lien d'inscription")}
              className="border-blue-500 text-blue-400 hover:bg-blue-900"
            >
              <Copy className="w-4 h-4" />
              <span className="sr-only">Copier le lien d'inscription</span>
            </Button>
          </div>
        </div>

        {affiliateLink && (
          <div>
            <h3 className="font-semibold text-lg">Votre Lien d'Affiliation</h3>
            <p className="text-gray-300 text-sm mt-1">
              Utilisez ce lien pour suivre les ventes générées par vos efforts de marketing.
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <Input
                type="text"
                value={affiliateLink}
                readOnly
                className="flex-1 bg-gray-700 border-gray-600 text-white"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => copyToClipboard(affiliateLink, "Lien d'affiliation")}
                className="border-green-500 text-green-400 hover:bg-green-900"
              >
                <Copy className="w-4 h-4" />
                <span className="sr-only">Copier le lien d'affiliation</span>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
