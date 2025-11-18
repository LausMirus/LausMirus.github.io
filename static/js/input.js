
document.querySelector("#secret_btn").addEventListener("click", () => {
    let passwd = document.querySelector("#secret").value;

    if (passwd == "sudoer") { 
        localStorage.setItem("login","true")              
        console.log("successfull");
        window.location.href ="/templates/About.html";
    }
    else {
        console.log("not successful");
        alert("🚫 Naaaa !! , No Cheating 🚫");
    }
})
