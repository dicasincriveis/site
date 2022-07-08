function censorText(){             
    var explicit = document.getElementById("data:post.body").innerHTML;
    var clean = explicit.replace(/relacionamentos/g,"teste");
     document.getElementById("data:post.body").innerHTML = clean;
}
