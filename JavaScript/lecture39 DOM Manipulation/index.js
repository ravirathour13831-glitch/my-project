//  let h1 = document.getElementById("h1")
//  let h1 = document.querySelector("#h1")
//  console.log(h1);
// let p = document.querySelector("p");
// //  p.textContent = "hello  mere pyare bachhe"
// // console.log(p.innerText)
// console.log(p.textContent);
// console.log(p.innerHTML);

// p.setAttribute("style", "background-color: green; font-size: 50px ");

// let btn = document.querySelector("#btn");
// btn.setAttribute("disabled", "true");
// btn.textContent = "remove";

// let res = p.getAttribute("style");
// console.log(res);

// p.removeAttribute("style");
// p.classList.add("random")
let pro = [
  {
    name: "Iphone 20",
    price: 399,
  },
  {
    name: "samsung 15",
    price: 299,
  },
  {
    name: "mi 23",
    price: 199,
  },
  {
    name: "lava12 ",
    price: 99,
  },
]


// let div = document.createElement("div")
// let div2 = document.createElement("div")
// div.textContent = "hello"
// div2.textContent = "by"

// // console.log(div);
// let body = document.querySelector("body")
// // body.append(div,div2)
// body.prepend(div,div2)
let prolist = document.querySelector("#pro-list")
pro.forEach((product) => {
    console.log(product);
})


