import Image from "next/image"
import { ComponentProps } from "react"

type TLogo = ComponentProps<"div">

export default function Logo({ className, ...props }: TLogo) {
  return (
    <div className="relative w-[400px] h-[100px]">
      <Image src="/logo.svg" alt="Logo Psyground" objectFit="contain" fill />
    </div>
  )
}
