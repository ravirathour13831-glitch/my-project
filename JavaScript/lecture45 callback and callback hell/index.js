// // function fuck(){
// //     console.log('hii');

// const { reject } = require("async")


// // }
// // fuck()




// // console.log("Hello Ravi");
// // console.log("Hello kamche");
// // let color = "0123456789abcdef"
// // let disco = ""

// //  for( let i = 0; i<6; i++){
// //  let random = Math.floor(Math.random()*color.length );

// //      disco = disco+color[random];
// //  }
// // console.log(`#${disco}`)

//  function searchPizza() {
//     return new Promise((resolve) => {
//         console.log("Pizza searching, please wait...");

//         setTimeout(() => {
//             console.log("Here is the pizza");
//             let price = 500;
//             resolve(price);
//         }, 3000);
//     });
// }

// function addToCard() {
//     return new Promise((resolve) => {
//         console.log("Pizza adding to card");

//         setTimeout(() => {
//             console.log("Pizza added to card");
//             resolve();
//         }, 4000);
//     });
// }

// function payment(price) {
//     return new Promise((resolve) => {
//         console.log(`Price of pizza ${price}`);

//         setTimeout(() => {
//             console.log(`Payment successful of ${price}`);
//             console.log("Congratulations, your pizza is ready");
//             resolve();
//         }, 7000);
//     });
// }



// async function orderPizza() {
//     try {
//         let price = await searchPizza();

//         await addToCard();

//         await payment(price);

//         console.log("Bas aa hi gaya pizza 🍕");

//     } catch (error) {
//         console.log(error);
//     }
// }

// orderPizza();


function order() {

    console.log("pizza order kar diya");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let price = 500;

            console.log("pizza ka rupya 500 hai");

            resolve("de du ya nahi");

        }, 3000);

    });
}


function Hello() {

    order().then((res) => {

        console.log(res);

    });

}

Hello();