document.addEventListener("keydown", e => {
  if (e.key.match(/^[0-9]/)) {
    console.log(e.key);
    calculadora.display.value += e.key;
  }

  if (e.key == "." || e.key == ",") {
    if (!filtroDec.test(calculadora.display.value)) {
      if (calculadora.display.value == "") {
        calculadora.display.value += "0";
        calculadora.display.value += ".";
      } else {
        calculadora.display.value += ".";
      }
    }
  }

  if (e.key == "+") {
    if (calculadora.display.value != "") {
      calculadora.efetuaConta();
      oprCheck = "+";
      oprPad.concluiOpr();
    }
  }

  if (e.key == "-") {
    if (calculadora.display.value != "") {
      calculadora.efetuaConta();
      oprCheck = "-";
      oprPad.concluiOpr();
    }
  }

  if (e.key == "*") {
    if (calculadora.display.value != "") {
      calculadora.efetuaConta();
      oprCheck = "*";
      oprPad.concluiOpr();
    }
  }

  if (e.key == "/") {
    if (calculadora.display.value != "") {
      calculadora.efetuaConta();
      oprCheck = "/";
      oprPad.concluiOpr();
    }
  }

  if (e.key == "Enter") {
    if (calculadora.display.value != "") {
      calculadora.efetuaConta();
      calculadora.display.value = conta[0];
      conta = [];
      calculadora.adicionaLog(`------`);
    }
  }

  if (e.key == "Backspace") {
    if (calculadora.display.value != "") {
      calculadora.display.value = "";
      conta = [];

      calculadora.adicionaLog(`________________________`);
    }
  }

  if (e.key == "Escape") {
    calculadora.display.value = "";
    conta = [];
    calculadora.oprLog.innerHTML = "";
  }
})