const axios = require('axios');

export function GETDATA () {

    return axios.get('http://localhost:4000/api')
    .then(function (response) {
        // handle success
        // console.log(response);
        return response.data;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });




}