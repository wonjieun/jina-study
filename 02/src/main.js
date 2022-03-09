import Router from './router.js';
import { store } from './store/index.js';

const render = () => {
  const $app = document.querySelector('#app');
  $app.innerHTML = Router(window.location.pathname);

  const loginBtn = $app.querySelector('.login-btn');
  loginBtn.addEventListener('click', () => {
    const userId = $app.querySelector('#user-id').value;
    const password = $app.querySelector('#password').value;
    alert('Welcome !');
    store.addUserItem({ userId, password });
    render();
  })
}

render();
