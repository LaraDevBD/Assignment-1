class BankAccount{

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        console.log("===============================");
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
        console.log("===============================");
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

}

const bankAccount1 = new BankAccount(1234,"Habil Mondol",9999);
const bankAccount2 = new BankAccount(4567,"Kabil Mondol",3099);