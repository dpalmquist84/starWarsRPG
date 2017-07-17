$(document).ready(function(){

var isAttacker;
var heroes = ["Ben", "R2D2", "Lando","Rey"];
var health = [120, 100, 200, 300]
var attacker;
var benHealth = 120;
var benAttack = 10;
var landoHealth = 100;
var landoAttack = 20;
var R2D2Health = 200;
var R2D2Attack = 30;
var reyHealth = 300;
var reyAttack = 40;

 // for (var i = 0; i < heroes.length; i++) {
 // 	var hero = $("<hero>");
 // 	hero.addClass("hero");
 // 	hero.attr(heroes[i]);
 // 	hero.text(heroes[i]);
 // 	$("char").append(hero)
 // }
 // for (var k = 0; k , heroers.length; k++);








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

   $(".lando").on("mouseover", function() {
    benHealth -= 20;
  	landoHealth = landoHealth - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#landoHealth').html(landoHealth);
    benAttack += 10;
    alert('you did ' +benAttack + ' damage to Lando');
  	
  	if (landoHealth <= 0){
  	$('.lando').hide();
  	alert("you have defeated lando");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.ben').hide();
  	}
  });

   $(".R2D2").on("mouseover", function() {
  	benHealth -= 30;
  	R2D2Health = R2D2Health - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#R2D2Health').html(R2D2Health);
    benAttack += 10;
    alert('you did ' +benAttack + ' damage to R2D2');
  	
  	if (R2D2Health <= 0){
  	$('.R2D2').hide();
  	alert("you have defeated R2D2");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.ben').hide();
  	}
  });
 
    $(".rey").on("mouseover", function() {
  	benHealth -= 30;
  	reyHealth = reyHealth - benAttack;
  	$('#benHealth').html(benHealth);
  	$('#reyHealth').html(reyHealth);
    benAttack += 10;
    alert('you did ' +benAttack + ' damage to Rey');
  	
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



$('.lando').on("click",function(){
  $('.ben').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  $('.R2D2').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red" });
  $('.rey').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  landoGame();
});
 
   function landoGame(){
    $(".ben").on("mouseover", function() {
  	benHealth -= 20;
  	benHealth = benHealth - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#benHealth').html(benHealth);
    landoAttack += 20;
    alert('you did ' + landoAttack + ' damage to Ben');
  	
  	if (benHealth <= 0){
  	$('.ben').hide();
  	alert("you have defeated ben");
  }
  	else if (landoHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.lando').hide();
  	}
  });

   $(".R2D2").on("mouseover", function() {
  	landoHealth -= 30;
  	R2D2Health = R2D2Health - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#R2D2Health').html(R2D2Health);
    landoAttack += 20;
    alert('you did ' + landoAttack + ' damage to Ben');
  	
  	if (R2D2Health <= 0){
  	$('.R2D2').hide();
  	alert("you have defeated R2D2");
  }
  	else if (benHealth <= 0) {
  		$(".loss").html("you have been defeated");
  		$('.lando').hide();

  	}
  });

  	$(".rey").on("mouseover", function() {
  	landoHealth -= 30;
  	reyHealth = reyHealth - landoAttack;
  	$('#landoHealth').html(landoHealth);
  	$('#reyHealth').html(reyHealth);
    landoAttack += 20;
    alert('you did ' + landoAttack + ' damage to Ben');
  	
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

$('.rey').on("click",function(){
  $('.ben').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  $('.R2D2').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red" });
  $('.lando').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  reyGame();
});

reyGame(){
  $(".ben").on("mouseover", function() {
    reyHealth = reyHealth - benAttack;
    benHealth = benHealth - reyAttack;
    $('#reyHealth').html(reyHealth);
    $('#benHealth').html(benHealth);
    reyAttack += 40;
    alert('you did ' + reyAttack + ' damage to Ben');
    
    if (benHealth <= 0){
    $('.ben').hide();
    alert("you have defeated ben");
  }
    else if (reyHealth <= 0) {
      $(".loss").html("you have been defeated");
      $('.lando').hide();
    }
  });

   $(".R2D2").on("mouseover", function() {
    reyHealth = reyHealth - R2D2Attack;
    R2D2Health = R2D2Health - reyAttack;
    $('#reyHealth').html(reyHealth);
    $('#R2D2Health').html(R2D2Health);
    reyAttack += 40;
    alert('you did ' + reyAttack + ' damage to R2D2');
    
    if (R2D2Health <= 0){
    $('.R2D2').hide();
    alert("you have defeated R2D2");
  }
    else if (reyHealth <= 0) {
      $(".loss").html("you have been defeated");
      $('.rey').hide();

    }
  });

    $(".lando").on("mouseover", function() {
    reyHealth = reyHealth - landoAttack;
    landoHealth = landoHealth - reyAttack;
    $('#landoHealth').html(landoHealth);
    $('#reyHealth').html(reyHealth);
    reyAttack += 40;
    alert('you did ' + reyAttack + ' damage to lando');
    
    if (landoHealth <= 0){
    $('.lando').hide();
    alert("you have defeated lando");
    }
    else if (reyHealth <= 0) {
      $(".loss").html("you have been defeated");
      $('.rey').hide();
    }
  });
 };

 $('.R2D2').on("click",function(){
  $('.ben').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  $('.rey').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red" });
  $('.lando').appendTo(".char").addClass("col-lg-3 col-md-3 col-sm-12 col-xs-12").css({background: "red"});
  r2d2Game();
});

r2d2Game(){
  $(".ben").on("mouseover", function() {
    R2D2Health = R2D2Health - benAttack;
    benHealth = benHealth - R2D2Attack;
    $('#R2D2Health').html(R2D2Health);
    $('#benHealth').html(benHealth);
    R2D2Attack += 30;
    alert('you did ' + R2D2Attack + ' damage to Ben');
    
    if (benHealth <= 0){
    $('.ben').hide();
    alert("you have defeated ben");
  }
    else if (R2D2Health <= 0) {
      $(".loss").html("you have been defeated");
      $('.R2D2').hide();
    }
  });

   $(".rey").on("mouseover", function() {
    R2D2Health = R2D2Health - reyAttack;
    reyHealth = reyHealth - R2D2Attack;
    $('#reyHealth').html(reyHealth);
    $('#R2D2Health').html(R2D2Health);
    reyAttack += 30;
    alert('you did ' + R2D2Attack + ' damage to Rey ?');
    
    if (R2D2Health <= 0){
    $('.R2D2').hide();
    alert("you have defeated R2D2");
  }
    else if (reyHealth <= 0) {
      $(".loss").html("you have been defeated");
      $('.R2D2').hide();

    }
  });

    $(".lando").on("mouseover", function() {
    R2D2Health = R2D2health - landoAttack;
    landoHealth = landoHealth - reyAttack;
    $('#landoHealth').html(landoHealth);
    $('#R2D2Health').html(R2D2Health);
    R2D2Attack += 30;
    alert('you did ' + R2D2Attack + ' damage to lando');
    
    if (landoHealth <= 0){
    $('.lando').hide();
    alert("you have defeated lando");
    }
    else if (R2D2Health <= 0) {
      $(".loss").html("you have been defeated");
      $('.R2D2').hide();
    }
  });
 };












