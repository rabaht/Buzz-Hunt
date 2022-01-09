//0.0   -    1740.0
//0.890   -  1740.890
/*VARIABLES*/
x =850; //initialisation l'abscisse du canard
y = 350; // initialisation de l'ordonnée du canard
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
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        buzz += 1;
        if ((buzz % 10 == 0) && (buzz != 0)) { // Tous les 10 buzz, les points du canard augmentent
            points_canard += 1;
            canard_element.innerText = points_canard;
        }
        if (--timer < 0) { // On arrête le timer à 0
            timer = 0;
        }
        if (buzz==121){ if (points_canard > points_chasseur){
            alert("buzz a gagné");
        }
        else if (points_chasseur > points_canard){
           alert("chasseur a gagné");
        }
        else if (points_chasseur == points_canard){
            alert("EGALITE")
        }
        if (buzz >= 121){
            location=location
    
        }
        }}, 1000);
      
}









function controlertouche(event) {    //Fonction pour déplacer le canard
    nomtouche = event.key;
    //alert(nomtouche);    // Enlever les slash pour avoir les noms des touches
    if ((nomtouche == "z" || nomtouche == "ArrowUp") && (y > 0)) {
        y -= 50
        if (y < 0) {
            y = 0
        }

       
    }
    if ((nomtouche == "s" || nomtouche == "ArrowDown") && (y < 705)) {
        y += 50
        if (y > 700) {
            y = 705}

    }
    if ((nomtouche == "q" || nomtouche == "ArrowLeft") && (x > 0)) {
        x -= 50
        if (x < 0) {
            x = 0
        }

    }
    if ((nomtouche == "d" || nomtouche == "ArrowRight") && (x < 1700)) {
        x += 50
        if (x > 1700) {
            x = 1700
        }

    }
    console.log("x:" + x + " y:" + y);
    document.getElementById("cannard").style.top = y + "px"
    document.getElementById("cannard").style.left = x + "px"
}
/*PROGRAME PRINCIPALE*/
/*
window.addEventListener('contextmenu', (e) => { // Empêche le clic droit sur la page
    e.preventDefault();
});*/




// On compte les points du Chasseur 

const clique = document.getElementById('cannard'); 
clique.addEventListener('click', (e) => {
    if (e.button === 0){    // Si clique sur le canard 
        points_chasseur += 1;   // On ajoute 1 au compteur de points
        chasseur_element.innerText = points_chasseur;   //Et on remplace l'afficheur des points
    }
});


document.addEventListener("keydown", controlertouche);

window.onload = function() {
    var deuxMinutes = 60 * 2,
    display = document.querySelector('#time');
startTimer(deuxMinutes, display);
};
