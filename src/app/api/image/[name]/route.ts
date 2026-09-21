import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    const safeName = path.basename(name);
    const filePath = path.join(process.cwd(), "public", "projects", safeName);

    if (!fs.existsSync(filePath)) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const raw = fs.readFileSync(filePath);
    const head = raw.toString("utf-8", 0, 10);

    // If Vercel deployed as raw base64 text, decode it into binary image bytes
    const buffer = head.startsWith("iVBOR")
      ? Buffer.from(raw.toString("utf-8").trim(), "base64")
      : raw;

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Error loading image", { status: 500 });
  }
}
