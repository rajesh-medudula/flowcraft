import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workflows: [],
}

const workflowSlice = createSlice({
  name: "workflows",
  initialState,
  reducers: {
    createWorkflow: (state, action) => {
      state.workflows = [...state.workflows, action.payload]
    },
    deleteWorkflow: (state, action) => {
      if (action.payload) {
        const updatedWorkflows = state.workflows.filter((workflow) => workflow.id !== action.payload);
        state.workflows = updatedWorkflows;
      }
    },
    updateNodes: (state, action) => {
      const {id, nodes} = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.nodes = nodes;
    },
    updateEdges: (state, action) => {
      const {id, edges} = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.edges = edges;
    },
    updateConnection: (state, action) => {
      const {id, edges} = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === id);
      if (!workflow) return;

      workflow.edges = edges;
    },
  }
})

export const { createWorkflow, deleteWorkflow, updateNodes, updateEdges, updateConnection } = workflowSlice.actions;
export default workflowSlice.reducer;