const { getAPI }  = require('../utils/defineAPI');
import Home from '../pages/Home';
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
  if (e.target.id == "Add")
    postData(serializeForm(e.target));
});

const postData = async (data) => {
  const apiURl = getAPI.API;
  console.log(JSON.stringify(data));
  try {
    fetch(apiURl,{
      method: 'POST',
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
      document.getElementById("Add").reset();
      window.history.back();
      alert(result.message);
  })
  } catch (error) {
    console.log('Fetch Error', error);
  };
};



export default postData;