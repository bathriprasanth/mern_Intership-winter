console.log(a)
//hoisting-(undefined)

var a=10;
//global scope /Function scope
console.log(a);

//ES6
//let and const
//console.log(b)
//reference Error
//temporal Dead Zone
let b=20;
b=130;
//Block scope
console.log(b);

//{
//  let b=30;
//   console.log(b)
//}
//console.log(c);
c=70;

console.log(c);


//Functions
//1.Named functions
//function declaration
function namedFunc(){
    console.log("Named function called");
    console.log("Named function called");
    console.log("Named function called");
}

//function calll/Invoakation
namedFunc();
//funcExp();
//2.Function Expression

let funcExpc = function ()
{
    console.log("Function Expression called");
};

funcExpc();
//3.Arrow Function (ES6)
let arrow=()=>{
    console.log("Arrow Function called");
};

arrow();

//4.Callback Function and 5.IIFE(Immediately Invoked Function Expression)

(()=>{
    console.log("Callback and IIFE function called");
})();

//program to add two numbers

const addTwoNumbers = (parameter1 ,parameter2)=>{
    console.log(parameter1,parameter2);

    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let sum = num1 + num2;
    console.log("The sum of two numbers is: ",sum);

};
addTwoNumbers(10,20);
addTwoNumbers(890,28);
addTwoNumbers(5690,54);