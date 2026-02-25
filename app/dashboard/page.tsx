import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function Dashboard() {
  const { data } = await supabase
    .from("cards")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard Empresarial</h1>

      <Link href="/dashboard/new">
        <button style={{ marginBottom: "20px" }}>
          + Nueva Tarjeta
        </button>
      </Link>

      <table width="100%" border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Slug</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((card) => (
            <tr key={card.id}>
              <td>{card.first_name} {card.last_name}</td>
              <td>{card.position}</td>
              <td>{card.email}</td>
              <td>{card.slug}</td>
              <td>
                <Link href={`/dashboard/edit/${card.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}