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
    const github = document.querySelector('.toggle_github');


    if (home) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;

        console.log(toggle1, toggle2, toggle3);

        if (toggle1 === "block") {
            about.style.display = 'none';
            github.style.display = 'none';
            console.log(home);
        }
        else {
            home.style.display = 'block';
            about.style.display = 'none';
            github.style.display = 'none';
        }
    }

}


function show_about() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');

    if (about) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;

        console.log(toggle1, toggle2, toggle3);

        if (toggle2 === "none") {
            about.style.display = 'block';
            home.style.display = 'none';
            github.style.display = 'none';
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            console.log(home);
        }
        else {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'block';
            home.style.display = 'none';
            github.style.display = 'none';
        }
    }

}
function show_github() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    if (github) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;

        console.log(toggle1, toggle2, toggle3);

        if (toggle3 === "none") {
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'block';
            console.log(home);
        }
        else {
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'block';
        }
    }

}