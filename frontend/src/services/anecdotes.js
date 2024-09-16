import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/anecdotes';

export async function getAll() {
  const response = await axios.get(baseUrl);

  return response.data;
}

export async function create(content) {
  const response = await axios.post(baseUrl, {
    content,
    votes: 0,
  });

  return response.data;
}

export async function update(id, updates) {
  const response = await axios.patch(`${baseUrl}/${id}`, updates);

  return response.data;
}
