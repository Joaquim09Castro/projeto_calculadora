let numPad = {
  btn1: document.querySelector("#num-1"),
  btn2: document.querySelector("#num-2"),
  btn3: document.querySelector("#num-3"),
  btn4: document.querySelector("#num-4"),
  btn5: document.querySelector("#num-5"),
  btn6: document.querySelector("#num-6"),
  btn7: document.querySelector("#num-7"),
  btn8: document.querySelector("#num-8"),
  btn9: document.querySelector("#num-9"),
  btn0: document.querySelector("#num-0"),
  btnDec: document.querySelector("#decimal")
};

let filtroDec = new RegExp("[.]");

numPad.btn1.onclick = function () {
  calculadora.display.value += "1";
};

numPad.btn2.onclick = function () {
  calculadora.display.value += "2";
};

numPad.btn3.onclick = function () {
  calculadora.display.value += "3";
};

numPad.btn4.onclick = function () {
  calculadora.display.value += "4";
};

numPad.btn5.onclick = function () {
  calculadora.display.value += "5";
};

numPad.btn6.onclick = function () {
  calculadora.display.value += "6";
};

numPad.btn7.onclick = function () {
  calculadora.display.value += "7";
};

numPad.btn8.onclick = function () {
  calculadora.display.value += "8";
};

numPad.btn9.onclick = function () {
  calculadora.display.value += "9";
};

numPad.btn0.onclick = function () {
  calculadora.display.value += "0";
};

numPad.btnDec.onclick = function () {
  if (!filtroDec.test(calculadora.display.value)) {
    if (calculadora.display.value == "") {
      calculadora.display.value += "0";
      calculadora.display.value += ".";
    } else {
      calculadora.display.value += ".";
    }
  }
};