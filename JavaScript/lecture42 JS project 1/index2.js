


const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const disco = document.querySelector("#disco");

// Default todos
let todos = ["ravi", "muskan", "alok"];

// LocalStorage se data lena
let savedTodos = localStorage.getItem("data");

if (savedTodos) {
    todos = JSON.parse(savedTodos);
}


// ===============================
// RENDER TODOS
// ===============================

function rander() {

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

        const li = document.createElement("li");

        li.className = "flex items-center gap-3 py-2";

        li.innerHTML = `
            <input class="checkbox" type="checkbox">

            <span class="flex-1 uppercase">${todo}</span>

            <button class="edit-btn bg-blue-500 text-white px-3 py-1 rounded-md cursor-pointer">
                edit
            </button>

            <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-md">
                delete
            </button>
        `;

        todoList.append(li);


        // ===============================
        // EDIT TODO
        // ===============================

        const edit = li.querySelector(".edit-btn");

        edit.addEventListener("click", () => {

            let newtext = prompt("Edit Todo", todo);

            if (newtext !== null && newtext.trim() !== "") {

                todos[index] = newtext.trim();

                // LocalStorage update
                localStorage.setItem(
                    "data",
                    JSON.stringify(todos)
                );

                rander();
            }
        });


        // ===============================
        // DELETE TODO
        // ===============================

        const delet = li.querySelector(".delete-btn");

        delet.addEventListener("click", () => {

            todos.splice(index, 1);

            // LocalStorage update
            localStorage.setItem(
                "data",
                JSON.stringify(todos)
            );

            rander();
        });


        // ===============================
        // CHECK TODO
        // ===============================

        const check = li.querySelector(".checkbox");

        check.addEventListener("change", () => {

            let t = check.checked;

            li.style.textDecoration =
                t ? "line-through" : "none";
        });

    });
}


// ===============================
// FIRST RENDER
// ===============================

rander();


// ===============================
// ADD TODO
// ===============================

todoForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const text = todoInput.value.trim();

    if (text === "") {
        return;
    }

    todos.push(text);

    // LocalStorage me save
    localStorage.setItem(
        "data",
        JSON.stringify(todos)
    );

    rander();

    todoInput.value = "";
});


// ===============================
// RANDOM BACKGROUND COLOR
// ===============================

setInterval(() => {

    let colorStr = "0123456789abcdef";

    let color = "";

    for (let i = 0; i < 6; i++) {

        let random = Math.floor(
            Math.random() * colorStr.length
        );

        color = color + colorStr[random];
    }

    disco.style.backgroundColor = `#${color}`;

}, 50);
