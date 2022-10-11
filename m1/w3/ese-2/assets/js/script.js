var nome='Aldo';
let figura='cliente';
const numero=3.14; 

// prima concatenazione
document.getElementById('concatena').innerHTML = nome +', ' +figura + ', '+ numero; 

// seconda concatenazione
var info = `${nome}, ${figura}, ${numero}`;
document.getElementById('concatena2').innerHTML = info; 

// let+var 
var nome = 'Mario';
document.getElementById('var').innerHTML= nome; 
{ 
    let nome = 'Carla'; 
document.getElementById('let').innerHTML= nome;   
}

document.getElementById('final').innerHTML= nome; 

// solo let 
{
let nome = 'Mario';
document.getElementById('let2').innerHTML= nome; 
}
{
 let nome = 'Carla'; 
document.getElementById('let3').innerHTML= nome;   


document.getElementById('final2').innerHTML= nome; 
}

// Operazioni 

var iniziale = 15; 
document.getElementById('iniziale').innerHTML = 'Valore iniziale:' + iniziale; 

// Addizione e incremento 
{
 let valore1 = iniziale + 15; 
 let incremento = valore1 + 1; 
 document.getElementById('valore1').innerHTML += `${valore1}, ${incremento}`; 
 }
 
//Sottrazione e decremento
{
 let valore2 = iniziale -10; 
 let decremento= valore2 -1; 
 document.getElementById('valore2').innerHTML += `${valore2}, ${decremento}`; 
}

//Moltiplicazione 
{
 let valore3 = iniziale *3; 
 document.getElementById('valore3').innerHTML += valore3;  
}
 //Divisione 
{
 var valore4 = iniziale /3; 
 document.getElementById('valore4').innerHTML += valore4; 
}
 
 //Concatenazione 
 document.getElementById('valore5').innerHTML = `Concatenazione: ${iniziale} è un numero `; 