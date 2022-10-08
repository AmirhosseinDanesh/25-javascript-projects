let $ = document

let firstname = $.querySelector(".firstname")
let lastname = $.querySelector(".lastname")
let password = $.querySelector(".password")
let button = $.querySelector("#form")

button.addEventListener("submit", (e) => {
    e.preventDefault()
    let userData = {
        firstname :firstname.value,
        lastname :lastname.value,
        password :password.value,
    }
    

    fetch("https://cms-dashboard-af310-default-rtdb.firebaseio.com/users.json",{
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body:JSON.stringify(userData) 
    }).then(res=>{
        clearInput()
    })
    .catch(err=>{console.log(err)})
})

function clearInput (){
        firstname.value="",
        lastname.value="",
        password.value=""
}