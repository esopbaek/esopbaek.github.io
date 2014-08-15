$(document).ready(function(){

  $("button.nav").on("click", function(event){
    $("body").toggleClass("open-menu");
    $("button.nav").hide();
  });

  $(".push").on("click", function(event){

    if($(event.target).is(".push")){
      $("body").removeClass("open-menu");
      $("button.nav").show("slow");
    }

  });

  $("li.home").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    $("div.home-page").show("fast");
    $("div.projects").hide("slow");
    $("div.resume").hide("slow")
    $("button.nav").show("slow");
  });

  $("li.projects").on("click", function(event){
  	event.preventDefault;
  	$("body").toggleClass("open-menu");
  	$("div.home-page").hide("slow");
    $("div.projects").show("fast");
    $("div.resume").hide("slow")
    $("button.nav").show("fast");
  });

  $("li.resume").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    $("div.home-page").hide("slow");
    $("div.projects").hide("slow");
    $("div.resume").show("fast")
    $("button.nav").show("fast");
  });

  $("button.projects").on("click", function(event){
    event.preventDefault;
    $("div.home-page").hide("slow");
    $("div.projects").show("fast");
  })
});