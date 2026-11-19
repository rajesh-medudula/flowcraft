import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalActive: false,
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.isModalActive = action.payload;
    }
  }
})

export const {toggleModal} = dashboardSlice.actions;
export default dashboardSlice.reducer;