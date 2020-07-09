let oprPad = {
  btnSoma: document.querySelector("#soma"),
  btnSubtracao: document.querySelector("#subtracao"),
  btnMultiplicacao: document.querySelector("#multiplicacao"),
  btnDivisao: document.querySelector("#divisao"),
  
  concluiOpr: function() {
    calculadora.adicionaLog(`${oprCheck}`);
    calculadora.display.value = "";
    //console.log(conta[0])
  }
};

let conta = [];
let hold = 0;
let oprCheck = "";

oprPad.btnSoma.onclick = function() {
  if (calculadora.display.value != "") {
    calculadora.efetuaConta();
    oprCheck = "+";
    oprPad.concluiOpr();
  }
};

oprPad.btnSubtracao.onclick = function() {
  if (calculadora.display.value != "") {
    calculadora.efetuaConta();
    oprCheck = "-";
    oprPad.concluiOpr();
  }
};

oprPad.btnMultiplicacao.onclick = function() {
  if (calculadora.display.value != "") {
    calculadora.efetuaConta();
    oprCheck = "*";
    oprPad.concluiOpr();
  }
};

oprPad.btnDivisao.onclick = function() {
    if (calculadora.display.value != "") {
    calculadora.efetuaConta();
    oprCheck = "/";
    oprPad.concluiOpr();
  }
};