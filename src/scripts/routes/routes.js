import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Resto from '../views/pages/resto';

const routes = {
  '/': Resto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
