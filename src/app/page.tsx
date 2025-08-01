import { ElementType } from "react"
import {
  FaInstagram,
  FaSoundcloud,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"
import Button from "./components/Button"
import Logo from "./components/Logo"

type TLink = {
  path: string
  title: string
  Icon: ElementType
}

export default function Home() {
  const links: TLink[] = [
    {
      path: "https://wa.me/",
      title: "Adquirir Ingresso",
      Icon: FaWhatsapp,
    },
    {
      path: "https://youtube.com",
      title: "Youtube",
      Icon: FaYoutube,
    },
    {
      path: "https://soundcloud.com",
      title: "Soundcloud",
      Icon: FaSoundcloud,
    },
    {
      path: "https://instagram.com",
      title: "Instagram",
      Icon: FaInstagram,
    },
  ]

  return (
    <main className="w-screen h-screen flex flex-col gap-10 items-center justify-center bg-[url('../../public/background.png')] bg-center bg-cover bg-no-repeat px-4">
      <Logo />

      <h1 className="text-center text-2xl uppercase">
        Bem-vindo ao <br /> portal coletivo psyground
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
        01 e 02 de novembro <br /> juazeiro-ba
      </strong>
    </main>
  )
}
