import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import Home from "@/components/ui/Home/Home"


export default function IndexPage() {
  return (
    <section className="">
      <Home/>
    </section>
  )
}
