import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return <>
  <Navbar/>
  <Sidebar/>
  <Outlet/>
  </>
}

export default MainLayout;