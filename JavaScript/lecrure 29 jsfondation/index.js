// console.log("hello world");
// console.log("4*5");
// // age = 20;

// let num1= 222;

// console.log(num1);



// let num = 8;
// num +=6;
// console.log(num);
// console.log(6==5);

// let tem=21
// if(tem>=25){
//     console.log("plase on the ac")

// } else{
//     console.log("dont on the ac")
// }

// let day = "mon"
// if(day==="mon"){
//     console.log("1st day of week")
// }else if(day==="tue"){
//     console.log("2nd day of the week")

// }
// let mark = 75
// if( mark<=75 && mark>=75){
//     console.log("pass")
// }






// for( let i=1; i<=5; i++){
//     console.log("ravi")
// }





// // let n = 1
// // while(n<=100){
// //     console.log("muskan meri hai")
// //      }
// // n++;

// function list(n1, n2, n3) {
//     switch (n2) {
//         case 1:
//             console.log("fi");
//             break;

//         case 2:
//             console.log("se");
//             break;

//         default:
//             console.log("oth");
//     }

//     console.log(n1, n2, n3);
// }

// list(3, 4, 6);

// function add(a,b){
//     return a+b;

// }


// let result =  add(13,24);
// console.log( `ravi = ${result}`)


// function marks(maths,english,science,physics,chemistry){
//     return maths+english+science+physics+chemistry;
// }
// let ravi= "ravi"
// let total = marks(78,75,80,90,78,);
// console.log(`${ravi} = ${total * 100 / 500}%`);


// console.log(Math.PI)
// console.log(Math.sqrt(81))

// console.log(Math.min(4,745,5463,6554,6354,254,5445,5648,285,-4))

// console.log(Math.max(4,745,5463,6554,6354,254,5445,5648,285,-4))


// console.log(Math.floor(122.399))

// console.log(Math.round(3434.3232))
// console.log(Math.random()+1)
// console.log(Math.random()+1)

// let min = 1 ;
// let max = 6;
// let result =  Math.floor(Math.random()*(max-min+1) + min)
// console.log(result)

// //log( Math.floor(Math.random()))

 
//   let kuch_bhi = ["apple","mango","guava","pomegranate","kiwi","pear","lychee","peach"]
//     console.log(kuch_bhi.length)
//     for(let i=0; i<kuch_bhi.length; i++) {

//     console.log(kuch_bhi[i])
// }  

//  let kuch_bhi = [["apple",24],["mango",28],["guava",30],["pomegranate",36],["kiwi",40],["pear",44],["lychee",48],["peach",50]]
// console.log(kuch_bhi[3][1]);


let product1 =[["iphone",1399,4.5,"6000mh","21wat"],["realme",2333423,6.4,"5000mh","32wat"]]
console.log(product1[0][3])


let product2 = {
  name : "ravi",
  address : "sitapur",

  age  : "18year",
  course : "b.tech",
  branch : "cs"

}
 for( ele in product2){
  console.log(ele);

}

console.log(Object.keys(product2))
console.log(Object.values(product2))




function c(b){
  console.log(b)
  b(3)
  console.log("b")
}
c(function a(){
  console.log("A")

})

