var shopping;
var Articoli = /** @class */ (function () {
    function Articoli(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
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
    Articoli.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Articoli.prototype.getacquistocapo = function () {
        return this.prezzoivainclusa - this.getsaldocapo();
    };
    return Articoli;
}());
fetch(" http://localhost:3000/shopping").then(function (res) { return res.json(); }).then(function (articoli) {
    shopping = articoli;
    shopping.map(function (vestiti) {
        var spesePazze = new Articoli(vestiti.id, vestiti.codprod, vestiti.collezione, vestiti.capo, vestiti.modello, vestiti.quantita, vestiti.colore, vestiti.prezzoivaesclusa, vestiti.prezzoivainclusa, vestiti.disponibile, vestiti.saldo);
        console.log(spesePazze);
        console.log(spesePazze.getacquistocapo());
    });
});
