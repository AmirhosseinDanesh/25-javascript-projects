let $ = document

let mainMusic = $.querySelectorAll(".fa-play")
let musicSrc = $.querySelectorAll("audio")
let body = $.querySelector("body")





function playMusic(event){
    let musicName= event.target.dataset.name
    musicSrc.forEach(function(music){
        if(music.dataset.name === musicName ){
            music.currentTime = 0
            music.play()
        }else{
            music.pause()
        }
        document.addEventListener("keypress" ,  function(e){
            if(e.code === "Space"){
                music.pause()
        
            }
        })
    })
}







mainMusic.forEach(function(music){
    music.addEventListener("click" , playMusic)
})


