{
  // Javascript Always Written In camelCase, camelCase Example {helloWorld}
  // try And catch (Error Handling) ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  // debugger KeyWord ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger
  // In Every Object, ObjectName.KeyValue == this.KeyValue, this Represent ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
  // String And String Methods
  // Array And Array Methods, Array With Loop ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
  // Object And Object Methods ------- https://www.freecodecamp.org/news/how-to-iterate-over-objects-in-javascript/
  // Do While Loop, While Loop, For Loop, For In Loop, For Of Loop
  // If Else And Switch Case Statements
  // Math In Js ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  // new Date And Date In Js ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  // ES6 Arrow Function And Call Back , Clouser , IIFE Function, call (), apply(), bind()
  // Hoisting ------- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
  // Iterators Means All Things In Js Who Have An Index Is Iterators ---- Example:- String And Array
  // new Audio
  // eval()
  // window.print(), window.open(), window.close()
  // Event ------- https://developer.mozilla.org/en-US/docs/Web/Events
  // addEventListner ------- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  // Ternary Operator (condition)? true:false
  // Spread Operator ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // Rest Operator ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
  // setTimeout clearTimeout In Js
  // setInterval clearInterval In Js
  // DOM Methods In Js ------- https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
  // BOM Methods In Js ------- https://developer.mozilla.org/en-US/docs/Web/API/Window
  // Window Api In Js ------- https://developer.mozilla.org/en-US/docs/Web/API
  // class In OOP ------- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
  // async And await ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#:~:text=Use%20of%20async%20and%20await,you%20will%20get%20a%20SyntaxError%20.
  // new Promise In Js ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  // Ajax = new XMLHttpRequest In Js
  // JSON Method In Js ------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
  // Fetch In Js ------- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
}
{
  // Call Stack And Execution Context ------- https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=The%20Execution%20Stack%2C%20also%20known,single%20task%20at%20a%20time.
  // Execution Stack And Execution Context ------- https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/#:~:text=The%20Execution%20Stack%2C%20also%20known,single%20task%20at%20a%20time.
}
{
  // Array And Object Destructuring........

  // Array Destructuring
  let are = [1, "String", true];
  let [de, struc, turing] = are;
  console.log(de);
  console.log(struc);
  console.log(turing);

  // Object Destructuring With Valid Syntax
  let obj = {
    name: "name",
    age: 100,
    boolean: true,
  };
  let { name, age, boolean } = obj;
  console.log(name);
  console.log(age);
  console.log(boolean);

  // Object Destructuring With Invalid Syntax
  let newObj = {
    newName: "name",
    newAge: 100,
    newBoolean: true,
  };
  let { Name, Age, Booleans } = newObj;
  console.log(Name);
  console.log(Age);
  console.log(Booleans);
}
{
  // In JavaScript, there are several types of operators that can be used to perform different operations on variables and expressions. Some of the most common types of operators in JavaScript are:

  // 1. Arithmetic operators, such as +, -, *, /, and %, are used to perform mathematical operations on numbers.

  // 2. Assignment operators, such as =, +=, -=, *=, and /=, are used to assign values to variables.

  // 3. Comparison operators, such as ==, ===, !=, !==, >, <, >=, and <=, are used to compare two values and return a boolean true or false value.

  // 4. Logical operators, such as &&, ||, and !, are used to combine multiple boolean expressions and return a single boolean value.

  // 5. Bitwise operators, such as &, |, ^, ~, <<, and >>, are used to perform bitwise operations on numbers.

  // Arithmetic operators
  console.log(3 + 4); // Output: 7
  console.log(8 - 2); // Output: 6
  console.log(4 * 5); // Output: 20
  console.log(10 / 5); // Output: 2
  console.log(10 % 3); // Output: 1 // 10 / 3 = 3 And Reminder 1 That's Reason Output: 1 Because % sign Means Reminder

  // Assignment operators
  var x = 5;
  x += 2; // x is now 7
  x -= 3; // x is now 4
  x *= 2; // x is now 8
  x /= 4; // x is now 2

  // Comparison operators
  console.log(5 == 5); // Output: true
  console.log("5" == 5); // Output: true
  console.log(5 === 5); // Output: true
  console.log("5" === 5); // Output: false
  console.log(5 != 4); // Output: true
  console.log(5 !== 4); // Output: true
  console.log(5 > 4); // Output: true
  console.log(5 < 4); // Output: false
  console.log(5 >= 5); // Output: true
  console.log(5 <= 4); // Output: false

  // Logical operators
  console.log(true && true); // Output: true
  console.log(false && false); // Output: false
  console.log(true && false); // Output: false
  console.log(true || false); // Output: true
  console.log(false || true); // Output: true
  console.log(true || true); // Output: true
  console.log(false || false); // Output: true
  console.log(!true); // Output: false
  console.log(!false); // Output: true

  // Bitwise operators
  console.log(5 & 3); // Output: 1
  console.log(5 | 3); // Output: 7
  console.log(5 ^ 3); // Output: 6
  console.log(~5); // Output: -6
  console.log(5 << 2); // Output: 20
  console.log(5 >> 2); // Output: 1
}

