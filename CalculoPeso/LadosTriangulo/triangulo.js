function MostrarTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoB = document.getElementById("inLadoC");
  var outRespTriangulo = document.getElementById("outRespTriangulo");
  var outTipo = document.getElementById("outTipo");

  var LadoA = Number(inLadoA.value);
  var LadoB = Number(inLadoB.value);
  var LadoC = Number(inLadoB.value);

  //var equilatero = (LadoA == LadoB) && (LadoC == LadoB);
  //var isosceles = (LadoA == LadoB) || (LadoA == LadoC) || (LadoC == LadoB);
  
//if( LadoA < LadoB + LadoC && LadoB < LadoA + LadoC &&  LadoC < LadoA + LadoA){
  //  outRespTriangulo.textContent = "os 3 lados formam um triangulo"

  if ((LadoA == LadoB) && (LadoC == LadoB)) {
    outRespTriangulo.textContent = "Lados Podem Formar um Triângulo";
    outTipo.textContent = "Tipo: Equilatero";
  } else {
    if ((LadoA == LadoB) || (LadoA == LadoC) || (LadoC == LadoB)) {
    
     outRespTriangulo.textContent = "Lados podem Formar um Triângulo";
    outTipo.textContent = "Tipo: Isosceles";

  } else {
    outRespTriangulo.textContent = "Lados Não Podem Formar um Triângulo";
    outTipo.textContent = "Tipo: Escaleno";
  }
    
  }
}

var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", MostrarTriangulo);
