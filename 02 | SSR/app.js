import express from 'express';
import Router from './src/router.js';
import { serverRenderer } from './src/serverRenderer.js';
import { store } from './src/store/index.js';

const app = express();
app.use(express.json());
app.use('/src', express.static('./src'));

app.put('/api/state', (req, res) => {
  store.hydrationToServer(req.body);
  res.status(204).send();
});

app.get('/*', (req, res) => {
  res.send(serverRenderer(Router(req.path), store.state));
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})