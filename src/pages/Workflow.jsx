import { ReactFlow, addEdge, Background } from "@xyflow/react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  updateNodes,
  updateEdges,
  updateConnection,
} from "../features/workflow/workflowsSlice";

const Workflow = () => {
  const dispatch = useDispatch();
  const { workflowId } = useOutletContext();
  const workflows = useSelector((state) => state.workflows.workflows);
  const currentWorkflow = workflows.find(
    (workflow) => workflow.id === workflowId,
  );

  const [nodes, setNodes] = useState(currentWorkflow?.nodes || []);
  const [edges, setEdges] = useState(currentWorkflow?.edges || []);

  const onNodesChange = useCallback(
    (changes) => {
      const updatedNodes = changes.applyTo(nodes);
      setNodes(updatedNodes);
      dispatch(updateNodes({id: workflowId, nodes: updatedNodes}));
    },
    [dispatch, nodes, workflowId],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updatedEdges = changes.applyTo(edges);
      setEdges(updatedEdges);
      dispatch(updateEdges({id: workflowId, edges: updatedEdges}));
    },
    [dispatch, edges, workflowId],
  );

  const onConnect = useCallback(
    (connection) => {
      const updatedEdges = addEdge(connection, edges);
      setEdges(updatedEdges);
      dispatch(updateConnection({id: workflowId, edges: updatedEdges}));
    },
    [dispatch, edges, workflowId],
  );

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

export default Workflow;
