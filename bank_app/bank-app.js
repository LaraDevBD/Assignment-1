class BankAccount{

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        // Checking if the account balance is sufficient for withdrawal
        if(amount<=this.balance){
            this.balance = this.balance - amount;
            return true;
        }else{
            console.log("Insufficient Balance for Withdrawal");
            return false;
        }
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        console.log("Account Number: "+this.accountNumber);
        console.log("Owner Name: "+this.ownerName);
        console.log("Balance: $"+this.balance);
    }
}

//Creating Two Instances as per instructions
console.log("=========================================================");
const bankAccount1 = new BankAccount(1001,"Habil Mondol",9999);
console.log(":::::: First Bank Account Opened ::::::");
bankAccount1.displayAccountInfo();
console.log("=========================================================");
const bankAccount2 = new BankAccount(1002,"Kabil Mondol",3099);
console.log(":::::: Second Bank Account Opened ::::::");
bankAccount1.displayAccountInfo();
console.log("=========================================================");

// Deposit Functionality Demonstration
console.log("=========================================================");
console.log(":::::: Deposit Functionality Demonstration ::::::");
console.log("=========================================================");
console.log("Before Deopsiting into the Account Number  "+bankAccount1.accountNumber+"  the Balance was: $"+bankAccount1.getBalance());
bankAccount1.deposit(442);
console.log("After Deopsiting into the Account Number  "+bankAccount1.accountNumber+"  the New Balance is: $"+bankAccount1.getBalance());
console.log(">> And Here is the Updated Account Inforamtion <<");
bankAccount1.displayAccountInfo();
console.log("=========================================================");

// Withdraw Functionality Demonstration
console.log("=========================================================");
console.log(":::::: Withdraw Functionality Demonstration ::::::");
console.log("=========================================================");
console.log("Before Withdrawal from the Account Number "+bankAccount2.accountNumber+" the Balance was: $"+bankAccount2.getBalance());
let withdrawState =  bankAccount2.withdraw(500);
if (withdrawState==true){
    console.log("After Withdrawal from the Account Number "+bankAccount2.accountNumber+"  the New Balance is: $"+bankAccount2.getBalance());
}
console.log(">> And Here is the Updated Account Inforamtion <<");
bankAccount2.displayAccountInfo();
console.log("=========================================================");