import { Outlet } from "react-router"
import Navbar from "../navbar/Navbar"

export const LayoutHome = () => {
  return (
    <section className="flex flex-col">
    <Navbar/>
    <Outlet/>
  
    </section>
  )
}

