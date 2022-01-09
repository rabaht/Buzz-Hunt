//0.0   -    1740.0
//0.890   -  1740.890
/*VARIABLES*/
x = 50; //initialisation l'abscisse du canard
y = 50; // initialisation de l'ordonnée du canard
buzz = -1;//variable intermediare pour avoir les points du canard
//initialisation des points 
let points_canard = 0; //Variable des points du canard
const canard_element = document.getElementById('points_canard');
let points_chasseur = 0; // Variable des points du chasseur de Buzz
const chasseur_element = document.getElementById('points_chasseur');

/*FONCTIONS*/
//TIMER 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () { // On convertit les secondes en minutes et secondes
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        buzz += 1; // COmpteur qui compte les secondes en buzz
        if ((buzz % 10 == 0) && (buzz != 0)) { // Tous les 10 buzz, les points du canard augmentent
            points_canard += 1;
            canard_element.innerText = points_canard;
        }
        if (--timer < 0) { // On arrête le timer à 0
            timer = 0;
        }
        if (buzz==121){ if (points_canard > points_chasseur){  // On vérifie qui a gagné
            alert("Buzz a gagné");
        }
        else if (points_chasseur > points_canard){
           alert("Chasseur a gagné");
        }
        else if (points_chasseur == points_canard){
            alert("EGALITE")
        }
        if (buzz >= 121){ // Si buzz est supérieur à 120 on rafraichit la page au clic sur l'alert
            location=location
    
        }
        }}, 1000); // On fait la fonction timer toutes les secondes
      
}

function controlertouche(event) {    //Fonction pour déplacer buzz
    delta = Date.now() - timer;
    console.log(delta);
    nomtouche = event.key;
    //alert(nomtouche);    // Enlever les slash pour avoir les noms des touches en alert
    if ((nomtouche == "z" || nomtouche == "ArrowUp") && (y > 0)) {
        y -= 5;
        if (y < 0) {
            y = 0
        }
    }
    if ((nomtouche == "s" || nomtouche == "ArrowDown") && (y < 100)) {
        y += 5;
        if (y > 72) {
            y = 72
        }
    }
    if ((nomtouche == "q" || nomtouche == "ArrowLeft") && (x > 0)) {
        x -= 5;
        if (x < 0) {
            x = 0
        }
    }
    if ((nomtouche == "d" || nomtouche == "ArrowRight") && (x < 100)) {
        x += 5;
        if (x > 90) {
            x = 90
        }
    }
    console.log("x:" + x + " y:" + y);
    document.getElementById("buzz").style.top = y + "%"
    document.getElementById("buzz").style.left = x + "%"
    timer = Date.now();
}
/*PROGRAME PRINCIPALE*/

window.addEventListener('contextmenu', (e) => { // Empêche le clic droit sur la page
    e.preventDefault();
});

// On compte les points du Chasseur 
const clique = document.getElementById('buzz'); 
clique.addEventListener('click', (e) => {
    if (e.button === 0){    // Si clique sur le canard 
        points_chasseur += 1;   // On ajoute 1 au compteur de points
        chasseur_element.innerText = points_chasseur;   //Et on remplace l'afficheur des points
    }
});

document.addEventListener("keydown", controlertouche);

timer = Date.now();
console.log(timer);

window.onload = function() { // au lancement de la page on lance le timer
    var deuxMinutes = 60 * 2, // On définit combien de fois on a 60 secondes
    display = document.querySelector('#time');
    startTimer(deuxMinutes, display);
};