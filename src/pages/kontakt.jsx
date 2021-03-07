import React, { useEffect, useState, useRef } from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";
import Helmet from "react-helmet";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2FyYXNrIiwiYSI6ImNrZnFrZWtxMDBrMWoycXBibW42NHFrN2UifQ.YL8ZTVShTqVg16OOHKkGCA";

const KontaktPage = () => {
  // useEffect(() => {
  //   var map = new mapboxgl.Map({
  //     container: "map", // container id
  //     style: "mapbox://styles/sarask/ckiocb02c4nkw17o3fzh45dpf", // style URL
  //     zoom: 11, // starting zoo:
  //     pitch: 35, //grader kortet vippes, gøres så kortet kan styles yderligere
  //     bearing: -20, //Kortet drejes, gøres så kortet kan styles yderligere
  //   });

  //   var marker = new mapboxgl.Marker()
  //     .setLngLat([9.615113, 56.188144])
  //     .addTo(map);
  // }, []);

  const mapContainerRef = useRef(null);

  const [map, setMap] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      accessToken: MAPBOX_TOKEN,
      style: "mapbox://styles/sarask/ckiocb02c4nkw17o3fzh45dpf", // style URL
      center: [9.600076, 56.182482], // starting position [lng, lat]
      zoom: 11, // starting zoo:
      pitch: 35, //grader kortet vippes, gøres så kortet kan styles yderligere
      bearing: -20, //Kortet drejes, gøres så kortet kan styles yderligere
    });

    var marker = new mapboxgl.Marker()
      .setLngLat([9.615113, 56.188144])
      .addTo(map);

    setMap(map);

    return () => map.remove();
  }, []);

  return (
    <>
      <Helmet
        title="Keldgor | Kontakt"
        author="Sara Skovbjerg Kjeldgaard"
        description="Kontakt endelig Keldgor for at høre mere og tag et kig på kortet for hvor Keldgor er placeret."
      />
      <KeldgorHeader active="Kontakt" />
      <main id="kontaktPage" className="column">
        <div id="TopTitleDescription">
          <h1>Kontakt</h1>
          <div id="divider"></div>
          <p>
            Kontakt endelig Kelddgo for at høre mere og tag et kig på kortet for
            hvor Kelddgo er placeret.
          </p>
        </div>
        <div className="row" id="kontaktContent">
          <div id="kontaktText" className="column">
            <a className="contact-footer" href="mailto:kontakt@kelddgo.dk">
              <img src="/images/Mail.svg" alt="mail" />
              <span>kontakt@kelddgo.dk</span>
            </a>
            <a className="contact-footer" href="tel:004524594429">
              <img src="/images/Phone.svg" alt="phone" />
              <span>+45 24594429</span>
            </a>
            <span>Savonlinnavej 20, 8600 Silkeborg, DK</span>
          </div>
          <div id="map" ref={mapContainerRef}></div>
        </div>
      </main>
      <KeldgorFooter />
    </>
  );
};

export default KontaktPage;
