function login() {

    var pass = document.querySelector('#input_login').value;
    if (pass == "pass") {
        alert("hello");
        window.location.href = "/templates/about.html";
    }
    else if (pass == ""){
        alert("enter a string");
    }
    else {
        alert("wrong");
    }

}