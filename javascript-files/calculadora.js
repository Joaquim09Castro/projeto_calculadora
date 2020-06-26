let calculadora = {};

calculadora.display = document.querySelector("#display");
calculadora.oprLog = document.querySelector("#log-operacoes");

let btnIgual = document.querySelector("#igual");
let btnClear = document.querySelector("#limpar");
let btnClearAll = document.querySelector("#limpar-total");

btnIgual.onclick = function() {

  efetuaConta();
  calculadora.display.value = conta[0];
  conta = [];

  adicionaLog(`=`);
  adicionaLog(`${calculadora.display.value}`);
  adicionaLog(`------`);

}

btnClear.onclick = function() {

  calculadora.display.value = "";
  conta = [];
  adicionaLog(`________________________`);

}

btnClearAll.onclick = function() {

  calculadora.display.value = "";
  conta = [];
  calculadora.oprLog.innerHTML = "";

}

function adicionaLog(str) {

  let item = document.createElement("p");
  item.textContent = str;
  calculadora.oprLog.appendChild(item);

}