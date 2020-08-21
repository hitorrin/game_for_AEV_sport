//1 способ
// var svg = document.querySelector('svg');
// var canvas = document.createElement('canvas');
// canvas.height = svg.getAttribute('height');
// canvas.width = svg.getAttribute('width');
// canvg(canvas, svg.parentNode.innerHTML.trim());
// var dataURL = canvas.toDataURL('image/png');
// var data = atob(dataURL.substring('data:image/png;base64,'.length)),
//         asArray = new Uint8Array(data.length);

// for (var i = 0, len = data.length; i < len; ++i) {
//     asArray[i] = data.charCodeAt(i);
// }

// var blob = new Blob([asArray.buffer], {type: 'image/png'});
// saveAs(blob, 'export_' + Date.now() + '.png');

//2 способ
var html = document.querySelector("svg").parentNode.innerHTML;
var imgsrc = 'data:image/svg+xml;base64,' + btoa(html);
var canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
canvas.setAttribute('width', 526);
canvas.setAttribute('height', 233);

var image = new Image;
image.src = imgsrc;
image.onload = function () {
    context.drawImage(image, 0, 0);
    var canvasdata = canvas.toDataURL("image/png");
    var a = document.createElement("a");
    a.textContent = "save";
    a.download = "export_" + Date.now() + ".png";
    a.href = canvasdata;
    document.body.appendChild(a);
    canvas.parentNode.removeChild(canvas);
};