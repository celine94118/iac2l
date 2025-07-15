// types/affiliate.ts
export interface AffiliateProgram {
  id: string
  name: string
  description: string
  commissionRate: string
  link: string
}

export interface AffiliateSale {
  id: string
  programId: string
  amount: number
  commissionEarned: number
  date: string
}
