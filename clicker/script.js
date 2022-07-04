// Variablen definieren
var points = 0;
var increment = 1;
var shopCount = 10;

//Elemente mit den Punkteanzeigen holen und als const speichern
const counterEle = document.querySelector('#counter');
const shopCountEle = document.querySelector('#shopCount');

// Klick Mich button wird geklickt
function pressMe() {
  //Punkte um das Inkrement erhoehen
  points += increment;
  //Punktestand auf Seite updaten
  counterEle.innerHTML = points;

  //if (points > 1000) {
  //  alert("🎉🥳1000 points 🥳🎉")
  //}
}

//shop button wird geklickt
function shop() {
  // Wenn der Nutzer mind. so viele Punkte hat, wie das naechste Upgrade kostet:
  if (points >= shopCount) {
    // Anzahl Punkte pro Klick erhoehen
    increment *= 2;
    // "bezahlen"
    points -= shopCount;
    // Preis erhoehen x4
    shopCount *= 4;
    //Inhalte auf Seite updaten
    counterEle.innerHTML = points;
    shopCountEle.innerHTML = shopCount;
    //Nutzer mit alert informieren
    //alert('Super! Nun erhältst du ' + increment + ' Punkte pro Klick.');
    document.getElementById("infoText").textContent= "+"+increment+" points per click";
  } else {
    // Der Nutzer hat noch nicht genug Punkte
    //alert('Du hast noch nicht genug Punkte!');
    document.getElementById("infoText").textContent="Du hast noch nicht genug Punkte!";
  }
}
