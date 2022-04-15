import { routes } from './routes/index.js';

const Router = (path) => {
  const route = routes.find(route => route.path === path);
  const errorRoute = routes.find(route => route.path === '/404');

  if (!route) {
    return errorRoute.action();
  }

  try {
    return route.action();
  } catch (error) {
    return errorRoute.action();
  }
}

export default Router;
