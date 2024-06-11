"use strict";

class SavingsAccount extends Account{
    constructor(number, interest) {
        super(number);
        this.interest = interest; 
    }

    get interest(){
        return this._interest;
    }

    set interest(interest){
        this._interest = interest;
    }

    addInterest(){
        this.deposit(this._balance*(this._interest/100));
    }

    toString(){
        return super.toString()+" Interest: " + this._interest;
    }

    endOfMonth() {
        const interestAmount = this._balance * this._interest / 100;
        this.addInterest();
        return `Interest added SavingsAccount ${this.number}: balance: ${this.balance} interest: ${interestAmount}`;
    }
}