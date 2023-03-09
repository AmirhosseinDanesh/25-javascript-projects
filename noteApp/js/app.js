let $ = document

// input 
let inputField = $.querySelector("#input-field")
// Btn Save
let btnSave = $.querySelector("#btn-save")
// inputLabel
let inputLabel = $.querySelector("#inputLabel")
// list
let listed = $.querySelector("#listed")
// list Colors
let colors = $.querySelectorAll(".color-box")
// card
let card = $.querySelector(".card")

let btnDelete = $.querySelector("#btn-delete")

function addList(e){
    if (inputField.value === "") {
        inputLabel.innerHTML="Empty Massage"
        
    }else {
        inputLabel.innerHTML="Done"

        let divCard = $.createElement("div")
        divCard.className = ("card shadow-sm rounded")
        
        let pCard = $.createElement("P")
        pCard.className = ("card-text p-3")
        
        pCard.innerHTML = inputField.value
        divCard.append(pCard)

        listed.append(divCard)
        
        
        let inputColor = inputField.style.backgroundColor
        divCard.style.backgroundColor = inputColor  
        
        
        
    inputField.value = ""
        
    }
    
    
}



function btnDeleter(){
    inputLabel.innerHTML=""
    inputField.value = ""
    inputField.style.backgroundColor = "white"
    
}





btnSave.addEventListener("click" , addList)
btnDelete.addEventListener("click" , btnDeleter)
inputField.addEventListener("keypress" , function(e){
    if(e.code === 'Enter' ){
        addList()
    }
})

colors.forEach(function(item){
    item.addEventListener("click" , function(){
        let color = item.style.backgroundColor
        inputField.style.backgroundColor = color
    })
});


listed.addEventListener("click" , function(e){
    if(e.target.tagName === "P"){
        e.target.parentElement.remove()
    }
})