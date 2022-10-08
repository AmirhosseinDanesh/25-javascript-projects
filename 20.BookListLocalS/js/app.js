let $ = document

let title = $.querySelector("#title")
let author = $.querySelector("#author")
let year = $.querySelector("#year")

let addBook = $.querySelector(".add-Btn")

let bookList = $.querySelector("#book-list")


let books = []


addBook.addEventListener("click", function (event) {
    event.preventDefault()
    let titleVal = title.value
    let authorVal = author.value
    let yearVal = year.value

    if (titleVal === '' || authorVal === '' || yearVal === '') {
        alert('لطفا همه اینپوت ها را پر نمایید')
    } else {
    
        let newBookObj = {
            id: books.length + 1,
            title: titleVal,
            author: authorVal,
            year: yearVal,
        }
        books.push(newBookObj)
    
        localStorageSet(books)
    }


})


function localStorageSet(books) {
    localStorage.setItem("books", JSON.stringify(books))
    bookGenerator(books)
    valueEmptier()
}

function valueEmptier() {
    title.value = ""
    author.value = ""
    year.value = ""
}

function bookGenerator(bookGen) {
    bookList.innerHTML = ""

    bookGen.forEach(function (book) {
        let tr = $.createElement("tr")
        
        let thTitle = $.createElement("th")
        thTitle.innerHTML = book.title

        let thAuthor = $.createElement("th")
        thAuthor.innerHTML = book.author

        let thYear = $.createElement("th")
        thYear.innerHTML = book.year

        tr.append(thTitle,thAuthor,thYear)
        bookList.append(tr)


    })
}


function getBooksFromLs(){
    let lsbooks = localStorage.getItem("books")
    if(lsbooks){
        books = JSON.parse(lsbooks)
        bookGenerator(books)
    }
}



window.addEventListener("load" , getBooksFromLs)