import Home from '../routes/Home.jsx';
import NotFound from '../routes/NotFound.jsx';

const routes = [
  Home,
  NotFound
];

const router = {
  match(location) {
    const route = routes.find(x => x.path === location.path);

    if (route) {
      try {
        return route.action();
      } catch (err) {
        return routes.find(x => x.path === '/500').action();
      }
    } else {
      return routes.find(x => x.path === '/404').action();
    }
  }
};

export default router;
