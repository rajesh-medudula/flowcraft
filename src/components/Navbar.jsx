import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="md:hidden h-12.5 bg-gray-800 text-white px-5">
      <nav className="h-full flex items-center">
        <ul className="w-full flex gap-5">
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
    </header>
  )
}

export default Navbar
