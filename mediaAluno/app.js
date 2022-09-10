function exibirMedia() {
  let inAluno = document.getElementById("inAluno");
  let inFirst = document.getElementById("inFirst");
  let inSecond = document.getElementById("inSecond");
  let outMedia = document.getElementById("outMedia");
  let outSituacao = document.getElementById("outSituacao");

  let aluno = inAluno.value;
  let first = Number(inFirst.value);
  let second = Number(inSecond.value);

  if((aluno =="") || (isNaN(first)) || (isNaN(second)) || (first =="") || (second =="")){
    alert("Porfavor. Digite o Valor corretamente...")
    inAluno.value = "";
    inAluno.focus();
    return;  
}

  let totalMedia = (first + second) / 2;
  outMedia.textContent = "Média de notas: " + totalMedia;

  if (totalMedia >= 7) {
    outSituacao.textContent = "Parabéns " + aluno + "Você foi aprovado!!";
    outSituacao.style.color= "blue";
  } else if (totalMedia >=4) {
    outSituacao.textContent =  aluno + "." + " Você está em Recuperação!!";
    outSituacao.style.color= "orange";

  } else{
    outSituacao.textContent =  aluno + "." + " Você está em Recuperação!!";
    outSituacao.style.color= "red";

  }
}
let btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", exibirMedia);
