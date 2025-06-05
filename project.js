// 1
// let user = {
//   name: "Иван",
//   sayHi() {
//     console.log(`Привет, ${this.name}`);
//   },
// };
// user.sayHi();
// 2
// const user = {
//   name: "Anna",
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   },
// };

// setTimeout(() => user.greet(), 1000);
// 3
// const calculator = {
//     add(a, b) {
//     },

//     multiply(a, b) {
//     },
//     calculate(operation, a, b){

//     }
// }
// 4

// const button = {
//   text: "Click me",
//   click() {
//     console.log(`Clicked: ${this.text}`);
//   },
// };
// button.click();
// 6
// const group = {
//     title: "Our Group",
//     students: ["John", "Alice"],
//     showList() {
//       this.students.forEach(student => {
//         console.log(`${this.title}: ${student}`);
//       });
//     }
//   };

//   group.showList();
// 2.1
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let numberS = numbers.filter((num) => num % 2 == 0);
// console.log(numberS);
// 2.2
// let people = ["jon", "jake", "alex", "anna", "jastin"];
// let peoplE = people.find((str) => str.length > 5);
// console.log(peoplE);
// 2.3
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = numbers.map((num) => num + 1);
// console.log(res);
// 2.4
// const people = [
//   { name: "Jake", age: 10 },
//   { name: "Anna", age: 28 },
//   { name: "Jon", age: 19 },
//   { name: "Alex", age: 24 },
// ];
// let res = people.sort((a, b) => a.age - b.age);
// console.log(res);
// 2.5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = numbers.reduce((value, num) => value + num);
// console.log(res);
// 3.1
// function Number(num) {
//   if (num > 0) {
//     return "полож";
//   } else if (num < 0) {
//     return "отриц";
//   } else {
//     return "ноль";
//   }
// }
// console.log(Number(4));
// 3.2
// for (let i = 1; i <= 10; i++) {
//   if (i !== 5 && i !== 7) console.log(i);
// }
// 3.5
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 7 === 0) {
//     console.log(numbers[i]);
//     break;
//   }
// }
// 4.1
// if (age >= 18 && age <= 65) {
//   console.log("подходит");
// } else {
//   console.log("не подходит");
// }
