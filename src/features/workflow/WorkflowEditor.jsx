import { ReactFlow, addEdge, Background } from "@xyflow/react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { updateCanvas } from "../dashboard/components/workflowsSlice";

const WorkflowEditor = () => {
  const dispatch = useDispatch();
  const { workflowId } = useOutletContext();
  const workflows = useSelector((state) => state.workflows.workflows);
  const currentWorkflow = workflows.find(
    (workflow) => workflow.id === workflowId,
  );

  const [nodes, setNodes] = useState(currentWorkflow?.nodes ?? []);
  const [edges, setEdges] = useState(currentWorkflow?.edges ?? []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => changes.applyTo(nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => changes.applyTo(edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  useEffect(() => {
    dispatch(updateCanvas({ workflowId, nodes, edges }));
  }, [workflowId, nodes, edges, dispatch]);

  return (
    <section className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background></Background>
      </ReactFlow>
    </section>
  );
};

export default WorkflowEditor;
