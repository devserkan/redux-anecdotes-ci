import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

export function AnecdoteForm() {
  const dispatch = useDispatch();

  async function handleNewAnecdote(event) {
    event.preventDefault();
    const { anecdote } = event.target.elements;

    dispatch(createAnecdote(anecdote.value));
    dispatch(setNotification(`You created '${anecdote.value}'`));
    event.target.reset();
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleNewAnecdote}>
        <div>
          <input type='text' name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  );
}
