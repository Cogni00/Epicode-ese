function scrivi() 
   {
      let budget = 1000;
      let compere = 0;

      while (budget > 0) {
        let prezzi = Math.floor(Math.random() * 100);
        if (prezzi<= budget) {
          compere += 1;
          budget -= prezzi;
          document.getElementById('lista').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }
        if (budget < 100) {
          break;
        }
      }
    }
