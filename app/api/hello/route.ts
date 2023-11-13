// api > hello > route.ts
import {NextRequest, NextResponse} from "next/server";

type Data = {
    name: string
}

export async function GET(
    req: NextRequest,
    res: NextResponse
  ) {
    return NextResponse.json({ name: 'Meriellen Silveira' });
  }