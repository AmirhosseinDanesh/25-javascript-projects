let $ = document

let span = $.querySelectorAll("span")
let tBody = $.querySelector(".tbody")

let AddProject = $.querySelector(".addProject")
let modal = $.querySelector("#add-modal")


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



function getAllUser(){
    
    fetch("https://projects-111a7-default-rtdb.firebaseio.com/Projects.json")
    .then(res=>{
        if(res.status === 200){
            return res.json()
        }else{
            console.log(err)
        }
    })
    .then(data=>{
        let Project = Object.entries(data)
        Project.forEach(pr => {
            tBody.insertAdjacentHTML("afterbegin",`
                <tr>
                    <td>
                        <input class="selectBtn" type="radio" name="pr" id="${pr[0]}" />
                    </td>
                    <td class="ProjectNumber">${pr[1].ProjectNumber}</td>
                    <td class="projectName">${pr[1].ProjectName}</td>
                    <td><span class="${pr[1].ProjectStatus}"></span></td>
                    <td>
                        <a target="_blank" class="list-item" href="https://${pr[1].ProjectLink}">view</a>
                    </td>
            </tr>
            `)
        });
    })
}

function OpenModal(){
    modal.classList.add('visible')
}

function AddProjecter(){
    tBody.innerHTML=""
    
    
    let ProjectData = {
        ProjectName : ProjectName.value,    
        ProjectNumber : ProjectNumber.value,
        ProjectStatus : statusOption.value,
        ProjectLink: ProjectLink.value,
    }
    fetch("https://projects-111a7-default-rtdb.firebaseio.com/Projects.json",{
        method:"POST",
        headers:{
            'Content-type' : "application/json"
        },
        body:JSON.stringify(ProjectData)
    })
    .then(res=>{
        getAllUser()
    })
    
    modal.classList.remove('visible')
    
    

    
    
}






// Editor

let OpenEditModal = ()=>{
    if(document.querySelector("input[type=radio]:checked")){
        editModal.classList.add("visible")
    }
}

let closeModal = ()=>{editModal.classList.remove("visible")}



function EditProjectBtn(){
    let checked = document.querySelector("input[type=radio]:checked");
    let projectID = checked.id
    let ProjectData = {

        ProjectName : ProjectNameToEdit.value ,    
        ProjectNumber : ProjectNumberToEdit.value,
        ProjectStatus : statusOptionToEdit.value,
        ProjectLink:ProjectLinkToEdit.value,
    }
    fetch(`https://projects-111a7-default-rtdb.firebaseio.com/Projects/${projectID}.json`,{
        method:"PUT",
        headers:{
            'Content-type' : "application/json"
        },
        body:JSON.stringify(ProjectData)
        })
        .then(res=>{
            tBody.innerHTML=""
            getAllUser()
            closeModal()
    })
}






window.addEventListener("load", getAllUser())
AddProject.addEventListener("click", OpenModal)
editProject.addEventListener("click" , OpenEditModal)










// window.addEventListener("online" , function(){
//     span.forEach(function(span){
//         span.className = "available"
        
//     })
// })

// window.addEventListener("offline" , function(){
//     span.forEach(function(span){
//         span.className = "away"
        

//     })
// })

















