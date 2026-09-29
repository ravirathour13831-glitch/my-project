

  let res =  localStorage.setItem("num1" , 1)
   localStorage.setItem("num2" , 1)
   localStorage.setItem("num3" , 1)

let result = localStorage.getItem("num")

console.log(result);

let res2 = localStorage.key("0")

console.log(res2);

let res3 = localStorage.removeItem("num")
console.log(res3);

document.querySelector("#storage").addEventListener("click" , ()=>{
localStorage.clear()

})


document.querySelector("#session").addEventListener("click" ,  ()=>{
  sessionStorage.setItem('session' , "ravi")
})




