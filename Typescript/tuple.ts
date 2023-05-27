// tuple os with array with restrictions 
let tUser: [string, number, boolean];

tUser = ["ho", 1, true];

//following is an error as order of types do not match order of values
// tUser = [ 1, "ho", true]; 

type User = [number, string];
const newUser: User = [11, 'san'];

newUser[1] = 'san@gmail.com';
//newUser.push(true);

export {}