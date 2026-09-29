

const body = document.querySelector("body")


let colorStr  = "0123456789abcdef"


setInterval((e) => {

    color = ""

for (let i= 0; i<6; i++){

let random = Math.floor(Math.random() * colorStr.length) +1
color = color + colorStr[random]

}
body.style.backgroundColor = `#${color}`


} , 50)

