const { test } = require('node:test');
const assert = require('node:assert');
const supertest = require('supertest');
const { app } = require('../src/app');
let { anecdotes } = require('../src/data');

const api = supertest(app);

test('anecdotes are returned as json', async () => {
  await api
    .get('/api/anecdotes')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('adding a new anecdote increases the anecdote count', async () => {
  const anecdotesAtStart = anecdotes;
  const anecdoteToAdd = {
    content: 'Anecdote test',
    votes: 0,
  };

  await api.post('/api/anecdotes').send(anecdoteToAdd).expect(200);
  const response = await api.get('/api/anecdotes');
  assert.equal(response.body.length, anecdotesAtStart.length + 1);
});
