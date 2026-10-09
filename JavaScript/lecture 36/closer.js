// function outer() {
//     let a = 5;
//     function inner() {
//         console.log(a);

//     }
//     return inner;

// }
// const innerFunc = outer();
// innerFunc()
// function outer2() {
//     function inner2() {
//         count++;
//         console.log(count);
//     }
//     let count = 0;

//     return inner2;
// }
// const innerFunc2 = outer2();
// innerFunc2();
// innerFunc2();

const prices = [100, 200, 300];

let find =  prices.find(x => x > 150);
console.log(find)

//  let sum = prices.reduce((sum , x) =>  sum +x ,0)
 let sum = prices.reduce((sum , x) => {return sum +x}  ,0)
 console.log(sum)

 let map = prices.map(x=> x<100)
 console.log(map)

 let some = prices.some(x=> x>200 )
 console.log(some)

 let filter = prices.filter(x =>{
    return x>200
 })
 console.log(filter)