let numbAccount = 0;
let valTot = 0;
let answer = "";

function RegContas() {
  let inDescription = document.getElementById("inDescription");
  let inAccount = document.getElementById("inAccount");
  let outSaveDescription = document.getElementById("outSaveDescription");
  let outSaveValue = document.getElementById("outSaveValue");

  let description = inDescription.value;
  let account = Number(inAccount.value);

  if (account == 0 || description == "" || isNaN(account)) {
    alert("Dados incorretos! Porfavor, digite novamente");
    inDescription.focus();
    return;
  }
  numbAccount++;
  valTot = valTot + account;
  answer = answer + description + " - R$: " + account.toFixed(2) + "\n";

  outSaveDescription.textContent =
    answer + "-----------------------------------------" + "\n";
  outSaveValue.textContent =
    numbAccount + "Conta(s) - Total R$: " + valTot.toFixed(2).toString() + "\n";

  inDescription.value = "";
  inAccount.value = "";
  inDescription.focus();
}

let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", RegContas);
