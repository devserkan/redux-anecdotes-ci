import { render, screen } from '@testing-library/react';
import { Anecdote } from './Anecdote';

test('renders content', () => {
  const anecdote = {
    content: 'If it hurts, do it more often.',
    votes: 0,
  };
  render(<Anecdote anecdote={anecdote} />);

  const content = screen.getByText('If it hurts, do it more often.');
  expect(content).toBeDefined();
});
