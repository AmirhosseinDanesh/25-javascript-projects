let $ = document

let title = $.querySelector(".title")


function click(event){
    console.log(event.key);
    addToTitle(event)
    let key = event.key.toUpperCase()
    let userKey = document.getElementById(key)
        userKey.classList.add("hit")
    function removeAnimation(){
        userKey.classList.remove("hit")
    }
    userKey.addEventListener("animationend" , removeAnimation)

    
}

function addToTitle(event){
    if(event.code === 'Backspace'){
        title.innerHTML = title.innerHTML.slice(0 , -1)
        return
    }
    title.innerHTML += event.key

}

document.addEventListener("keyup" , click)