window.addEventListener('DOMContentLoaded', function () {
  var saveImage = document.getElementById("saveImage");
	var result = document.getElementById("result"); 
  var container = document.getElementById('container');
  var elemsA = document.querySelector('.elems');
     var dragoldSVG = document.querySelectorAll('.drag_wrap');
    var avatarScreen = document.getElementById('avatar');
   // var newSVG = document.createElement('svg');
   var oldSVG = document.querySelector('#cloneSVG');
   var parentAvatar = avatarScreen.parentNode;
  var newSVG = [];
 var SVGleft, SVGtop;
	saveImage.onclick = function() {
    
    for (i=0;i<dragoldSVG.length;i++){
    newSVG[i] = dragoldSVG[i].cloneNode(true);
    parentAvatar.insertBefore(newSVG[i], avatar);
    // SVGleft =  parseFloat(dragoldSVG[i].style.left) +((elemsA.getBoundingClientRect()).left)+'px';
    // SVGtop = parseFloat(dragoldSVG.style.top) + ((elemsA.getBoundingClientRect()).top)+'px';
    console.log(elemsA.style.left);
   newSVG[i].style.left = (dragoldSVG[i].getBoundingClientRect()).x + 'px';
   newSVG[i].style.top = (dragoldSVG[i].getBoundingClientRect()).y + 'px';
  // newSVG.style.left = SVGleft;
  // newSVG.style.top = (dragoldSVG.getBoundingClientRect()).y + 'px';
  newSVG[i].style.position = 'absolute';
  newSVG[i].style.zIndex = 1;
}
  console.log( (elemsA.getBoundingClientRect()).left);
    
   // (newSVG.getBoundingClientRect()).y; =20;
   // newSVG = objSVG;
   // newSVG.style.fill = "black";
   // newSVG.setAttribute('width',60);  
   //  newSVG.setAttribute('height',60);
   
   console.log( newSVG);
        html2canvas(document.getElementById('screen')).then(function(canvas) {
    result.appendChild(canvas);
     for (i=0;i<dragoldSVG.length;i++){
    parentAvatar.firstChild.remove();
  }
        });
        }
        } )