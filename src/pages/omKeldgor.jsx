import React, { useState } from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";
import Helmet from "react-helmet";
import "../styles/omKeldgor.css";

const OmKeldgorPage = () => {
  const [showCerts, setShowCerts] = useState(false);

  return (
    <>
      <Helmet
        title="Keldgor | Om"
        author="Sara Skovbjerg Kjeldgaard"
        description="Keldgor er en enkeltmandsvirksomhed med stort erfaring. Læs videre og se hvordan Keldgor kan hjælpe jeres virksomhed"
      />
      <KeldgorHeader active="OmKeldgor" />
      <main id="OmKeldgorPage" className="column">
        <div id="TopTitleDescription">
          <h1>Om Keldgor</h1>
          <div id="divider"></div>
          <p>Keldgor er en enkeltmandsvirksomhed med stor erfaring.</p>
        </div>
        <div id="videoAndText">
          <div id="video">
            <iframe
              title="Keldgor | video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-mX-9TYQOoY"
              allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div id="videoText">
            <h2>En passioneret partner</h2>
            <p>
              Jeg brænder for at udfordre virksomheder på rutiner og
              systemanvendelse for dermed at drive digitalisering, forandring og
              procesoptimering. Jeg er overbevist om at dette kan føre til
              forretningsmæssige fordele for jeres virksomhed, samt øge jeres
              kunde- og medarbejdertilfredshed.
            </p>
          </div>
        </div>
        <div>
          <div id="experiencedText" className="column">
            <h2>En erfaren partner</h2>
            <p>
              Jeg har gennem mere end 30 år oparbejdet en stor erfaring, fra
              mange forskellige typer og størrelser af virksomheder. Min
              erfaring spænder både over produktion, retail samt den finansielle
              sektor. Der er altså et bredt erfaringsgrundlag at trække på.
            </p>
          </div>
        </div>
        <div id="certificationAndCourses" className="row">
          <div id="certificationAndCoursesText">
            <h2>Certificeringer og kurser</h2>

            <p>
              For at kunne levere det bedste stykke arbejde som
              konsulentvirksomhed, sørger jeg for at holde mig opdateret med de
              seneste kurser og certificeringer.
            </p>
            <div id="certificationAndCoursesTextAlways">
              <p>
                <span>2021</span> - PRINCE2 Agile Practitioner
              </p>
              <p>
                <span>2020</span> - PRINCE2 Foundation
              </p>
              <p>
                <span>2019</span> - ITIL Foundation
              </p>
              <p>
                <span>2018</span> - Leading SAFe Course
              </p>
              <p>
                <span>2017</span> - Product Owner
              </p>
              <p>
                <span>2016 </span>- SAP Business Object Web Intelligence
              </p>
              <p>
                <span>2014</span> - ScrumMaster
              </p>
            </div>

            <div
              id="certificationAndCoursesTextExtra"
              className={showCerts ? "show" : ""}
            >
              <p>
                <span>1996 – 2014 </span>- Diverse SAP konferencer på BI/HR, 3-5
                dage/år, f.eks. BI2014
              </p>
              <p>
                <span>2009 – 2013</span> - Lederuddannelse Dansk Supermarked:
                Anerkende ledelse, Projektledelse, Performance Management/Lean
              </p>
              <p>
                <span>2007 – 2009 </span>- Lederuddannelse Vestas: Change
                Management and Communication, Six Sigma Awareness, Work more
                Effectively
              </p>
              <p>
                <span>2003 - 2006 </span>- SAP BW: BW305 Rapportering, BW310
                Datamodel, SEM240 Konsolidering
              </p>
              <p>
                <span>1996 – 2003 </span>- SAP HR: HR050 SAP HR grundlæggende,
                HR305 HR Masterdata, HR310 Tidsregistrering, HR400 Payroll
              </p>
              <p>
                <span>1994 – 1996 </span>- Projektlederkursus hos LEGO,
                Sammenlagt ca. 5 uger
              </p>
              <p>
                <span>1991 – 1994 </span>- Teknisk uddannelse på SAS værktøjer,
                Sammenlagt ca. 2 uge
              </p>
            </div>
            <button
              id="readMore"
              className={`orange-link ${showCerts ? "show" : ""}`}
              onClick={() => setShowCerts(!showCerts)}
            >
              <span>
                {showCerts
                  ? "Læs mindre"
                  : "Læs mere om Keldgors certificeringer"}
              </span>
              <img src="/images/ArrowDown.svg" alt="arrow-down" />
            </button>
          </div>
          <div id="certificateIcon">
            <div className="cert" style={{ fontSize: 25 }}>
              SCRUM
            </div>
            <div className="cert" style={{ fontSize: 50 }}>
              BI
            </div>
            <div className="cert">PRINCE2</div>
            <div className="cert" style={{ fontSize: 30 }}>
              SAFe
            </div>
          </div>
        </div>
      </main>
      <KeldgorFooter />
    </>
  );
};

export default OmKeldgorPage;
