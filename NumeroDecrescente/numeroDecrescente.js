function DisplayNumber() {
  let inNumero = document.getElementById("inNumero");
  let outDisplayNumber = document.getElementById("outDisplayNumber");

  let numero = Number(inNumero.value);

  let resp = "";
  for (let i = numero; i > 0; i--) {
     
    
    
  if(i==1){
        resp = resp + i + ". ";
    }else{
        resp = resp + i + ", ";
    }  
    
  }
  outDisplayNumber.textContent ="Entre 12 e 1: " + resp ;
}
let btnDisplay = document.getElementById("btnDisplay");
btnDisplay.addEventListener("click", DisplayNumber);
