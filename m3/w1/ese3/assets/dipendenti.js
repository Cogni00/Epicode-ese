var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utile = this.redditoannuolordo * this.codredd / 100;
        return utile;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var inps = this.getUtileTasse() * this.tasseinps / 100;
        return inps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var irpef = this.getUtileTasse() * this.tasseirpef / 100;
        return irpef;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var reddito = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return reddito;
    };
    Lavoratore.prototype.stampaTasse = function () {
        console.log("Utile: ".concat(this.getUtileTasse()));
        console.log("Tasse Inps: ".concat(this.getTasseInps()));
        console.log("Tasse Irpef: ".concat(this.getTasseIrpef()));
        console.log("Reddito annuo lordo: ".concat(this.getRedditoAnnuoNetto()));
    };
    return Lavoratore;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_codredd, _redditoannuolordo) {
        return _super.call(this, _codredd, _redditoannuolordo, 12, 20) || this;
    }
    return Professionista;
}(Lavoratore));
var professionista = new Professionista(70, 50000);
professionista.stampaTasse();
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_codredd, _redditoannuolordo) {
        return _super.call(this, _codredd, _redditoannuolordo, 17, 25) || this;
    }
    return Artigiano;
}(Lavoratore));
var artigiano = new Artigiano(57, 60000);
professionista.stampaTasse();
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_codredd, _redditoannuolordo) {
        return _super.call(this, _codredd, _redditoannuolordo, 10, 30) || this;
    }
    return Commerciante;
}(Lavoratore));
var commerciante = new Commerciante(68, 100000);
professionista.stampaTasse();
