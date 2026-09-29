const todoForm = document.querySelector("#todoForm")

const text = document.querySelector("#name")

const list = document.querySelector("#list")


let arr = [

    {
        id: 1,
        text: "ravi",
        isCompleted: false
    },

    {
        id: 2,
        text: "muskan",
        isCompleted: false
    },

    {
        id: 3,
        text: "jac",
        isCompleted: false
    }

]

let savedTodos = localStorage.getItem("todos")

if (savedTodos) {
    arr = JSON.parse(savedTodos)
}

// Page load hote hi Todo render
rander()



// =============================
// ADD TODO
// =============================

todoForm.addEventListener("submit", (e) => {

    e.preventDefault()


    // Empty todo ko add nahi karenge
    if (text.value.trim() === "") {
        return
    }


    arr.push({

        id: Date.now(),

        text: text.value.trim(),

        isCompleted: false

    })
 localStorage.setItem("todos" , JSON.stringify(arr))



    // List dobara render
    rander()


    // Input empty
    text.value = ""

})



// =============================
// RENDER TODO
// =============================

function rander() {

    // Purani list remove
    list.innerHTML = ""


    arr.forEach((todo, index) => {

        creat(todo, index)

    })

}



// =============================
// CREATE TODO
// =============================

function creat(todo, index) {

    // li create
    const li = document.createElement("li")


    // li ki class
    li.className = "todo-item"


    // HTML create
    li.innerHTML = `

        <div class="todo-left">

            <input
                class="todo-checkbox"
                type="checkbox"
            >

            <span class="todo-text">
                ${todo.text}
            </span>

        </div>


        <div class="todo-buttons">

            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>

    `



    // =============================
    // ELEMENT SELECT
    // =============================

    const checkbox =
        li.querySelector(".todo-checkbox")


    const edit =
        li.querySelector(".edit-btn")


    const deleteb =
        li.querySelector(".delete-btn")



    // =============================
    // CHECKBOX
    // =============================

    checkbox.checked = todo.isCompleted


    checkbox.addEventListener("change", () => {

        todo.isCompleted = checkbox.checked
        localStorage.setItem("todos", JSON.stringify(arr))
        li.style.textDecoration = checkbox.checked ? "line-through" : "none"


        // completed class
        li.classList.toggle(
            "completed",
            todo.isCompleted
        )

    })



    // =============================
    // EDIT
    // =============================

    edit.addEventListener("click", () => {

        const newText =
            prompt(
                "Edit Todo",
                todo.text
            )


        if (
            newText !== null &&
            newText.trim() !== ""
        ) {

            todo.text =
                newText.trim()
                localStorage.setItem("todos", JSON.stringify(arr))


            // List update
            rander()

        }

    })



    // =============================
    // DELETE
    // =============================

    deleteb.addEventListener("click", () => {

        arr.splice(index, 1)
        localStorage.setItem("todos", JSON.stringify(arr))


        // List update
        rander()

    })



    // =============================
    // LIST ME ADD
    // =============================

    list.append(li)

}