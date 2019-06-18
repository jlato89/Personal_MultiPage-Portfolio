// set initial state of the menu
let showMenu = false;

$("#menu-btn").on("click", function() {

   if (!showMenu) {
      $("#menu-btn").addClass("close");
      $("#menu").addClass("show");
      $("#menu-nav").addClass("show");
      $("#menu-portrait").addClass("show");
      $(".nav-item").addClass("show");

      // set menu state
      showMenu = true;
   }
   else {
      $("#menu-btn").removeClass("close");
      $("#menu").removeClass("show");
      $("#menu-nav").removeClass("show");
      $("#menu-portrait").removeClass("show");
      $(".nav-item").removeClass("show");

      // set menu state
      showMenu = false;
   }
});