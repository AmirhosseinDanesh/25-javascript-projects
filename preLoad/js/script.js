let $ = document
let loader = $.querySelector(".loader")

window.addEventListener("load",function(){
    // firstWay
    // loader.classList.add("hidden")
    // secondWay
    loader.className += " hidden"
})