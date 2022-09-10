function mostrarTabuada() {
  let inNum = document.getElementById("inNum");
  let outResultado = document.getElementById("outResultado");

  let numero = Number(inNum.value);
  let numero2 = "";

  for (let i = 0; i <= numero; i++) {
    for (let j = 0; j <= i; j++) {
      numero2 += "*";
    }
    numero2 += "\n";
  }
 outResultado.textContent = numero2
}

let btnMostrar = document.getElementById("btnMostrar");
btnMostrar.addEventListener("click", mostrarTabuada);
