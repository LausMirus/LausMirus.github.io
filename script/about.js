function show_gallery() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');
    const more_about = document.querySelector('.more_about');

    if (gallery) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;
        const toggle8 = window.getComputedStyle(more_about).display;

        console.log(toggle1, toggle2, toggle3, toggle4,toggle5,toggle6,toggle7,toggle8);

        if (toggle4 === "none") {
            gallery.style.display = 'flex';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
            console.log(gallery);
        }
        else if (toggle4 === "block") {
            gallery.style.display = 'flex';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
            console.log(gallery);
        }
        else {
            gallery.style.display = 'flex';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
            console.log(gallery);
        }
    }

}
function show_social() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');
    const more_about = document.querySelector('.more_about');

    if (social) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;
        const toggle8 = window.getComputedStyle(more_about).display;

        console.log(toggle1, toggle2, toggle3, toggle4,toggle5,toggle6,toggle7,toggle8);

        if (toggle5 === "none") {
            social.style.display = 'flex';
            gallery.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
            console.log(gallery);
        }
        else {
            social.style.display = 'flex';
            gallery.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            more_about.style.display = 'flex';
            console.log(gallery);
        }
    }

}