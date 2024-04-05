class BankAccount{

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        this.displayAccountInfo();
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        if(amount<=this.balance){
            this.balance = this.balance - amount;
        }else{
            console.log("Insufficient funds");
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        console.log("=============================================");
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
        console.log("=============================================");
    }
}

console.log("First Account Created");
const bankAccount1 = new BankAccount(1234,"Habil Mondol",9999);
console.log("Second Account Created");
const bankAccount2 = new BankAccount(4567,"Kabil Mondol",3099);

// Deposit Functionality Demonstration
bankAccount1.deposit(442);
console.log("=============================================");
console.log("After Deopsiting $442 in "+bankAccount1.accountNumber+" account numebr the new balance is: $"+bankAccount1.getBalance());
console.log("=============================================");
