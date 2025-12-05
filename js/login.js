function login() {

    var pass = document.querySelector('#input_login').value;
    if (pass == "pass") {
        alert("user");
        window.location.href = "/templates/about.html";
    }
    else if (pass == ""){
        alert("enter a string");
    }
    else {
        alert("wrong person !!");
    }

}