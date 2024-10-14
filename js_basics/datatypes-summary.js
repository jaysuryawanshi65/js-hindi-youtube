// Primitive 

// 7 types : String, Number , Boolean , Null, Undefined, Symbol , BigInt

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 20472384742877432n


// Reference Type (non-primitive)

// Array, Objects , Functions


const heros1 = ["superman","spiderman","batman"] =
{
    name:"jay",
    age: 24,
}

console.log(heros1);


const myFunction = function(){
    //console.log("helo world")
}

//console.log(typeof bigNumber)

// +++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(non-primitive) 

let myYoutubename = "jay"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jay@gogole.com"

console.log(userOne.email);
console.log(userTwo.email);
