let greetings: string = "hey you";
let numberOne = 1;

console.log(numberOne);

console.log(greetings);

let hero: string;

function getHero(){
    return "thor";
    //return "thor": also accepted
    // return true; : accepted
}

hero = getHero();

//accepts parameter of type number, expects result to be of type number
function addTwo(num: number): number{
    return num + 2;
    //return "hello";
}

console.log(addTwo(3));
//temporary fix for cannot redeclare block scoped variable error 
export {}