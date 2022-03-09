import { routes } from './routes/index.js';

const Router = (path) => {
  const route = routes.find(route => route.path === path);

  if (!route) {
    return routes.find(route => route.path === '/404').action();
  }

  try {
    return route.action();
  } catch (error) {
    return routes.find(x => x.path === '/404').action();
  }
}

export default Router;
