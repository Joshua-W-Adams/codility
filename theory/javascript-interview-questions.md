# Interview Questions

1. What are the different data types present in javascript?

To know the type of a JavaScript object we can use the typeof operator.

    1. Primative types - string, bool, number, null (non existant or invalid value), undefined - when a variable is declared but not assigned, null, BigInt (used to store numbers which are above the limitation of the number data type), Symbol (new type of data introduced in ES6 used to store an annon and unique value)


    2. Non-primative types- primative data types store a single value. To store multiple and complex values a non-primative datatype is required. All non primative types in JS are simply typeof Object.

2. Explain Hoisting in javascript.

Hoisting is the default behaviour of javascript where all the **variable** and **function** declarations are moved on top.

This means that irrespective of where the variables and functions are declared, they are moved on top of the scope. The scope can be both local and global.

```js
// global scope example
hoist(); // prints 1

// local scope example
function hoist() {
  a = 1;
  console.log(a); // prints 1
  var a; // this line will be hoisted to the top of the function.
}
```

3. Why do we use the word “debugger” in javascript?

A debugger is a tool used in software development that assists programmers in examining and modifying the behavior of a program while it is executing.

The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.

4. Difference between “ == “ and “ === “ operators.

"==" is the equality operator, and;
"===" is the strict equality operator.

Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types.

Example:

```js
var x = 2;
var y = "2";
(x == y)(
  // Returns true since the value of both x and y is the same
  x === y
); // Returns false since the typeof x is "number" and typeof y is "string"

var a = 0;
var b = undefined;

(a == b)(
  // returns true
  a === b
); // returns false
```

5. Difference between var, let and const keyword in javascript.

All are mechanism to declare a variable.

var has function and global scope.
let has block scope
const has block scope and its value never changes

let and const are hoisted but not initialised. Referencing the variable before the block results in a ReferenceError.

6. What is a block in JavaScript.

A block is simple a piece of code enclosed by curly braces {}. This could be an if statement, for loop or function definition. Blocks give code in JavaScript scope.

7. Explain Implicit Type Coercion in javascript.

Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types. There are multiple types of coersion as follows:

    - String coersion

```js
var x = 3;
var y = "3";
x + y // Returns "33"
x == b // returns true


var x = 3;
Var y = "3";
x - y    // Returns 0 since the variable y (string type) is converted to a number type
```

    - Boolean coersion

Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

Truthy values are those which will be converted (coerced) to true.
Falsy values are those which will be converted to false.

All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.

If statements

```js
var x = 0;
var y = 23;

if (x) {
  console.log(x); // The code inside this block will not run since the value of x is 0(Falsy)
}

if (y) {
  console.log(y); // The code inside this block will run since the value of y is 23 (Truthy)
}
```

Logical operators:

Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

OR ( || ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

```js
var x = 220;
var y = "Hello";
var z = undefined;

x || y; // Returns 220 since the first value is truthy

x || z; // Returns 220 since the first value is truthy

x && y; // Returns "Hello" since both the values are truthy

y && z; // Returns undefined since the second value is falsy

if (x && y) {
  console.log("Code runs"); // This block runs because x && y returns "Hello" (Truthy)
}

if (x || z) {
  console.log("Code runs"); // This block runs because x || y returns 220(Truthy)
}
```

7. Is javascript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.

Since javascript is a loosely(dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.

```js
var a = 23;
var a = "Hello World!";
```

8. What is NaN property in JavaScript?

NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.

typeof of NaN will return a Number.

To check if a value is NaN, we use the isNaN() function,

```js
isNaN("Hello"); // Returns true
isNaN(345); // Returns false
isNaN("1"); // Returns false, since '1' is converted to Number type which results in 0 ( a number)
isNaN(true); // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false); // Returns false
isNaN(undefined); // Returns true
```

9. Explain passed by value and passed by reference.

In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

To understand padded by reference and passed by value, we need to understand how the assign operator works for primative and non-primative data types in JS.

For a primative type, e.g. a number. when we assign var a = 2. A location in memory is assigned to the variable and the value is stored at this location in memory.

When we attempt to assign var a to another variable. For example b. A new location in memory is assigned and the value of a is copied to this location.

```js
var y = #8454; // y pointing to address of the value 234

var z = y;

var z = #5411; // z pointing to a completely new address of the value 234

y = 23; // Changing the value of y
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
```

Non primative types are passed by reference, which means that the assign operation assigns the same location in memory to new instances that reference varaiable a.

```js
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;
```

Because the variable uses the same location in memory for the data, updating obj or obj2 in the example above will update the same data so the results of logging both of these variables will be the same.

```js
var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj2 = obj;

var obj2 = #8711; // obj2 pointing to the same address

// changing the value of obj1

obj.name = "Akki";
console.log(obj2);

// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
```

10. What is an Immediately Invoked Function in JavaScript?

Or IIFE (Immediately Invoked Function Execution) is quite simply a function which is defined, then immediately called. An basic example of an IFFE is provided below:

```js
(function () {
  console.log("hello from iffe");
})();
```

To understand an IIFE we need to understand the two sets of parenthesis in the example above.

Set 1 - We tell the compiler that the function is a **function expression** not a **function definition**. When executing JS code whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name.

Set 2 - function invocation to immediately execute the function

11. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?

A way to opt in to a restricted variant of JavaScript where all silent errors are thrown. You can enable strict mode by using the "use strict" statement at the top of your js code. Some of teh most important changes in behaviour are as follows:

1. All variables must be declared
2. Assignment to undefined variables throws
3. No duplicated parameter names in functions

4. Explain Higher Order Functions in javascript.

Functions that operate on other functions, either by taking them as arguments or by returning them. A few examples of Higher Order functions are as follows:

```js
function hof() {
  return function someFunction() {
    return "Hello from hof";
  };
}
console.log(hof()());

function hof2(callback) {
  const result = callback();
  return result;
}

hof2(function () {
  console.log("Hello world");
});
```

13. Explain “this” keyword.

The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.

Lets do a few examples:

```js
function doSomething() {
  console.log(this);
}

doSomething(); // prints the global object
```

```js
var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

obj.getName(); // print vivek, as this requests the "obj" object.
```

```js
var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

var getName = obj.getName; // reassign function to new variable

var obj2 = { name: "akshay", getName }; // reassign to new object
obj2.getName(); // print askay, as obj2 invoked the function not obj one.
```

The silly way to understand the “this” keyword is, whenever the function is invoked, check the object before the dot. The value of this . keyword will always be the object before the dot.

14. What do you mean by Self Invoking Functions?
