"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
};
loginUser("sanj", "s@s.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(4));
var heroes = ["loki", "ironman"];
heroes.forEach(function (item) {
    console.log(item);
});
heroes.map(function (hero) {
    console.log("hero is ".concat(hero));
});
