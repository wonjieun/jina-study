import { LoginForm } from '../components/LoginForm.js';
import { UserList } from '../components/UserList.js';

export const LoginPage = () => `
  ${LoginForm()}
  ${UserList()}
`