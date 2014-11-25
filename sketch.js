function setup() {
  var theCanvas = createCanvas(640,360);
  theCanvas.parent("mySketch");

}

function draw() {

  //background(255);
  //ellipse(500,100,100,100);
}
/*var x;
var y;
var bool = 1;

function move (e) {
	x = e.clientX;
	y = e.clientY;
	//var displayed = document.getElementById("displayed");
	document.getElementById("displayed").style.top = y + "px";
	document.getElementById("displayed").style.left = x + "px";

}*/

var imgObj = null;
function init(){
   imgObj = document.getElementById('displayed');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}

function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload =init;


