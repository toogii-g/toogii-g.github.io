"use strict";

class CheckingAccount extends Account{
    constructor(number, overDraftLimit) {
        super(number);
        this.overDraftLimit = overDraftLimit; 
    }

    get overDraftLimit(){
        return this._overDraftLimit;
    }

    set overDraftLimit(overDraftLimit){
        this._overDraftLimit = -1 * overDraftLimit;
    }

    withdraw(amount){
        if(!((super.deposit-amount) < this.overDraftLimit)){
            deposit= this.deposit - amount;
        }
    }

    toString(){
        return super.toString() + " OverDraftLimit: " + this.overDraftLimit;
    }

    endOfMonth() {
        if (this.balance < 0) {
            return `Warning, low balance CheckingAccount ${this.number}: balance: ${this.balance} overdraft limit: ${this._overdraftLimit}`;
        }
        return '';
    }
}