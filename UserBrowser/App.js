window.addEventListener("load" , ()=>{
    let userBrowserInfo = window.navigator.userAgent
    let userBrowser = null

    if (userBrowserInfo.match(/edg/i)) {
        userBrowser = "edge"
    }else if(userBrowserInfo.match(/firefox/i)) {
        userBrowser = "firefox"
    }else if(userBrowserInfo.match(/opr/i)) {
        userBrowser = "opera"
    }else if(userBrowserInfo.match(/chrome/i)){
        userBrowser = "chrome"
    }else if(userBrowserInfo.match(/safari/i)){
        userBrowser = "safari"
    }
    let browserStyle =  document.querySelector(`.${userBrowser}`)
    if(browserStyle){
        browserStyle.style.opacity = "1"
    }
})


