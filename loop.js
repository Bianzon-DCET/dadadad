/*for(let  i = 5;  i > 0; i--) {
   if(i > 3){
   console.log(i);
   }else{
       console.log("i is less that 3");

   }
   // shorthand conditional (ternary) operator
   i > 3 ? console.log(i) : console.log("i is less than 3");
}

// do while loop
let i = 0;
while (i < 5){
   console.log(i);
   i++;
}

while (i < 5); 


const fruits = ['apple', 'banana', 'orange', 'grape', 'apple'];
for (let fruit in fruits){
   //console.log(fruits[fruit]);
}

for of loops
for(let fruit of fruits){
   //console.log(fruit);
}

forEach loop
fruits.forEach(fruit => console.log(fruit));

maps
/const fruitlength = fruits.map(fruit => fruit.length);
console.log(fruitlength);
*/

const users = [
   {name: 'John', age: 34},
   {name: 'Amy', age: 20},
   {name: 'Cam', age: 24}
]

const userNames = users.map(user => user.name);
console.log(userNames);