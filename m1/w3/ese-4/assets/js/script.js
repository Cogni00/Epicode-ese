const stringa = 'Sto imparando JavaScript'; 

/*MAIUSCOLO*/
  var upper = stringa.toUpperCase(); 
  document.getElementById('maiuscola').innerHTML = upper;
/*MINUSCOLO*/
  var lower = stringa.toLowerCase(); 
  document.getElementById('minuscola').innerHTML = lower;
/*SINGOLE*/
  var divide = stringa.split(''); 
  document.getElementById('strArray').innerHTML = divide;
/*ESTRAI CARATTERI*/
   var estrCar = stringa.charAt(2) + stringa.charAt(1) + stringa.charAt(14) + stringa.charAt(18);
   document.getElementById('estraiCaratteri').innerHTML = estrCar; 
/*CONCATENA*/
var catena = stringa.concat(' JS');
document.getElementById('concatena').innerHTML = catena;
/*ESTRAI STRINGA*/
var estrStr = stringa.slice(5,9); 
document.getElementById('estraiStringa').innerHTML = estrStr;
 /* ARRAY*/
 var arrayNomi = ['Giovanni' ,'Carla' ,' Piero' ,'Mirtilla'];
 document.getElementById('array').innerHTML = arrayNomi; 
 /*LUNGHEZZA*/
 var lunghezza = arrayNomi.length; 
 document.getElementById('lunghezza').innerHTML = lunghezza; 
 /*ELEMENTO*/
 document.getElementById('elemento').innerHTML = arrayNomi[2];
 /*ULTIMO*/
 document.getElementById('ultimo').innerHTML = arrayNomi[3];
 /*MODIFICATO*/
 var altroNome = arrayNomi.splice(2,1,'Massimo');
 document.getElementById('modificato').innerHTML = arrayNomi;

/*ETA*/ 
 
 const calcolaAnni = function (compleanno) {
   return 2022 - compleanno; 
 }
 const annoNascita = [2001, 1990, 1987, 2018, 2010];

 const mario = calcolaAnni(annoNascita[0]); 
 document.getElementById('eta1').innerHTML += mario + 'anni'; 
 const anna = calcolaAnni(annoNascita[1]); 
 document.getElementById('eta2').innerHTML += anna + 'anni'; 
 const maria = calcolaAnni(annoNascita[2]); 
 document.getElementById('eta3').innerHTML += maria + 'anni'; 
 const nicola = calcolaAnni(annoNascita[3]); 
 document.getElementById('eta4').innerHTML += nicola + 'anni'; 
 const giovanna = calcolaAnni(annoNascita[4]); 
 document.getElementById('eta5').innerHTML += giovanna + 'anni'; 

 var arrayEta = [mario, anna, maria, nicola, giovanna]
 document.getElementById('arrayEta').innerHTML = 'Array :' + arrayEta; 

 /*ANIMALI*/

 let arrayAnimali = ['coniglio' , 'cane', 'gatto', 'criceto'];
 document.getElementById('intero').innerHTML = arrayAnimali; 

  let ultimo = arrayAnimali.push("leone"); 
 document.getElementById('aggiunto').innerHTML = arrayAnimali; 
 
 let estratto = arrayAnimali.pop(); 
 document.getElementById('estratto').innerHTML = arrayAnimali

 document.getElementById('verifica1').innerHTML = arrayAnimali.includes('criceto');

 document.getElementById('verifica2').innerHTML = arrayAnimali.includes('zebra');



 

