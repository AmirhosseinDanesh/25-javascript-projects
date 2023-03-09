import {allShoesData} from "./shoesData.js"



let $ = document
let backBtn = $.querySelector("#back")




let userLocationId = new URLSearchParams(location.search)
let userId = userLocationId.get("id")
let desc = $.querySelector(".desc h1")
let descP = $.querySelector(".desc p")
let img = $.querySelector(".image img")
let price = $.querySelector(".price")


let shoeData = allShoesData.find(function(data){
   return data.id === Number(userId)
})

if(shoeData){
    desc.innerHTML = shoeData.name
    descP.innerHTML = shoeData.text
    img.setAttribute("src" , shoeData.img)
    price.innerHTML = shoeData.price + "$"

}else{
    location.href = 'http://localhost:5500/shoesShop/index.html'
}



backBtn.addEventListener("click", function () {
    history.back()
})