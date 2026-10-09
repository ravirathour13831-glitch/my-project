

function order(res1) {
  return new Promise((resolve, reject) => {
    console.log("pizza hai")
    setTimeout(() => {
      console.log('pzza pak raha hai')
      resolve()
    }, 3000);
  });
}









function search(res2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("thoda wait karo");
      resolve();
    }, 2000)
  })

}


function order1() {
  return new Promise((resolve, reject) => {

    let p = 300;
    console.log(`pizza ka price ${p} hai`)
    setTimeout(() => {
      console.log("pack karu ya nahi")
      resolve();
    }, 5000)
  })

}


function order2() {
  return new Promise((resolve, reject) => {
    console.log("nahi karo")
    setTimeout(() => {
      let available = true;
      if (available) {
        resolve("Pizza mil gaya")
      } else {
        reject("nahi mila")
      }
    }, 7000)
  })
}


async function delevery() {
  await order();

  await order1();

  await order2()
  .then((res) =>{
    console.log(res);
  })
  .catch((res) =>{
    console.log(res);
  })



  
}

delevery();







// order()
//   .then(() => search())
//   .then(() => order1())
//   .then(() => order2()
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((res) => {
//       console.log(res)
//     }))


