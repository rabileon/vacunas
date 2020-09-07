
import postData from '../utils/postData';
const RegistrarVacuna = () => {
    const view = `
      <div>
      <h2>Registrar Vacuna</h2>
        <form id="Add" action="#/" method="post">
            <label for="name">Nombre </label>
            <input type="text" id="name" name= "name" required=true>
            <button type="submit" >Guardar</button>
        </form>

      </div>
    `;
    return view;
    

  };
 

  
  export default RegistrarVacuna;