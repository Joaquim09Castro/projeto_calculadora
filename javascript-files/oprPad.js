let btnSoma = document.querySelector("#soma");
let btnSubtracao = document.querySelector("#subtracao");
let btnMultiplicacao = document.querySelector("#multiplicacao");
let btnDivisao = document.querySelector("#divisao");

let conta = [];
let hold = [];
let oprCheck = "";

btnSoma.onclick = function() {

  efetuarConta();

  oprCheck = "+";
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

btnSubtracao.onclick = function() {

  efetuarConta();

  oprCheck = "-";
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

btnMultiplicacao.onclick = function() {

  efetuarConta();

  oprCheck = "*";
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

btnDivisao.onclick = function() {
  
  efetuarConta();

  oprCheck = "/";
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

function efetuarConta() {

  conta.push(parseInt(calculadora.display.value))

  adicionaLog(`${calculadora.display.value}`);

  if (conta.length == 2) {

    if ( oprCheck == "+") {
      
      hold += (conta[0] + conta[1]);
      conta = [];
      conta.push(hold);
      hold = [];

    }
    
    if ( oprCheck == "-") {
      
      hold += (conta[0] - conta[1]);
      conta = [];
      conta.push(hold);
      hold = [];

    }
    
    if ( oprCheck == "*") {
        
      hold += (conta[0] * conta[1]);
      conta = [];
      conta.push(hold);
      hold = [];

    }
    
    if ( oprCheck == "/") {
        
      hold += (conta[0] / conta[1]);
      conta = [];
      conta.push(hold);
      hold = [];

    }

  }

}