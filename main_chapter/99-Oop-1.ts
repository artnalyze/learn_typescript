class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters} m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Hong! Hong!');
    }
}

const dog = new Dog();

dog.bark();
dog.move(10);
dog.bark();

//////////////////////////////////////////////
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//////////////////////////////////////////////
const helloWorld = (name: string) => {
    console.log(`Hello World ${name}`);
}

helloWorld('Artdvp');
//////////////////////////////////////////////
const userAccount = {
    name: "Artdvp",
    id: 0
}

const pie = {
    type: "Apple"
}

const purchaseOrder = {
    owner: userAccount,
    item: pie
}

console.log(purchaseOrder.item.type);

const allOrders = [purchaseOrder];

const firstOrder = allOrders[0];
console.log(firstOrder.item.type);

const poppedFirstOrder = allOrders.pop();

console.log(poppedFirstOrder);
//////////////////////////////////////////////