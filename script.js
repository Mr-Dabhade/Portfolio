$(document).ready(function(){
    // $(window).scroll(function(){
    //     // sticky navbar on scroll script
    //     if(this.scrollY > 20){
    //         $('.navbar').addClass("sticky");
    //     }else{
    //         $('.navbar').removeClass("sticky");
    //     }
        
    //     // scroll-up button show/hide script
    //     if(this.scrollY > 500){
    //         $('.scroll-up-btn').addClass("show");
    //     }else{
    //         $('.scroll-up-btn').removeClass("show");
    //     }
    // });

    // slide-up script
    // $('.scroll-up-btn').click(function(){
    //     $('html').animate({scrollTop: 0});
    //     // removing smooth scroll on slide-up button click
    //     $('html').css("scrollBehavior", "auto");
    // });

    // $('.navbar .menu li a').click(function(){
    //     // applying again smooth scroll on menu items click
    //     $('html').css("scrollBehavior", "smooth");
    // });

    // toggle menu/navbar script
    // $('.menu-btn').click(function(){
    //     $('.navbar .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    // });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student","Student"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const toggleBtn = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  if (toggleBtn.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");   // ✖ close
    sidebar.style.left = "0";
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");    // ☰ menu
    sidebar.style.left = "-240px";
  }
});


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});



document.addEventListener("DOMContentLoaded", function () {

  (function(){
    emailjs.init("xPcqzZ4F-thO3As2r");
  })();

  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⭐ MOST IMPORTANT

    emailjs.sendForm(
      "service_srz2bk8",
      "template_ricq0re",
      form
    ).then(
      function () {
        document.querySelector(".button-area").innerHTML =
  "<span style='color:#4ade80;'>Message sent successfully 💙 I will reply to you soon. Thank you!</span>";
 form.reset();
      },
      function (error) {
        console.log(error);
        alert("Failed to send message ❌");
      }
    );
  });

});

