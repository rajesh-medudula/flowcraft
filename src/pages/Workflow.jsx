import { ReactFlow, addEdge, Background } from "@xyflow/react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  updateNodes,
  updateEdges,
  updateConnection,
  addNode,
} from "../features/workflow/workflowsSlice";

const Workflow = () => {
  const dispatch = useDispatch();
  const { workflowId } = useOutletContext();
  const nodes = useSelector((state) => state.workflows.workflows.find((workflow) => workflow.id === workflowId).nodes);
  const edges = useSelector((state) => state.workflows.workflows.find((workflow) => workflow.id === workflowId).edges);
  
  const onNodesChange = useCallback(
    (changes) => {
      const updatedNodes = changes.applyTo(nodes);
      dispatch(updateNodes({id: workflowId, nodes: updatedNodes}));
    },
    [dispatch, nodes, workflowId],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updatedEdges = changes.applyTo(edges);
      dispatch(updateEdges({id: workflowId, edges: updatedEdges}));
    },
    [dispatch, edges, workflowId],
  );

  const onConnect = useCallback(
    (connection) => {
      const updatedEdges = addEdge(connection, edges);
      dispatch(updateConnection({id: workflowId, edges: updatedEdges}));
    },
    [dispatch, edges, workflowId],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, [])

  const onDrop = useCallback((event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("application/node");
    const node = JSON.parse(data);
    const finalNode = {...node, id: String(crypto.randomUUID())}

    dispatch(addNode({id: workflowId, node: finalNode}));
  }, [dispatch, workflowId]);

  return (
    <section className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={(event) => onDragOver(event)}
        onDrop={(event) => onDrop(event)}
        fitView
      >
        <Background></Background>
      </ReactFlow>
    </section>
  );
};

export default Workflow;
