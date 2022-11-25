var User = /** @class */ (function () {
    function User(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.ricarica = function (x) {
        this.credito += x;
    };
    User.prototype.chiamata = function (minuti) {
        this.credito -= minuti * 0.2;
        this.numeroChiamate++;
    };
    User.prototype.numero404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var ilaria = new User(0, 0);
ilaria.ricarica(30);
ilaria.chiamata(2);
ilaria.ricarica(30);
ilaria.chiamata(2);
console.log("ilaria");
console.log("credito residuo" + " " + ilaria.numero404());
console.log("numero chiamate" + " " + ilaria.getNumeroChiamate());
ilaria.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + ilaria.getNumeroChiamate());
var giulia = new User(0, 0);
giulia.ricarica(10);
giulia.chiamata(1);
giulia.ricarica(10);
giulia.chiamata(1);
console.log("giulia");
console.log("credito residuo" + " " + giulia.numero404());
console.log("numero chiamate" + " " + giulia.getNumeroChiamate());
giulia.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + giulia.getNumeroChiamate());
var andrea = new User(0, 0);
andrea.ricarica(20);
andrea.chiamata(2);
andrea.ricarica(20);
andrea.chiamata(3);
console.log("andrea");
console.log("credito residuo" + " " + andrea.numero404());
console.log("numero chiamate" + " " + andrea.getNumeroChiamate());
andrea.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + andrea.getNumeroChiamate());
