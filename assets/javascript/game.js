$(document).ready(function(){


var attacker;
var benHealth = 120;
var benAttack = 10;
var landoHealth = 100;
var landoAttack = 20;
var R2D2Health = 200;
var R2D2Attack = 30;
var reyHealth = 300;
var reyAttack = 40;



$('#instructions').on("click",function(){
	$(".instruc").toggle();
});
$('#Restart').on("click",function(){
   location.reload();
});


// $('.ben').on('click',function(){
// 	benGame(){}
// });








  $('.ben').on("click",function(){
  $('.lando').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  $('.R2D2').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red" });
  $('.rey').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
   
  benGame();
});

function benGame(){

	while (benHealth > 0){
	benHealth = 120;

    $(".lando").on("click", function() {
  	benHealth -= 20;
  	landoHealth = landoHealth - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#landoHealth').html(landoHealth);
    benAttack += 10;
  	
  	if (landoHealth <= 0){
  	$('.lando').hide();
  	alert("you have defeated lando");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.ben').hide();
  	}
  });

   $(".R2D2").on("click", function() {
  	benHealth -= 30;
  	R2D2Health = R2D2Health - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#R2D2Health').html(R2D2Health);
    benAttack += 10;
  	
  	if (R2D2Health <= 0){
  	$('.R2D2').hide();
  	alert("you have defeated R2D2");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.ben').hide();
  	}
  });
 
    $(".rey").on("click", function() {
  	benHealth -= 30;
  	reyHealth = reyHealth - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#reyHealth').html(reyHealth);
    benAttack += 10;
  	
  	if (reyHealth <= 0){
  	$('.rey').hide();
  	alert("you have defeated rey");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.ben').hide();
  	  }
    });
  }
}


$('.lando').on("click",function(){
  $('.ben').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  $('.R2D2').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red" });
  $('.rey').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
 

function landoGame(){
    $(".ben").on("click", function() {
  	benHealth -= 20;
  	benHealth = benHealth - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#benHealth').html(benHealth);
    landoAttack += 10;
  	
  	if (benHealth <= 0){
  	$('.ben').hide();
  	alert("you have defeated ben");
  }
  	else if (landoHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.lando').hide();
  	}
  });

   $(".R2D2").on("click", function() {
  	landoHealth -= 30;
  	R2D2Health = R2D2Health - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#R2D2Health').html(R2D2Health);
    benAttack += 10;
  	
  	if (R2D2Health <= 0){
  	$('.R2D2').hide();
  	alert("you have defeated R2D2");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.lando').hide();
  	}
  });

  	$(".rey").on("click", function() {
  	benHealth -= 30;
  	reyHealth = reyHealth - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#reyHealth').html(reyHealth);
    benAttack += 10;
  	
  	if (reyHealth <= 0){
  	$('.ben').hide();
  	alert("you have defeated rey");
    }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.lando').hide();
  	}
});
 };
  
 });
});









