import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    editTask: (state, action) => {
      const { id, content } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.content = content;
      }
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, updateTaskStatus, setTasks, editTask, removeTask } = kanbanSlice.actions;
export default kanbanSlice.reducer;

