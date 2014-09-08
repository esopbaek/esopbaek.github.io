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
    $("div.about").hide("slow");
    $("div.projects").hide("slow");
    $("div.resume").hide("slow")
    $("button.nav").show("slow");
  });

  $("li.projects").on("click", function(event){
  	event.preventDefault;
  	$("body").toggleClass("open-menu");
    $("div.about").hide("slow"); 
  	$("div.home-page").hide("slow");
    $("div.projects").show("fast");
    $("div.resume").hide("slow")
    $("button.nav").show("fast");
  });

  $("li.resume").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    $("div.about").hide("slow");   
    $("div.home-page").hide("slow");
    $("div.projects").hide("slow");
    $("div.resume").show("fast")
    $("button.nav").show("fast");
  });

    $("li.about").on("click", function(event){
    event.preventDefault;
    $("body").toggleClass("open-menu");
    $("div.about").show("fast");   
    $("div.home-page").hide("slow");
    $("div.projects").hide("slow");
    $("div.resume").hide("slow")
    $("button.nav").show("fast");
  });

  $("button.projects").on("click", function(event){
    event.preventDefault;
    $("div.home-page").hide("slow");
    $("div.projects").show("fast");
  });
  
  var skills = ["RAILS", 
  				"RUBY", 
				"BACKBONE.JS", 
				"TDD",
				"jQUERY",
				"GIT",
				"CSS",
				"HTML",
				"JAVASCRIPT",
				"SQL",
				"Guitar"];
	
  setInterval(function(){
    $("h2 span.gray").html(skills[Math.floor(Math.random()*skills.length)]);
  }, 1500);
});