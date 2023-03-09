let $ = document

let hour = $.querySelector("#hour")
let minute = $.querySelector("#minute")
let seconds = $.querySelector("#seconds")

setInterval(function(){
    let date = new Date()
    let mainHour = date.getHours()
    let mainMin = date.getMinutes()
    let mainSec = date.getSeconds()
    seconds.innerHTML = mainSec
    minute.innerHTML = mainMin
    hour.innerHTML = mainHour
    if (seconds.innerHTML.length < 2){
        seconds.innerHTML = "0" + mainSec
    }
    if (minute.innerHTML.length < 2){
        minute.innerHTML = "0" + mainMin
    }
    if (hour.innerHTML.length < 2){
        hour.innerHTML = "0" + mainSec
    }
} , 1000)