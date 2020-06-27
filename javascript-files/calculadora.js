let calculadora = {};

calculadora.display = document.querySelector("#display");
calculadora.oprLog = document.querySelector("#log-operacoes");

function adicionaLog(str) {

  let item = document.createElement("p");
  item.textContent = str;
  calculadora.oprLog.appendChild(item);

}