import React from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";
import Helmet from "react-helmet";

const KonsulentydelserPage = () => {
  return (
    <>
      <Helmet
        title="Keldgor | Konsulentydelser"
        author="Sara Skovbjerg Kjeldgaard"
        description="Læs om hvad Keldgor kan hjælpe jeres virksomhed med, hvad end jeres udfordring ligger indenfor digitalisering, projektledelse, agilt setup, BI, master data eller noget helt andet."
      />
      <KeldgorHeader active="Konsulentydelser" />
      <main id="KonsulentydelserPage" className="column">
        <div id="TopTitleDescription">
          <h1>Konsulentydelser</h1>
          <div id="divider"></div>
          <p>
            At hyre konsulenter er ikke kun et spørgsmål om resurser. Det er et
            spørgsmål om <span>tillid.</span>
          </p>
        </div>
        <div id="konsulentydelser">
          <div id="konsulentydelserContent" className="row">
            <div className="konsulentydelse">
              <div className="konsulentydelse-form">
                <h2>Digitalisering</h2>
                <p>
                  I disse år er digitalisering på alles læber. Jeg har den
                  erfaring, som kan få jeres processer og rutiner optimeret og
                  digitaliseret, således at data bliver sikret og bliver gjort
                  til et værdifuldt grundlag for fremtidige beslutninger. Min
                  erfaring er skabt gennem succesrige implementeringer på både
                  centrale ERP systemer og på Business Intelligence.
                </p>
              </div>
            </div>

            <div className="konsulentydelse">
              <div className="konsulentydelse-form">
                <h2>Projektledelse</h2>
                <p>
                  Min erfaring på projektledelse kan hjælpe jeres projekter til
                  at komme sikkert i mål. Jeg er vant til at drive projekter fra
                  start til slut med fastlæggelse af projektmål og organisation,
                  udarbejdelse af planer og med løbende opfølgning. Et af
                  fokuspunkterne for mig er klar kommunikation og tydelig
                  håndtering af interessenter.
                </p>
              </div>
            </div>

            <div className="konsulentydelse">
              <div className="konsulentydelse-form">
                <h2>Business Intelligence</h2>
                <p>
                  Mængden af data som opsamles i virksomheden og dens omverden
                  stiger kolossalt. Hermed skabes et fantastisk grundlag for
                  beregninger, men dette kræver sammenstilling og
                  efterbehandling af data. Mine store erfaringer på Business
                  Intelligence kan hjælpe til at definere analyser og
                  visualiseringer, som vil omdanne de rå data til værdifuldt
                  beslutningsgrundlag.
                </p>
              </div>
            </div>

            <div className="konsulentydelse">
              <div className="konsulentydelse-form">
                <h2>Agilt Setup</h2>
                <p>
                  Motivation hos vidensbaserede medarbejdere skabes af
                  samarbejde, tillid og gensidig respekt. Dette har fået agile
                  arbejdsmetoder til at blive centrale hos hovedparten af de
                  danske virksomheder, som arbejder med IT. Mine erfaringer med
                  Scrum og SAFe kan hjælpe jeres organisation til en sikker
                  opstart eller videreudvikling af jeres agile setup.
                </p>
              </div>
            </div>

            <div className="konsulentydelse">
              <div className="konsulentydelse-form">
                <h2>Master data</h2>
                <p>
                  Et nødvendigt grundlag for effektive digitale processer er
                  korrekte master data. Fejl skal fanges tidligt, da
                  følgevirkningen kan blive kostbare og skabe dårligt image. Jeg
                  kan hjælpe til at sikre et højt kvalitetsniveau på master data
                  ved at analysere nuværende data og rutiner, og efterfølgende
                  hjælpe med at definere processer og arbejdsgange, som sikrer
                  en fremtidig Governance og dermed en bedre bundlinje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>{" "}
      <KeldgorFooter />
    </>
  );
};

export default KonsulentydelserPage;
