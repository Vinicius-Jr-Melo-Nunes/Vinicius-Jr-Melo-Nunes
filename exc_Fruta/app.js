function mostrarFruta() {
  let inFruit = document.getElementById("inFruit");
  let inNum = document.getElementById("inNum");
  let outResult = document.getElementById("outResult");

  let fruit = inFruit.value;
  let numb = Number(inNum.value);
  if (numb == "" || isNaN(numb)) {
    alert("Dados incorreto ou vázio. Digite novamente...");
    inNum.value = "";
    inFruit.focus();
    return;
  }
  let resultado = "";

  for (let i = 1; i <= numb; i++) {
    if (i == 1) {
      resultado += fruit;
    } else {
      resultado += "*" + fruit;
    }
    outResult.textContent = resultado;
  }
}
let btnFruit = document.getElementById("btnFruit");
btnFruit.addEventListener("click", mostrarFruta);
