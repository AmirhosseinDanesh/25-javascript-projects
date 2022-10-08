








// let dataShow = $.querySelector(".infoCheck")


// let allData = [
//     {id: 24, name : "Amir24" , age:24 , price : 24},
//     {id: 25, name : "Amir25" , age:25 , price : 25},
//     {id: 26, name : "Amir26" , age:26 , price : 26},
//     {id: 27, name : "Amir27" , age:27 , price : 27},
//     {id: 28, name : "Amir28" , age:28 , price : 28},
//     {id: 29, name : "Amir29" , age:29 , price : 29},
// ] 

// let userSearch = location.search


// let userSearchId = new URLSearchParams(userSearch)

// let searhcId = userSearchId.get("id")

// let idChecker = allData.find(function(data){
//     return data.id == searhcId
// })
// if(idChecker){
//     dataShow.innerHTML = idChecker.name
// }else{
//     dataShow.innerHTML = "False"
// }


















// console.info("hi")



















// let $ = document

// let input = $.querySelector("#input")
// let btn = $.querySelector("#btn")
// let label = $.querySelector("#label")

// function checkValue(){
//     try {
//         if(input.value.length > 12){
//             throw "Too High"
//         }else{
//             throw " ok"
//         }
//     } catch (error) {
//         label.innerHTML = error
//     } finally{
//         input.value = ""
//     }
// }



// btn.addEventListener("click" , checkValue)

























// function scrollHandler(event){
//     console.log(document.documentElement.scrollLeft);
// }







// let touchMove = document.querySelector(".touchMove")
// function tMove(){
//     let h1 = document.createElement("h1")
//     h1.innerHTML="Amir Danesh"
//     touchMove.append(h1)
//     console.log("yes");
// }





























// let $ = document
// let box = $.querySelector("#box")
// let btn = $.querySelector("#btn")

// function mouseMove(){
//     console.log("mouse Move");
// }

// box.addEventListener("mousemove" , mouseMove)
// btn.addEventListener("click" , function(){
//     box.removeEventListener("mousemove" , mouseMove)
// })

























// let textArea = document.getElementById("textCCp")
// let res = document.getElementById("log")


// function copyHandler(e){
//     e.preventDefault()
//     res.innerHTML = "Log : " + e.type
// }


// function cutHandler(e){
//     e.preventDefault()

//     res.innerHTML = "Log : " + e.type
// }


// function pasteHandler(e){

//     e.preventDefault()
//     res.innerHTML = "Log : " + e.type
// }



// textArea.addEventListener("copy" , copyHandler)
// textArea.addEventListener("cut" , cutHandler)
// textArea.addEventListener("paste" , pasteHandler)
























// let $ = document
// let key = $.querySelector(".eventKey")
// let loc = $.querySelector(".eventLoc")
// let which = $.querySelector(".eventWhich")
// let Code = $.querySelector(".eventCode")
// let keyCode = $.querySelector(".eventKeyCode")




// document.querySelector("body").addEventListener("keydown" , function(e) {
//     e.preventDefault()
//     keyCode.innerHTML = "E.key = " + e.keyCode
//     key.innerHTML = "E.key = " + e.key
//     loc.innerHTML = "E.loc = " + e.location
//     which.innerHTML = "E.which = " + e.which
//     Code.innerHTML = "E.Code = " + e.code 
// })





























// let $ = document
// // F and C Text to swap
// let firstText = $.querySelector(".confir")
// let secText = $.querySelector(".consec")
// // input form to get Value
// let converVal = $.querySelector(".inputConverter")
// // Button to change
// let convert = $.querySelector(".convertBtn")
// let reset = $.querySelector(".resetBtn")
// let change = $.querySelector(".changeBtn")
// // result text
// let resault = $.querySelector(".resault")






// function convertor(){
//     if(converVal.value === ""){
//         resault.innerHTML="Wrong Value"
//         resault.style.color="red"

//     }else if(isNaN(converVal.value)){
//         resault.innerHTML="Wrong Value"
//         resault.style.color="red"
//     }else{
//         if(firstText.innerHTML ===" C"){
//             let res = (converVal.value * 9/5) + 32
//             resault.innerHTML = "resault: " + res.toFixed(2)
//         }else{
//             let res = (converVal.value - 32) * 5/9
//             resault.innerHTML = "resault:  " + res.toFixed(2)
        
//         }
//     }
// }
// function reseter(){
//     converVal.value = ""
//     resault.style.color="black"
//     resault.innerHTML = "resault:"
    
    
// }
// function changer(){
    
