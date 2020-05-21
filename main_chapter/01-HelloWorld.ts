class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
  greet(): string {
    return this.greeting;
  }
}

let greeter1 = new Greeter("Hello, world!");
console.log(greeter1.greet());
