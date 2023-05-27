const user = {
    name: "sanjana",
    email: "s@s.com",
    isPaid: true
}
//expects parameters of type 
function createUser({name: string, isPaid: boolean}){};

//if email is given, error as the createUser function is not expecting email. 
createUser({name: "bla", isPaid: true})

//createUser({name : "sanj", isPaid: false, email: 'sanj'}); : error

// the following is allowed
let newUser = {name: "sanj", isPaid: true, email: "sanj"};

createUser(newUser);

//type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function userCreation(user: User): User {
    return ({name: "", email: "", isActive: false});
}

//read only value for objexts; can be accessed outside the class but value cannot be changes
type User1= {
    readonly userId: number;
    name: string;
    email: string;
    creditCardDetails?: number; //optional
}

let user1: User1 = {
    userId: 1,
    name: "sanj",
    email: "sanj@gmail.com"
}

user1.email = "san@gmail.com";
// user1.userId = 2; error as it is a read only value

type cardNumber = {
    cardnumber : string;
}

type cardDate = {
    carddate: string;
}

//defining new type based on combo of previous types
type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

type Point = {
    x: number;
    y: number;
}

function printCoordinates(pt: Point){
    console.log(`x: ${pt.x}`);
    console.log(`y: ${pt.y}`);
}

printCoordinates({x: 5, y: 10});

//expects object to be returned of this form
function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 200};
}

export {};