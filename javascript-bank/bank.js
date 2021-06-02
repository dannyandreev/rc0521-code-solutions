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
    console.log(balance)
    var newAccount = new Account(this.nextAccountNumber, holder)
    newAccount.deposit(balance)
    console.log(newAccount)
  this.accounts.push(newAccount)
  }
  this.nextAccountNumber++;
  return this.nextAccountNumber-1;
}


Bank.prototype.getAccount = function(number) {
  for(account in accounts) {
    console.log(account)
    console.log(account.number)
    if(account.number === number) {
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
