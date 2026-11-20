import { Link, NavLink } from "react-router-dom"


const WorkflowSidebar = ({workflowId}) => {
  return (
     <aside className="hidden md:flex h-full flex-1 flex-col  bg-gray-800 text-white p-5">
      <nav className="h-full flex">
        <ul className="w-full flex flex-col gap-5">
          <li>
            <Link to="/dashboard">{"<-Back"}</Link>
          </li>
          <li>
            <NavLink to={`/workflows/${workflowId}/input`} className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Input Panel</NavLink>
          </li>
          <li>
            <NavLink to={`/workflows/${workflowId}`} className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Editor</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default WorkflowSidebar
