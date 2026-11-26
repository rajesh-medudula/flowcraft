import { useSelector } from "react-redux"
import FilterConfig from "./nodeconfigs/FilterConfig"

const Config = ({workflowId}) => {
  const workflow = useSelector((state) => state.workflows.workflows.find((workflow) => workflow.id === workflowId));
  const nodes = workflow.nodes;
  const currentNodeId = workflow.selectedNode;
  
  const currentNode = nodes.find((node) => node.id === currentNodeId);
  const config = currentNode?.data?.config;
  const currentNodeOperation = config?.operation;

  return (
    <section className="min-w-50 min-h-50 grid grid-rows-[auto_1fr]">
        <div className="p-1 mb-2 bg-gray-700">
          <span className="font-bold">{currentNode?.data?.label || "None"}</span>
        </div>

        <div className="px-2">
          {currentNodeOperation === "F2" && <FilterConfig config={config}/>}
        </div>
    </section>
  )
}

export default Config
