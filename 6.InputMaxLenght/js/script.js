let $ = document

let counter = $.querySelector(".counter")
let inputlength = $.querySelector(".inputLenght")
let inputMaxLenght = inputlength.getAttribute("maxlength")

inputlength.addEventListener("keyup",function(){
    counter.innerHTML = (inputMaxLenght - inputlength.value.length)
    


    
})
