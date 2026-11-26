import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workflows: [],
};

const workflowSlice = createSlice({
  name: "workflows",
  initialState,
  reducers: {
    createWorkflow: (state, action) => {
      state.workflows = [...state.workflows, action.payload];
    },
    deleteWorkflow: (state, action) => {
      if (action.payload) {
        const updatedWorkflows = state.workflows.filter(
          (workflow) => workflow.id !== action.payload,
        );
        state.workflows = updatedWorkflows;
      }
    },
    updateNodes: (state, action) => {
      const { id, nodes } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.nodes = nodes;
    },
    updateEdges: (state, action) => {
      const { id, edges } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.edges = edges;
    },
    updateConnection: (state, action) => {
      const { id, edges } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.edges = edges;
    },
    // updates the current workflow's selected node.
    updateSelectedNode: (state, action) => {
      const { id, nodeId } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.selectedNode = nodeId;
    },
    addNode: (state, action) => {
      const { id, node } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.nodes.push(node);
    },
    deleteNode: (state, action) => {
      const { id, nodeId } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.nodes = workflow.nodes.filter((node) => node.id !== nodeId);
    },
    updateNodeData: (state, action) => {
      const { id, nodeId, data } = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;
    
      const node = workflow.nodes.find((node) => node.id === nodeId);
      if (!node) return;

      
      node.data.maindata = data;
    },
  },
});

export const {
  createWorkflow,
  deleteWorkflow,
  updateNodes,
  updateEdges,
  updateConnection,
  updateSelectedNode,
  addNode,
  deleteNode,
  updateNodeData,
} = workflowSlice.actions;
export default workflowSlice.reducer;
