const enterAction = document.getElementById("enterAction");
const input = document.getElementById("input");
const button = document.getElementById("button");
const add = document.querySelector(".add");


let todo_list = []

function renderItem(val) {
    const div = document.createElement("div")

    const p = document.createElement("p");
    p.textContent = val
    
    const checkbox = document.createElement("input");
   checkbox.setAttribute("type" , "checkbox")

   div.appendChild(checkbox)
   div.appendChild(p)

   add.appendChild(div)
   
}


let clearInput = () => {
    input.value = ""
}
function looping() {
    for(let i; i<todo_list.length; i++) {
        let item = todo_list[i]
        renderItem(item)
    }
}
function setItemToStorage(value) {
      todo_list.push(value);
       let obj =  JSON.stringify(todo_list)
       console.log(obj)
       localStorage.setItem("f" , todo_list)
}
function getItemFromStorage() {
    let a = localStorage.getItem("f");
   let b =  JSON.parse(a) || [];
    
    todo_list = b
}



function event() {
    
    enterAction.addEventListener("submit" , (e) => {
        let value = input.value
        e.preventDefault()
        if(input.value==""){
                    button.classList.add("error")
                alert("your input is empty")
            }else {
                input.addEventListener("keydown" , () => {
                    button.classList.remove("error")
                })
                    setItemToStorage(value)
                    renderItem(value)
                    clearInput()
                    
            }
        })
}


function init () {
    getItemFromStorage()
    looping()
    event()
}
init()


