import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("リクエスト到達")
  return NextResponse.json({ id: 1, name: "Tanaka" }, { status: 200 })
}

export async function POST(request: NextRequest) {
  console.log("リクエスト到達")
  const req = await request.json();
  console.log(req);
  return NextResponse.json({ id: 1, name: "Tanaka" }, { status: 200 })
}
