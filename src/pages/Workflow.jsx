import { ReactFlow, addEdge, Background, Panel } from "@xyflow/react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import NodesLib from "../features/workflow/Nodes/NodesLib";
import { useNavigate } from "react-router-dom";
import {
  updateNodes,
  updateEdges,
  updateConnection,
  addNode,
  updateNodeData,
} from "../features/workflow/workflowsSlice";
import { engine } from "../features/workflow/executions/engine";

const Workflow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { workflowId } = useOutletContext();
  const nodes = useSelector(
    (state) =>
      state.workflows.workflows.find((workflow) => workflow.id === workflowId)
        .nodes,
  );
  const edges = useSelector(
    (state) =>
      state.workflows.workflows.find((workflow) => workflow.id === workflowId)
        .edges,
  );

  const onNodesChange = useCallback(
    (changes) => {
      const updatedNodes = changes.applyTo(nodes);
      dispatch(updateNodes({ id: workflowId, nodes: updatedNodes }));
    },
    [dispatch, nodes, workflowId],
  );

  const onEdgesChange = useCallback(
    (changes) => {
      const updatedEdges = changes.applyTo(edges);
      dispatch(updateEdges({ id: workflowId, edges: updatedEdges }));
    },
    [dispatch, edges, workflowId],
  );

  const onConnect = useCallback(
    (connection) => {
      const updatedEdges = addEdge(connection, edges);
      dispatch(updateConnection({ id: workflowId, edges: updatedEdges }));
    },
    [dispatch, edges, workflowId],
  );
  // panel listeners
  const noDropOnDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  }, []);

  const noDropOnDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  // react flow listeners
  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData("application/node");
      const node = JSON.parse(data);
      const finalNode = { ...node, id: String(crypto.randomUUID()) };

      dispatch(addNode({ id: workflowId, node: finalNode }));
    },
    [dispatch, workflowId],
  );

  // data process
  const initiateUpdate = useCallback(
    (nodeId, data) => {
      dispatch(updateNodeData({ id: workflowId, nodeId, data }));
    },
    [dispatch, workflowId],
  );

  const handleExecute = () => {
    engine(nodes, edges, initiateUpdate);
  };

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
        <Panel
          position="left"
          className="m-0! py-5 px-5 min-h-screen min-w-25 flex flex-col justify-center bg-gray-800 text-white"
          onDragOver={(event) => noDropOnDragOver(event)}
          onDrop={(event) => noDropOnDrop(event)}
        >
          <button
            className="p-2 my-2 text-2xl bg-gray-700 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            &larr;Go Back
          </button>
          <NodesLib />
        </Panel>

        <Panel
          position="bottom-center"
          className="my-0! min-w-100 min-h-10 p-2 bg-gray-800 text-white flex justify-center items-center"
        >
          <button
            className="py-2 px-5 bg-gray-600 cursor-pointer"
            onClick={handleExecute}
          >
            Execute
          </button>
        </Panel>
        <Background></Background>
      </ReactFlow>
    </section>
  );
};

export default Workflow;
