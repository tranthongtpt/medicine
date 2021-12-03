var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-550px";
    y.style.left = "55px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "33px";
    y.style.left = "500px";
    z.style.left = "0";
}

window.onscroll = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .main-menu').classList.add('active');
  }else{
    document.querySelector('.header .main-menu').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .main-menu').classList.add('active');
  }else{
    document.querySelector('.header .main-menu').classList.remove('active');
  }

}

var swiper = new Swiper(".drug-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper('.swiper-container', {
	loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
