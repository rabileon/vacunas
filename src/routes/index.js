import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import RegistrarVacuna from '../pages/RegistrarVacuna';
import getHash from '../utils/getHash';
import deleteVacuna from '../pages/EliminaVacuna';
import actualizarVacuna from '../pages/ActualizarVacuna';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/registrarvacuna': RegistrarVacuna,
  '/:id': deleteVacuna,
  '/actualizar/:id': actualizarVacuna
};

const router = async () => {

  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

   header.innerHTML = await Header();
   let hash = getHash();
   console.log(hash);
   let route = await resolveRoutes(hash);
   let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};


export default router;