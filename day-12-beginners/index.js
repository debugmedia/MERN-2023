// // // Variables
// // // String, Number, Boolean, Array, Objects
// // // Conditions
// // // loop
// // // functions
// // // Comparison Operators
// // // Logical Operators
// // // .map, .filter, .find
// // // spread
// // // destructure , rest

// // const obj = {
// //   name: "debug media",
// //   age: 1,
// //   salary: 1000,
// //   salary: 200,
// // };

// // // destructure
// // const { name, ...rest } = obj;
// // const { age } = rest;

// // // console.log(name);
// // // console.log(age);
// // // console.log(rest);
// // // console.log(age);
// // // console.log(salary);

// // const myArray = [1, 4, 2, 6];

// // // console.log(myArray.sort());
// // // console.log(myArray.sort((a, b) => a - b));

// // // const newArray = myArray.map(function (data, inde) {});

// // // const newArray = [1, 2, 3].map((data) => {
// // //   // logic
// // // });

// // // API(newArray)[(1, 2, 3)].forEach((data) => {
// // //   // logic
// // // });

// // const salaryArray = [2, 1, 1, 5, 10, 20];

// const newSalaryArray = salaryArray.filter(function (sadasd) {
//   if (data < 10) {
//     return data;
//   }
// });

// // console.log(newSalaryArray);

// function fetchUserList() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

async function fetchUserListWithAsync() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

// const fetchUserListWithAsync = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const json = await response.json();
//   console.log("Running");
//   console.log("Running");
//   console.log("Running");
//   console.log("Running");
//   console.log(json, "===async");
// };

fetchUserList();
// fetchUserListWithAsync();

const totalCount = 200;

function add() {
  return 5 + 10;
}

console.log(add()); // console.log(finalCount + totalCount);
