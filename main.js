let sections = document.querySelectorALL ('section');
let navLinks = document.querySelectorALL ('header nav a');

window.scroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id +'"]').classList.add('active');
        }
    });
};