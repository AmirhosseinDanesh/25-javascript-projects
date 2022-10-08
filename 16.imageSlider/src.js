let $ = document

let image = $.querySelector('.image')
let prevBtn = $.querySelector(".prevBtn")
let nextBtn = $.querySelector(".nextBtn")

let imgArr = ["./pic/main1.jpg","./pic/main3.jpg","./pic/main4.jpg","./pic/main5.jpg","./pic/main6.jpg"]

let imgIndex = 0

function prevImg(){
    imgIndex --
    if(imgIndex < 0){
        imgIndex = imgArr.length - 1
    }

    image.setAttribute("src" , imgArr[imgIndex])

}

function nextImg(){
    imgIndex ++
    if(imgIndex > imgArr.length - 1){
        imgIndex = 0
    }
    image.setAttribute("src" , imgArr[imgIndex])
    
    
    image.style.animation = "fadeOut 1s" 

}


setInterval(nextImg,2000)
