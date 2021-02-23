var cle, phrase;
coordphrase=new Array();
coordphrase_cle=new Array();
newcoord=new Array();
coordcrypt=new Array();
alpha="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789àâéêèëîïôöçù',!?.;:=+-()/@%$* ";

function cryptage(prmIN)
{
    crypt="";
    phrase_cle="";
    var car=0;
    phrase=prmIN;
    cle="bandedebuses";
    if (phrase != "" && cle != "")
    {
        for (var z=0; z<phrase.length; z++)
        {
            phrase_cle+=cle.charAt(car);
            car++;
            if (car==cle.length)
                car=0;
        }
        
        for (var k=0; k<phrase.length; k++)
        {
            for (var p=0; p<alpha.length; p++)
            {
                if (phrase.charAt(k)==alpha.charAt(p))
                    coordphrase[k]=p;
                if (phrase_cle.charAt(k)==alpha.charAt(p))
                    coordphrase_cle[k]=p;
            }
            newcoord[k]=coordphrase[k]+coordphrase_cle[k];

            if (newcoord[k] > alpha.length-1)
                newcoord[k]-=alpha.length;
            crypt+=alpha.charAt(newcoord[k]);
        }
        console.log("crypt="+crypt);
        return crypt;
    }
    else
        alert("il manque au moins un élément !");
}

function clicForm() {
            //alert(document.getElementById('login').value);
            var cp = cryptage(document.getElementById('mdp').value);           

            if (document.getElementById('login').value === 'e.trouillot' && (cp ==='ppruewmpHrhwt zdxkwaJsvLpuG' || cp == 'eeFcqdxiMrtsstBxx' || cp == 'eeFpewltJsvLpuG' )) {
                window.location.href = "/escapeGameMathador/Victoire"//"20ans_pageOK.html";
            } else {
                document.getElementById('mdp').value = '';
            }
        }

        var timer;
        /* var savedDate = localStorage.getItem('savedDate');
        var compareDate = new Date();
        if (savedDate)  {
          compareDate = new Date(savedDate);
        } else { 
          compareDate.setMinutes(compareDate.getMinutes() + 45); //incresed by to date + (16 days)
          localStorage.setItem('savedDate', compareDate);
      } */

      var duration = localStorage.getItem('duration');
      if (duration == null) {
        duration = 105;
      } else {
        duration = parseInt(duration);
    }
    var compareDate = new Date();
    compareDate.setMinutes(compareDate.getMinutes() + duration);
    localStorage.setItem('savedDate', compareDate);


    timer = setInterval(function() {
      timeBetweenDates(compareDate);
  }, 10);

    function timeBetweenDates(toDate) {
      var dateEntered = toDate;
      var now = new Date();
      var difference = dateEntered.getTime() - now.getTime();

      if (difference <= 0) {

            // Timer done
            clearInterval(timer);
            window.location.href = "/escapeGameMathador/Defaite"; //"20ans_pagepasOK.html";

        } else {

            var mili = Math.floor(difference / 100);
            var seconds = Math.floor(mili / 10);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
//            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;
            mili %= 10;

//            $("#days").text(days);
//            $("#hours").text(hours);
$("#hours").text(hours);
$("#minutes").text(minutes);
var sec = '0';
if (seconds < 10) {
    $("#seconds").text(sec.concat(seconds));
} else {
    $("#seconds").text(seconds);
}            
$("#mili").text(mili);
}
}



var data = [
  {
    AboutDevTypeText: "<pre>  ______ _     _                _                                   <br /> / _____) |   | |              | |                              _   <br />| /     | | _ | | ___   ____ _ | | ____ ____ ___  ____   ____ _| |_ <br />| |     | || \\| |/ _ \\ / ___) || |/ _  ) ___) _ \\|  _ \\ / _  |_   _)<br />| \\_____| | | | | |_| | |  ( (_| ( (/ ( (__| |_| | | | ( (/ /  |_|  <br /> \\______)_| |_|_|\\___/|_|   \\____|\\____)____)___/|_| |_|\\____)      <br /><br />\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._</pre>Attention !<br />Vous avez demandé l'arrêt du programme.<br />Le processus de compte à rebour est activé.<br /><div class=\"row\"> <div class=\"col\"> <div> Si vous ne faites rien, Chlordecone+ se lancera dans <div id=\"timer\"> <span id=\"hours\"></span> heure <span id=\"minutes\"></span> min <span id=\"seconds\"></span> sec <span id=\"mili\"></span> </div></div></div></div><pre><br />\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._</pre><div class=\"row\"> <div class=\"mb-3 col\"> <label for=\"formid\" class=\"form-label\">Identifiant</label> <input type=\"text\" class=\"form-control is-valid form-terminal\" id=\"formid\" value=\"Chlordecon'Hackeur\" required></div><div class=\"mb-3 col\"> <label for=\"formpassword\" class=\"form-label\">Mot de passe</label> <input type=\"password\" class=\"form-control form-terminal\" id=\"formpassword\" placeholder=\"Votre mot de passe\"></div></div><div class=\"row\"><div class=\"mb-3 col\"><button type=\"submit\" class=\"btn btn-success\"><i class=\"far fa-times-circle\"></i> Arrêter le programme</button></div></div>"
  }
];

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
    setTimeout(type, 60);
  })();
}