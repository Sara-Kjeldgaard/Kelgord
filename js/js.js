// DOMContentLoaded er et event som bruges så koden ikke køres før HTML er loaded
// Dette er ikke vigtigt for VUE eller Komponenter - Det er fordi at JS skal bruge HTML
document.addEventListener("DOMContentLoaded", function() {
    // VUE "startes" op:
    new Vue({
        //Vi fortæller VUE at den skal kigge efter elementet (el) med id'et app
        el: "#app",

        // Vi registrerer vores componenter med VUE
        // Dette fortæller VUE at når vi skriver <custom-header> så vil vi have VUE til at indsætte komponenten vi definerer i header.vue
        components: {
            "custom-header": httpVueLoader("components/header.vue"),
            "custom-footer": httpVueLoader("components/footer.vue")
        }
    });
});
