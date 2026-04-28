"use client"

import { useState } from "react"

const HABITS = [
  { id: "reusable-bag", label: "Used reusable bag", points: 5 },
  { id: "public-transport", label: "Took public transport", points: 10 },
  { id: "meatless-meal", label: "Had a meatless meal", points: 8 },
  { id: "short-shower", label: "Short shower (<5 min)", points: 3 },
  { id: "recycled", label: "Recycled properly", points: 4 },
  { id: "no-car", label: "Car-free day", points: 15 },
]

export function HabitTracker() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())

  function toggleHabit(id: string) {
    setCompleted((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const totalPoints = HABITS.filter((h) => completed.has(h.id)).reduce((sum, h) => sum + h.points, 0)

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-green-800">Daily Habits</h2>
      <p className="mt-1 text-sm text-gray-500">Check off your eco-friendly actions today</p>
      <div className="mt-4 space-y-2">
        {HABITS.map((habit) => (
          <label key={habit.id} className="flex items-center gap-3 rounded-lg p-2 hover:bg-green-50 cursor-pointer">
            <input
              type="checkbox"
              checked={completed.has(habit.id)}
              onChange={() => toggleHabit(habit.id)}
              className="h-5 w-5 rounded border-gray-300 text-green-600"
            />
            <span className="flex-1">{habit.label}</span>
            <span className="text-sm font-medium text-green-600">+{habit.points} pts</span>
          </label>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-green-50 p-3 text-center">
        <p className="text-sm text-gray-600">Today's eco-score:</p>
        <p className="text-3xl font-bold text-green-700">{totalPoints}</p>
      </div>
    </div>
  )
}
