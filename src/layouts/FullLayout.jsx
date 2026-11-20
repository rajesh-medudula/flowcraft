import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
import WorkflowSidebar from "../components/WorkflowSidebar";

const FullLayout = () => {
  const {workflowId} = useParams();

  return (
    <div className="grid min-h-dvh
      grid-rows-[auto_minmax(0,1fr)]
      md:grid-cols-[auto_minmax(0,1fr)]
      md:grid-rows-1">
      <WorkflowSidebar workflowId={workflowId}/>
      <main>
        <Outlet context={{workflowId}}/>      
      </main>
    </div>
  )
}

export default FullLayout
