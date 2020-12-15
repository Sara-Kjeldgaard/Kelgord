// DOMContentLoaded er et event som bruges så koden ikke køres før HTML er loaded
document.addEventListener("DOMContentLoaded", function() {
    var titles = [
        "Digitalisering?",
        "Projektledelse?",
        "Business Intelligence?",
        "Agilt Setup?",
        "Master data?"
    ];

    //holder styr på hvilken titel der vises
    var counter = -1;

    //holder styr på hvilket bogstav i den valgte titel som skal skrives
    var counterTypeWriter = 0;

    //Denne funktion bruges til at sætte timeren igang.
    setInterval(timer, 3000);

    //Denne funktion angiver det kode som skal køres i karusellen
    function timer() {
        document.getElementById("landingPageTitleCaroussel").innerHTML = "";

        if (counter === 4) {
            counter = 0;
        } else {
            counter = counter + 1;
        }

        //funktionen typeWriter kaldes her med titles til counter som parameter
        //titles[counter] = den titel vi er kommet til (elementet i titles med counter som rækkefølge)
        typeWriter(titles[counter]);
    }
    
    //Kildehenvisning: https://www.w3schools.com/howto/howto_js_typewriter.asp
    function typeWriter(title) {
        // Vi går kun ind i if sætning hvis vi ikke er færdige med at skrive ordet endnu
        if (counterTypeWriter < title.length) {
            // Vi tager fat i elementet og sætter indholdet i det til at være det igangværende ord plus det næste bogstav i titlen.
            document.getElementById(
                "landingPageTitleCaroussel"
            ).innerHTML += title.charAt(counterTypeWriter);
            // Vi tæller vores counterTypeWriter 1 op, fordi vi skal til det næste bogstav.
            counterTypeWriter = counterTypeWriter + 1;
            // Denne funktion bruges til at skabe tid mellem at vi skriver de enkelte bogstaver
            setTimeout(function() {
                // Vi kalder funktionen typeWriter igen for at skrive det næste bogstav
                typeWriter(title);
            }, 100);
        } else {
            // Vi er færdige med titlen, så vi sætter counterTypeWrite tilbage til 0, så den er klar til at loope igen.
            counterTypeWriter = 0;
        }
    }
});
