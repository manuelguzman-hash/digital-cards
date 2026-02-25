import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !data) {
    return new NextResponse("Not found", { status: 404 })
  }

  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${data.first_name} ${data.last_name}
TITLE:${data.position}
TEL:${data.phone}
EMAIL:${data.email}
END:VCARD
`

  return new NextResponse(vcard, {
    headers: {
      "Content-Type": "text/vcard",
      "Content-Disposition": `attachment; filename=${slug}.vcf`,
    },
  })
}