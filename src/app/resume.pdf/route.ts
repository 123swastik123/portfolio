import { RESUME_BASE64 } from "@/data/resumeBase64";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get("download") === "true";
  
  const pdfBuffer = Buffer.from(RESUME_BASE64, "base64");

  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": isDownload
        ? 'attachment; filename="Swastik_S_Karabashettar_Resume.pdf"'
        : 'inline; filename="Swastik_S_Karabashettar_Resume.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
