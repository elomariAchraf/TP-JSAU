
var axios = require('axios');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
const dirTree = require('directory-tree');

//retourne un objet JSON contenant les informations sur l'arborescence du chemin
function directoryTree()
{
      var p = document.getElementById("path").value;
      const tree = dirTree(p, { }, (item, path) => {
      console.log(item);
});
}

// la methode Get
function getMethod()
{
    axios.get('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}
// la methode Post
function postMethod()
{
  axios.post('http://127.0.0.1:80/api', {
  name: 'Fred',
  password: 'Flintstone',
  profession: 'teacher'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
}
// la methode put
function putMethod()
{
    axios.put('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}

// la methode put
function deleteMethod()
{
    axios.delete('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}
