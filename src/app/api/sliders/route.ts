import { NextResponse } from 'next/server'
import db from '@/database/db.json'

export async function GET() {
    return NextResponse.json(db.newArrivals)

}