import { NextResponse } from 'next/server'
import db from '@/database/db.json'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const page = Number(url.searchParams.get('_page') ?? 1)
  const perPage = Number(url.searchParams.get('_per_page') ?? 8)

  const start = (page - 1) * perPage
  const end = start + perPage

  const paginated = db.newArrivals.slice(start, end)

  return NextResponse.json({
    data: paginated,
    pages: Math.ceil(db.newArrivals.length / perPage)
  })
}