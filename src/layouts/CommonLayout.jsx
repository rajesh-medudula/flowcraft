import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";

const CommonLayout = () => {
  return <>
  <div className="grid min-h-dvh
      grid-rows-[auto_minmax(0,1fr)]
      md:grid-cols-[auto_minmax(0,1fr)]
      md:grid-rows-1">
    <Navbar/>
    <Sidebar/>
    <main className="min-w-0 min-h-0">
      <Outlet/>
    </main>
  </div>
  </>
}

export default CommonLayout;