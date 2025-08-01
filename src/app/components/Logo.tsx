import Image from "next/image"
import { ComponentProps } from "react"

type TLogo = ComponentProps<"div">

export default function Logo({ className, ...props }: TLogo) {
  return (
    <div className="relative w-[200px] h-[80px]">
      <Image src="/logo.png" alt="Logo Psyground" objectFit="contain" fill />
    </div>
  )
}
