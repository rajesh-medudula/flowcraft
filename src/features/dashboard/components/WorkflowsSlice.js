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
        const updated = state.workflows.filter((workflow) => workflow.id !== action.payload);
        state.workflows = updated;
      }
    }
  }
})

export const { createWorkflow, deleteWorkflow } = workflowSlice.actions;
export default workflowSlice.reducer;