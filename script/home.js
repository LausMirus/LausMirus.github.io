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

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');
    const more_about = document.querySelector('.more_about');

    if (home) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;
        const toggle8 = window.getComputedStyle(more_about).display;

        console.log(toggle1, toggle2, toggle3, toggle4, toggle5, toggle6, toggle7, toggle8);


        if (toggle1 === "block") {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'flex';
            github.style.display = 'none';
            more_about.style.display = 'none';
            console.log(home);
        }
        else {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'flex';
            github.style.display = 'none';
            more_about.style.display = 'none';
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
    const more_about = document.querySelector('.more_about');

    if (about) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;
        const toggle8 = window.getComputedStyle(more_about).display;

        console.log(toggle1, toggle2, toggle3);

        if (toggle2 === "none") {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'block';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
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
            more_about.style.display = 'flex';
        }
    }

}
function show_github() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');
    const more_about = document.querySelector('.more_about');

    if (github) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;
        const toggle8 = window.getComputedStyle(more_about).display;
        console.log(toggle1, toggle2, toggle3);

        if (toggle3 === "none") {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'block';
            more_about.style.display = 'none';
            console.log(home);
        }
        else {
            gallery.style.display = 'none';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'block';
            more_about.style.display = 'none';
        }
    }

}