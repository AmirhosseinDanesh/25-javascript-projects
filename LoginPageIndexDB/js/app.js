let db = null

window.addEventListener("load" , () =>{
    let DBOpenReq = indexedDB.open("Users" ,7)

    DBOpenReq.addEventListener("error" , (err) => {
        console.warn("Error" , err);
    })

    DBOpenReq.addEventListener("success" , (e) => {
        console.log("success" , e.target.result);
    })

    DBOpenReq.addEventListener("upgradeneeded" , (e) => {
        
        db = e.target.result
        db.create
        
        console.log(db);

    })
})