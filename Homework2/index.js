var p = document.getElementsByTagName("p")[0];

window.addEventListener("keydown", function(e){
    if(e.keyCode == 82){
        p.style.color = "red";
    }
    else if(e.keyCode == 71){
        p.style.color = "green";
    }
    else if(e.keyCode == 66){
        p.style.color = "blue";
    }
});