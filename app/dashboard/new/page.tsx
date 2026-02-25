"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function NewCard() {
  const router = useRouter()

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    position: "",
    email: "",
    phone: "",
  })

  function generateSlug(first: string, last: string) {
    return `${first}-${last}`
      .toLowerCase()
      .replace(/\s+/g, "-")
  }

  async function handleSubmit(e: any) {
    e.preventDefault()

    const slug = generateSlug(form.first_name, form.last_name)

    await supabase.from("cards").insert({
      ...form,
      slug,
    })

    router.push("/dashboard")
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Nueva Tarjeta</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nombre"
          onChange={(e) =>
            setForm({ ...form, first_name: e.target.value })
          }
        />

        <input
          placeholder="Apellido"
          onChange={(e) =>
            setForm({ ...form, last_name: e.target.value })
          }
        />

        <input
          placeholder="Cargo"
          onChange={(e) =>
            setForm({ ...form, position: e.target.value })
          }
        />

        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Teléfono"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  )
}