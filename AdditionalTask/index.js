var left = 0;
var top = 0;
var bottom = 0

window.addEventListener("keydown", function(e){
    var div1 = document.getElementsByTagName("div")[0];
    
    if(e.keyCode == 37){
        left= left - 10;
        div1.style.left = left + "px";
    }
    else if(e.keyCode == 38){
        // top = top - 10;
        bottom = bottom + 10;
        div1.style.bottom = bottom + "px";
        // div1.style.top = top + "px";
        // left= left - 10;
        // div1.style.left = left + "px";
    }
    else if(e.keyCode == 39){
        left = left + 10;
        div1.style.left = left + "px";
    }
    else if(e.keyCode == 40){
        bottom = bottom - 10;
        div1.style.bottom = bottom + "px";
    }
})