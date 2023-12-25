//select element function
const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function (){
    body.classList.toggle('open');
}); 
function handleNavLinkClick(sectionId) {
    // Handle the click event, for example, scroll to the corresponding section.
    // You can use the sectionId parameter to determine which section to scroll to.
    console.log('Navigation link clicked:', sectionId);
}


// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

function openWhatsApp(){
    var nomerAnda = "6289525666440";
    var whatsappLink = 'https:/api.whatsapp.com/send?phone=' + nomerAnda;
    window.location.href = whatsappLink;
}
function openInstagram(){
    var namaAkun = "honestly_jir";
    var instagramLink = 'https://www.instagram.com/' + namaAkun;
    window.location.href = instagramLink;
}