var dataAttuale = new Date();
document.getElementById('dataOggi').innerHTML = dataAttuale;

var day = dataAttuale.getDate();
document.getElementById('giorno').innerHTML = `Giorno: ${day} `;

var month = dataAttuale.getMonth();
document.getElementById('mese').innerHTML = `Mese: ${month} `;

var year = dataAttuale.getFullYear();
document.getElementById('anno').innerHTML = `Oggi è il ${day} - ${month} - ${year}`;


var arrayMonths = ['Gennaio' , 'Febbario' , 'Marzo' , 'Aprile' , 'Maggio' , 'Giugno' , 'Luglio',
'Agosto' , 'Settembre' , 'Ottobre' , 'Novembre' , 'Dicembre'];

document.getElementById('stringa').innerHTML = ` ${day} / ${arrayMonths[month]} / ${year}`;


