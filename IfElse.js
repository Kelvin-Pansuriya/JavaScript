// Syntax of if/else , else if.........

// Always Write More Importance (Primary) Condition First

// if(condition){
// This condition Will Be true, Then This Code Will Be Excute
// }

// else if(condition){
// This condition Will Be true, Then This Code Will Be Excute
// }

// else if(condition){
// This condition Will Be true, Then This Code Will Be Execute
// }

// else{
// All condition will Be false, Then This Code Will Be Execute
// }

{
  // Always Start With Primary Condition In if Else...
  // Here All Condition True But Primary Condition Written First.....

  let value = 10;

  if (value == 10) {
    console.log(`Value Is ${value}`);
  } else if (value > 0 && value <= 10) {
    console.log(`Value Is Getter Than 0 And Less Than Equal 10`);
  } else if (typeof value == Number) {
    console.log(`typeof value is Number...`);
  } else if (!value == 110) {
    console.log(`Value Is Not 110`);
  } else {
    console.log(`All Condition Will Be False That's Why else Is Running....`);
  }
}

{
  // if/else else if TASK

  let input = prompt("Enter Number Value");

  if (input < 0) {
    console.log(`This Value Is Smaller Than 0`);
  } else if (input == 0) {
    console.log(`This Value Is 0`);
  } else if (input > 0 && input <= 100) {
    console.log(`This Value Is Bigger Than 0  And Smaller_Than Equal 100`);
  } else if (input > 100 && input <= Infinity) {
    console.log(
      `This Value Is Bigger Than 100 And Smaller_Than Equal Infinity`
    );
  } else {
    console.log(`This Is Not Number Value, Please Enter Number Value`);
  }
}
