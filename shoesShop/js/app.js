import {allShoesData} from "./shoesData.js"


let $ = document
let container = $.querySelector(".container")





allShoesData.forEach(function(shoe){
    container.insertAdjacentHTML("beforeend" , '<div class="product-card"><h1>'+shoe.name+'</h1><p>'+shoe.text+'</p><div class="product-pic" style="background-image: url('+shoe.img+');"></div><div class="product-info"><div class="product-price">'+shoe.price+'$</div><a href="product.html?id='+shoe.id+'" + product.id + " class="product-button">See More</a></div></div>')
    
})


