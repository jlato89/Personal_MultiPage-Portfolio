// Menu Btn Class function
$("#menu-btn").on("click", function() {

   $("#menu-btn").toggleClass("close");
   $("#menu").toggleClass("show");
   $("#menu-nav").toggleClass("show");
   $(".nav-item").toggleClass("show");
   $("#menu-portrait").toggleClass("show");
});