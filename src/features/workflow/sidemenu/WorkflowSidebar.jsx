import { Link, NavLink } from "react-router-dom"
import NodeLib from "./Nodes/Nodes"

const WorkflowSidebar = ({workflowId}) => {
  return (
     <aside className="flex h-full flex-1 flex-col gap-5 md:max-w-[250px] bg-gray-800 text-white p-5">
      <nav>
        <ul className="flex w-full flex-col gap-4">
          <li>
            <Link to="/dashboard">{"<-Back"}</Link>
          </li>
          <li>
            <NavLink to={`/workflows/${workflowId}/input`} className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Input Panel</NavLink>
          </li>
          <li>
            <NavLink to={`/workflows/${workflowId}`} className={({isActive}) => (isActive? "border-b-2 border-b-purple-400" : "")}>Workflow</NavLink>
          </li>
        </ul>
      </nav>
      <NodeLib/>
    </aside>
  )
}

export default WorkflowSidebar
