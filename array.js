const fruits = ['apple', 'banana', 'orange', 'grape', 'cherry',]

console.log(fruits);
console.log(fruits[0]);


//array methods
//1. concat
/*const vegetables = ['carrot', 'beetroot', 'cucumber'];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

//2. copywhithin
const copyFruits = fruits.copyWithin(2, 0);
console.log(copyFruits); //apple,banana,apple,banana,cherry

//3. entries
const fruitsIterator = fruits.entries();
console.log(fruitsIterator.next().value); // [0, "apple"]

//4. every
const isAllFruits = fruits.every(fruit => typeof fruit === 'apple');
console.log(isAllFruits); //false


//5. fill
const fillfruits = fruits.fill('cherry', 2, 4);
console.log(fillfruits); // apple,banana,cherry,cherry,cherry


//6. filter
const filterFruits = fruits.filter(fruit => fruit === 'apple');
console.log(filterFruits)

//7. find 
const findFruit = fruit.find(fruit => fruit === 'apple');
console.log(findFruit);

//8. findIndex
const findFruitIndex = fruits.findIndex(fruit => fruit ==='apple');
console.log(findFruitIndex);

//9. forEach
fruits.forEach(fruit => console.log(fruit + "s"));

//10. includes
const hasApple = fruits.includes('apple');
console.log(hasApple);

//11. indexOf
const indexOfApple = fruits.indexOf('apple');
console.log(indexOfApple);

//12. join
const fruitString = fruits.join(',');
console.log(fruitString);
*/
//13.keys
const fruitsIterator = fruits.keys();
console.log(fruitsIterator.next().value);

// 14. LastIndexof
const lastIndexOfApple = fruits.lastIndexOf('apple');
console.log(lastIndexOfApple);