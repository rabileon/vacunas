import getData from '../utils/getData';
import putData from '../utils/putData';
const ActualizarVacuna = async () => {
  const id = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
  console.log(id);
  const vacuna = await getData(id);

    const view = `
      <div>
      <h2>Actualizar Vacuna</h2>
        <form id="Update" action="#/" method="post">
            <label for="name">Nombre </label>
            <input type="text" id="name" name= "name"  value="${vacuna.data.name}"required=true>
            <button type="submit" >Actualizar</button>
        </form>
        <a href="/">Regresar</a>
      </div>
    `;
    
    return view;
    

  };
 

  
  export default ActualizarVacuna;