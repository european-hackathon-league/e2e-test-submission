import { Calculator } from "@/components/calculator"
import { HabitTracker } from "@/components/habit-tracker"

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <header className="bg-green-800 text-white p-6">
        <h1 className="text-3xl font-bold">EcoTrack</h1>
        <p className="mt-2 text-green-200">Track your carbon footprint</p>
      </header>
      <div className="max-w-4xl mx-auto p-6 grid gap-8 md:grid-cols-2">
        <Calculator />
        <HabitTracker />
      </div>
    </main>
  )
}
