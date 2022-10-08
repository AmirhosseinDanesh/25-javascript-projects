let wrapUsers = document.querySelector("#wrap-users")
let deleteModal = document.querySelector("#delete-modal")
let userID = null
let editModal = document.querySelector("#edit-modal")

let firstname = document.querySelector(".firstname")
let lastname = document.querySelector(".lastname")
let password = document.querySelector(".password")


window.addEventListener("load", function () {
    getAllUser()
})

function getAllUser() {
    fetch("https://cms-dashboard-af310-default-rtdb.firebaseio.com/users.json")
        .then(res => {
            return res.json()
        })
        .then(data => {
            let users = Object.entries(data)

            users.forEach((userIndex) => {
                let user = userIndex[1]
                wrapUsers.insertAdjacentHTML("afterbegin", `
                    <div class="user">
                        <div class="user-profile-wrap">
                            <img class="user-profile" src="img/noimg.png" alt="default-image">
                                <div class="user-profile-description">
                                <h1 class="user-profile-name">${user.firstname} - ${user.lastname}<span class="user-age">18</span> </h1>
                                <h3 class="user-explanations">Pass: ${user.password}</h3>
                        </div>
                    </div>
                    <div class="btn-groups-column">
                        <button class="delete-user-btn" onclick="openDeleteModel('${userIndex[0]}')">delete</button>
                        <button class="edit-user-btn" onclick="editModaler('${userIndex[0]}')">edit</button>
                    </div>
                </div>
            `)
            })
        })
}

function openDeleteModel(id) {
    deleteModal.classList.add("visible")

    userID = id
}


function closeModal() {
    deleteModal.classList.remove("visible")

}



function deleteUser() {
    
    fetch(`https://cms-dashboard-af310-default-rtdb.firebaseio.com/users/${userID}.json`, {
        method: "DELETE",

    })
        .then(res => {
            wrapUsers.innerHTML = ""
            getAllUser()
            closeModal()
        })
}


function editModaler(id) {
    userID = id

    editModal.classList.add("visible")
}

function closeEditModal() {
    editModal.classList.remove("visible")
}

function updateUser() {
    let userEditData = {
        firstname : firstname.value,
        lastname : lastname.value,
        password : password.value,
    }
    fetch(`https://cms-dashboard-af310-default-rtdb.firebaseio.com/users/${userID}.json` ,{ 
    method:"PUT",
    headers : {
        'Content-type' : 'application/json'
    },
    body:JSON.stringify(userEditData)
    })
    .then(res=>{
        wrapUsers.innerHTML = ""
        getAllUser()
        closeEditModal()
    })
}