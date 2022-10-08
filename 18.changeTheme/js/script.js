let $ = document

let colors = $.querySelectorAll(".btn")


colors.forEach(function(color){
    color.addEventListener("click" , function(e){
        let colorTheme = e.target.dataset.color
        document.documentElement.style.setProperty("--theme-color" , colorTheme )

    })
})