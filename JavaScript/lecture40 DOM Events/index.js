// gift ko reveal karane ke lia 

let btn = document.querySelector("#reveal-gift")

let h1 = document.querySelector("#gift")

 const revealgift = () => {
    h1.classList.toggle("hidden")
}
// function revealgift(Event){
// console.log(h1)
// }


btn.addEventListener('click' , revealgift) 



// agar ham outter per cllick karge to outtern hi ayega  

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn = document.querySelector("#btn2")

// outter.addEventListener("click", (e) => {
//     console.log("outter")
// })

// inner.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("inner")
// })

// btn.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("btn")
// })



 let photo = document.querySelectorAll(".photo1");

let btns = document.querySelectorAll(".remove");

btns.forEach(function(btn) {

    btn.addEventListener("click", function(e) {

        btn.parentElement.remove();

    });

});
