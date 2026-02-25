import { supabase } from "@/lib/supabase"
import Link from "next/link"

export default async function Dashboard() {
  const { data } = await supabase
    .from("cards")
    .select("*")

  const total = data?.length || 0

  return (
    <div>
      <h1 style={titleStyle}>Dashboard</h1>

      {/* Métricas */}
      <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
        <div style={metricCard}>
          <p>Total Tarjetas</p>
          <h2>{total}</h2>
        </div>
      </div>

      {/* Botón */}
      <Link href="/dashboard/new">
        <button style={primaryBtn}>
          + Nueva Tarjeta
        </button>
      </Link>

      {/* Tabla */}
      <div style={{ marginTop: 30 }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cargo</th>
              <th>Email</th>
              <th>Slug</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((card) => (
              <tr key={card.id}>
                <td>{card.first_name} {card.last_name}</td>
                <td>{card.position}</td>
                <td>{card.email}</td>
                <td>{card.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const titleStyle = {
  color: "white",
  fontSize: "28px",
  marginBottom: "30px",
}

const metricCard = {
  background: "#1f2937",
  padding: "20px 30px",
  borderRadius: "14px",
  color: "white",
  minWidth: "200px",
}

const primaryBtn = {
  background: "linear-gradient(135deg,#6366f1,#4f46e5)",
  color: "white",
  padding: "12px 20px",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  fontWeight: 600,
}

const tableStyle = {
  width: "100%",
  background: "#1f2937",
  color: "white",
  borderRadius: "12px",
  overflow: "hidden",
}