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
        console.log("=========================================================");
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
        console.log("=========================================================");
    }
}

//Creating Two Instances as per instructions
console.log("=========================================================");
console.log(":::::: First Bank Account ::::::");
const bankAccount1 = new BankAccount(1234,"Habil Mondol",9999);
console.log(":::::: Second Bank Account ::::::");
const bankAccount2 = new BankAccount(4567,"Kabil Mondol",3099);

// Deposit Functionality Demonstration
console.log("=========================================================");
console.log(":::::: Deposit Functionality Demonstration ::::::");
bankAccount1.deposit(442);
console.log("After Deopsiting $442 in "+bankAccount1.accountNumber+" Account Number the New Balance is: $"+bankAccount1.getBalance());
console.log("=========================================================");

// Withdraw Functionality Demonstration
console.log("=========================================================");
console.log(":::::: Withdraw Functionality Demonstration ::::::");
bankAccount2.withdraw(340);
console.log("After Withdrawing $340 from "+bankAccount2.accountNumber+" Account Number the New Balance is: $"+bankAccount2.getBalance());
console.log("=========================================================");

// Showing Updated Account Info
console.log("=========================================================");
console.log(":::::: And Here is the Updated Account Inforamtion ::::::");
bankAccount1.displayAccountInfo();
bankAccount2.displayAccountInfo();
