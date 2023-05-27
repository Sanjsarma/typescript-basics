//combining types
let num: number | string;

num = 1;

num = "abcd";
 
// num = {} error

type user = {
    name: string; 
    id: number;
}

type Admin = {
    username: string; 
    id: number;
}

//union
let sanj: user | Admin = {name: "sanj", id: 1};
sanj = {username: "sanj119", id: 1};

// let sanj: user = {name: "sanj", id: 1};
// sanj = {username: "sanj119", id: 1}; //error as username does not belong to type user

//can’t use methods that are only available on strings
function printId(id: number | string) {
   // console.log(id.toUpperCase()); //available only for string
   //narrowing union with code 
   if(typeof id === "string"){
       console.log(id.toUpperCase());
   } else {
       console.log(id);
   }
}

//union of arrays 
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
//error as ["1", "2", 3] is of type (string | number)[]
// const data3: string[] | number[] = ["1", "2", 3];

const data3: (string | number)[] = ["1", "2", 3];

export {};
