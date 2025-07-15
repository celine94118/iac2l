// components/product-creation-wizard.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea" // Assuming you have a Textarea component
import { CheckCircle, PlusCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ProductCreationWizard() {
  const [step, setStep] = useState(1)
  const [productName, setProductName] = useState("")
  const [productDescription, setProductDescription] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [downloadLink, setDownloadLink] = useState("")
  const { toast } = useToast()

  const handleNext = () => {
    if (step === 1 && !productName) {
      toast({ title: "Erreur", description: "Veuillez entrer un nom de produit.", variant: "destructive" })
      return
    }
    if (step === 2 && (!productPrice || isNaN(Number.parseFloat(productPrice)))) {
      toast({ title: "Erreur", description: "Veuillez entrer un prix valide.", variant: "destructive" })
      return
    }
    if (step === 3 && !downloadLink) {
      toast({ title: "Erreur", description: "Veuillez entrer un lien de téléchargement.", variant: "destructive" })
      return
    }
    setStep(step + 1)
  }

  const handleSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log({ productName, productDescription, productPrice, downloadLink })
    toast({
      title: "Produit créé !",
      description: `Le produit "${productName}" a été ajouté avec succès.`,
    })
    // Reset form or redirect
    setStep(1)
    setProductName("")
    setProductDescription("")
    setProductPrice("")
    setDownloadLink("")
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-green-400" />
          Assistant de Création de Produit ({step}/4)
        </CardTitle>
        <CardDescription className="text-gray-400">Créez votre produit numérique étape par étape.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {step === 1 && (
          <div className="space-y-2">
            <Label htmlFor="product-name">Nom du Produit</Label>
            <Input
              id="product-name"
              placeholder="Ex: Mon Ebook sur le Marketing Digital"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Label htmlFor="product-description">Description du Produit (Optionnel)</Label>
            <Textarea
              id="product-description"
              placeholder="Décrivez votre produit en quelques mots..."
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        )}
        {step === 2 && (
          <div className="space-y-2">
            <Label htmlFor="product-price">Prix du Produit (en EUR)</Label>
            <Input
              id="product-price"
              type="number"
              step="0.01"
              placeholder="Ex: 29.99"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        )}
        {step === 3 && (
          <div className="space-y-2">
            <Label htmlFor="download-link">Lien de Téléchargement du Produit</Label>
            <Input
              id="download-link"
              placeholder="Ex: https://votre-site.com/downloads/mon-ebook.pdf"
              value={downloadLink}
              onChange={(e) => setDownloadLink(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <p className="text-sm text-gray-400">
              Ce lien sera envoyé automatiquement au client après l'achat. Assurez-vous qu'il est accessible.
            </p>
          </div>
        )}
        {step === 4 && (
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-2xl font-bold text-green-400">Résumé du Produit</h3>
            <p className="text-gray-300">Veuillez vérifier les informations avant de finaliser.</p>
            <div className="text-left space-y-2">
              <p>
                <span className="font-semibold">Nom:</span> {productName}
              </p>
              {productDescription && (
                <p>
                  <span className="font-semibold">Description:</span> {productDescription}
                </p>
              )}
              <p>
                <span className="font-semibold">Prix:</span> {productPrice} EUR
              </p>
              <p>
                <span className="font-semibold">Lien de téléchargement:</span> {downloadLink}
              </p>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button
            onClick={() => setStep(step - 1)}
            variant="outline"
            className="border-gray-500 text-gray-300 hover:bg-gray-700"
          >
            Précédent
          </Button>
        )}
        {step < 4 && (
          <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700 text-white ml-auto">
            Suivant
          </Button>
        )}
        {step === 4 && (
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white ml-auto">
            Créer le Produit
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