//     if(firstText.innerHTML === " C"){
//         firstText.innerHTML = " F"
//         secText.innerHTML = " C"
//         converVal.setAttribute("placeholder" , "F Value")
//         document.title="F to C"
//     }else{
//         firstText.innerHTML = " C"
//         secText.innerHTML = " F"
//         converVal.setAttribute("placeholder" , "C Value")
//         document.title="C to F"
//     }

//     reseter()


// }

// convert.addEventListener("click",convertor)
// reset.addEventListener("click",reseter)
// change.addEventListener("click",changer)





























// let searchInput = document.querySelector(".inputCity")
// let resualt = document.querySelector(".resualt")


// let wheaterCity = {
//     tehran : {city : "tehran" , temp : 2 , wheater : 'sunny' , humidity : 1 , windspeed: 10},
//     karaj : {city : "karaj"   , temp : 3 , wheater : 'sun' , humidity : 2 , windspeed: 20},
//     mashahd : {city : "mashahd" , temp : 4 , wheater : 'rain' , humidity : 3 , windspeed: 30},
//     ahvaz : {city : "ahvaz" , temp : 5 , wheater : 'day' , humidity : 4 , windspeed: 40},
//     yazd : {city : "yazd" , temp : 6 , wheater : 'night' , humidity : 5 , windspeed: 50},

// }
// let searchBtn = document.querySelector(".searchBtn").addEventListener('click',function(){
//     let searchVal = searchInput.value
//     let cityWData = wheaterCity[searchVal]

//     if (!cityWData) {
//         alert("dosent Exit")
//     } else {
//         resualt.innerHTML = "city : " + cityWData.city + "<br>" +
//                             " temp : " + cityWData.temp + "<br>" +  
//                             " wheater : " + cityWData.wheater +  "<br>" +
//                             " humidity : " + cityWData.humidity + "<br>" +
//                             " windspeed : " + cityWData.windspeed  
//     }
     
// })

































// let selectInputCountry = document.querySelector('.select')
// let selectInputCity = document.querySelector(".City")
// let cities =  {
//     Iran : ['Tehran' , 'Alborz' , "Mashahd"],
//     Usa : ['Canada', "Mexico" ],
//     UK : ["English ", "London"],
//     Ukrain : ["Putak" , "moskov"]
// }


// selectInputCountry.addEventListener('change' , function() {
//     let selectValue = selectInputCountry.value
//     let selectCitysVal = cities[selectValue]
//     selectInputCity.innerHTML = ''
    
//     if (selectCitysVal === undefined) {
//         selectInputCity.innerHTML = '<option>Select City Again</option>'
//     } else {
//         selectCitysVal.forEach(function (city){
//             selectInputCity.innerHTML += '<option>' + city + '</option>'
//         })
//     }
    
// })




















































// let bg = document.querySelector("body")
// // let colors = ["pink" , "red" , "Blue" , "green" , "yellow" , "purple"]




// setInterval(function(){
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     // let rand = Math.floor(Math.random() * colors.length)
//     bg.style.backgroundColor =  'rgb('+ r + ',' + g + ',' + b +')'
// } , 1000)





























// let userNameIn = document.querySelector('.username')
// let passWordIn = document.querySelector('.password')


// let errorText1 = document.querySelector('.result1')
// let errorText2 = document.querySelector('.result2')



// function userNameKeyPress(){
//    if (userNameIn.value.length < 12) {
//     errorText1.style.color = 'red'
//     errorText1.style.display = 'block'
//     errorText1.innerHTML = "must be 12 letters"

//    } else{
//     errorText1.style.color = 'green'
//     errorText1.style.display = 'block'
//     errorText1.innerHTML = "Correct"

//    }
// }

// function passWordKeyPress(){
//     if (passWordIn.value.length < 8) {
//      errorText2.style.color = 'red'
//      errorText2.style.display = 'block'
//     errorText2.innerHTML = "must be 8 letters"
//     } else{
//         errorText2.style.color = 'green'
//         errorText2.style.display = 'block'
//         errorText2.innerHTML = "Correct"
//     }
// }
































// ================ timer
// let userMin = +prompt('min?')
// let userSec = +prompt('Sec?')


// let timer = setInterval(function() {
//     if (userSec === -1 ) {
//         userSec = 59
//         userMin = 0
//     }
    
//     console.log('timer ' + userMin + ' : " + userSec );
//     userSec --

//     if (userMin === 0 && userSec === 0 ) {
//         clearInterval(timer)
//         console.log("finished");
//     }
// },1000)



















