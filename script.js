 $(document).ready(function() {

     $(".menu").click(function() {
         $(".overlay").toggleClass("anim");
         $(this).addClass("open");
     });

     $(".open").click(function() {
         $(".overlay").toggleclass("reverse-animation");
     });

 });