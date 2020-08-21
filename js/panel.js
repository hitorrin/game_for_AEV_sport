window.addEventListener('DOMContentLoaded', function () {
var selected = false;
var xWindow;
var obj1 = {};
var obj2 = {};
window.onload = function(){
 var elements= document.querySelectorAll("div>p");
  var detail= document.querySelectorAll("div.elems");
  var detailSVG = document.querySelectorAll("svg"); 
  var dothis = document.getElementById('clonedrag');
  for(var i = 0; i < elements.length; i++) 
  {
    elements[i].addEventListener('click', {handleEvent: PanelFunction, c:i});
  }
      function PanelFunction(i){
         if (selected)
      {
      obj1.style.backgroundColor = '';
      obj2.style.visibility = 'hidden';

  }
      elements[this.c].style.backgroundColor = '#828282';
      detail[this.c].style.visibility = 'visible';
     
      obj1 = elements[this.c];
      obj2 = detail[this.c];
      xWindow = (detail[this.c].getBoundingClientRect()).x;

      selected = true;
}
}
})