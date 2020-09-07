const { getAPI } = require('../utils/defineAPI');
import router from '../routes/index';
import getHash from '../utils/getHash';


document.addEventListener('submit', function (e) {
    e.preventDefault();
    if (e.target.id == "Delete")
        deleteVacuna();
});
const deleteVacuna = async () => {
    const id = getHash();
    const apiURl = `${getAPI.API}${id}`;
    try {
        fetch(apiURl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (result) {
                window.history.back();
                alert(result.message);
            })
    } catch (error) {
        console.log('Fetch Error', error);
    };
};

export default deleteVacuna;