
// const p = new Promise(function(resolve , reject){ 
//     // resolve('hii')

//     reject("server down hai beta")
// })

// p.then(function onfulfilld (val){
//     console.log(val)
// } , function onrejected(val){
//     console.log(val)
// })
let promise = new Promise((resolve, reject) => {
    reject("Error aa gaya");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


    const p2 = new Promise(function (resolve , reject){
        // resolve("tata")
        reject("by")

    });


    p2 .then((result) =>{
        console.log(result)
    })

    .catch(function(result){
console.log(result)
    })
    .catch(function(err){
console.log(err)
    })