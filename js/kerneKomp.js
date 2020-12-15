// DOMContentLoaded er et event som bruges så koden ikke køres før HTML er loaded
document.addEventListener("DOMContentLoaded", function() {

    $(".kerne-komp").click(function() {
        var alreadyActive = $(this).hasClass("kerne-komp-active");
        //Kildehenvisning: https://www.w3schools.com/jquery/jquery_css_classes.asp
        $(".kerne-komp").removeClass("kerne-komp-active");

        if (alreadyActive) {
            $(this).removeClass("kerne-komp-active");
        } else {
            //Kildehenvisning: https://stackoverflow.com/questions/16575343/adding-class-to-clicked-element
            $(this).addClass("kerne-komp-active");
        }
    });
});
