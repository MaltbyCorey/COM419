document.getElementById("btnno").addEventListener("click", e=>{
    document.getElementById("cookiebanner").style.display = "none";
})

document.getElementById("btnyes").addEventListener("click", e=>{
    document.getElementById("header").innerHTML ="Congratulations",
    document.getElementById("content").innerHTML="Visit Skyrim now and we will set a dragon on you free of charge!"
})