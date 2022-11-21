class SonAccount {
    balanceInit: number;
    constructor(_balanceInit: number) {
        this.balanceInit = _balanceInit;
    }

    versamento(money: number) : number {
        return this.balanceInit + money;
    }

    prelievo(money: number) : number {
        return this.balanceInit - money;
    }

}
var figlio = new SonAccount(50);

class MotherAccount extends SonAccount {
    interesse: number; 
    constructor(_balanceInit: number = 0 ,  _interesse: number = 1.5){
        
        super(_balanceInit) 
        this.interesse = _interesse;
    }

    versamento(money: number) : number {
        return this.balanceInit + (money *  this.interesse);
    }

    prelievo(money: number) : number {
        return this.balanceInit - (money * this.interesse);
    }
}

var madre = new MotherAccount()