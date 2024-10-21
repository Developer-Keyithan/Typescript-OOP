"use strict";
// class bankNumber {
//     private accountNumber : number;
//     private owner: string;
//     public balance: number;
// }
// public deposite(amount: number): void {
//     if (amount > 0) {
//         balance += amount;
//         console.log(`${amount} rupees deposited`)
//         console.log(`Your new balance is: ${balance}`)
//     }
//     else {
//         break;
//     }
// }
// public withdraw(amount: number): void {
// }
// public checkBalance(amount: number): void {
// }
// private interestRate(): number {
// }
// public applyInterest(): void {
// }
// Base class BankAccount
class BankAccount {
    constructor(accountNumber, owner, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`${amount} deposited. New balance: ${this.balance}`);
        }
        else {
            console.log("Deposit amount must be greater than zero.");
        }
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds for withdrawal.");
        }
        else {
            this.balance -= amount;
            console.log(`${amount} withdrawn. New balance: ${this.balance}`);
        }
    }
    checkBalance() {
        console.log(`Account balance: ${this.balance}`);
        return this.balance;
    }
}
// Derived class SavingsAccount from BankAccount
class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, initialBalance, interestRate) {
        super(accountNumber, owner, initialBalance);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest of ${interest} applied. New balance: ${this.balance}`);
    }
}
// Test Regular Bank Account
function testRegularAccount() {
    const regularAccount = new BankAccount(1001, "John Doe", 500);
    regularAccount.deposit(300);
    regularAccount.withdraw(200);
    regularAccount.checkBalance();
}
// Test Savings Account
function testSavingsAccount() {
    const savingsAccount = new SavingsAccount(2001, "Jane Doe", 1000, 0.05);
    savingsAccount.deposit(500);
    savingsAccount.applyInterest();
    savingsAccount.checkBalance();
    savingsAccount.withdraw(700);
    savingsAccount.checkBalance();
}
