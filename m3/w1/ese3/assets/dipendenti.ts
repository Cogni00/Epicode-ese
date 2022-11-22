abstract class Lavoratore {
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number; 
    tasseirpef: number;

    constructor(_codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.codredd =  _codredd; 
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef =  _tasseirpef;
    }

    getUtileTasse(): number {
       var utile = this.redditoannuolordo * this.codredd / 100; 
       return utile;
    }

    getTasseInps(): number {
        var inps = this.getUtileTasse() * this.tasseinps / 100;
        return inps;
    }

    getTasseIrpef(): number {
        var irpef = this.getUtileTasse() * this.tasseirpef / 100;
        return irpef;
    }

    getRedditoAnnuoNetto(): number {
        var reddito = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return reddito;
    }

    stampaTasse(): any {
        console.log(`Utile: ${this.getUtileTasse()}`)
        console.log(`Tasse Inps: ${this.getTasseInps()}`)
        console.log(`Tasse Irpef: ${this.getTasseIrpef()}`)
        console.log(`Reddito annuo lordo: ${this.getRedditoAnnuoNetto()}`)
    }
}

class Professionista extends Lavoratore {
     
    constructor(_codredd: number, _redditoannuolordo: number) {
        super(_codredd, _redditoannuolordo, 12 , 20)
    }
}
let professionista = new Professionista (70, 50000);
professionista.stampaTasse();

class Artigiano extends Lavoratore {
     
    constructor(_codredd: number, _redditoannuolordo: number) {
        super(_codredd, _redditoannuolordo, 17 , 25)
    }
}
let artigiano = new Artigiano (57, 60000);
professionista.stampaTasse();


class Commerciante extends Lavoratore {
     
    constructor(_codredd: number, _redditoannuolordo: number) {
        super(_codredd, _redditoannuolordo, 10 , 30)
    }
}
let commerciante = new Commerciante (68, 100000);
professionista.stampaTasse();
 
