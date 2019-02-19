'use strict'

//when the blue button is clicked turn the box blue
document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("box").style.backgroundColor = "Blue";}
);

//when grow button is clicked
$("#button1").on("click", function() {
  //box should grow
  $("#box").animate({height:"+=70px", width:"+=70px"}, "slow");
})

//fade the box out
document.getElementById("button3").addEventListener("click", function() {
  box.style.opacity = 0; 
});

//reset the button to origonal state
document.getElementById("button4").addEventListener("click", function() {
  document.getElementById("box").style.width = "150px";
  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.backgroundColor = "Orange";
});

document.getElementById("button5").addEventListener("click", function() {
  document.getElementById("box").style.width = "50px";
  document.getElementById("box").style.height = "200px";
  document.getElementById("box").style.backgroundColor = "Green";
});

document.getElementById("button6").addEventListener("click", function() {
  document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/ov2HPtmmqR0/maxresdefault.jpg')";
});