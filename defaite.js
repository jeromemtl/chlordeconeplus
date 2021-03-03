//défilement du texte
var data = [
  {
    AboutDevTypeText: "<pre>  ______ _     _                _                                   <br /> / _____) |   | |              | |                              _   <br />| /     | | _ | | ___   ____ _ | | ____ ____ ___  ____   ____ _| |_ <br />| |     | || \\| |/ _ \\ / ___) || |/ _  ) ___) _ \\|  _ \\ / _  |_   _)<br />| \\_____| | | | | |_| | |  ( (_| ( (/ ( (__| |_| | | | ( (/ /  |_|  <br /> \\______)_| |_|_|\\___/|_|   \\____|\\____)____)___/|_| |_|\\____)      <br /><br />\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._</pre><span>Exécution du programme Chlordecone+<br />Suppression mondiale et définitive des fichiers sensibles</span><br/>"
  }
];
function typing(data){
  var allElements = document.getElementsByClassName("typeing");
  for (var j = 0; j < allElements.length; j++) {
    var currentElementId = allElements[j].id;
    var currentElementIdContent = data[0][currentElementId];
    var element = document.getElementById(currentElementId);
    var devTypeText = currentElementIdContent;

    // type code
    var i = 0, isTag, text;
    (function type() {
      text = devTypeText.slice(0, ++i);
      if (text === devTypeText) return;
      element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
      var char = text.slice(-1);
      if (char === "<") isTag = true;
      if (char === ">") isTag = false;
      if (isTag) return type();
      setTimeout(type, 30);
    })();
  }
}
typing(data);


$(document).ready(function() {
  setTimeout(function(){
    $('.tv').addClass('_off');
  }, 20000);
  setTimeout(function(){
    $('#monForm').remove();
  }, 20800);
});