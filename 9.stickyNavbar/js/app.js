let $ = document
let logoImg = $.querySelector(".logo img")
let navbar = $.querySelector("#mainNav")



function scrollNav(){
    if(document.documentElement.scrollTop > 100){
        navbar.classList.add("bg-black")
        navbar.classList.add("txt-white")
        logoImg.style.height = "64px"   
        
    }
    else{
        navbar.classList.remove("bg-black")
        navbar.classList.remove("txt-white")
        logoImg.style.height = "84px"   

    }
}


window.addEventListener("scroll" , scrollNav)