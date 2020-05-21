// Scope
// var declarations #
var a = 10;

function f() {
  var message = "Hello, world!";

  return message;
}

function f1() {
  var a = 10;
  return function g() {
    var b = a + 1;
    return b;
  };
}

var g = f();
// g();
