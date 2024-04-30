import log4js from "log4js";
import { NextRequest, NextResponse } from "next/server";

// ロガー
log4js.configure({
  appenders: {
    cheese: { type: "file", filename: "logs/cheese.log" },
    console: { type: 'console', layout: { type: 'pattern', pattern: '%d{yyyy/MM/dd hh:mm:ss} [%-5p] [%X{traceId}] [%c] (%t) %m%ex%n' } }
  },
  categories: {
    default: { appenders: ["cheese", "console"], level: "info" }
  }
});

const logger = log4js.getLogger("cheese");
logger.level = "debug";

export async function GET() {
  console.log("リクエスト到達");
  return NextResponse.json({ id: 1, name: "Tanaka" }, { status: 200 });
}

export async function POST(request: NextRequest) {
  logger.info("IIInfo")
  logger.debug("DDDebug")
  logger.error("EEError")

  console.log("リクエスト到達");
  const req = await request.json();
  console.log(req);
  return NextResponse.json({ id: 1, name: "Tanaka" }, { status: 200 });
}
