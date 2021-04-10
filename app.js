<<<<<<< HEAD
<<<<<<< HEAD
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        //burger Animation
     burger.classList.toggle('toggle');
    });
}
navSlide();
=======
=======
>>>>>>> 3a8febc3dbe3cd029dece371d6bebe97283f96f6
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        //burger Animation
     burger.classList.toggle('toggle');
    });
}
navSlide();

<<<<<<< HEAD
>>>>>>> 3a8febc (modified files)
=======
>>>>>>> 3a8febc3dbe3cd029dece371d6bebe97283f96f6
