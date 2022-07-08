document.addEventListener("DOMContentLoaded", function(){
   var links = {
      "contato aqui": "linkcontatoaqui.html",
      "abaixo-assinado": "linkaabaixoassinado.html",
      "ajuda": "linkajuda.html",
      "linha": "linklinha.html"
   }
   
   var bodi = document.querySelectorAll("body *:not(script)");
   for(var x=0; x<bodi.length; x++){
      var html = bodi[x].innerHTML;
      for(var i in links){
         var re = new RegExp("\\b(?![^<]*?>)("+i+")(?!>)", "gi");
         html = html.replace(re, ' <a href="'+links[i]+'">$1</a>');
      }
      bodi[x].innerHTML = html;
   }
});