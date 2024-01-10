"use strict";
// var global = "Hello World!";
function first() {
  debugger;
  console.log("First Function Running....");
  second();
  console.log("Now Our First Funtion Running After Calling Second Function");
}
function second() {
  debugger;
  console.log("Second Function Running....");
  third();
  console.log("Now Our Second Funtion Running After Calling Third Function");
}
function third() {
  debugger; 
  console.log("Third Function Running....");
}
debugger;
first();
