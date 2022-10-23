/* the hambuger menu when zoomed out */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}
/* toggle the search icon on the home page */
document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
/* let the animation and slider work on the home page, adding delay, 7500 is in ms and cover to 
seconds will be 7.5 seconds, and the next picture will show up */
/* the space between command is the space between each image, I set 700 because after trialing out
myself, it works out the best, the disbleOnIeraction will ignore the dragging and keep going,
and pagination clickable true means you can click and swipe */
var swiper = new Swiper(".home-slider", {
  spaceBetween: 200,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
/* Loader fades out for 3 seconds */
function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;