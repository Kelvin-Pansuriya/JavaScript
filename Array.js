// 1.push(): adds one or more elements to the end of an array

// 2.pop(): removes the last element from an array

// 3.shift(): removes the first element from an array

// 4.unshift(): adds one or more elements to the beginning of an array

// 5.concat(): creates a new array by concatenating the elements of two or more arrays

// 6.join(): creates a string by concatenating all the elements of an array, separated by a specified separator string

// 7.slice(): creates a new array by extracting elements from an existing array

// 8.splice(): adds or removes elements from an array

// 9.indexOf(): returns the index of the first occurrence of an element in an array

// 10.lastIndexOf(): returns the index of the last occurrence of an element in an array

// 11.forEach(): executes a provided function once for each array element

// 12.map(): creates a new array with the results of calling a provided function on every element in the array

// 13.filter(): creates a new array with all elements that pass a specified test

// 14.reduce(): applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// 15.some(): checks whether at least one element in an array passes a specified test

// 16.every(): checks whether all elements in an array pass a specified test

// 17.sort(): sorts the elements of an array in ascending or descending order

// 18.reverse(): reverses the order of the elements in an array

{
  // 1. Array map Method..........

  // Array Map Method Always return Array

  //   let store = numbers.map((perElement, index, wholeArray)=>{
  //        Write Code Here
  //   })

  //   let store = numbers.map(function(perElement, index, wholeArray){
  //         Write Code Here
  //   })
  const numbers = [1, 2, 3, 4, 5];

  let first = numbers.map((perElement, index, wholeArray) => {
    console.log(perElement);
  });
  console.log(first);
  console.log(
    "-------------1--------------------------------------------------------------------"
  );

  let second = numbers.map(function (perElement, index, wholeArray) {
    console.log(perElement);
    console.log(wholeArray[index] * perElement);
    console.log(
      "--------------2-------------------------------------------------------------------"
    );
    return wholeArray;
  });
  console.log(second);
  console.log(
    "-------------------3--------------------------------------------------------------"
  );
}

{
  // 2. Array filter Method..........
  // Array filter Method return Array
  //   let store = numbers.filter((perElement, index, wholeArray)=>{
  //        Write Code Here
  //   })
  //   let store = numbers.filter(function(perElement, index, wholeArray){
  //         Write Code Here
  //   })

  const numbers = [1, 2, 3, 4, 5];

  let first = numbers.filter((perElement, index, wholeArray) => {
    console.log(perElement);
  });
  console.log(first);
  console.log(
    "----------------------4-----------------------------------------------------------"
  );

  let second = numbers.filter(function (perElement, index, wholeArray) {
    console.log(perElement);
    return wholeArray;
  });
  console.log(second);
  console.log(
    "---------------------------5------------------------------------------------------"
  );

  let third = numbers.filter(function (perElement, index, wholeArray) {
    console.log(wholeArray[index] < 3);
    console.log(wholeArray[index] == perElement);
    return wholeArray[index] > 2;
  });
  console.log(third);
  console.log(
    "----------------------------------6-----------------------------------------------"
  );
}

{
  // 3. Array reduce Method..........

  // Array reduce Method return Only One Value

  // If We Declare InitialValue Then AccumilateValue == Declared Initial Value

  // If We Not Declare InitialValue Then AccumilateValue == Array[0] Means Array's First Value

  //   let store = numbers.reduce((accumilateValue, perElement, index, wholeArray)=>{
  //        Write Code Here
  //   },giveInitialValue)

  //   let store = numbers.reduce(function(accumilateValue, perElement, index, wholeArray){
  //         Write Code Here
  //   },giveInitialValue)

  const numbers = [1, 2, 3, 4, 5];

  let first = numbers.reduce((acc, value, index, array) => {
    return acc + value;
  }, 0);
  console.log(first);

  let second = numbers.reduce(function (acc, value, index, array) {
    if (acc > value) {
      return acc;
    } else {
      return value;
    }
  });
  console.log(second);
}
