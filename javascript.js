'use strict'

//when the blue button is clicked turn the box blue
document.getElementById("button2").addEventListener("click", function() {
  document.getElementById("box").style.backgroundColor = "Blue";}
);

//when grow button is clicked
$("#button1").on("click", function() {
  //box should grow
  $("#box").animate({height:"+=70px", width:"+=70px"}, "fast");
})

//fade the box out
#button3{
  transition: all 2s linear;
}