let loginUser = (name: string, email: string, isLoggedIn: boolean = false) => {};

loginUser("sanj", "s@s.com");

//parameter type annotation
function getValue(myVal: number){
    if(myVal > 5){
        return true;
    }
    return "200 OK";
}
console.log(getValue(4));

//in case of anonymous functions, type of variable is already known
const heroes = ["loki", "ironman"];

heroes.forEach((item) => {
    console.log(item);
})

heroes.map((hero): string => {
    return (`hero is ${hero}`);
})

//arrow function
const getHello = (s: string): string => {
    return "";
}

//return type annotation
//return type void
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

//returns type never
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}
export {};