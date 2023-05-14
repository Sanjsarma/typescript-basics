const user = {
    name: "sanjana",
    email: "s@s.com",
    isPaid: true
}
//expects parameters of type 
function createUser({name: string, isPaid: boolean}){};

//if email is given, error as the createUser function is not expecting email. 
createUser({name: "bla", isPaid: true, email: 's#s'})

//expects object to be returned of this form
function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 200};
}
export {};