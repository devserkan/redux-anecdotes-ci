const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let { anecdotes } = require('./data');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/anecdotes', (_req, res) => {
  res.json(anecdotes);
});

app.post('/api/anecdotes', (req, res) => {
  const anecdote = req.body;
  anecdote.id = uuidv4();
  anecdotes = anecdotes.concat(anecdote);
  res.json(anecdote);
});

app.patch('/api/anecdotes/:id', (req, res) => {
  const { id } = req.params;
  const anecdoteIndex = anecdotes.findIndex((anecdote) => anecdote.id === id);

  if (anecdoteIndex === -1) {
    return res.status(404).json({ error: 'Anecdote not found' });
  }

  anecdotes[anecdoteIndex] = {
    ...anecdotes[anecdoteIndex],
    ...req.body,
    id,
  };

  res.json(anecdotes[anecdoteIndex]);
});

app.get('/api/version', (req, res) => {
  res.send('3');
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

module.exports = { app };
