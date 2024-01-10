// 1. charAt(): Returns the character at the specified index

// 2. concat(): Combines two or more strings and returns a new string

// 3. endsWith(): Determines whether a string ends with the specified suffix

// 4. indexOf(): Returns the index of the first occurrence of a specified value

// 5. lastIndexOf(): Returns the index of the last occurrence of a specified value

// 6. replace(): Replaces a specified value with another value

// 7. slice(): Extracts a part of a string and returns a new string

// 8. split(): Splits a string into an array of substrings

// 9. startsWith(): Determines whether a string starts with the specified prefix

// 10. substr(): Extracts a specified number of characters from a string

// 11. substring(): Extracts the characters from a string between two specified indices

// 12. toLowerCase(): Converts a string to lowercase letters

// 13. toUpperCase(): Converts a string to uppercase letters

// 14. trim(): Removes whitespace from the beginning and end of a string
{
  var str = "Hello, world!";

  // The charAt() method
  console.log(str.charAt(0)); // Output: H

  // The concat() method
  var str1 = "Hello, ";
  var str2 = "world!";
  console.log(str1.concat(str2)); // Output: Hello, world!

  // The endsWith() method
  console.log(str.endsWith("!")); // Output: true

  // The indexOf() method
  console.log(str.indexOf("w")); // Output: 6

  // The lastIndexOf() method
  console.log(str.lastIndexOf("o")); // Output: 7

  // The replace() method
  console.log(str.replace("world", "friend")); // Output: Hello, friend!

  // The slice() method
  console.log(str.slice(7)); // Output: world!

  // The split() method
  console.log(str.split(" ")); // Output: [ 'Hello,', 'world!' ]

  // The startsWith() method
  console.log(str.startsWith("Hello")); // Output: true

  // The substr() method
  console.log(str.substr(7, 5)); // Output: world

  // The substring() method
  console.log(str.substring(7, 12)); // Output: world

  //
}
