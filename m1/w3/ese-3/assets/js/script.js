// Corretto

function succo(mele, arance) {
  const frutta = `Succo con ${mele} mele e ${arance} arance`;
  return frutta;
}

document.getElementById("corretta").innerHTML = succo(4, 5);

//sbagliata

function centrifuga(mele, arance) {
  var frutta = `Succo con ${mele} mele e ${arance} arance`;
  return frutta;
}

document.getElementById("sbagliata").innerHTML = centrifuga(6, );

//calcolo età


function calcolaAnni(compleanno) {
	return 2022 - compleanno;
}

document.getElementById('eta').innerHTML += `${calcolaAnni(1992)} anni`; 


//calcolo anno di nascita 


annoNascita = (età) => {
    return 2022 - età; 
}

document.getElementById('persona1').innerHTML = `L'anno di nascita di Anna è il ${annoNascita(30)}`;
document.getElementById('persona2').innerHTML = `L'anno di nascita di Maria è il ${annoNascita(24)}`;

// funzione all'interno di un'altra funzione 

function fette(mela) {
   return `Torta con ${mela} fette di mele`;
}

function impasto(arancia) {
  return `${fette(9)} e ${arancia} fette di arancia`;
}

document.getElementById('torta').innerHTML= impasto(15);

//lista della spesa 

var btn = document.getElementById('calcola');
btn.addEventListener('click', function() {
  let cibo = Number(document.getElementById('cibo').value); 
  let detersivi = Number(document.getElementById('detersivi').value);
  let abiti = Number(document.getElementById('abiti').value); 
  let somma =  cibo + abiti + detersivi;
  document.getElementById('totale').innerHTML += somma;
});

   




