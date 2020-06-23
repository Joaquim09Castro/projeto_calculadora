//objeto calculadora
let calculadora = {};

calculadora.display = document.querySelector("#display");

let btn1 = document.querySelector("#num-1");
let btnSoma = document.querySelector("#soma");
let btnIgual = document.querySelector("#igual");

let acumulador = "";

btn1.onclick = function() {

  calculadora.display.value += "1";

}

btnSoma.onclick = function() {

  acumulador += calculadora.display.value;
  acumulador += " + ";
  calculadora.display.value = "";

}

btnIgual.onclick = function() {

  acumulador += calculadora.display.value;
  let resultado = eval(acumulador);
  calculadora.display.value = resultado;
  acumulador = "";

}