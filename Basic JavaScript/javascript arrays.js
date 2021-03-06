// Store Multiple Values in one Variable using JavaScript Arrays
const myArray1 = ['hello', 505];

//Nest one Array within Another Array
const myArray2 = [['hello'],[505]];

//Access Array Data with Indexes
const myArray3 = [50, 60, 70];
let myData3 = myArray3[0];            // myData3 = 50

//Modify Array Data With Indexes
const myArray4 = [18, 64, 99];
myArray4[0] = 45;                     //const myArray4 = [45, 64, 99];

//Access Multi-Dimensional Arrays With Indexes
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData5 = myArray5[2][1];         //myData5 =8;

//Manipulate Arrays With push()
const myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog", 3]);              //myArray6 = [["John", 23], ["cat", 2], ["dog", 3]];

//Manipulate Arrays With pop()
const myArray7 = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray7.pop(); //removedFromMyArray = ["cat", 2];

//Manipulate Arrays With shift()
const myArray8 = [["John", 23], ["dog", 3]];
myArray8.shift();                       // myArray8 = [["John", 23], ["dog", 3]];
myArray8.unshift(["Paul", 35]);         // removedFromMyArray = ["John", 23];

//Manipulate Arrays With unshift()
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift(["Paul", 35]); //myArray9 = [["Paul", 35], ["John", 23], ["dog", 3]];

//multi-dimensional array containing several sub-arrays
const myList = [
  ["Chocolate Bar", 15],
  ["Beer Bar", 10],
  ["Vodka", 5],
  ["Wine Bar", 15],
  ["Cake Bar", 20]
];

