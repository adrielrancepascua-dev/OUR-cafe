import { NextResponse } from 'next/server';

export async function GET() {
  // Mock live operations data
  return NextResponse.json({
    currentWaitTime: '45 mins',
    activeOrders: 12,
    status: 'Busy'
  });
}
