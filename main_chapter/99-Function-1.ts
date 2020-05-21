function addOldSchool(x: number, y: number) {
    return x +  y;
}

const anonymousOldSchoolFunction = function(x: number, y: number) {
    return x + y;
}

const addFunction = (x: number, y: number) => {
    return x + y;
}

const add1 = (x: any, y: any) => {
    return x + y;
}

console.log(add1("Hello", 23));

const add2 = (x: number, y: number) => {
    return x + y;
}

add2(16,23);