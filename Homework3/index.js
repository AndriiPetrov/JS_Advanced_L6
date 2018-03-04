var input = document.getElementsByTagName("input")[0];

input.addEventListener("mousemove", function(e){
    var x =e.clientX; var y = e.clientY;
    input.style.position = "absolute";
    input.style.left = x + 15 + "px";
    input.style.top = y + 15 + "px";
})