const resolveRoutes = (route) => {
  let validRoute = route === '/' ? route : route === 'registrarvacuna' 
                  ? route = '/' + route :  route === 'actualizar' 
                  ? route = '/' + route + '/:id' : '/:id';
  return validRoute;
};

export default resolveRoutes;