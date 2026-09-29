

//  function fun3() {
//     return "hii"
// }






// async function fun4() {

//     fun3().then((data) => {
//         console.log(data)
//     })
// }


async function fun5() {

    let data = await fun3()
    console.log("3")

    let data2 = await fun4()
    console.log('4')
    
}
console.log('ravi kumar')


console.log("a")

async function random(params) {
    console.log("b")

    await 1;
    console.log("c");


    
}


random()
console.log("d")