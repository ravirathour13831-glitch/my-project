// let user = {
//     name: "Ravi",
//     age: 20,
//     city: "Lucknow",
//     course: "BCA",
//     salary: 25000
// };

// let { age, salary, ...rest } = user;

// console.log(rest);


// let obj = {
//      name : "ravi",
//      age : 34,
//      address : "sitapur"
    
// }

// obj.name = "muskan"
// console.log(obj)



// let obj1 = {
//      name : "ravi",
//      age : 34,
//      address : "sitapur"
    
// }


// delete obj1.age
// console.log(obj1)


// let arr = [2,4,78,3,21,254,545,67,]
// arr.splice(3,2,["replace"])
// console.log(arr);

// let arr1 = [2,4,78,3,21,254,545,67,]
// let result = arr1.find(num => num>50)
// console.log(result)

// let number = [45,65,40,55,35,25,95,85,75,50]

// const discount = number.map(num => num*0.9)
   

//  console.log(discount)

//  let fruits = ["apple", "mango", "banana"];
//  let res = fruits.map(char => char.toUpperCase());
//  console.log(res);



let number = [45,65,40,55,35,25,95,85,75,50]
let total = 0;
  number.forEach(mark =>total = mark +total)
console.log(total)




// let number = [45,65,40,55,35,25,95,85,75,50,67]


//  total = number.reduce((total, mark) => total + mark, 0)
// console.log(total)