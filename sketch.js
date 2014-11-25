function setup() {
  var theCanvas = createCanvas(640,360);
  theCanvas.parent("mySketch");

}

function draw() {

  //background(255);
  //ellipse(500,100,100,100);
}


var imgObj = null;
var animate;
function init(){
   imgObj = document.getElementById('displayed');
   imgObj.style.position= 'relative';
   imgObj.style.left = '0px';
}

function moveRight(){
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   animate = setTimeout(moveRight,10); // call moveRight in 20msec
}

function stop(){
   clearTimeout(animate);
   imgObj.style.left = '0px';
}

window.onload =init;
