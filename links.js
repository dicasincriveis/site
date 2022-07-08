function censorText(){             
    var explicit = document.getElementById("data:blog.body").innerHTML;
    var clean = explicit.replace(/relacionamentos|worse/gi,"teste");
     document.getElementById("data:blog.body").innerHTML = clean;
}
