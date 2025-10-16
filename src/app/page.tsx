import Image from "next/image"
import { ElementType } from "react"
import {
  FaInstagram,
  FaSoundcloud,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import Button from "../components/Button"
import Logo from "../components/Logo"

type TLink = {
  path: string
  title: string
  Icon: ElementType
}

export default function Home() {
  const links: TLink[] = [
    {
      path: "https://wa.me/557491234714?text=Ol%C3%A1%21%20Gostaria%20de%20garantir%20meu%20ingresso%20para%20o%20Omeyocan",
      title: "Adquirir Ingresso",
      Icon: FaWhatsapp,
    },
    {
      path: "https://www.youtube.com/@ColetivoPsyground-n7j",
      title: "Youtube",
      Icon: FaYoutube,
    },
    {
      path: "https://soundcloud.com/coletivo-psyground",
      title: "Soundcloud",
      Icon: FaSoundcloud,
    },
    {
      path: "https://www.instagram.com/coletivopsyground/",
      title: "Instagram",
      Icon: FaInstagram,
    },
    {
      path: "https://loja.infinitepay.io/coletivopsyground/",
      title: "Loja Virtual",
      Icon: FaStore,
    },
  ]

  return (
    <main className="w-screen h-screen flex flex-col items-center bg-[url('../../public/background.png')] bg-center bg-cover bg-no-repeat ">
      <div className="flex-1 flex flex-col gap-10 items-center justify-center px-8">
        <Logo />

        <h1 className="text-center text-2xl uppercase">
          Bem-vindo ao portal coletivo psyground
        </h1>

        <div className="flex flex-col items-center justify-center gap-3 w-full">
          {links.map((item) => (
            <Button key={item.title} href={item.path}>
              <item.Icon size={20} />

              {item.title}
            </Button>
          ))}
        </div>

        <strong className="text-center text-xl font-normal uppercase">
          01 e 02 de novembro juazeiro-ba
        </strong>
      </div>

      <footer className="flex items-center justify-center gap-4 py-8 bg-gradient-to-t from-zinc-900 to-transparent w-full">
        <div className="relative h-10 w-10">
          <Image src="./gangatec-white-logo.svg" alt="Gangatec Logo" fill />
        </div>

        <span className="text-xl">Powered by Gangatec</span>
      </footer>
    </main>
  )
}
