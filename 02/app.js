import express from 'express';
import { LoginPage } from './src/pages/Login.js';
import { serverRenderer } from './src/serverRenderer.js';

const app = express();

app.use('/src', express.static('./src'));

app.get('/', (req, res) => {
  res.send(serverRenderer(LoginPage()));
});

app.listen(3000, () => {
  console.log('listen to http://localhost:3000');
})