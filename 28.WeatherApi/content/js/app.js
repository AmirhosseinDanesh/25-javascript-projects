let CityText = document.querySelector(".city")
let tempText = document.querySelector(".temp")
let statusText = document.querySelector(".weather")
let hiLowText = document.querySelector(".hi-low")
let dateText = document.querySelector(".date")

const dateValue = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
let dateVal = dateValue.toLocaleDateString('fa-IR', options)
    dateText.innerHTML = dateVal



let Input = document.querySelector(".wheaterInput")

let ApiData = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: '3e714adc2191e706366c963002b23422',
}



function fetchData(city) {
    fetch(`${ApiData.url}${city}&appid=${ApiData.key}`)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                alert("Wrong City")
            }
        })
        .then(data => {
            maindata(data)
        })

}

function maindata(data) {
    let CityVal = (data.name + "," + data.sys.country)
    let tempVal = Math.floor(data.main.temp - 273.15) + " °c"
    let statusVal = (data.weather[0].description)
    let hiLowVal = (Math.floor(data.main.temp_max - 273.15) + " °c" + " / " + Math.floor(data.main.temp_min - 273.15) + " °c")



    CityText.innerHTML = CityVal
    tempText.innerHTML = tempVal
    statusText.innerHTML = statusVal
    hiLowText.innerHTML = hiLowVal
    


    console.log(data)

}

Input.addEventListener("keypress", function (e) {
    let InputVal = Input.value

    if (e.key === 'Enter') {
        fetchData(InputVal)
    }
})

window.addEventListener("load", () => { Input.focus() })



// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];