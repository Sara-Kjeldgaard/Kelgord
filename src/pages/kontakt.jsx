import React, { useEffect, useRef } from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";
import Helmet from "react-helmet";
import "mapbox-gl/dist/mapbox-gl.css";

const KontaktPage = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js";
    script.async = true;
    script.onload = () => {
      if (!window.mapboxgl) {
        return;
      }
      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        accessToken:
          "pk.eyJ1Ijoic2FyYXNrIiwiYSI6ImNrZnFrZWtxMDBrMWoycXBibW42NHFrN2UifQ.YL8ZTVShTqVg16OOHKkGCA",
        style: "mapbox://styles/sarask/ckiocb02c4nkw17o3fzh45dpf", // style URL
        center: [9.600076, 56.182482], // starting position [lng, lat]
        zoom: 11, // starting zoo:
        pitch: 35, //grader kortet vippes, gøres så kortet kan styles yderligere
        bearing: -20, //Kortet drejes, gøres så kortet kan styles yderligere
      });

      var marker = new window.mapboxgl.Marker()
        .setLngLat([9.615113, 56.188144])
        .addTo(map);
    };

    document.body.appendChild(script);
  }, [mapContainerRef]);

  return (
    <>
      <Helmet
        title="Keldgor | Kontakt"
        author="Sara Skovbjerg Kjeldgaard"
        description="Kontakt endelig Keldgor for at høre mere og tag et kig på kortet for hvor Keldgor er placeret."
      ></Helmet>
      <KeldgorHeader active="Kontakt" />
      <main id="kontaktPage" className="column">
        <div id="TopTitleDescription">
          <h1>Kontakt</h1>
          <div id="divider"></div>
          <p>
            Kontakt endelig Keldgor for at høre mere og tag et kig på kortet for
            at se, hvor Keldgor er placeret.
          </p>
        </div>
        <div className="row" id="kontaktContent">
          <div id="kontaktText" className="column">
            <a className="contact-footer" href="mailto:kontakt@Keldgor.com">
              <img src="/images/Mail.svg" alt="mail" />
              <span>kontakt@Keldgor.dk</span>
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
