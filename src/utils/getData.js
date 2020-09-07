const { getAPI }  = require('../utils/defineAPI');
//const { vacunasMock } = require('./mocks/vacunas');
const getData = async (id) => {
  const apiURl = id ? `${getAPI.API}${id}` : getAPI.API;
  try {
    const response = await fetch(apiURl);
     const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};



export default getData;