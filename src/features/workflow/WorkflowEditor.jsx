import { useOutletContext } from "react-router-dom";

const WorkflowEditor = () => {
  const {workflowId} = useOutletContext();
  
  return (
    <section>
      {workflowId}
    </section>
  )
}

export default WorkflowEditor;
