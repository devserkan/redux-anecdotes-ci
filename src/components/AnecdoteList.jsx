import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

function getAnecdotes(state) {
  if (!state.filter) {
    return state.anecdotes;
  }

  return state.anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
  );
}

export function AnecdoteList() {
  const dispatch = useDispatch();
  const anecdotes = useSelector(getAnecdotes);

  function vote(anecdote) {
    dispatch(voteAnecdote(anecdote.id));
    dispatch(setNotification(`You voted '${anecdote.content}'`));
  }

  const anecdotesSortedByVote = [...anecdotes].sort(
    (a, b) => b.votes - a.votes
  );

  return anecdotesSortedByVote.map((anecdote) => (
    <Anecdote
      key={anecdote.id}
      anecdote={anecdote}
      handleAnecdoteVote={() => vote(anecdote)}
    />
  ));
}

function Anecdote({ anecdote, handleAnecdoteVote }) {
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleAnecdoteVote}>vote</button>
      </div>
    </div>
  );
}
