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