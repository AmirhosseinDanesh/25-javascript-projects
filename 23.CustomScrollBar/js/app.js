let $ = document

let customScroll = $.querySelector("#scroll")

window.addEventListener("scroll" , function(){
    let userScroll = window.scrollY // 5000
    let documentHeight = document.body.clientHeight //1000
    let windowHeight = window.innerHeight
    
    let scrollPercent = Math.round((userScroll / (documentHeight - windowHeight ) * 100))

    customScroll.style.width = scrollPercent + "%"
})


