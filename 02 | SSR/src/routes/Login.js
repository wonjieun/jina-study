import { LoginForm } from '../components/LoginForm.js';
import { UserList } from '../components/UserList.js';

const path = '/login';
const action = () => LoginPage();

export const LoginPage = () => `
  ${LoginForm()}
  ${UserList()}
`

export default { path, action };
