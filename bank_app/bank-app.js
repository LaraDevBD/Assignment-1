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
        console.log("===============================");
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
        console.log("===============================");
    }
}

const bankAccount1 = new BankAccount(1234,"Habil Mondol",9999);
const bankAccount2 = new BankAccount(4567,"Kabil Mondol",3099);