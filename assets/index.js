const enterAction = document.getElementById("enterAction");
const input = document.getElementById("input");
const button = document.getElementById("button");
const add = document.querySelector(".add");


let todo_list = []

function renderItem(val) {
    const div = document.createElement("div")

    const p = document.createElement("p");
    p.textContent = val

    let del = document.createElement("span")
    del.textContent = "x"
    
    const checkbox = document.createElement("input");
   checkbox.setAttribute("type" , "checkbox")

   div.appendChild(checkbox)
   div.appendChild(p)
   div.appendChild(del)

   add.appendChild(div)
    dele(del , div)
}

function dele(del , div) {
    del.addEventListener("click" , () => {
        todo_list.splice(0 , 1)
        console.log(todo_list)
        div.remove()
        localStorage.removeItem("todo")
    })
}



function clearInput() {
    input.value = ""
}

function setItemToStorage(val) {
    todo_list.push(val)
    let obj = JSON.stringify(todo_list);
    localStorage.setItem("todo" , obj);
}
function loadFromStorage() {
    let load = JSON.parse(localStorage.getItem("todo")) || [];
    todo_list = load
}

function looping() {
    todo_list.forEach((element) => {
        renderItem(element)
    })
}

function events() {
    enterAction.addEventListener("submit" , (e) => {
        let val = input.value
        e.preventDefault()

        if(input.value == "") {
            button.classList.add("error")
            alert("heyyyyyyyyyyyyyyyyy")
        }else {
            input.addEventListener("keydown" , () => {
                button.classList.remove("error")
            })
            renderItem(val)
            clearInput()
            setItemToStorage(val)

        }
        console.log(todo_list)
    })
}
function init() {
    loadFromStorage()
    looping()
    events()
}
init()