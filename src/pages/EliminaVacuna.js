import getHash from '../utils/getHash';
import getData from '../utils/getData';
import deleteVacuna from '../utils/deleteVacuna';

const EliminaVacuna = async () => {
  const id = getHash();

  const vacuna = await getData(id);

  const view = `
  
    <div class="Characters-inner">
      <article class="Characters-card">
        <h3>ID: <span>${vacuna.data._id}</span></h3>
        <h3>Nombre: <span>${vacuna.data.name}</span></h3>
      </article>
    </div>
    <form id="Delete">
      <button id="delete" type="submit" >Eliminar</button>
    </form>
  `;
  return view;
};

export default EliminaVacuna;