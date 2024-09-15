export function Anecdote({ anecdote, handleAnecdoteVote }) {
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
