import { createSlice, nanoid } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    addNotification: {
      reducer: (state, action) => [...state, action.payload],
      prepare: (message) => ({
        payload: {
          id: nanoid(),
          message,
          createdAt: Date.now(),
        },
      }),
    },
    removeNotification: (state, action) =>
      state.filter((notification) => notification.id !== action.payload),
  },
});

const { addNotification, removeNotification } = notificationSlice.actions;

export function setNotification(message, timeout = 5000) {
  return (dispatch) => {
    const notification = dispatch(addNotification(message));
    setTimeout(
      () => dispatch(removeNotification(notification.payload.id)),
      timeout
    );
  };
}

export const { reducer: notificationReducer } = notificationSlice;
