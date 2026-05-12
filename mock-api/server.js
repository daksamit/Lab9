import http from 'node:http';
import { posts } from './posts.js';

const PORT = 3001;

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(payload));
};

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    response.end();
    return;
  }

  if (method === 'GET' && url === '/api/posts') {
    sendJson(response, 200, posts);
    return;
  }

  if (method === 'GET' && url?.startsWith('/api/posts/')) {
    const id = Number(url.split('/').pop());
    const post = posts.find((item) => Number(item.id) === id);

    if (!post) {
      sendJson(response, 404, { message: 'Post nie istnieje' });
      return;
    }

    sendJson(response, 200, post);
    return;
  }

  sendJson(response, 404, { message: 'Endpoint nie istnieje' });
});

server.listen(PORT, () => {
  console.log(`Mock API listening on http://localhost:${PORT}`);
});
