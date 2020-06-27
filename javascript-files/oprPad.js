let btnSoma = document.querySelector("#soma");
let btnSubtracao = document.querySelector("#subtracao");
let btnMultiplicacao = document.querySelector("#multiplicacao");
let btnDivisao = document.querySelector("#divisao");

let conta = [];
let hold = 0;
let oprCheck = "";

btnSoma.onclick = function() {

  efetuaConta();

  oprCheck = "+";
  
  concluiOpr();

}

btnSubtracao.onclick = function() {

  efetuaConta();

  oprCheck = "-";

  concluiOpr();

}

btnMultiplicacao.onclick = function() {

  efetuaConta();

  oprCheck = "*";
  
  concluiOpr();

}

btnDivisao.onclick = function() {
  
  efetuaConta();

  oprCheck = "/";
  
  concluiOpr();

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

  }

}

function concluiOpr() {
  adicionaLog(`${oprCheck}`);

  calculadora.display.value = "";

  console.log(conta[0]);
}