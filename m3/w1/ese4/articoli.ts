var shopping: Articoli []; 

class Articoli {
       id: number;
      codprod: number; 
      collezione: string;
      capo: string;
      modello: number;
      quantita: number; 
      colore: string; 
      prezzoivaesclusa: number; 
      prezzoivainclusa: number; 
      disponibile: string; 
      saldo: number; 

      constructor(_id: number, _codprod: number, _collezione: string, _capo: string, _modello: number, 
        _quantita: number, _colore: string, _prezzoivaesclusa: number, _prezzoivainclusa: number,
        _disponibile: string, _saldo: number) {

           this.id = _id;   
           this.codprod = _codprod;
           this.collezione = _collezione;
           this.capo = _capo;
           this.modello = _modello; 
           this.quantita = _quantita;
           this.colore = _colore;
           this.prezzoivaesclusa = _prezzoivaesclusa;
           this.prezzoivainclusa = _prezzoivainclusa;
           this.disponibile = _disponibile;
           this.saldo = _saldo; 
        }

        getsaldocapo(): number {
            return this.prezzoivainclusa * this.saldo / 100;

        }
       
        getacquistocapo(): number {
            return this.prezzoivainclusa - this.getsaldocapo();
        }
}

fetch("http://localhost:3000/shopping").then(res=>res.json()).then((articoli: Articoli[])=> {
    shopping = articoli;
    shopping.map((vestiti) => {
        let spesePazze = new Articoli(vestiti.id, vestiti.codprod, vestiti.collezione,
             vestiti.capo, vestiti.modello, vestiti.quantita, vestiti.colore, vestiti.prezzoivaesclusa, 
             vestiti.prezzoivainclusa, vestiti.disponibile, vestiti.saldo );
             
        console.log(spesePazze);
        console.log(spesePazze.getacquistocapo());
    });
})
