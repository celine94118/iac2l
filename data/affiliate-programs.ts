// data/affiliate-programs.ts
import type { AffiliateProgram } from "@/types/affiliate"

export const affiliatePrograms: AffiliateProgram[] = [
  {
    id: "aff_001",
    name: "Programme d'Affiliation A",
    description: "Un programme d'affiliation populaire dans le niche du marketing digital.",
    commissionRate: "30% sur chaque vente",
    link: "https://example.com/affiliate-a",
  },
  {
    id: "aff_002",
    name: "Outil SEO Pro",
    description: "Faites la promotion d'un outil SEO puissant et gagnez des commissions récurrentes.",
    commissionRate: "20% récurrent",
    link: "https://example.com/affiliate-seo",
  },
  {
    id: "aff_003",
    name: "Formation en Ligne B",
    description: "Un cours complet sur le développement web avec une forte demande.",
    commissionRate: "50% par vente",
    link: "https://example.com/affiliate-course",
  },
]
