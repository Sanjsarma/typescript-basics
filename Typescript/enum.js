"use strict";
//enums are used as types at compile-time to achieve type-safety for the constants but they are treated as objects at runtime.
Object.defineProperty(exports, "__esModule", { value: true });
//numeric enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 3] = "FOURTH"; //3
})(SeatChoice || (SeatChoice = {}));
var SeatChoice1;
(function (SeatChoice1) {
    SeatChoice1[SeatChoice1["AISLE"] = 11] = "AISLE";
    SeatChoice1[SeatChoice1["MIDDLE"] = 22] = "MIDDLE";
    SeatChoice1[SeatChoice1["WINDOW"] = 23] = "WINDOW";
    SeatChoice1[SeatChoice1["FOURTH"] = 24] = "FOURTH";
})(SeatChoice1 || (SeatChoice1 = {}));
//for string enums, all enum members should be initialized
// enum SeatChoice2 {
//     AISLE = "aisle",
//     MIDDLE = "middle",
//     WINDOW = "window",
//     FOURTH 
// }
var hcSeat = SeatChoice.AISLE;
//heterogeneous enums
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
//The keyof operator takes an object type and produces a string or numeric literal union of its keys. 
//typeof operator gives you the type of an object
//keyof typeof comes into picture when we do not know the type of the object
// eg - const bmw = { name: "BMW", power: "1000hp" }
//This is where we use keyof typeof together.
//The typeof bmw gives you the type: { name: string, power: string }. keyof - literal type union
function Trial(key) {
    var num = LogLevel[key];
    if (num <= LogLevel.WARN) {
        console.log("yes");
    }
}
Trial('ERROR');
// because enums are treated as objects are runtime, need to use keyof typeof for enum
var ColorsEnum;
(function (ColorsEnum) {
    ColorsEnum["white"] = "#ffffff";
    ColorsEnum["black"] = "#000000";
})(ColorsEnum || (ColorsEnum = {}));
var colorLiteral;
colorLiteral = "white"; // OK
colorLiteral = "black"; // OK
//reverse mappings
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[a]; // "A"
