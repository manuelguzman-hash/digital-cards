"use client"

import React from "react"

interface Props {
  slug: string
  firstName: string
  lastName: string
  position: string
  phone: string
  email: string
  photoUrl?: string
  linkedin?: string
  instagram?: string
}

export default function CardTemplate({
  slug,
  firstName,
  lastName,
  position,
  phone,
  email,
  photoUrl,
  linkedin,
  instagram,
}: Props) {
  return (
    <div className="card-container">
      <div className="card-header">
        {photoUrl && <img className="profile-photo" src={photoUrl} alt={`${firstName} ${lastName}`} />}
        <div className="card-info">
          <h1>{firstName} {lastName}</h1>
          <p className="position">{position}</p>
        </div>
      </div>

      <div className="contact-section">
        <a href={`tel:${phone}`}>📞 {phone}</a>
        <a href={`mailto:${email}`}>✉️ {email}</a>
		<a href={`/api/vcard/${slug}`} className="saas-btn"> ➕ Agregar a contactos</a>
      </div>

      <div className="social-section">
        {linkedin && <a href={linkedin} target="_blank">LinkedIn</a>}
        {instagram && <a href={instagram} target="_blank">Instagram</a>}
      </div>
    </div>
  )
}