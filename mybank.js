var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountbalance) {
        this.accountBalance = accountbalance;
    }
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credit successfully get into new account and your balance is:" + this.accountBalance);
        }
        else {
            console.log("credit unsuccesful");
        }
    };
    Bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log("debit successfully share in new account balance:" + this.accountBalance);
        }
        else {
            console.log("debit unsuccesful");
        }
    };
    return Bankaccount;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
this.person = person;
this.age = age;
this.gender = gender;
this.mobile_number = mobile_number;
this.bankaccount = bankaccount;
display();
{
    console.log("name: " + this.person.firstname + "" + this.person.lastname);
    console.log("age: " + this.age);
    console.log("gender: " + this.gender);
    console.log("mobile_number: " + this.mobile_number);
    console.log("amount in bank: " + this.bankaccount.accountbalance);
    console.log();
}
var a1 = new Bankaccount(800);
var c1 = new Customer({ firstname: "sara", lastname: "khan" }, 25, "female", 145278, a1);
c1.display;
c1.bankaccount.debit(400);
console.log();
var a2 = new Bankaccount(800);
var c2 = new Customer({ firstname: "shayan", lastname: "khan" }, 28, "male", 145278, a2);
c1.display;
c1.bankaccount.debit(400);
console.log();
