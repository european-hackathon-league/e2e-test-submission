import { NextResponse } from "next/server"

interface FootprintEntry {
  date: string
  mode: string
  distance: number
  emissions: number
}

// In-memory store (would use Supabase in production)
const entries: FootprintEntry[] = []

export async function GET() {
  return NextResponse.json({ entries, total: entries.reduce((sum, e) => sum + e.emissions, 0) })
}

export async function POST(request: Request) {
  const body = await request.json()
  const entry: FootprintEntry = {
    date: new Date().toISOString(),
    mode: body.mode,
    distance: body.distance,
    emissions: body.emissions,
  }
  entries.push(entry)
  return NextResponse.json({ success: true, entry })
}
