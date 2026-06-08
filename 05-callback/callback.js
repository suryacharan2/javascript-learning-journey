function greet(name, callback) {
console.log("Hello " + name);
callback();
}
function bye() {
console.log("Goodbye!");
}
greet("Surya", bye);
//Callback: A function passed as an argument to another function