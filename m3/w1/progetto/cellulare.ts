interface Smartphone {
    credito:number,
    numeroChiamate:number,
    ricarica(x:number):void,
    chiamata(minuti:number):void,
    numero404():number,
    getNumeroChiamate():number,
    azzeraChiamate():void, 

}

class User implements Smartphone {

    credito: number;
    numeroChiamate: number;

    constructor(_credito: number, _numeroChiamate: number) {
     
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
    }

    ricarica(x:number): void { 
        this.credito += x;
    }

    chiamata(minuti:number): void {
        this.credito -= minuti * 0.2;
        this.numeroChiamate ++; 

    }
    numero404(): number {
        return this.credito;

    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    azzeraChiamate(): void { 
        this.numeroChiamate = 0;
    }    
}

let ilaria = new User(0,0)
ilaria.ricarica(30)
ilaria.chiamata(2)
ilaria.ricarica(30)
ilaria.chiamata(2)

console.log("ilaria");
console.log("credito residuo" + " " + ilaria.numero404());
console.log("numero chiamate" + " " + ilaria.getNumeroChiamate());
ilaria.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + ilaria.getNumeroChiamate());


let giulia = new User(0,0)
giulia.ricarica(10)
giulia.chiamata(1)
giulia.ricarica(10)
giulia.chiamata(1)

console.log("giulia");
console.log("credito residuo" + " " + giulia.numero404());
console.log("numero chiamate" + " " + giulia.getNumeroChiamate());
giulia.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + giulia.getNumeroChiamate());

let andrea = new User(0,0)
andrea.ricarica(20)
andrea.chiamata(2)
andrea.ricarica(20)
andrea.chiamata(3)

console.log("andrea");
console.log("credito residuo" + " " + andrea.numero404());
console.log("numero chiamate" + " " + andrea.getNumeroChiamate());
andrea.azzeraChiamate();
console.log("chiamate presenti in rubrica" + " " + andrea.getNumeroChiamate());



