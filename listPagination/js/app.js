const listItems = [
    { id: 1, name: 'Amir', family: 'Danesh' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Amin', family: 'Saeedi Rad' },
    { id: 7, name: 'Amir', family: 'Zehtab' },
    { id: 8, name: 'Qadir', family: 'Yolme' },
    { id: 9, name: 'Babak', family: 'Mohammadi' },
    { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },

];

let $ = document

let listDocument = $.querySelector("#list")
let listPageNum = $.querySelector("#pagination")
let option = $.querySelector("#select")










option.addEventListener("change", function () {
    let optionVal = option.value
    rowPerPage = optionVal
    


    displayUser(rowPerPage)
    displayPages(rowPerPage)
    currentPage = 1

})

let currentPage = 1

function displayUser() {
    listDocument.innerHTML = ""
    let endList = currentPage * rowPerPage
    let startList = endList - rowPerPage

    let userList = listItems.slice(startList, endList)

    userList.forEach(function (user) {
        let userDiv = document.createElement("div")
        userDiv.classList.add("item")
        userDiv.innerHTML = user.name + " " + user.family
        listDocument.append(userDiv)
    })



}
function displayPages() {
    listPageNum.innerHTML = ""
    let pages = Math.ceil(listItems.length / rowPerPage)

    for (let i = 1; i < pages + 1; i++) {

        pageGenrator(i ,)

    }



}




function pageGenrator(i) {

    let pagesBtn = document.createElement("button")

    pagesBtn.innerHTML = i

    listPageNum.append(pagesBtn)

    if (currentPage === i) {
        pagesBtn.classList.add("active")
    }

    pagesBtn.addEventListener("click", function (e) {
        let pagesNum = e.target.innerHTML
        currentPage = pagesNum
        displayUser()

        let prevBtn = document.querySelector("button.active")
        
        prevBtn.classList.remove("active")
        pagesBtn.classList.add("active")
    })
}



window.addEventListener("load" , function(){
    rowPerPage = 3
    displayUser(rowPerPage)
    displayPages(rowPerPage)
} )

