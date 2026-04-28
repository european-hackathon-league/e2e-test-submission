export function formatCO2(kg: number): string {
  if (kg < 1) return (kg * 1000).toFixed(0) + " g"
  if (kg < 1000) return kg.toFixed(1) + " kg"
  return (kg / 1000).toFixed(2) + " t"
}

export function getEcoLevel(points: number): { level: string; color: string } {
  if (points >= 100) return { level: "Eco Champion", color: "text-green-700" }
  if (points >= 50) return { level: "Green Warrior", color: "text-green-600" }
  if (points >= 20) return { level: "Eco Starter", color: "text-green-500" }
  return { level: "Beginner", color: "text-gray-500" }
}

export function calculateWeeklyAverage(entries: { emissions: number; date: string }[]): number {
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
  const recent = entries.filter((e) => new Date(e.date) >= oneWeekAgo)
  if (recent.length === 0) return 0
  return recent.reduce((sum, e) => sum + e.emissions, 0) / 7
}
