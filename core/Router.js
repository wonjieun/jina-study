const routes = [
  require('../routes/Home.jsx').default,
  require('../routes/NotFound.jsx').default
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
