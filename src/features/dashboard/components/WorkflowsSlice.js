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
    updateCanvas: (state, action) => {
      const {workflowId, nodes, edges} = action.payload;

      const workflow = state.workflows.find((workflow) => workflow.id === workflowId);
      if (!workflow) return;

      workflow.nodes = nodes;
      workflow.edges = edges;
    }
  }
})

export const { createWorkflow, deleteWorkflow, updateCanvas } = workflowSlice.actions;
export default workflowSlice.reducer;