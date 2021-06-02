/* exported Bank */
function Bank() {
 this.nextAccountNumber = 1;
 this.accounts = [];
}

Bank.prototype.openAccount = function(holder, balance) {
  if(!Number.isInteger(balance) || balance <= 0) {
    return null;
  } else if(typeof holder !== 'string') {
    return null;
  } else {
    var newAccount = new Account(this.nextAccountNumber, holder)
    newAccount.deposit(balance)

  this.accounts.push(newAccount)
  }
  this.nextAccountNumber++;
  return this.nextAccountNumber-1;
}


Bank.prototype.getAccount = function(number) {
  for(var i = 0; i < this.accounts.length; i++) {
    console.log('accounts[i]: '+accounts[i])
    console.log('accounts[i].number' + accounts[i].number)
    if(accounts[i].number === number) {
      console.log('account returned')
      return account
    }
  }
  return null;
}


Bank.prototype.getTotalAssets = function() {
  var getTotal = 0;
  for (account in this.accounts){
    getTotal += account.balance
  }
  return getTotal
}
