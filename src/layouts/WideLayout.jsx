import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"

const WideLayout = () => {
  const {workflowId} = useParams();

  return (
    <div className="grid min-h-dvh
      grid-rows-[1fr]
      md:grid-cols-[1fr]
      md:grid-rows-1">
      <main>
        <Outlet context={{workflowId}}/>      
      </main>
    </div>
  )
}

export default WideLayout;
