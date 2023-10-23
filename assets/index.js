const enterAction = document.getElementById("enterAction");
const input = document.getElementById("input");
const button = document.getElementById("button");
const add = document.querySelector(".add");

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
function event() {
    
    enterAction.addEventListener("submit" , (e) => {
        let value = input.value
        e.preventDefault()
        
        
        // function error() {
        //     input.addEventListener("keydown" , () => {
        //         if(input.value =="") {
        //             alert("your input is empty")
        //             button.classList.add("error")
        //         }else {
        //             button.classList.remove("error")
        //             event()
        //         }
        //     })
        // }
        
        if(input.value==""){

                    button.classList.add("error")
                alert("your input is empty")
            }else if(input.value !=="") {
                input.addEventListener("keydown" , () => {
                    button.classList.remove("error")

                })
                    renderItem(value)
                    clearInput()
            }
        })
            
        
}
let clearInput = () => {
    input.value = ""
}



event()

