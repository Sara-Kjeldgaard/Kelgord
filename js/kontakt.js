// DOMContentLoaded er et event som bruges så koden ikke køres før HTML er loaded
// Dette er ikke vigtigt for VUE eller Komponenter - Det er fordi at JS skal bruge HTML
document.addEventListener("DOMContentLoaded", function() {
    //********* Map with marker *********//
    mapboxgl.accessToken =
        "pk.eyJ1Ijoic2FyYXNrIiwiYSI6ImNrZnFrZWtxMDBrMWoycXBibW42NHFrN2UifQ.YL8ZTVShTqVg16OOHKkGCA";
    var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/sarask/ckiocb02c4nkw17o3fzh45dpf", // style URL
        center: [9.600076, 56.182482

], // starting position [lng, lat]
        zoom: 11, // starting zoo:
        pitch: 35, //grader kortet vippes, gøres så kortet kan styles yderligere
        bearing: -20 //Kortet drejes, gøres så kortet kan styles yderligere
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([9.615113, 56.188144
])
        .addTo(map);
});
