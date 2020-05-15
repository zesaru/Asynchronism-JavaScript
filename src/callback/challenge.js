//como estamos trabajando somber node necesitamos installar httprequest
// puede trabajar con ftp y archivos
//npm i xmlhttprequest --save
// esto fue creado inicialmente por microsoft

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //activar el asinconismo con true
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (event) {
    //valicacion si el estado que se encuentra es satisfactorio
    //son 5 estados
    if (xhttp.readyState === 4) {
      if (xhttp.status == 200) {
        //como es un json lo tengo que parsear
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  //se envia la solicitud
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) returnconsole.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) returnconsole.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) returnconsole.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
