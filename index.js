/*
1. Ways to print in JavaScript.
console.log("Hello Samir...");
alert("FUCK YOU !!!");
document.write("this is document.write()");


2. JavaScript console API.  
console.log("Hello Samir...");
console.warn("This is Warning!");
console.error("This is Error...");


3. JavaScript Variables.
var num1 = 18;
var num2 = 02;
console.log(num1 + num2);


//4. JavaScript DataTypes.
// String
var str1 = 'Samir';
var str2 = 'Kumar';

// Number
var num1 = 18;
var num2 = 1.80;

// Objects
var marks = {
    sam : 85,
    sweety : 95,
    rishi : 65
}

// Boolean
var a = true; // true
var b = false; // false

var und = undefined; // undefined
var undi; // undefined

var n = null; // null

console.log(num1);
console.log(num2);
console.log(str1);
console.log(str2);
console.log(marks);
console.log(a);
console.log(b);
console.log(und);
console.log(undi);
console.log(n);

At a Very High Level, There are 2 types of DataTypes in JS
a) Primitive DataType : undefined, null, number, string, boolean, symbol
b) Reference DataType : Arrays and Objects.

// Arrays
var arr = [1, 2, 3, 4, 5];
console.log(arr);

//5. Operators in JavaScript
var a = 180;
var b = 20;
// Arithmatic Operators
console.log("The Value of a + b is ", a + b);
console.log("The Value of a - b is ", a - b);
console.log("The Value of a * b is ", a * b);
console.log("The Value of a / b is ", a / b);
// Assignment operators
var c = b;
a += 2;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a /= 2;
console.log(a);

//6. Functions
function avg(a, b)
{
    return (a + b) / 2;
}
c1 = avg(10, 20);
console.log(c1);

//7. Loops
var arr = [1, 2, 3, 4, 5];
//forEach loop
arr.forEach(function (element) {
  console.log(element);
});

//8. Array Methods
let arr = ["sam", 18, null, true];
let arr2 = new Array('apple', 'banana', 'orange', 'pineapples');
console.log(arr.length);
arr.push("sweety"); // add in last.
console.log(arr);
arr.pop(); //remove last item.
console.log(arr);
arr.shift(); //remove first item.
console.log(arr);
arr.unshift("neo"); //add in first.
console.log(arr);
console.log(arr2.toString());
console.log(arr2.join(' - '));
let newArr = arr.concat(arr2); //to join two arrays.
console.log(newArr.slice(1,4));
console.log(newArr.reverse()); 
let numArr = [5, 2, 6, 1, 7]; 
console.log(numArr.sort());
console/log(numArr.sort(function(a, b) {return a-b})); //another way of sorting
console/log(numArr.sort(function(a, b) {return b-a})); //another way of sorting in reverse order.

/*
//9. String Methods
let str = "I will be Successfull";
console.log(str.length);
console.log(str.indexOf("Successfull"));
console.log(str.slice(1, 5));
console.log(str.replace("will", "shall"));
let fruit = 'Apple';
let moreFruits = 'Apple\nBanana'; \\ '\n' for new line
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));
console.log(fruit.split(' '));


//10. Dates in JavaScript
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());

console.log("Hello...");
//alert('Fine!!!!!!');
//document.getElementById('someText').innerHTML = "Now This is Changed.."; //So this will grab the element by id and we can change it.
//age = prompt("What is your age ?");
//document.getElementById('agePrint').innerHTML = age;

//Creating a Function
function greeting()
{
  var name = prompt('What is Your Name ?');
  var res = 'Hello ' + name;
  console.log(res)
}
// Calling a function
greeting();

function sum(num1, num2)
{
  var res = num1 + num2;
  console.log(res);
}

sum(25, -4);

//11. Object in JavaScript
let student = {first : 'Samir', mid : 'Kumar', last : 'Ram'};
console.log(student.first);
console.log(student.mid);
console.log(student.last);
*/ 