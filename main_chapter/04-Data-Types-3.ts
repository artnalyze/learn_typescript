/**
 * Static types
 * Built in
 * - number
 * - string
 * - boolean
 * - void
 * - null
 * - undefined
 * - never
 * - any
 * User defined
 * - Array
 * - Tuple
 * - Enumeration (enum)
 * - Class
 * - Interface
 */

// The number data type (int/float)
// integer
let num1: number = 83;

// floating point number
let num2: number = 3.14;

console.log("int: ", num1);
console.log("float: ", num2);

// The boolean data type
let auth: boolean = false;
if (!auth) {
  console.log("Sorry, you are not allowed in the member area.");
} else {
  console.log("Welcome to the member area");
}

// The string data type
// double quotes
let msg1: string = "Hello there";

// single quotes
let msg2: string = "General Kenobi";
console.log(msg1, msg2);

//
console.log("I don't like debugging");

console.log("I don\'t like debugging");
