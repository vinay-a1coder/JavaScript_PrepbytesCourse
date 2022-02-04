// LET VS VAR VS CONST 


// Accessing variable before initializing them --> Hoisting

// console.log(a); //--> If we want to print var before initializing then it gives undefined in output

// console.log(b); //--> If we want to print let before initializing then it gives reference error: can't access before initialization in  output

// console.log(c);  //--> If we want to print let before initializing then it gives reference error: can't access before initialization in  output

// If we call function before creating it then it doesn't give error. It simply gives function result. 

// Var can be redeclared and reassigned
var a = 2;
var a = 4;
a = 6;

// Let can be reassigned but cannot be redeclared
let b = 3;
b = 6;

// Const neither be redeclared nor be reassigned
const c = 5; 



// scope of variables

// Global scope (var variable can be used outside a loop but we can't use it outside a function).
if(2>=1){
    var myName = 'vinay';
}
function func(name){
    var myAge = 21;
}
// console.log(myName);
console.log(myAge);  //--> It gives error because var  have function scope


// Block scope(let variable neither be used outside a loop not from outside a function).
if(2>=1){
    let myName = 'vinay';
}
function func(name){
    let myAge = 21;
}
// console.log(myAge); --> It gives error because let  function scope
// console.log(myAge); -->It gives error because let  loop scope


//(const variable can be used outside a loop but we can't use it outside a function).
if(2>=1){
    const myName = 'vinay';
}
function func(name){
    const myAge = 21;
}
// console.log(myName);
// console.log(myAge);  -->It gives error because const  have function scope

