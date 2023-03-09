let switchBase = document.querySelector('.switch')



switchBase.addEventListener("click" , function(){
  document.body.classList.toggle("dark")
  
  if(document.body.className.includes("dark")){
    localStorage.setItem("theme" , "dark")
  }else{
    localStorage.setItem("theme" , "light")

  }


})

window.onload = function(){
  let localVal =  localStorage.getItem("theme")
  if(localVal === "dark"){
    document.body.classList.add ("dark")

  }
}




