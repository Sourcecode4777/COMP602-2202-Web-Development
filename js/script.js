/* click toggle the search icon on the home page and close when click again */

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

