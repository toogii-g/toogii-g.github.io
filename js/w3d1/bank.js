class Bank {

    static nextNumber = 1;

    constructor (){
        this.accounts = [];
    }

    addAccount() {
        const account = new Account(Bank.nextNumber++);
        this.accounts.push(account);
        return account.number;
    }

    addSavingsAccount(interest) {
        const account = new SavingsAccount(Bank.nextNumber++, interest);
        this.accounts.push(account);
        return account.number;
    }

    addCheckingAccount(overdraft) {
        const account = new CheckingAccount(Bank.nextNumber++, overdraft);
        this.accounts.push(account);
        return account.number;
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(account => account.number !== number);
    }

    accountReport() {
        return this.accounts.map(account => account.toString()).join('\n');
    }

    endOfMonth() {
        return this.accounts.map(account => account.endOfMonth()).filter(report => report !== '').join('\n');
    }
}