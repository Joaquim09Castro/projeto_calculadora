//objeto calculadora
let calculadora = {};

calculadora.display = document.querySelector("#display");

let btn1 = document.querySelector("#num-1");
let btnSoma = document.querySelector("#soma");
let btnIgual = document.querySelector("#igual");

let acumulador = "";

btn1.onclick = function() {

  calculadora.display.textContent += "1";

}

btnSoma.onclick = function() {

  acumulador += calculadora.display.innerText;
  acumulador += " + ";
  calculadora.display.innerText = "";

}

btnIgual.onclick = function() {

  acumulador += calculadora.display.innerText;
  let resultado = eval(acumulador);
  calculadora.display.innerText = resultado;
  acumulador = "";

}