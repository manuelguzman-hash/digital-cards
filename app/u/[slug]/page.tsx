import { supabase } from "@/lib/supabase"
import CardTemplate from "@/components/CardTemplate"
import QRCodeView from "@/components/QRCodeView"

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params

  const { data, error } = await supabase
    .from("cards")
    .select("*")
    .eq("slug", slug)
    .single()

  if (error || !data) {
    return <div>Tarjeta no encontrada</div>
  }

  return (
    <div>
      <CardTemplate
	    slug={slug}
        firstName={data.first_name}
        lastName={data.last_name}
        position={data.position}
        phone={data.phone}
        email={data.email}
        photoUrl={data.photo_url ?? ""}
      />

      <QRCodeView slug={slug} />
    </div>
  )
}