function funcaoMercado() {
  let inProd = document.getElementById("inProd");
  let inPreco = document.getElementById("inPreco");
  let outProd = document.getElementById("outProd");
  let outProm = document.getElementById("outProm");

  let produto = inProd.value;
  let preco = Number(inPreco.value);
  let desconto = preco / 2;
  let total = preco * 3 - desconto;

  outProd.textContent = "O 3º produto custa apenas R$: " + desconto.toFixed(2);
  outProm.textContent = produto + " - " + "Promoção: Leve 3 por R$: " + total.toFixed(2);
}
let btnVerPromocao = document.getElementById("btnVerPromocao");
btnVerPromocao.addEventListener("click", funcaoMercado);

