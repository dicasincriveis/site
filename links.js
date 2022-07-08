function censorText(){             
    var explicit = document.getElementById("data:blog.body").innerHTML;
    var clean = explicit.replace(/relacionamentos/g,"teste");
     document.getElementById("data:blog.body").innerHTML = clean;
}
