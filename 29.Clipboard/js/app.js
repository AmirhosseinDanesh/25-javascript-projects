let Copier = document.querySelector(".Copier")
let paster = document.querySelector(".paster")



Copier.addEventListener("click" , function(e){
    e.preventDefault()
    let text = "Copy me2"
    if(window.navigator.clipboard.writeText){
        window.navigator.clipboard.writeText(text)
    }else{
        alert("Bad Browser")
    }
})

paster.addEventListener("click" , function(){
    window.navigator.clipboard.readText()
    .then(res=>{
        paster.innerHTML=res
    })

})