// console.log(eval("2+2"));











// let allUser = [
//     { id: 1, name: "ali", pass: "ali21", gmail: "ali@gmail.com"    },
//     { id: 2, name: "amir", pass: "amir21", gmail: "amir@gmail.com" },
//     { id: 3, name: "amin", pass: "amin21", gmail: "amin@gmail.com" },
//     { id: 4, name: "Pipi", pass: "Pipi21", gmail: "Pipi@gmail.com" },
//     { id: 5, name: "sadegh", pass: "sadegh21", gmail: "sadegh@gmail.com" },
// ]

// let userPassReq = prompt("say your name to say Pass")


// let searchPass = allUser.find(function(user){
//     return user.name === userPassReq
// })

// console.log(searchPass.pass);










// let firstNum = Number(prompt("Your first number"))
// let oprate = prompt("your Oprate?")
// let secondNum = Number(prompt("Your second number"))



// if (oprate === "+") {
//     console.log(firstNum + secondNum);
// } else if (oprate === "-") {
//     console.log(firstNum - secondNum);
// } else if (oprate === "*") {
//     console.log(firstNum * secondNum);
// } else if (oprate === "/") {
//     console.log(firstNum / secondNum);
// } else if (oprate === "**") {
//     console.log(firstNum ** secondNum);
// } else {
//     console.log("wrong oprator");
// }



























// let allquiz = [ { id: 1, qu: "2+2", answer: 4 },
//                 { id: 2, qu: "2+3", answer: 5 },

// ]


// let answer = ""
// let sum = 0

// allquiz.forEach(function (qu) {

//     answer = Number(prompt(qu.qu, "?"))

//     if (answer === qu.answer) {
//         sum++
//     }
// })

// console.log(sum);










// let user = {
//     id:1,
//     name : 'Amir',
//     age: 22,
//     speedRun : 220    
// }

// function users(){
//     console.log(user.id);
// }
// // users()

// users.call(user)


















// danesh@gmail.com 
// let emailRegEx = /.+@.+.com/

// let userEmail = prompt("Email")


// console.log(emailRegEx.test(userEmail));
















// let number = '09122630557'
// let phone = number.slice(0 , 8)
// console.log(phone);
// let last4digist = phone.padEnd(12 , '*')
// console.log(last4digist);
















// let listItem = document.querySelectorAll(".list-item")
// let input = document.querySelector(".input")
// let list = document.querySelector(".list")



// list.addEventListener("click" , function(e){
//     if(e.target.tagName == "LI"){
//         e.target.remove()
//     }
// })


// input.addEventListener("keypress" , function(e){
    
//     if(e.keyCode === 13){
//         let newListItem = document.createElement("li")
//         newListItem.innerHTML = input.value
//         list.append(newListItem)
//         console.log(listItem);
//         input.value = ""
//     }
// })



















// let dataShow = $.querySelector(".infoCheck")


// let allData = [
//     {id: 24, name : "Amir24" , age:24 , price : 24},
//     {id: 25, name : "Amir25" , age:25 , price : 25},
//     {id: 26, name : "Amir26" , age:26 , price : 26},
//     {id: 27, name : "Amir27" , age:27 , price : 27},
//     {id: 28, name : "Amir28" , age:28 , price : 28},
//     {id: 29, name : "Amir29" , age:29 , price : 29},
// ] 

// let userSearch = location.search


// let userSearchId = new URLSearchParams(userSearch)

// let searhcId = userSearchId.get("id")

// let idChecker = allData.find(function(data){
//     return data.id == searhcId
// })
// if(idChecker){
//     dataShow.innerHTML = idChecker.name
// }else{
//     dataShow.innerHTML = "False"
// }


















// console.info("hi")



















// let $ = document

// let input = $.querySelector("#input")
// let btn = $.querySelector("#btn")
// let label = $.querySelector("#label")

// function checkValue(){
//     try {
//         if(input.value.length > 12){
//             throw "Too High"
//         }else{
//             throw " ok"
//         }
//     } catch (error) {
//         label.innerHTML = error
//     } finally{
//         input.value = ""
//     }
// }



// btn.addEventListener("click" , checkValue)

























// function scrollHandler(event){
//     console.log(document.documentElement.scrollLeft);
// }







// let touchMove = document.querySelector(".touchMove")
// function tMove(){
//     let h1 = document.createElement("h1")
//     h1.innerHTML="Amir Danesh"
//     touchMove.append(h1)
//     console.log("yes");
// }





























