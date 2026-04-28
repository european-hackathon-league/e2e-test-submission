"use client"

import { useState } from "react"

const EMISSION_FACTORS = {
  car: 0.21, // kg CO2 per km
  bus: 0.089,
  train: 0.041,
  bike: 0,
  flight: 0.255,
}

type TransportMode = keyof typeof EMISSION_FACTORS

export function Calculator() {
  const [mode, setMode] = useState<TransportMode>("car")
  const [distance, setDistance] = useState(10)
  const emissions = distance * EMISSION_FACTORS[mode]

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-green-800">Carbon Calculator</h2>
      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Transport Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as TransportMode)}
            className="mt-1 block w-full rounded-lg border p-2"
          >
            {Object.keys(EMISSION_FACTORS).map((m) => (
              <option key={m} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="mt-1 block w-full rounded-lg border p-2"
            min={0}
          />
        </div>
        <div className="rounded-lg bg-green-50 p-4">
          <p className="text-sm text-gray-600">Estimated emissions:</p>
          <p className="text-2xl font-bold text-green-700">{emissions.toFixed(2)} kg CO2</p>
        </div>
      </div>
    </div>
  )
}
