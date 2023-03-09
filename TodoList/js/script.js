let $ = document
// Deete Btn
let deleteTodo = $.querySelectorAll(".delete")
// input text
let inputTodo = $.querySelector(".inputTodo")
let listTodo = $.querySelector(".list-group")

console.log(deleteTodo)

inputTodo.addEventListener("keypress", function (e) {

    if (e.code === "Enter") {

        if (inputTodo.value === "") {

            alert("It's Empty ")
        } else {

            e.preventDefault()
            let todoLi = $.createElement("li")
            todoLi.className = ("list-group-item d-flex justify-content-between align-items-center")

            let todoLiSpan = $.createElement("span")
            todoLiSpan.innerHTML = (inputTodo.value)

            let todoi = $.createElement("i")
            todoi.classList = ("fa fa-trash-o delete")
            // todoi.addEventListener("click",function(e){
            //     e.target.parentElement.remove()
            // })
            todoLi.append(todoLiSpan, todoi)
            listTodo.append(todoLi)

            inputTodo.value = ""

        }
    }
})



// Delete Btn function
// deleteTodo.forEach(function(btn){
//     btn.addEventListener("click",function(){
//         btn.parentElement.remove()
//     })
// })


listTodo.addEventListener("click", function (e) {
    if(e.target.parentElement.tagName === "LI"){
        e.target.parentElement.remove()
    }
})