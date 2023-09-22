const a = "Random string";
let b;

a ||= "Not so random string";
console.log(a);

b ||= "No value";
console.log(b);
