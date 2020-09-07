const { getAPI }  = require('../utils/defineAPI');
let id;

var serializeForm = function (form) {
	var obj = {};
	var formData = new FormData(form);
	for (var key of formData.keys()) {
		obj[key] = formData.get(key);
	}
	return obj;
};

document.addEventListener('submit', function (e) {
  e.preventDefault();
  id = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
  if (e.target.id == "Update")
    putData(serializeForm(e.target));
});

const putData = async (data) => {
  const apiURl = `${getAPI.API}${id}`;
  try {
    fetch(apiURl,{
      method: 'PUT',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(function(response){
        return response.json();
    })
    .then(function (result) {
      document.getElementById("Update").reset();
      window.history.back();
      alert(result.message);
  })
  } catch (error) {
    console.log('Fetch Error', error);
  };
};




export default putData;