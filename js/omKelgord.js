// DOMContentLoaded er et event som bruges så koden ikke køres før HTML er loaded
document.addEventListener("DOMContentLoaded", function() {

    $("#readMore").click(function() {
        //Kildehenvisning: https://www.w3schools.com/jquery/jquery_css_classes.asp
        $("#certificationAndCoursesTextExtra").addClass("show");

            $(this).hide();
      
    });
    
    $("#showLess").click(function() {
        //Kildehenvisning: https://www.w3schools.com/jquery/jquery_css_classes.asp
        $("#certificationAndCoursesTextExtra").removeClass("show");

            $("#readMore").show();
      
    });
});
