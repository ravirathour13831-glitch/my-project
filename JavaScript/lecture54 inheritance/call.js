

//   let user =  {
//     name : "ravi",
//     age : 19

// }

// console.log(user["name"])

// // function hero(){
// //     console.log(`${this.name}`)
// // }

// // hero.call(user)




let arr = [20,40,60,80,100,120,140];

let j = arr.length - 1;
let i = 0;

while(i < j){

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  i++;
  j--;
}

arr.forEach(element => {
  console.log(element);
});


  


