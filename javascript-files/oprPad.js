let oprPad = {
  btnSoma: document.querySelector("#soma"),
  btnSubtracao: document.querySelector("#subtracao"),
  btnMultiplicacao: document.querySelector("#multiplicacao"),
  btnDivisao: document.querySelector("#divisao")
}

let conta = [];
let hold = 0;
let oprCheck = "";

oprPad.btnSoma.onclick = function() {
  if (calculadora.display.value != "") {
    efetuaConta();
    oprCheck = "+";
    concluiOpr();
  }
}

oprPad.btnSubtracao.onclick = function() {
  if (calculadora.display.value != "") {
    efetuaConta();
    oprCheck = "-"
    concluiOpr();
  }
}

oprPad.btnMultiplicacao.onclick = function() {
  if (calculadora.display.value != "") {
    efetuaConta();
    oprCheck = "*";
    concluiOpr();
  }
}

oprPad.btnDivisao.onclick = function() {
    if (calculadora.display.value != "") {
    efetuaConta();
    oprCheck = "/";
    concluiOpr();
  }
}

//function (opr) {
  
//}

function efetuaConta() {

  conta.push(Number(calculadora.display.value))

  adicionaLog(`${calculadora.display.value}`);

  if (conta.length == 2) {

    if ( oprCheck == "+") {
      
      hold += (conta[0] + conta[1]);
      conta = [];
      conta.push(hold);
      hold = 0;

    }
    
    if ( oprCheck == "-") {
      
      hold += (conta[0] - conta[1]);
      conta = [];
      conta.push(hold);
      hold = 0;

    }
    
    if ( oprCheck == "*") {
        
      hold += (conta[0] * conta[1]);
      conta = [];
      conta.push(hold);
      hold = 0;

    }
    
    if ( oprCheck == "/") {
        
      hold += (conta[0] / conta[1]);
      conta = [];
      conta.push(hold);
      hold = 0;

    }

    adicionaLog(`=`);
    adicionaLog(`${conta[0]}`);

  }

}

function concluiOpr() {
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta[0]);
}