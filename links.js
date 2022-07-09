let text = document.getElementById("links").innerHTML; 
document.getElementById("links").innerHTML = text.replace("relacionamentos","<a href='relacionamentos.html'>'relacionamentos'</a>").replace("problema","PROBLEMA");
