function censorText(){             
    var explicit = document.getElementById("post").innerHTML;
    var clean = explicit.replace(/relacionamentos|worse/gi,"teste");
     document.getElementById("post").innerHTML = clean;
}
