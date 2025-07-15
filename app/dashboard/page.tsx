// app/dashboard/page.tsx
// This is the main dashboard page for the automated business.
import { PostDeploymentDashboard } from "@/components/post-deployment-dashboard"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Tableau de Bord</h1>
        <p className="text-gray-300 mt-2">Gérez et suivez votre business automatisé.</p>
      </header>
      <main className="flex-1">
        <PostDeploymentDashboard />
      </main>
    </div>
  )
}
