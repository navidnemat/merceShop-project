import { NextRequest, NextResponse } from 'next/server'
import db from '@/database/db.json'

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id

  const product = db.newArrivals.find((item) => item.id === id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}