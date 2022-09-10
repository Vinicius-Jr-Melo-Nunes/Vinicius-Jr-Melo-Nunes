function verificarMulta(){
    let inVelocidade = document.getElementById("inVelocidade");
    let inCondutor = document.getElementById("inCondutor");
    let outSituacao = document.getElementById("outSituacao");

    let velocidade = Number (inVelocidade.value);
    let condutor = Number(inCondutor.value);

    let total = (velocidade *0.2) + velocidade;

    if(condutor > total){
        outSituacao.textContent = "Multa Grave"

    } else if(condutor > velocidade && condutor<=total){
        outSituacao.textContent = "Multa leve"

    } else{
        outSituacao.textContent = "Sem Multa"
    }
}
let btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificarMulta);