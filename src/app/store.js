import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import workflowsReducer from "../features/dashboard/components/WorkflowsSlice";

const loadState = () => {
  try {
    const appData = localStorage.getItem("flowcraft19");
    return appData? JSON.parse(appData) : undefined;
  } catch (err) {
    console.error("Failed to fetch flowcraft data", err);
    return undefined;
  }
}

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  workflows: workflowsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
})

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("flowcraft19", JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save flowcraft data", err);
  }
})

