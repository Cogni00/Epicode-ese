
//leggi il valore sullo schermo
 function n(dato) { 
   document.getElementById("schermo").value += dato;
}
 // dopo aver letto, esegui i calcoli
function operazione() { 
document.getElementById("schermo").value=eval(document.getElementById("schermo").value); 
}
//display vuoto
function cancella() { 
 document.getElementById("schermo").value=""; 
}

function radiceQuadrata() {
 document.getElementById("schermo").value = Math.sqrt(document.getElementById("schermo").value);
}

var toggleBtn = document.getElementById('toggle-btn');

toggleBtn.onclick = function() {
        this.classList.toggle('toggle-btn--dark');
        document.body.classList.toggle('dark-mode');
    }
