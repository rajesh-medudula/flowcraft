import { useSelector } from "react-redux"
import FilterConfig from "./nodeconfigs/FilterConfig"
import InputConfig from "./nodeconfigs/InputConfig";

const Config = ({workflowId}) => {
  const workflow = useSelector((state) => state.workflows.workflows.find((workflow) => workflow.id === workflowId));
  const nodes = workflow.nodes;
  const currentNodeId = workflow.selectedNode;
  
  const currentNode = nodes.find((node) => node.id === currentNodeId);
  const currentNodeData = currentNode?.data;
  const config = currentNodeData?.config;
  const data = currentNodeData?.maindata;
  const currentNodeOperation = config?.operation;

  return (
    <section className="min-w-60 min-h-100 max-w-60 max-h-100 grid grid-rows-[auto_1fr]">
        <div className="p-1 mb-2 bg-gray-700">
          <span className="font-bold">{currentNode?.data?.label || "None"}</span>
        </div>

        <div className="px-2 h-95">
          {currentNodeOperation === "F1" && <InputConfig data={data} workflowId={workflowId} nodeId={currentNodeId}/>}
          {currentNodeOperation === "F2" && <FilterConfig config={config}/>}
        </div>
    </section>
  )
}

export default Config
