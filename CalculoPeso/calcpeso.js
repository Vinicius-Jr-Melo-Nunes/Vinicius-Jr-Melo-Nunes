function CalculoPeso() {
  var inNome = document.getElementById("inNome");
  var inAltura = document.getElementById("inAltura");
  var rbMasculino = document.getElementById("rbMasculino");
  var rbFeminino = document.getElementById("rbFeminino");
  var outResposta = document.getElementById("outResposta");

  var nome = inNome.value;
  var altura = Number(inAltura.value);
  var masculino = rbMasculino.checked;
  var feminino = rbFeminino.checked;

  if (nome == "" || (masculino == false && feminino == false)) {
    alert("Por favor, informe o nome e selecione o sexo...");
    inNome.focus(); //posiciona (joga o foco) no campo de edição inNome.
    return; // retorno.
  }
  // se altura vazio(0) ou NaN (Nota-a-Number)
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente...");
    inAltura.focus();
    return;
  }
  // se masculino (significa se masculino == true)
  if (masculino) {
    var peso = 22 * Math.pow(altura, 2); //Math.pow eleva ao quadrado
  } else {
    var peso = 21 * Math.pow(altura, 2);
  }
  outResposta.textContent =
    nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg";
}
// cria referência ao elemento btnExibir e registra o evento associado a CalculoPeso.
var btnPeso = document.getElementById("btnPeso");
btnPeso.addEventListener("click", CalculoPeso);

function LimparCampos() {
  document.getElementById("inNome").value = "";
  document.getElementById("inAltura").value = "";
  document.getElementById("rbMasculino").checked = "false";
  document.getElementById("rbFeminino").checked = "false";
  document.getElementById("outResposta").textContent = "";

  document.getElementById("inNome").focus();
}
var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", LimparCampos);
