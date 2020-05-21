// Tuple
let day: [number, string];
day = [0, "Monday"];

// Boolean
let isTrue: boolean = true;
let unsetBool: boolean;
// let nullableBool: boolean = null;

// Intersection Types
interface Knife {
  cut(): any;
}

interface BottleOpener {
  openBottle(): any;
}

interface Screwdriver {
  turnScrew(): any;
}

type SwissArmyKnife = Knife & BottleOpener & Screwdriver;

function use(tool: SwissArmyKnife) {
  console.log("I can do anything!");

  tool.cut();
  tool.openBottle();
  tool.turnScrew();
}

// Types in function arguments and return value.
// Number
function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(84, 76));

// Types in function arguments and return value.
// String
function hello(name: string): string {
  return `Hello ${name}!`;
}

console.log(hello("Madam"));

// const Enum
const enum NinjaActivity {
  Espionage,
  Sabotage,
  Assassination,
}

let myFavoriteNinjaActivity = NinjaActivity.Espionage;
console.log(myFavoriteNinjaActivity);

console.log(NinjaActivity["Sabotage"]);

enum PirateActivity {
  Boarding,
  Drinking,
  Fencing,
}

let myFavoritePirateActivity = PirateActivity.Boarding;
console.log(myFavoritePirateActivity);

console.log(PirateActivity["Drinking"]);

console.log(PirateActivity[myFavoritePirateActivity]);

// Number
let pi: number = 3.14;
let hexadecimal: number = 0xFF;

let binary: number = 0b10;
let octal: number = 0o755;

// String
let singleQuotes: string = "single";
let doubleQuotes: string = "double";
let templateString: string = `I am ${singleQuotes}`;

// Array
let threePigs: number[] = [1, 2, 3];
let genericStringArray: Array<string> = ["first", "2nd", "3rd"];

// Enum
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
let bestDay: Day.Saturday;

enum TenPlus {
  Ten = 10,
  Eleven,
  Twelve,
}

enum MyOddSet {
  Three = 3,
  Five = 5,
  Seven = 7,
  Nine = 9,
}

// Any
let anything: any = "I am a string";
anything = 5;

// Void
function log(): void {
  console.log("I return nothing");
}
// --------------------------------------------------------------------
