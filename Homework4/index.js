window.addEventListener("keydown", function(e){
    if(e.ctrlKey == true && e.shiftKey == false && e.keyCode == 83){
        alert("Save");
    }
    else if(e.ctrlKey ==true && e.keyCode == 65){
        alert("Select All");
    }
    else if(e.ctrlKey ==true && e.shiftKey == true && e.keyCode == 83){
        alert("Save All");
    }
})
