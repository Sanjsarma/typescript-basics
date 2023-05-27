"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "hey you";
var numberOne = 1;
console.log(numberOne);
console.log(greetings);
var hero;
function getHero() {
    return "thor";
    //return "thor": also accepted
    // return true; : accepted
}
hero = getHero();
//accepts parameter of type number, expects result to be of type number
function addTwo(num) {
    return num + 2;
    //return "hello";
}
console.log(addTwo(3));
var seatAllotment;
