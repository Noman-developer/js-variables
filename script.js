// A small practice file about JavaScript variables.
// It shows var, let and const, and the basic data types.

// var: the old way to declare a variable. Can be changed.
var name = "Noman";
console.log("Name:", name);

// let: the modern way. Can be changed later.
let age = 27;
console.log("Age:", age);
age = 28; // updating the value is fine
console.log("Age after one year:", age);

// const: cannot be changed once it is set.
const country = "UK";
console.log("Country:", country);

// Basic data types
let price = 9.99;        // number
let isStudent = true;    // boolean
let hobbies = ["coding", "reading"]; // array
let user = { city: "Skelmersdale", role: "student" }; // object

console.log("Price:", price);
console.log("Is student:", isStudent);
console.log("First hobby:", hobbies[0]);
console.log("City:", user.city);

// const with objects: the contents can change, the reference cannot.
const scores = [80, 90];
scores.push(95); // allowed
console.log("Scores:", scores);

// typeof shows the data type of a variable
console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
