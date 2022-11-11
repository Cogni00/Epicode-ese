var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome")
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
var user; 

window.addEventListener("DOMContentLoaded", init);

function init() {
  addBtn = document.getElementById("scrivi");
  elencoHTML = document.getElementById("elenco");
  errore = document.getElementById("errore");
  erroreElenco = document.getElementById("erroreElenco");
  printData();
  eventHandler();
}

function eventHandler() {
  addBtn.addEventListener("click", function () {
    if (user) {
      ripopola(user)
    } else {
      controlla();
    }
  });
}

function printData() {
  fetch("http://localhost:3000/elenco")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      elenco = data;
      if (elenco.length > 0) {
        errore.innerHTML = "";
        elencoHTML.innerHTML = "";
        elenco.map(function (element) {
          elencoHTML.innerHTML += `<li><button type="button" class="btn btn-outline-warning m-2" onClick="modifica(${element.id})"><i class="bi bi-pen-fill text-warning"></i></button> <button type="button" class="btn btn-outline-danger m-2" onClick="elimina(${element.id})"><i class="bi bi-trash3-fill text-danger"></i></button>${element.nome} ${element.cognome}</li>`;
        });
      } else {
        erroreElenco.innerHTML = "Nessun elemento presente in elenco";
      }
    });
}

function controlla() {
  if (nome.value != "" && cognome.value != "") {
    var data = {
      nome: nome.value,
      cognome: cognome.value,
    };
    addData(data);
  } else {
    errore.innerHTML = "Compilare correttamente i campi!";
    return;
  }
}

async function addData(data) {
  let response = await fetch("http://localhost:3000/elenco", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  clearForm();
}

function clearForm() {
  nome.value = "";
  cognome.value = "";
}

//FUNZIONE ELIMINA
function elimina(id) {
  let text = "Stai eliminando una voce della lista! Sei sicuro?";
  if (confirm(text) == true) {
    fetch("http://localhost:3000/elenco/" + id, {
      method: "DELETE",
    }).then((res) => res.json());
  }
}

function modifica(id) {
	fetch(`http://localhost:3000/elenco/${id} `).then(res=>res.json()).then((data)=>{
    document.getElementById('nome').value = data.nome;
    document.getElementById('cognome').value = data.cognome;
    return user = id;
})
}
function ripopola(user) {
  if (nome.value == '' || cognome.value == '') {
      errore.innerHTML = "Compilare correttamente i campi!";
    return;
    } else {
  fetch(`http://localhost:3000/elenco/${user}`, {
		method : "PUT",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		  },
		body: JSON.stringify({
      "nome" : nome.value, 
      "cognome" : cognome.value
    }),
  });
}
}
    



