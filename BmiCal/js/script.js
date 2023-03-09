let $ = document

let weightRange = $.querySelector("#weight")
let heightRange = $.querySelector("#height")
let weightVal = $.querySelector("#weight-val")
let heightVal = $.querySelector("#height-val")
let result = $.querySelector("#result")


function BMICal(){
    let weightRangeVal = weightRange.value
    let heightRangeVal = heightRange.value
    weightVal.innerHTML = weightRangeVal + " Kg"
    heightVal.innerHTML = heightRangeVal + " Cm"


    let bmiVal = (weightRangeVal / (Math.pow(heightRangeVal/100, 2))).toFixed(1)


    result.innerHTML = bmiVal 
    
}   



weightRange.addEventListener("input" , BMICal)

heightRange.addEventListener("input" , BMICal)