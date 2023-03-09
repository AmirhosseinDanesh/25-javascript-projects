let $ = document
let span = $.querySelectorAll("span")
let tBody = $.querySelector(".tbody")
let AddProject = $.querySelector(".addProject")
let modal = $.querySelector("#add-modal")
let modalContainer = $.querySelector(".modal-container ")

// Add Data
let ProjectName = $.querySelector(".ProjectName")
let ProjectNumber = $.querySelector(".ProjectNumber")
let statusOption = $.querySelector(".statusOption")
let ProjectLink = $.querySelector(".ProjectLink")

// Edit Data
let ProjectNameToEdit = $.querySelector(".ProjectNameToEdit")
let ProjectNumberToEdit = $.querySelector(".ProjectNumberToEdit")
let statusOptionToEdit = $.querySelector(".statusOptionToEdit")
let ProjectLinkToEdit = $.querySelector(".ProjectLinkToEdit")



// Edit Btn 
let editModal = $.querySelector("#edit-modal")
let editProject = $.querySelector(".editProject")

// Delete Project 
let deleteProjectBtn = $.querySelector(".deleteProject")
let modalDelete = $.querySelector("#delete-modal")



function getAllUser() {

    fetch("https://projects-111a7-default-rtdb.firebaseio.com/Projects.json")
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                console.log(err)
            }
        })
        .then(data => {
            let Project = Object.entries(data)
            Project.forEach(pr => {
                tBody.insertAdjacentHTML("afterbegin", `
                <tr class="prtr">
                    <td>
                        <input class="selectBtn" type="radio" name="pr" id="${pr[0]}" />
                    </td>
                    <td class="ProjectNumber">${pr[1].ProjectNumber}</td>
                    <td class="projectName">${pr[1].ProjectName}</td>
                    <td class="ProjectStatus"><span class="${pr[1].ProjectStatus}"></span></td>
                    <td class="projectLink">
                        <a target="_blank" class="list-item" href="${pr[1].ProjectLink}">view</a>
                    </td>
            </tr>
            `)
            });
        })
        .then(page => {
            pagination()
        })



}




// Add Project
function OpenModal() {
    modal.classList.add('visible')
}

function AddProjecter() {
    tBody.innerHTML = ""


    let ProjectData = {
        ProjectName: ProjectName.value,
        ProjectNumber: ProjectNumber.value,
        ProjectStatus: statusOption.value,
        ProjectLink: ProjectLink.value,
    }
    fetch("https://projects-111a7-default-rtdb.firebaseio.com/Projects.json", {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(ProjectData)
    })
        .then(res => {
            getAllUser()
            ProjectName.value = ""
            ProjectNumber.value = ""
            ProjectLink.value = ""
        })

    modal.classList.remove('visible')





}


// Edit Project

let OpenEditModal = () => {
    if (document.querySelector("input[type=radio]:checked")) {
        editModal.classList.add("visible")
        let checked = document.querySelector("input[type=radio]:checked");
        let parent = checked.parentElement.parentElement
        ProjectNameToEdit.value = parent.childNodes[5].innerHTML
        ProjectNumberToEdit.value = parent.childNodes[3].innerHTML
        ProjectLinkToEdit.value = parent.childNodes[9].childNodes[1].href
        statusOptionToEdit.value = parent.childNodes[7].childNodes[0].classList[0]

    }
}

let closeModal = () => { editModal.classList.remove("visible") }


function EditProjectBtn() {
    let checked = document.querySelector("input[type=radio]:checked");
    let projectID = checked.id
    let ProjectData = {

        ProjectName: ProjectNameToEdit.value,
        ProjectNumber: ProjectNumberToEdit.value,
        ProjectStatus: statusOptionToEdit.value,
        ProjectLink: ProjectLinkToEdit.value,
    }
    fetch(`https://projects-111a7-default-rtdb.firebaseio.com/Projects/${projectID}.json`, {
        method: "PUT",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(ProjectData)
    })
        .then(res => {
            tBody.innerHTML = ""
            getAllUser()
            closeModal()
        })
}

// Delete Project

let OpenDeleteModal = () => modalDelete.classList.add("visible")

let closeDeleteModal = () => modalDelete.classList.remove("visible")

function deleteUser() {
    let checked = document.querySelector("input[type=radio]:checked");
    let projectID = checked.id
    fetch(`https://projects-111a7-default-rtdb.firebaseio.com/Projects/${projectID}.json`, {
        method: "DELETE",
    })
        .then(res => {
            closeDeleteModal()
            tBody.innerHTML = ""
            getAllUser()
        })
}







function pagination() {
    let prtr = $.querySelectorAll(".prtr")
    let perPage = 5
    let currentPage = 1
    function displayProject() {
        let endList = perPage * currentPage
        let startList = endList - perPage
        var prArr = Array.prototype.slice.call(prtr);
        const divsArr = [...prtr];
       

    }





    displayProject()
}





window.addEventListener("load", getAllUser())
AddProject.addEventListener("click", OpenModal)
editProject.addEventListener("click", OpenEditModal)
deleteProjectBtn.addEventListener("click", OpenDeleteModal)
























