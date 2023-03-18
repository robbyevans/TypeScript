"use strict";
let age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
function handleClick(document) {
    if (typeof document === "string") {
        return document;
    }
    else {
        return ("undefined");
    }
}
let numbers = [1, 2, 3, 4, 5];
let words = ["hello", "mandy", "jean"];
let array = [1, "robby"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2023) {
        return income * 0.16;
    }
    return income * 0;
}
console.log(calculateTax(100000, 2025));
let employee = {
    id: 1,
    name: "Robby",
    retire: (date) => {
        console.log(date);
    }
};
function kgsToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgsToLbs("10kgs"));
let textBox = {
    drag: () => {
    },
    resize: () => {
    },
};
let quantity = 50;
let units = 'cm';
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Holla Papi!");
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
let newCustomer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map