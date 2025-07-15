// app/admin/page.tsx
// This is the main admin panel for managing the automated business.
import { AdminPanel } from "@/components/admin-panel"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-400">Panneau d'Administration</h1>
        <p className="text-gray-300 mt-2">Gérez tous les aspects de votre business automatisé.</p>
      </header>
      <main className="flex-1">
        <AdminPanel />
      </main>
    </div>
  )
}
