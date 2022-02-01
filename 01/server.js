import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Router from './core/Router';

const server = express();
const port = process.env.PORT || 3000;

// Express.js static middleware
server.use(express.static(path.join(__dirname, 'public')));

server.get('*', (req, res) => {
  const title = 'Universal web application';
  const component = Router.match(req);
  const body = ReactDOMServer.renderToString(component);
  const html = `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <script src="client.js"></script>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>`
  res.send(html);
});

server.listen(port, () => console.log(
  `Node.js server is listening at http://localhost:${port}/`
));
