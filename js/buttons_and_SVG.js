window.addEventListener('DOMContentLoaded', function () {
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button_left =document.getElementById('button_left');
let button_right =document.getElementById('button_right');
let button_top =document.getElementById('button_top');
let button_bottom =document.getElementById('button_bottom');
let saveCount=1, leftCount = 1, topCount=1,count = 1;
var j,k,l,lastSVGx, obj = {} ;
var sel = false;
var cl=false;
var elemsX = document.querySelector('.elems');
var ava = document.getElementById('avatar');

var counter = 1;
var elemObj = {};
var s;
   var drWr = $('.drag_wrap'),
      rsWr = $('.res_wrap'),
      elem = $('.elem_wrap');
      var cSVG = document.querySelectorAll('svg'); 
      var gSVG = document.querySelectorAll('path');

      console.log(gSVG.length);
      console.log(cSVG.length);
      for(i=0;i<cSVG.length;i++){
cSVG[i].addEventListener('click',{handleEvent: transformSVG, d:i});
 cSVG[i].addEventListener('mousemove', {handleEvent: dragToCanvasSVG, d:i});
 }
      for(k=0;k<gSVG.length;k++){
 gSVG[k].addEventListener('click',{handleEvent: paintSVG, c:k});

}
function dragToCanvasSVG(e){
  s = (ava.getBoundingClientRect()).x + (ava.getBoundingClientRect()).width;
xSVG = e.pageX;

if (xSVG>(ava.getBoundingClientRect()).x && xSVG<s && xSVG<(elemsX.getBoundingClientRect()).x)
cSVG[this.d].style.visibility = 'visible';
}
function paintSVG(e){
	 if(sel)
   {
  obj.removeAttribute('stroke');
   }

	 gSVG[this.c].setAttribute('stroke','red');
   gSVG[this.c].setAttribute('stroke-width','2px');
	j = this.c;
  console.log(j);
	obj = gSVG[this.c];
 	sel = true;
}

 
    
function transformSVG(){
  counter++;
 console.log(counter);
 l = this.d;
  drWr[this.d].parentElement.style.zIndex = counter; 
     $(".drag_wrap:eq("+this.d+")").css("position","absolute");
    $(".drag_wrap:eq("+this.d+")").css("z-index",counter);


$(".elem_wrap:eq("+this.d+")").resizable({
			aspectRatio: true,
			handles:     'ne, nw, se, sw'
		});
		$(".drag_wrap:eq("+this.d+")").draggable();
		
		$(".elem_wrap:eq("+this.d+")").parent().rotatable();
  
	};

 colorSquare.onchange = function colorChange () {
  console.log( gSVG[j]);
console.log(colorSquare.value);
console.log(j);
gSVG[j].setAttribute('fill',colorSquare.value);
}

//  button1.onclick = function(){
//       count = count + 0.05;
//       console.log(count);
//       cSVG[l].style.transform = 'scale('+count+')';
//       console.log( cSVG[l]);
//       leftCount = count;
//       topCount = count;
//     }

// button2.onclick = function(){
//       count = count - 0.05;
//       console.log(count);
//       cSVG[l].style.transform = 'scale('+count+')';
//       saveCount = count;
//        leftCount = count;
//       topCount = count;
//     }

 button_left.onclick = function(){
      leftCount = leftCount + 0.05;
      console.log(count);
      cSVG[l].style.transform = 'scale('+leftCount+','+topCount+')';
      console.log( cSVG[l]);
    }
     button_bottom.onclick = function(){
      topCount = topCount + 0.05;
      cSVG[l].style.transform = 'scale('+leftCount+','+topCount+')';
      console.log( cSVG[l]);
    }})