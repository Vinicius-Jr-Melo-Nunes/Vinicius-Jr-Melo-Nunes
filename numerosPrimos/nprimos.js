function Primos() {
  let inNumero = document.getElementById("inNumero");
  let outResp = document.getElementById("outResp");

  let numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Dados incorreto. Por favor digite novamente...");
    inNumero.focus();
    return;
  }

  let numDiv = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      numDiv++;
    }
  }
  if (numDiv == 2) {
    outResp.textContent = "Você escolheu o número: " + numero + ". Este número é Primo!!";
  } else {
    outResp.textContent = numero + " Este número não é Primo!!";
  }
}

let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", Primos);
