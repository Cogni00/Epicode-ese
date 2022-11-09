var tempo = document.getElementById('tempo');

window.addEventListener('DOMContentLoaded', function() {
    timer();
    
});

function timer() {
    var secondi = sessionStorage.getItem('secondi') || 0; 
    interval = setInterval(function () {
        tempo.innerHTML = ' Tempo: ' + secondi + 'secondi'; 
        secondi++
        sessionStorage.setItem('secondi', secondi);
}, 1000); 
    
}