// let $ = document
// let box = $.querySelector("#box")
// let btn = $.querySelector("#btn")

// function mouseMove(){
//     console.log("mouse Move");
// }

// box.addEventListener("mousemove" , mouseMove)
// btn.addEventListener("click" , function(){
//     box.removeEventListener("mousemove" , mouseMove)
// })

























// let textArea = document.getElementById("textCCp")
// let res = document.getElementById("log")


// function copyHandler(e){
//     e.preventDefault()
//     res.innerHTML = "Log : " + e.type
// }


// function cutHandler(e){
//     e.preventDefault()

//     res.innerHTML = "Log : " + e.type
// }


// function pasteHandler(e){

//     e.preventDefault()
//     res.innerHTML = "Log : " + e.type
// }



// textArea.addEventListener("copy" , copyHandler)
// textArea.addEventListener("cut" , cutHandler)
// textArea.addEventListener("paste" , pasteHandler)
























// let $ = document
// let key = $.querySelector(".eventKey")
// let loc = $.querySelector(".eventLoc")
// let which = $.querySelector(".eventWhich")
// let Code = $.querySelector(".eventCode")
// let keyCode = $.querySelector(".eventKeyCode")




// document.querySelector("body").addEventListener("keydown" , function(e) {
//     e.preventDefault()
//     keyCode.innerHTML = "E.key = " + e.keyCode
//     key.innerHTML = "E.key = " + e.key
//     loc.innerHTML = "E.loc = " + e.location
//     which.innerHTML = "E.which = " + e.which
//     Code.innerHTML = "E.Code = " + e.code 
// })





























// let $ = document
// // F and C Text to swap
// let firstText = $.querySelector(".confir")
// let secText = $.querySelector(".consec")
// // input form to get Value
// let converVal = $.querySelector(".inputConverter")
// // Button to change
// let convert = $.querySelector(".convertBtn")
// let reset = $.querySelector(".resetBtn")
// let change = $.querySelector(".changeBtn")
// // result text
// let resault = $.querySelector(".resault")






// function convertor(){
//     if(converVal.value === ""){
//         resault.innerHTML="Wrong Value"
//         resault.style.color="red"

//     }else if(isNaN(converVal.value)){
//         resault.innerHTML="Wrong Value"
//         resault.style.color="red"
//     }else{
//         if(firstText.innerHTML ===" C"){
//             let res = (converVal.value * 9/5) + 32
//             resault.innerHTML = "resault: " + res.toFixed(2)
//         }else{
//             let res = (converVal.value - 32) * 5/9
//             resault.innerHTML = "resault:  " + res.toFixed(2)
        
//         }
//     }
// }
// function reseter(){
//     converVal.value = ""
//     resault.style.color="black"
//     resault.innerHTML = "resault:"
    
    
// }
// function changer(){
    
//     if(firstText.innerHTML === " C"){
//         firstText.innerHTML = " F"
//         secText.innerHTML = " C"
//         converVal.setAttribute("placeholder" , "F Value")
//         document.title="F to C"
//     }else{
//         firstText.innerHTML = " C"
//         secText.innerHTML = " F"
//         converVal.setAttribute("placeholder" , "C Value")
//         document.title="C to F"
//     }

//     reseter()


// }

// convert.addEventListener("click",convertor)
// reset.addEventListener("click",reseter)
// change.addEventListener("click",changer)





























// let searchInput = document.querySelector(".inputCity")
// let resualt = document.querySelector(".resualt")


// let wheaterCity = {
//     tehran : {city : "tehran" , temp : 2 , wheater : 'sunny' , humidity : 1 , windspeed: 10},
//     karaj : {city : "karaj"   , temp : 3 , wheater : 'sun' , humidity : 2 , windspeed: 20},
//     mashahd : {city : "mashahd" , temp : 4 , wheater : 'rain' , humidity : 3 , windspeed: 30},
//     ahvaz : {city : "ahvaz" , temp : 5 , wheater : 'day' , humidity : 4 , windspeed: 40},
//     yazd : {city : "yazd" , temp : 6 , wheater : 'night' , humidity : 5 , windspeed: 50},

// }
// let searchBtn = document.querySelector(".searchBtn").addEventListener('click',function(){
//     let searchVal = searchInput.value
//     let cityWData = wheaterCity[searchVal]

//     if (!cityWData) {
//         alert("dosent Exit")
//     } else {
//         resualt.innerHTML = "city : " + cityWData.city + "<br>" +
//                             " temp : " + cityWData.temp + "<br>" +  
//                             " wheater : " + cityWData.wheater +  "<br>" +
//                             " humidity : " + cityWData.humidity + "<br>" +
//                             " windspeed : " + cityWData.windspeed  
//     }
     
