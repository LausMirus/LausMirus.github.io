function checkWidth() {
    console.log('Current width:', window.innerWidth);

    if (window.innerWidth < 768) {
        const size = document.querySelector('.mobile_error');
        if (size) {
            size.style.opacity = "1";
        }
    }
    else {
        size.style.opacity = "0";
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);

___________________________________________________________________________________________


function show_home() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');


    if (home) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;

        console.log(toggle1, toggle2);

        if (toggle1 === "block") {
            about.style.display = 'none';
            console.log(home);
        }
        else {
            about.style.display = 'none';
            home.style.display = 'block';
        }
    }

}


function show_about() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');


    if (about) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;

        console.log(toggle1, toggle2);

        if (toggle2 === "none") {
            about.style.display = 'block';
            home.style.display = 'none';
            console.log(home);
        }
        else {
            about.style.display = 'block';
            home.style.display = 'none';
        }
    }

}