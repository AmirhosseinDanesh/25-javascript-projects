let $ = document
let posClick = $.querySelector("body")
let contextPos = $.querySelector(".context-menu")

posClick.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    contextPos.style.display = "block"
    contextPos.style.left = e.pageX
    contextPos.style.top = e.pageY
})
posClick.addEventListener("keydown", function (e) {
    if (e.key === 'Escape') {
        contextPos.style.display = "none"
    }
})

posClick.addEventListener("click", function () {
    contextPos.style.display = "none"

})