{
  // In JavaScript, there are several different types of data that can be used in a program. Some of the most common data types in JavaScript are:

  // 1. String: A sequence of characters, enclosed in quotation marks (either single or double)

  // 2. Number: Numeric values, including integers, floating-point numbers, and special values like Infinity and NaN

  // 3. Boolean: A value that can be either true or false

  // 4. Object: A collection of key-value pairs

  // 5. Array: An ordered list of values

  // 6. Function: A piece of code that can be called and executed at a later time

  // 7. null: A value that represents an absence of a value

  // 8. undefined: A value that indicates that a variable has not been assigned a value

  // String data type
  var name = "John Doe";
  console.log(typeof name); // Output: string

  // Number data type
  var age = 33;
  console.log(typeof age); // Output: number

  // Boolean data type
  var isRaining = true;
  console.log(typeof isRaining); // Output: boolean

  // Object data type
  var person = {
    name: "John Doe",
    age: 33,
  };
  console.log(typeof person); // Output: object

  // Array data type
  var colors = ["red", "green", "blue"];
  console.log(typeof colors); // Output: object (in JavaScript, arrays are considered objects)

  // Function data type
  function greet() {
    console.log("Hello, world!");
  }
  console.log(typeof greet); // Output: function

  // null data type
  var empty = null;
  console.log(typeof empty); // Output: object (in JavaScript, null is considered an object)

  // undefined data type
  var notDefined;
  console.log(typeof notDefined); // Output: undefined
}

{
  // In JavaScript, there are two types of scope: global scope and local scope.

  // 1. Global scope refers to variables and functions that are defined outside of any function and are therefore available to be accessed and used anywhere in your code.

  // 2. Local scope refers to variables and functions that are defined inside a function and are only available to be accessed and used within that function.
  // Global variable

  var name = "John Doe"; // Global Varriable

  function greet() {
    // Local variable
    var message = "Hello, " + name;
    console.log(message); // Output: 'Hello, John Doe'
  }
  greet();
  console.log(name); // Output: 'John Doe'
  console.log(message); // Output: Uncaught ReferenceError: message is not defined
}

{
  // In JavaScript, the break, continue, and return statements are used to control the flow of execution in loops and functions.

  // 1. The break statement is used to immediately exit a loop or switch statement.

  // 2. The continue statement is used to skip the rest of the current iteration of a loop and move on to the next iteration.

  // 3. The return statement is used to exit a function and return a value to the caller.
  // The break statement

  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i); // Output: 0, 1, 2, 3, 4
  }

  // The continue statement
  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i); // Output: 1, 3, 5, 7, 9
  }

  // The return statement
  function square(x) {
    return x * x;
  }
  console.log(square(2)); // Output: 4
}
