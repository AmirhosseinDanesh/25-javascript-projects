import { suggestions } from "./suggestions.js"

let $ = document

let input = $.querySelector(".input-val")
let searchBar = $.querySelector(".search-input")
let suggestPlace = $.querySelector(".autocom-box")



input.addEventListener("keydown", function () {
    let inputVal = input.value
    if (inputVal) {
        searchBar.classList.add("active")
        let suggestWord = suggestions.filter(function (suggest) {
            return suggest.toLowerCase().includes(inputVal.toLowerCase())
        })


        suggestGenerator(suggestWord)

    } else {
        searchBar.classList.remove("active")

    }

})


function suggestGenerator(wordsArr) {
    let words = wordsArr.map(function (word) {
        return "<li>" + word + "</li>"

    })
    let wordItem
    if (!words.length) {
        wordItem = "<li>" + input.value + "</li>"
    } else {
        wordItem = words.join("")
    }
    suggestPlace.innerHTML = wordItem
    replace()   
}



function replace() {
    let lies = $.querySelectorAll("li")
    lies.forEach(function(li){
        li.addEventListener("click", function (e) {
            input.value = e.target.textContent
            searchBar.classList.remove("active")
        })
    });


}