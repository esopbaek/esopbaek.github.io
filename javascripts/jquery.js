$(document).ready(function(){

  $("button").on("click", function(event){
    $("body").toggleClass("open-menu");
  });

  $(".push").on("click", function(event){

    if($(event.target).is(".push")){
      $("body").removeClass("open-menu");
    }

  });

  $("li.home").on("click", function(event){
  	event.preventDefault;
  	$("body").toggleClass("open-menu");
  	$(".home-page").addClass("hidden");
  });
});