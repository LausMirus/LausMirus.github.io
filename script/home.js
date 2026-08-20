function checkWidth() {
    console.log('Current width:', window.innerWidth);
    
    if (window.innerWidth < 768) {
        const size = document.querySelector('.mobile_error');
        if (size) {
            size.style.opacity = "1";
        }
    }
    else{
        size.style.opacity = "0";
    }
}
checkWidth();
window.addEventListener('resize', checkWidth);

// +++++++++++++++++++++ timer ++++++++++++++++++++++++++
