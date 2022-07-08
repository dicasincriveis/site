function replaceText(){
    var theDiv = document.getElementById("myDiv");
    var theText = theDiv .innerHTML;

    // Replace words
    theText = theText.replace("relacionamentos", "TESTE");
    theText = theText.replace("one", "fish");
    theText = theText.replace("tom", "drum");

    theDiv.innerHTML = theText;
}
