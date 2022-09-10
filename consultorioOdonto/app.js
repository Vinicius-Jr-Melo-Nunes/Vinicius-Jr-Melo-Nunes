let consultorio = [];

let btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", consultOdonto);

function consultOdonto() {
  let inPaciente = document.getElementById("inPaciente");
  let outLista = document.getElementById("outLista");

  let nome = inPaciente.value;

  if (inPaciente == "") {
    alert("Por favor, digite o seu nome...");
    inPaciente.value = "";
    inPaciente.focus();
    return;
  }

  consultorio.push(nome);

  let lista = "";

  for (let i = 0; i < consultorio.length; i++) {
    lista += i + 1 + " . " + consultorio[i] + "\n";
  }
  outLista.textContent = lista;
  inPaciente.value = "";
  inPaciente.focus();
}

let btnUrgencia = document.getElementById("btnUrgencia");
btnUrgencia.addEventListener("click", consultUrgencia);

function consultUrgencia() {
  let inPaciente = document.getElementById("inPaciente");
  let outLista = document.getElementById("outLista");

  let nome = inPaciente.value;

  if (inPaciente == "") {
    alert("Por favor, digite o seu nome...");
    inPaciente.value = "";
    inPaciente.focus();
    return;
  }

  consultorio.unshift(nome);

  let lista = " ";

  for (let i = 0; i < consultorio.length; i++) {
    lista += i + 1 + " . " + consultorio[i] + "\n";
  }
  outLista.textContent = lista;
  inPaciente.value="";
  inPaciente.focus();
}
function consultAtender() {
    let inPaciente = document.getElementById("inPaciente");
    let outLista = document.getElementById("outLista");
    let outAtendimento = document.getElementById("outAtendimento"); 
    let nome = inPaciente.value;
  
    if (inPaciente == "") {
      alert("Por favor, digite o seu nome...");
      inPaciente.value = "";
      inPaciente.focus();
      return;
    }
  
    let atender = consultorio.shift();
    outAtendimento.textContent = atender;
    inPaciente.value="";
  
    let lista = "";
  
    for (let i = 0; i < consultorio.length; i++) {
      lista += i + 1 + " . " + consultorio[i] + "\n";
    }
    outLista.textContent = lista;
    inPaciente.value="";
  }
  let btnAtender = document.getElementById("btnAtender");
btnAtender.addEventListener("click", consultAtender);

  
