let calculadora = {
  display: document.querySelector("#display"),
  oprLog: document.querySelector("#log-operacoes"),

  efetuaConta: function () {
    conta.push(Number(calculadora.display.value));
    calculadora.adicionaLog(`${calculadora.display.value}`);

    if (conta.length == 2) {

      if (oprCheck == "+") {
        hold += (conta[0] + conta[1]);
        conta = [];
        conta.push(hold);
        hold = 0;
      }

      if (oprCheck == "-") {
        hold += (conta[0] - conta[1]);
        conta = [];
        conta.push(hold);
        hold = 0;
      }

      if (oprCheck == "*") {
        hold += (conta[0] * conta[1]);
        conta = [];
        conta.push(hold);
        hold = 0;
      }

      if (oprCheck == "/") {
        hold += (conta[0] / conta[1]);
        conta = [];
        conta.push(hold);
        hold = 0;
      }

      calculadora.adicionaLog(`=`);
      calculadora.adicionaLog(`${conta[0]}`);
    }
  },

  adicionaLog: function (str) {
    let item = document.createElement("p");
    item.textContent = str;
    calculadora.oprLog.appendChild(item);
  }
};