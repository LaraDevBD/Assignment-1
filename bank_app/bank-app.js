class BankAccount{

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
    }

}