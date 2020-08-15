let funcPad = {
  btnIgual: document.querySelector("#igual"),
  btnClear: document.querySelector("#limpar"),
  btnClearAll: document.querySelector("#limpar-total")
};

funcPad.btnIgual.onclick = function () {

  if (calculadora.display.value != "") {
    calculadora.efetuaConta();
    calculadora.display.value = conta[0];
    conta = [];
    calculadora.adicionaLog(`------`);
  }
};

funcPad.btnClear.onclick = function () {

  if (calculadora.display.value != "") {
    calculadora.display.value = "";
    conta = [];

    calculadora.adicionaLog(`________________________`);
  }
};

funcPad.btnClearAll.onclick = function () {
  calculadora.display.value = "";
  conta = [];
  calculadora.oprLog.innerHTML = "";
};