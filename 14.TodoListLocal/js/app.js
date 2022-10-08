// let $ = document
// input
// let input = $.querySelector(".form-control")

// button
// let addBtn = $.querySelector("#addButton")
// let clearBtn = $.querySelector("#clearButton")






// resault
// let resault = $.querySelector("#resault")

// function addTodo() {
//     if (input.value === "") {

//         resault.innerHTML = "Empty Wrong"


//     } else {
//         let ul = $.querySelector("#todoList")
//         let li = $.createElement("li")

//         li.className = "completed well"
//         ul.append(li)

//         // create label
//         let liLabel = $.createElement("Label")
//         liLabel.innerHTML = input.value
//         li.append(liLabel)

//         // create Button
//         let liCompleteBtn = $.createElement("button")
//         let liDeleteBtn = $.createElement("button")

//         liCompleteBtn.innerHTML = "Complete"
//         liDeleteBtn.innerHTML = "Delete"

//         liCompleteBtn.className = "btn btn-success completeBtn"
//         liDeleteBtn.className = "btn btn-danger deleteBtn"

//         li.append(liCompleteBtn)
//         li.append(liDeleteBtn)


//         // Clear Input
//         input.value = ""

//         resault.innerHTML = ""

//         // Complete Btn
//         let completeBtn = $.querySelectorAll(".completeBtn")
//         completeBtn.forEach(function (btn) {
//             btn.addEventListener("click", function (e) {
//                 e.target.parentElement.className="uncompleted well"
//             })

//         })

//         // Delete Btn
//         let deleteBtn = $.querySelectorAll(".deleteBtn")
//         deleteBtn.forEach(function (btn) {
//             btn.addEventListener("click", function (e) {
//                 e.target.parentElement.remove()
//             })

//         })

//     }





// }


// function clearInput() {
//     input.value = ""
//     resault.innerHTML = ""
// }





// addBtn.addEventListener("click", addTodo)

// clearBtn.addEventListener("click", clearInput)

// input.addEventListener("keypress", function (e) {
//     if (e.code === "Enter") {
//         addTodo()
//     }
// })




// V2 ///////////





let $ = document
// Inout
let input = $.querySelector("#itemInput")
// Button
let addTodoBtn = $.querySelector("#addButton")
let clearAllTodoBtn = $.querySelector("#clearButton")

let ul = $.querySelector("#todoList")


let todoArr = []

function addTodo() {
    let newTodoTitle = input.value

    let newTodoObj = {
        id: todoArr.length + 1,
        title: newTodoTitle,
        complete: false
    }

    todoArr.push(newTodoObj)
    setLocalStorage(todoArr)

    todoGenrator(todoArr)

}

function setLocalStorage(todoList) {
    localStorage.setItem("todos", JSON.stringify(todoList))
}

function todoGenrator(todoList) {
        let li  , liLabel , liCompleteBtn , liDeleteBtn
        ul.innerHTML=""

        todoList.forEach(function (todo) {
        li = $.createElement("li")
        li.className = "completed well"
        ul.append(li)
        liLabel = $.createElement("Label")
        liLabel.innerHTML = todo.title
        liCompleteBtn = $.createElement("button")
        liDeleteBtn = $.createElement("button")

        liCompleteBtn.innerHTML = "Complete"
        liDeleteBtn.innerHTML = "Delete"

        liCompleteBtn.className = "btn btn-success completeBtn"
        liDeleteBtn.className = "btn btn-danger deleteBtn"

        liCompleteBtn.setAttribute("onclick" ,"removeTodo(" + todo.id + ")" )

        li.append(liLabel,liCompleteBtn,liDeleteBtn)

        input.value = ""
        
        input.focus()
        

    })
}

function removeTodo(todoId){
    
    let localStorageTodos = JSON.parse(localStorage.getItem("todos"))
    console.log(localStorageTodos[todoId]);

}



function getLocalStorage(){
    let localStorageTodos = JSON.parse(localStorage.getItem("todos"))

    if(localStorageTodos){
        todoArr = localStorageTodos
    }else{
        todoArr = []
    }

    todoGenrator(todoArr)
}

function clearAllTodo(){
    todoArr = []
    todoGenrator(todoArr)
    localStorage.removeItem("todos")
}


window.addEventListener("load" , getLocalStorage)


clearAllTodoBtn.addEventListener("click" , clearAllTodo)
addTodoBtn.addEventListener("click", addTodo)
input.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addTodo()
    }
})






























































