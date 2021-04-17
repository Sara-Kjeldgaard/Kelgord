import React from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";
import TypeWriter from "../components/typewriter";
import Helmet from "react-helmet";

var titles = [
  "Digitalisering?",
  "Projektledelse?",
  "Business Intelligence?",
  "Agilt Setup?",
  "Master data?",
];

const IndexPage = () => {
  return (
    <>
      <Helmet
        title="Keldgor | Digitaliseringskonsulent"
        author="Sara Skovbjerg Kjeldgaard"
        description="Lad Keldgor hjælpe jer i mål med jeres næste digitalisering-eller projektledelsesopgave. Erfaren hjælp til komplekse problemer."
      />
      <KeldgorHeader active="landing" />
      <main id="landingPage">
        <div id="langingPageTop">
          <div id="landingPageTopContent">
            <div id="langingPageTopText">
              <div id="langingPageTopTextContainer" className="column">
                <h1>
                  Digitaliserings- og processkonsulent baseret i Midtjylland.
                </h1>
                <h2>
                  Lad <span>Keldgor</span> hjælpe jer med at nå jeres mål.
                </h2>
                <a className="orange-link" href="/OmKeldgor.html">
                  <span>Læs mere om Keldgor</span>
                  <img src="/images/Arrow.svg" alt="arrow-right" />
                </a>
              </div>
            </div>
            <div id="landingPageTopWhiteStripe"></div>
            <div id="KeldgorPic"></div>
          </div>
        </div>
        <div className="column">
          <h3>
            Har i brug for erfaren hjælp til
            <span style={{ minHeight: 50 }} id="landingPageTitleCaroussel">
              <TypeWriter words={titles} />
            </span>
          </h3>
          <div id="landingPageMainText">
            <p>
              Mit navn er Niels Jørgen Kjeldgaard. Jeg har gennem mange år
              hjulpet både mindre og større virksomheder med at effektivisere og
              omlægge digitale rutiner og processer.
            </p>
            <p>
              I vores moderne og højt digitaliserede verden, kan det være svært
              at finde de rigtige løsninger til de udfordringer og problemer ens
              egen virksomhed står over for. Der findes et utal af forskellige
              værktøjer og virkemidler, der alle lover meget, men ikke altid
              leverer.
            </p>
            <p>
              Lad Keldgor blive jeres næste samarbejdspartner hjælpe jer med at
              navigere i junglen af procesoptimering, digitalisering,
              projektledelse og meget andet. Sammen løfter vi de udfordringer i
              står over for, og skaber sparring, løsninger og vækst.
            </p>
            <img
              src="/images/LandingGraphic.png"
              alt="Fra udfordring til vækst"
            />
          </div>
        </div>
      </main>
      <KeldgorFooter />
    </>
  );
};

export default IndexPage;
