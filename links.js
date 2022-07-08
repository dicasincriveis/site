$(document).ready(function() {
  $("p, div, span, li").each(function() {
   this.text(this.text().replace("relacionamentos", "TESTE").replace("word2", "new word2"));
  });
});
