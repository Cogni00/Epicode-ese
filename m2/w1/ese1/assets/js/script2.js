
const time = new Date().getHours();

let verifica;


    if (time < 12) {
        verifica = 'Buongiorno!';
    }
    else if (time < 18) {
        verifica = 'Buon Pomeriggio!';   
    }
    else  {
       verifica = 'Buonasera!';
    }


    document.getElementById('saluto').innerHTML = verifica;