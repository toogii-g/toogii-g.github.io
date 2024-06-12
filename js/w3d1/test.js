// test.js
const expect = chai.expect;

describe('Account', () => {
    let account;

    beforeEach(() => {
        account = new Account(1);
    });

    it('should get the account number', () => {
        expect(account.number).to.equal(1);
    });

    it('should get the account balance', () => {
        expect(account.balance).to.equal(0.0);
    });

    it('should deposit money', () => {
        account.deposit(50);
        expect(account.balance).to.equal(50);
    });

});
