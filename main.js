var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    keyboard: {
        enabled: true, // Enable keyboard navigation
        onlyInViewport: true, 
    },
  });



  // menu open close

  const menu = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');


  menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu")
  };
  
  window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu")
  };


  const animate =  ScrollReveal ({
    distance: "60px",
    origin: 'top',
    duration: 2500,
    delay: 300,
});


animate.reveal(".nav");

animate.reveal(".home-text", {
  origin: 'left',
  viewFactor: 0.5

});

animate.reveal(".home-img", {
  origin: 'right',
  viewFactor: 0.5

});

animate.reveal(".ser-box, .book-data", {
  // interval: 100,
});

animate.reveal(".ser-box img", {
  interval: 50,
  origin: 'right',
  
});



animate.reveal(".product-box", {
  interval: 50,
});




animate.reveal(".one", {
  origin: 'left',
  viewFactor: 0.1,
});

animate.reveal(".two", {
  origin: 'top',
  viewFactor: 0.1,
});

animate.reveal(".three", {
  origin: 'right',
  viewFactor: 0.1,
});


