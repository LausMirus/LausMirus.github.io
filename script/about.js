function show_gallery() {

    const home = document.querySelector('.toggle_home');
    const about = document.querySelector('.toggle_about');
    const github = document.querySelector('.toggle_github');

    const gallery = document.querySelector('.toggle_gallery');
    const social = document.querySelector('.toggle_social');
    const projects = document.querySelector('.toggle_projects');
    const more = document.querySelector('.toggle_more');

    if (gallery) {

        const toggle1 = window.getComputedStyle(home).display;
        const toggle2 = window.getComputedStyle(about).display;
        const toggle3 = window.getComputedStyle(github).display;


        const toggle4 = window.getComputedStyle(gallery).display;
        const toggle5 = window.getComputedStyle(social).display;
        const toggle6 = window.getComputedStyle(projects).display;
        const toggle7 = window.getComputedStyle(more).display;

        console.log(toggle1, toggle2, toggle3, toggle4,toggle5,toggle6,toggle7);

        if (toggle4 === "none") {
            gallery.style.display = 'block';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            console.log(gallery);
        }
        else {
            gallery.style.display = 'block';
            social.style.display = 'none';
            projects.style.display = 'none';
            more.style.display = 'none';
            about.style.display = 'none';
            home.style.display = 'none';
            github.style.display = 'none';
            console.log(gallery);
        }
    }

}