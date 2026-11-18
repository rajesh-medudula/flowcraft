import { Link, NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="hidden md:block h-screen flex flex-col  bg-gray-800 text-white p-5">
      <nav className="h-full flex">
        <ul className="w-full flex flex-col gap-5">
          <li className="mr-auto">
            <Link to="/" className="font-bold tracking-wider">FLOWCRAFT</Link>
          </li>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
