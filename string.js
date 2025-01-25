const firstName = "John";
const lastName = "Doe";

let val;

//Concatenation
val = firstName + " " + lastName;
console.log(val)

//Append
val = "Hello";
val += " World";
console.log(val)

//Escaping
val = 'That\'s awswome, I can\'t wait';
val = "That's awswome, I can't wait";
console.log(val);

//Length
val = firstName.length;
console.log(val);

//concat
val = firstName.concat(' ', lastName);
console.log(val);

//Change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLocaleLowerCase();
console.log(val);

//Index 
val = firstName[0];
console.log(val);

//indexOf()
val = firstName.indexOf('k');
console.log(val);

//charAt()
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 2);
console.log(val);

//slice()
val = firstName.slice(0, 2);
console.log(val);

val = firstName.slice(-3, 0);
console.log(val);

//split()
const str = 'Hello World';
val = str.split(' ');
console.log(val);

//replace()
val = str.replace('World', 'There');
console.log(val);

//includes()
val = str.includes('Hella');
console.log(val);
