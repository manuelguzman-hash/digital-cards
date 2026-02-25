"use client"

import { useEffect, useState } from "react"
import QRCode from "qrcode"

interface Props {
  slug: string
}

export default function QRCodeView({ slug }: Props) {
  const [qr, setQr] = useState<string>("")

  useEffect(() => {
    const generate = async () => {
      const url = `${process.env.NEXT_PUBLIC_SITE_URL}/u/${slug}`
      const qrCode = await QRCode.toDataURL(url)
      setQr(qrCode)
    }

    generate()
  }, [slug])

  return (
    <div style={{ marginTop: 20 }}>
      {qr && <img src={qr} alt="QR Code" width={200} />}
    </div>
  )
}