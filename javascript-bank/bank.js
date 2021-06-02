/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else if (typeof holder !== 'string') {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);

    this.accounts.push(newAccount);
  }
  this.nextAccountNumber++;
  return this.nextAccountNumber - 1;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var getTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    getTotal += this.accounts[i].getBalance();
  }
  return getTotal;
};
