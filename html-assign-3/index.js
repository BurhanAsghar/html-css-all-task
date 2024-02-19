

//Describe splice and slice?
//Also describe push, pop, shift, unshift?



//PUSH

var arr=[1,2,3,4,5,6]

arr.push("ali", "ahmed", 9);
console.log(arr);//[ 1, 2, 3, 4, 5, 6, 'ali', 'ahmed', 9 ]


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let arrayOfArrays = [];
arrayOfArrays.push(array1);
arrayOfArrays.push(array2);

console.log(arrayOfArrays); // Output: [[1, 2, 3], [4, 5, 6]]

// Modifying array1 after pushing it to arrayOfArrays
array1.push(100);

console.log(arrayOfArrays); // Output: [[1, 2, 3, 100], [4, 5, 6]]

//POP 

let array = [1, 2, 3];

// Using pop() to remove the last element from the array
let removedElement = array.pop();
console.log(removedElement); // Output: 3
console.log(array); // Output: [1, 2]

// Using pop() on an empty array
let emptyArray = [];
let removedFromEmpty = emptyArray.pop();
console.log(removedFromEmpty); // Output: undefined
console.log(emptyArray); // Output: []



//SHIFT


let anarray = [1, 2, 3, 4, 5,6,7,8,9,10];

console.log(anarray);
anarray.shift(0);
console.log(anarray);//[ 2, 3, 4,  5, 6,7, 8, 9, 10]

anarray.shift(1);//  [3, 4, 5,  6, 7, 8, 9, 10 ]
console.log(anarray);


//UNSHIFT
let anarray2 = [1, 2, 3, 4, 5,6,7,8,9,10];

console.log(anarray2);
anarray2.unshift(0);
console.log(anarray2);//[ 0, 1, 2, 3,4,  5, 6, 7, 8, 9, 10]

anarray2.unshift(1);//  
console.log(anarray2); //[1, 0, 1, 2, 3,4,  5, 6, 7, 8, 9, 10]



//SLICE

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(-2,-2));
// Expected output: Array []

console.log(animals.slice(-2,-3));
// Expected output: Array []

console.log(animals.slice(-4,-1));
// Expected output: Array [ 'bison', 'camel', 'duck' ]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//SPLICE

const myarray = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray.splice(2, 0, "drum"));
// ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

const myarray2 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray2.splice(2, 0, "drum", "guitar"));
//  ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]

const myarray3 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray3.splice(0, 0, "angel"));
//   ["angel", "clown", "mandarin", "sturgeon"]

const myarray4 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray4.splice(myarray.length, 0, "sturgeon"));
//   ["angel", "clown", "mandarin", "sturgeon"]

const myarray5 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray5.splice(3, 1));

const myarray6 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray6.splice(2, 1, "trumpet")); 
//  ["angel", "clown", "trumpet", "sturgeon"]

const myarray7 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray7.splice(0, 2, "parrot", "anemone", "blue"));
// ["parrot", "anemone", "blue", "trumpet", "sturgeon"]

const myarray8 = ["angel", "clown", "mandarin", "sturgeon"];
console.log(myarray8.splice(-2, 1));
//  ["angel", "clown", "sturgeon"]