// })

































// let selectInputCountry = document.querySelector('.select')
// let selectInputCity = document.querySelector(".City")
// let cities =  {
//     Iran : ['Tehran' , 'Alborz' , "Mashahd"],
//     Usa : ['Canada', "Mexico" ],
//     UK : ["English ", "London"],
//     Ukrain : ["Putak" , "moskov"]
// }


// selectInputCountry.addEventListener('change' , function() {
//     let selectValue = selectInputCountry.value
//     let selectCitysVal = cities[selectValue]
//     selectInputCity.innerHTML = ''
    
//     if (selectCitysVal === undefined) {
//         selectInputCity.innerHTML = '<option>Select City Again</option>'
//     } else {
//         selectCitysVal.forEach(function (city){
//             selectInputCity.innerHTML += '<option>' + city + '</option>'
//         })
//     }
    
// })




















































// let bg = document.querySelector("body")
// // let colors = ["pink" , "red" , "Blue" , "green" , "yellow" , "purple"]




// setInterval(function(){
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)
//     // let rand = Math.floor(Math.random() * colors.length)
//     bg.style.backgroundColor =  'rgb('+ r + ',' + g + ',' + b +')'
// } , 1000)





























// let userNameIn = document.querySelector('.username')
// let passWordIn = document.querySelector('.password')


// let errorText1 = document.querySelector('.result1')
// let errorText2 = document.querySelector('.result2')



// function userNameKeyPress(){
//    if (userNameIn.value.length < 12) {
//     errorText1.style.color = 'red'
//     errorText1.style.display = 'block'
//     errorText1.innerHTML = "must be 12 letters"

//    } else{
//     errorText1.style.color = 'green'
//     errorText1.style.display = 'block'
//     errorText1.innerHTML = "Correct"

//    }
// }

// function passWordKeyPress(){
//     if (passWordIn.value.length < 8) {
//      errorText2.style.color = 'red'
//      errorText2.style.display = 'block'
//     errorText2.innerHTML = "must be 8 letters"
//     } else{
//         errorText2.style.color = 'green'
//         errorText2.style.display = 'block'
//         errorText2.innerHTML = "Correct"
//     }
// }
































// ================ timer
// let userMin = +prompt('min?')
// let userSec = +prompt('Sec?')


// let timer = setInterval(function() {
//     if (userSec === -1 ) {
//         userSec = 59
//         userMin = 0
//     }
    
//     console.log('timer ' + userMin + ' : " + userSec );
//     userSec --

//     if (userMin === 0 && userSec === 0 ) {
//         clearInterval(timer)
//         console.log("finished");
//     }
// },1000)



















// console.log(eval("2+2"));











// let allUser = [
//     { id: 1, name: "ali", pass: "ali21", gmail: "ali@gmail.com"    },
//     { id: 2, name: "amir", pass: "amir21", gmail: "amir@gmail.com" },
//     { id: 3, name: "amin", pass: "amin21", gmail: "amin@gmail.com" },
//     { id: 4, name: "Pipi", pass: "Pipi21", gmail: "Pipi@gmail.com" },
//     { id: 5, name: "sadegh", pass: "sadegh21", gmail: "sadegh@gmail.com" },
// ]

// let userPassReq = prompt("say your name to say Pass")


// let searchPass = allUser.find(function(user){
//     return user.name === userPassReq
// })

// console.log(searchPass.pass);










// let firstNum = Number(prompt("Your first number"))
// let oprate = prompt("your Oprate?")
// let secondNum = Number(prompt("Your second number"))



// if (oprate === "+") {
//     console.log(firstNum + secondNum);
// } else if (oprate === "-") {
//     console.log(firstNum - secondNum);
// } else if (oprate === "*") {
//     console.log(firstNum * secondNum);
// } else if (oprate === "/") {
//     console.log(firstNum / secondNum);
// } else if (oprate === "**") {
//     console.log(firstNum ** secondNum);
// } else {
//     console.log("wrong oprator");
// }



























// let allquiz = [ { id: 1, qu: "2+2", answer: 4 },
//                 { id: 2, qu: "2+3", answer: 5 },

// ]


// let answer = ""
// let sum = 0

// allquiz.forEach(function (qu) {

//     answer = Number(prompt(qu.qu, "?"))

//     if (answer === qu.answer) {
//         sum++
//     }
// })

// console.log(sum);