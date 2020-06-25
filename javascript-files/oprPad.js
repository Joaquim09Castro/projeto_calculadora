let btnSoma = document.querySelector("#soma");
let btnSubtracao = document.querySelector("#subtracao");
let btnMultiplicacao = document.querySelector("#multiplicacao");
let btnDivisao = document.querySelector("#divisao");

let conta = [];
let hold = [];
let oprCheck = "";

btnSoma.onclick = function() {

  oprCheck = "+";

  efetuarConta();

  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

btnSubtracao.onclick = function() {

  oprCheck = "-";

  efetuarConta();

  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

btnMultiplicacao.onclick = function() {

  oprCheck = "*";

  efetuarConta();

  adicionaLog(`${oprCheck}`);

  calculadora.display.value = conta[0];

  console.log(conta);

}

btnDivisao.onclick = function() {

  oprCheck = "/";
  
  efetuarConta();

  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta);

}

function efetuarConta() {

  //Problema na captação do valor do display
  conta.push(parseInt(calculadora.display.value))

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

  }

}