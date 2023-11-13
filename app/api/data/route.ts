import { NextRequest, NextResponse } from 'next/server';
import moment from 'moment';

export async function GET(
  req: NextRequest,
  res: NextResponse
) {
  return NextResponse.json({ data: moment().format('DD/MM/YYYY HH:mm:ss') });
}