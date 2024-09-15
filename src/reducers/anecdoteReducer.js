import { createSlice } from '@reduxjs/toolkit';
import * as anecdotesService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    addAnecdote: (state, action) => [...state, action.payload],
    voteAnecdoteOf: (state, action) => {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      );
    },
    setAnecdotes: (_state, action) => action.payload,
  },
});

export function initializeAnecdotes() {
  return async (dispatch) => {
    const allAnecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(allAnecdotes));
  };
}

export function createAnecdote(content) {
  return async (dispatch) => {
    const newAnecdote = await anecdotesService.create(content);
    dispatch(addAnecdote(newAnecdote));
  };
}

export function voteAnecdote(id) {
  return async (dispatch, getState) => {
    const anecdoteToUpdate = getState().anecdotes.find(
      (anecdote) => anecdote.id === id
    );
    const updatedAnecdote = await anecdotesService.update(id, {
      votes: anecdoteToUpdate.votes + 1,
    });

    dispatch(voteAnecdoteOf(updatedAnecdote));
  };
}

export const { addAnecdote, voteAnecdoteOf, setAnecdotes } =
  anecdoteSlice.actions;

export const { reducer: anecdoteReducer } = anecdoteSlice;
