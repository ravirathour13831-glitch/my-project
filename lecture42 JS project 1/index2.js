
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")

const disco = document.querySelector("#disco")
let todos = ["ravi", "muskan", "alok"]

function rander() {
    todos.forEach((todo) => {
        let li = document.createElement("li")
        li.textContent = todo
        todoList.append(li)


    })
}

rander()

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    todoList.innerHTML = ""
    todos.push(todoInput.value)
    setTimeout(() => {
        rander()

    }, 3000)


    todoInput.value = ""

})



setInterval((e) => {
let colorStr  = "0123456789abcdef"

    color = ""

for (let i= 0; i<6; i++){

let random = Math.floor(Math.random() * colorStr.length) +1
color = color + colorStr[random]

}
disco.style.backgroundColor = `#${color}`


} , 50)





















