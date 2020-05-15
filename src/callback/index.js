// funcion normal
function sum(num1, num2) {
  return num1 + num2;
}
//por estandar le ponermos callback
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
//imprimir y llamar a la funcion calc
console.log(calc(6, 2, sum));

//trabajando con tiempos

function date(callback) {
  //imprimir la fecha
  console.log(new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
