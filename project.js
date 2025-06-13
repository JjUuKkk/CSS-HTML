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

// let nums = [2, 3, 4];
// let product = 1;
// product = nums.reduce((acc,num) => acc * num, 1);

// 2. Сумма чётных чисел
// let numbers = [1, 2, 3, 4, 5];
// let evenSum = 0;
// numbers.forEach(num => {
//     if(num % 2 === 0) evenSum += num;
// });

// const fruits = ["Яблоко", "Апельсин", "Груша"];
// fruits.forEach((num) => console.log("Элемент:" + num));

// const numbers = [1, 2, 3, 4];
// let nam = numbers.map((num) => num * 2);
// console.log(nam);

// const words = ["JavaScript", "CSS", "HTML", "React"];
// const long = words.filter((word) => word.length > 5);
// console.log(long);

// const nums = [1, 3, 5, 8, 10];
// const first = nums.find((num) => num % 2 === 0);
// console.log(first);

// const nums = [10, 20, 30];
// const long = nums.reduce((acc, num) => acc + num, 0);
// console.log(long);

// const numbers = [1, 2, -3, 4];
// let negative = numbers.some(name => num < 0);

// const arr = [3, 1, 4, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// let first = arr.slice(0, 3);
// console.log(first);

// const nums = [1, 2, 3, 4, 5];
// let res = nums.map((num) => num * 2).filter(num => num > 5).reduce((acc,num) => acc + num, 0);

// const users = [
//   { id: 1, name: "Алексей", age: 32, isActive: true, skills: ["JavaScript", "React"] },
//   { id: 2, name: "Мария", age: 25, isActive: false, skills: ["HTML", "CSS"] },
//   { id: 3, name: "Иван", age: 40, isActive: true, skills: ["JavaScript", "Node.js"] },
//   { id: 4, name: "Ольга", age: 28, isActive: true, skills: ["Python", "Django"] },
//   { id: 5, name: "Дмитрий", age: 35, isActive: false, skills: ["Java", "Spring"] }
// ];
// const active = users.filter(user => user.isActive);
// const names = users.map(user => user.name);
// const usID = users.find(user => user.id === 3);
// const nav = users.some(user => user.skills.includes("JavaScript"));
