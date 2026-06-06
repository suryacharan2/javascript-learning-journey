let a = 20;
let b = 10;
// Arithmetic Operators
console.log("Addition:", a + b);//addition
console.log("Subtraction:", a - b);//subtraction
console.log("Multiplication:", a * b);//multiplication
console.log("Division:", a / b);//division
console.log("Modulus:", a % b);// Modulus
console.log("Exponentiation:", a ** b);// Exponentiation    
// Assignment Operators
let c = 5;
c += 10;// c = c + 10
console.log("After += 10:", c);
c -= 5;// c = c - 5
console.log("After -= 5:", c);
c *= 2;// c = c * 2
console.log("After *= 2:", c);
c /= 5;// c = c / 5
console.log("After /= 5:", c);
c %= 3;                 
console.log("After %= 3:", c);
// Comparison Operators
console.log("Equal to (==):", a == b);// Equal to
console.log("Not equal to (!=):", a != b);// Not equal to
console.log("Strict equal to (===):", a === b);// Strict equal to
console.log("Strict not equal to (!==):", a !== b);// Strict not equal to
console.log("Greater than (>):", a > b);// Greater than
console.log("Less than (<):", a < b);// Less than
console.log("Greater than or equal to (>=):", a >= b);// Greater than or equal to
console.log("Less than or equal to (<=):", a <= b);// Less than or equal to
// Logical Operators
let x = true;   
let y = false;
console.log("Logical AND (&&):", x && y);// Logical AND
console.log("Logical OR (||):", x || y);// Logical OR   
console.log("Logical NOT (!):", !x);// Logical NOT  
// Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary    
console.log("Bitwise AND (&):", m & n);// Bitwise AND
console.log("Bitwise OR (|):", m | n);// Bitwise XOR (^):
console.log("Bitwise XOR (^):", m ^ n);// Bitwise NOT (~):
console.log("Bitwise NOT (~):", ~m);// Bitwise Left Shift (<<):
console.log("Bitwise Left Shift (<<):", m << 1);// Bitwise Right Shift (>>):
console.log("Bitwise Right Shift (>>):", m >> 1);// Bitwise Unsigned Right Shift (>>>):
console.log("Bitwise Unsigned Right Shift (>>>):", m >>> 1);    
// Ternary Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote);
// Typeof Operator
console.log("Type of a:", typeof a);// Typeof Operator
console.log("Type of x:", typeof x);// Typeof Operator  
// instanceof Operator
class Person {}
let person = new Person();
console.log("Is person an instance of Person?", person instanceof Person);// instanceof Operator