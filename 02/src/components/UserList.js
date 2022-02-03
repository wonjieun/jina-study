import { store } from '../store/index.js';

export const UserList = () => `
  <h3>로그인 목록</h3>
  <ol>
    ${store.state.userList.map(UserItem).join('')}
  </ol>
`

export const UserItem = ({ id, userId, password }) => `
  <li>
    ${userId} | ${password}
  </li>
`