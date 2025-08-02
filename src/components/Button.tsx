"use client"

import Lottie from "lottie-react"
import Link from "next/link"
import { ComponentProps, useEffect, useRef } from "react"
import animationData from "../../public/animations/waves.json"

type TLink = ComponentProps<"a"> & {
  href: string
}

export default function Button({ className, children, ...props }: TLink) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      // Set speed to 0.5 (half speed)
      var current = ref.current as any

      current.setSpeed(0.5)
    }
  }, [])

  return (
    <Link
      target="_blank"
      {...props}
      className="h-10 max-w-[350px] w-full rounded-3xl border-2 border-primary uppercase  bg-primary text-white text-xl flex items-center justify-center hover:bg-primary/20 transition-all relative overflow-hidden focus:bg-transparent group font-sans"
    >
      <div className="w-[350px] h-[20px] absolute top-[-135px] right-0 z-1 opacity-40 hidden group-hover:block group-focus:block">
        <Lottie animationData={animationData} loop lottieRef={ref} />
      </div>

      <span className="z-2 flex items-center justify-center gap-3">
        {children}
      </span>
    </Link>
  )
}
