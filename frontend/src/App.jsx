import React from 'react';
import { useDispatch } from 'react-redux';
import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdoteList } from './components/AnecdoteList';
import { Filter } from './components/Filter';
import { Notification } from './components/Notification';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
