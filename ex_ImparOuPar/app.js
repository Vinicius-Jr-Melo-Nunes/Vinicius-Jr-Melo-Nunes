function mostrarNumero() {
  let inNum = document.getElementById("inNum");
  let outResposta = document.getElementById("outResposta");

  let numero = Number(inNum.value);

  if (numero % 2 == 0) {
    outResposta.textContent = "O número: " + numero + " é Par";
  } else {
    outResposta.textContent = "O número: " + numero + " é Impar";
  }
}
let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", mostrarNumero);
