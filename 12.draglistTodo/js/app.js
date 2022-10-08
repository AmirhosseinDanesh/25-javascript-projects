let $ = document

let addBtn = $.querySelector("#add_btn")
let modal = $.querySelector(".modal")
let closeModal = $.querySelector(".close-modal")
let inputTodo = $.querySelector("#todo_input")
let submitTodo = $.querySelector("#todo_submit")
let todoCArt = $.querySelector(".todo")
let todoList = $.querySelector(".status")


function addTodo(){
    todoValue = inputTodo.value
    // Create Div
    let divCart = $.createElement("div")
    divCart.classList.add("todo")
    divCart.setAttribute("draggable" , "true")
    divCart.innerHTML = todoValue
    // Create span
    let spanCard = $.createElement("span")
    spanCard.classList.add("close")
    spanCard.innerHTML= "&times;"
    // append span to div
    divCart.append(spanCard)
    todoList.append(divCart)


    spanCard.addEventListener("click" , function(e){
        e.target.parentElement.remove()
    })
}





function closerModal(){
    modal.classList.remove("active")
}


submitTodo.addEventListener("click" , addTodo)
closeModal.addEventListener("click" , closerModal)
addBtn.addEventListener("click" , function(){
    modal.classList.add("active")
    window.addEventListener("keydown" , function(e){
        if(e.code === "Escape"){
            closerModal()
        }
    })
})
