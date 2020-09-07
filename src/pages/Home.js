import getData from '../utils/getData';

const Home = async () => {
  const vacunas = await getData();
  const view = `
  <div>
       <table style="width:100%">
       <tr>
         <th>ID</th>
         <th>NOMBRE VACUNA</th>
         <th>ACCIONES</th>
       </tr>
      ${vacunas.data.map(vacuna => `
      <tr>
             <td>${vacuna._id}</td>
             <td>${vacuna.name}</td>
             <td> <a href="#/${vacuna._id}/">Eliminar</a> <a href="#/actualizar/${vacuna._id}/">Actualizar</a></td>
           </tr>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;