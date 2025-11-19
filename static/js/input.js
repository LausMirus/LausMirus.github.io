
// document.querySelector("#secret_btn").addEventListener("click", () => {
//     let passwd = document.querySelector("#secret").value;

//     if (passwd == "sudoer") {
//         localStorage.setItem("login", "true")
//         console.log("successfull");
//         window.location.href = "/templates/About.html";
//     }
//     else if (passwd == "random") {
//         localStorage.setItem("login", "true")
//         console.log("successfull");
//         sendLoginEmail();
//         window.location.href = "/templates/About.html";
//     }
//     else {
//         console.log("not successful");
//         alert("🚫 Naaaa !! , No Cheating 🚫");
//     }
// })

document.querySelector("#secret_btn").addEventListener("click", async () => {
    let passwd = document.querySelector("#secret").value;

    if (passwd === "sudoer") {
        localStorage.setItem("login", "true");
        console.log("Login successful (sudoer)");
        window.location.href = "/templates/About.html";
    }
    else if (passwd === "random") {
        localStorage.setItem("login", "true");
        console.log("Login successful (random)");
        if (!localStorage.getItem("emailSent")) {
            try {
                await sendLoginEmail(); 
                localStorage.setItem("emailSent", "true");
                console.log("Login successfully as random user!");
            } catch (err) {
                console.error("Failed to send login email:", err);
            }
        }

        window.location.href = "/templates/About.html";
    }
    else {
        console.log("Login not successful");
        alert("🚫 Naaaa !! , No Cheating 🚫");
    }
});
