// RULES :-

// The break statement "jumps out" of a loop and only switch case statement not if else.

// The continue statement "jumps over" one iteration in the loop and only switch case statement not if else.

// Switch Case Statement Only Access Arithmetic, Assignment, And Comparison Operator

// Syntax of Switch Case.........

// switch(condition){
//     case 1:
//         console.log("Case 1");
//         break;
//     case 2:
//         console.log("Case 2");
//         break;
//     case 3:
//         console.log("Case 3");
//         break;
//     case 4:
//         console.log("Case 4");
//         break;
//     default:
//         console.log("This is default");
// }

// TASK of Switch Case.........

let date = new Date();
let day = date.getDay();

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Somethings Went Wrong");
}
