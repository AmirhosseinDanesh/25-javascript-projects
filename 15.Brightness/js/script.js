let $ = document

let inputRange = $.querySelector("#range") 
let container = $.querySelector(".container")

function brChanger(e){
    container.style.filter = "brightness"+"("+(e.target.value) +"%)"
    
}




inputRange.addEventListener("change" , brChanger)