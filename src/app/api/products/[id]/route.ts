import { NextRequest, NextResponse } from 'next/server'

const newArrivals = [
  { id: '1', name: 'Phone' },
  { id: '2', name: 'Watch' },
]

type Params = {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  context: Params
) {
  const { id } = context.params

  const product = newArrivals.find(p => p.id === id)

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json(product)
}
