import { NextResponse } from 'next/server'
import db from '@/database/db.json'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const product = db.newArrivals.find((item) => item.id.toString() === params.id)

  if (!product) {
    return NextResponse.json({ error: 'محصول پیدا نشد' }, { status: 404 })
  }

  return NextResponse.json(product)
}