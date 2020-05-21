// Basic Type

// Boolean
let isDone: boolean = false;
// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary_num: number = 0b1010;
let octal_num: number = 0o744;

// String
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;
let sentence2: string = "Hello, my name is " + fullName + ".\n\n" + "I'll be " +
  (age + 1) + " years old next month.";

// Array
let list: number[] = [1, 2, 3];

let list1: Array<number> = [1, 2, 3];

let fruits: string[] = ["apples", "apricots", "avocados"];
let fruits1: Array<string> = ["apples", "apricots", "avocados"];
// numbers variable can only accept array of numbers
let numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

// Tuple
// Delcare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly

console.log(x[0].substring(1));
// console.log(x[1].substring(1));

let user: [string, number, string];
// intializing the values
user = ["baby", 33, "programming"]; // TypeScript is happy now

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
let c1: Color1 = Color1.Green;
console.log(c1);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c2: Color2 = Color2.Green;
console.log(c2);

enum Color3 {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
console.log(colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let notSure1: any = 4;
// notSure1.ifItExists();
notSure1.toFixed();

// let prettySure: Object = 4;
let list_A: any[] = [1, true, "free"];
list_A[1] = 100;

console.log(list_A);

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
// unusable = null;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 });
create(null);

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string> someValue).length;

let strLength1: number = (someValue as string).length;

// function types
function addA(a: number, b: number): number {
  return a + b;
}

let addB: (a: number, b: number) => number;

addB = function (a: number, b: number): number {
  return a + b;
};

addB(1, 2);
