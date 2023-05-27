//combining types
var num;
num = 1;
num = "abcd";
//union
var sanj = { name: "sanj", id: 1 };
sanj = { username: "sanj119", id: 1 };
// let sanj: user = {name: "sanj", id: 1};
// sanj = {username: "sanj119", id: 1}; //error as username does not belong to type user
//can’t use methods that are only available on strings
function printId(id) {
    // console.log(id.toUpperCase()); //available only for string
    //narrowing union with code 
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
//union of arrays 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
//error as ["1", "2", 3] is of type (string | number)[]
// const data3: string[] | number[] = ["1", "2", 3];
var data3 = ["1", "2", 3];
