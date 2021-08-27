//Fixer la barre de navigation lorsqu'on scrolle
    //Quand on scroll la page, on execute myFunction
    window.onscroll = function() {myFunction()};
    //Recuperer le header
    var header = document.getElementById("header");
    //Lire la position du header
    var sticky = header.offsetTop;

    //Ajouter la class sticky au header quand on atteins la position avec le scroll, enlever la class quand on quitte le position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
//Menu hamburger sur les petits écrans
function hamburger(x) {
  x.classList.toggle("change");
}
function afficherMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* XML livres.xml Permet d'afficher les livres de la base de données du fichier livres.xml
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      listeLivres(this);
    }
  };
  xmlhttp.open("GET", "livres.xml", true);
  xmlhttp.send();
}

function listeLivres(xml) {
  var w, x, y,z, xmlDoc, xTitre, xAuteur, xCouverture, xEditeur, xPitch; 
  xmlDoc = xml.responseXML;
  xTitre = ""; xAuteur = ""; xCouverture = ""; xEditeur = ""; xPitch = ""; xCategorie = "";
  u = xmlDoc.getElementsByTagName("categorie");
  v = xmlDoc.getElementsByTagName("pitch");
  w = xmlDoc.getElementsByTagName("auteur");
  x = xmlDoc.getElementsByTagName("titre");
  y = xmlDoc.getElementsByTagName("editeur");
  z = xmlDoc.getElementsByTagName("couverture");
  
  for (i = 0; i< x.length; i++) {
    xCategorie = u[i].childNodes[0].nodeValue;
    xPitch = v[i].childNodes[0].nodeValue;
    xAuteur = w[i].childNodes[0].nodeValue;
    xTitre = x[i].childNodes[0].nodeValue;
    xEditeur = y[i].childNodes[0].nodeValue;
    xCouverture = z[i].childNodes[0].nodeValue;    
    document.getElementById("listeLivres").innerHTML += 
'<div class="ficheLivre"><div class="pictLivre"><img class="visuelLivre" src="'+xCouverture+'" alt="photo couverture"></div><div class="presLivre"><div class="titreLivre">'+xTitre+'</div><div class="categorie">'+xCategorie+'</div><div class="auteurLivre">'+xAuteur+'</div><div class="editeurLivre">'+xEditeur+'</div><div class="pitchLivre">'+xPitch+'</div></div></div>';
  }    
};
loadXMLDoc();
*/
/* Page participants
Une requête vers la base de données récupère les différents champs des livres particpants.
quand un admin valide un nouvel auteur et son livre, le livre vient agrémenter la base de données avec cette nouvelle entrée.
*/

/*Formulaire de participation
Le visiteur qui souhaite participer remplit le formulaire correspondant et sa validation vient alimenter la bdd des auteurs en attente de validation et vient rajouter le nom de l'auteur sur la page de l'admin. Meme fonctionnement pour les jurés en attente de validation. */


// Formulaire de connexion
var modal1 = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal1) {
        modal.style.display = "none";
    }
}
// Formulaire de notation Quand le juré a validé sa note, il vient modifier la bdd en rajoutant ces notes aux autres déjà données
var modal2 = document.getElementById('id02');

  
window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}
// Formulaire de validation d'un auteur ou juré
var modal3 = document.getElementById('id03');

 
window.onclick = function(event) {
    if (event.target == modal3) {
        modal.style.display = "none";
    }
}
//Vérification mot de passe
function validateA() { //validation du mdp pour auteur
  var msg; 
  var str1 = document.getElementById("mdp1").value;
  var str2 = document.getElementById("mdp2").value;
  if ( str1 === str2 ){
    if (str1.match( /[0-9]/g) && 
            str1.match( /[A-Z]/g) && 
            str1.match(/[a-z]/g) && 
            str1.length >= 10) 
            document.location.href="envoiFichier.html";  
    else 
        msg = "<p style='color:red'>Votre mot de passe doit contenir au moins une majuscule, une minuscule, 10 caractères et un chiffre.</p>"; 
    document.getElementById("msg").innerHTML= msg; }
    else 
        msg = "<p style='color:red'>Les 2 mots de passe renseignés ne correspondent pas.</p>"; 
    document.getElementById("msg").innerHTML= msg; 
}   
function validateJ() { //validation du mdp pour Juré
  var msg; 
  var str1 = document.getElementById("mdp1").value;
  var str2 = document.getElementById("mdp2").value;
  if ( str1 === str2 ){
    if (str1.match( /[0-9]/g) && 
            str1.match( /[A-Z]/g) && 
            str1.match(/[a-z]/g) && 
            str1.length >= 10) 
            document.location.href="profilJury.html";  
    else 
        msg = "<p style='color:red'>Votre mot de passe doit contenir au moins une majuscule, une minuscule, 10 caractères et un chiffre.</p>"; 
    document.getElementById("msg").innerHTML= msg; }
    else 
        msg = "<p style='color:red'>Les 2 mots de passe renseignés ne correspondent pas.</p>"; 
    document.getElementById("msg").innerHTML= msg; 
}   

// calcul de la moyenne des notes
var style = parseInt(document.getElementById('style').textContent);
var illus = parseInt(document.getElementById('illus').textContent);
var miseEnPage = parseInt(document.getElementById('miseEnPage').textContent);
var emotion = parseInt(document.getElementById('emotion').textContent);
var moyenne =document.getElementById('moyenne');
console.log(style);
var moy = (style + illus + miseEnPage + emotion) / 4;
moyenne.innerHTML=moy;
console.log(moy);

