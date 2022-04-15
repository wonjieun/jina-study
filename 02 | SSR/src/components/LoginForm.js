import { store } from '../store/index.js';

export const LoginForm = () => `
  <h1>로그인</h1>
  <label for="user-id">ID: </label>
  <input type="text" id="user-id" value=${store.state.userId}>
  <label for="password">Password: </label>
  <input type="password" id="password" value=${store.state.password}>
  <button type="button" class="login-btn">로그인</button>
`
