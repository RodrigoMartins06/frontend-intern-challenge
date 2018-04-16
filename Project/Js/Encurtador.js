

function linkNome(){
	var shortLink = "";
	var possivel = "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
	for (var i = 0; i < 5 ;  i++) {
	    shortLink += possivel.charAt(Math.random() * possivel.length);
		
	}
	return shortLink;
}

var totalHits = 3252642;
var link="";	

function encurtar(){
	
	var shortLink2 = "http://chr.dc/"+linkNome();
	totalHits++;
	document.getElementById("inputShortLink").value = shortLink2;
	document.getElementById("totalHits").innerHTML = totalHits;
	document.getElementById("inputLink").style.display = "none";
	document.getElementById("inputShortLink").style.display = "inline-block";
	document.getElementById("botaoEncurtar").style.display = "none";
	document.getElementById("botaoCopiar").style.display = "inline-block";
}

function copiar(){

  var urlCopiada = document.getElementById("inputShortLink");
  urlCopiada.select();
  document.execCommand("Copy");
  play();
}

var intervalo = null;

function play() {
	
	if( intervalo == null ) {
   		intervalo = setInterval("cronometro()", 1000);
	}
}


var tempo = 0;

function cronometro() {
	
	tempo++;
	if(tempo >= 10){
		document.getElementById("inputLink").style.display = "inline-block";
		link = document.getElementById("inputLink").value;
		link.value = "";
		document.getElementById("inputShortLink").style.display = "none";	
		document.getElementById("botaoEncurtar").style.display = "inline-block";
		document.getElementById("botaoCopiar").style.display = "none";
		var parar = setTimeout("stop()", 400);
	}
}

function stop() {
	clearInterval(intervalo);
	intervalo = null;
	tempo = 0;
}