interface PageProps {
  params: Promise<{ id: string }>
}

export default async function EditPage({ params }: PageProps) {
  const { id } = await params

  return (
    <div>
      Editando tarjeta con ID: {id}
    </div>
  )
}