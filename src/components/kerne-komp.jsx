import React, { useState } from "react";
import KeldgorFooter from "../components/footer";
import KeldgorHeader from "../components/header";

const KerneKomp = ({ items, active }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <KeldgorHeader active={active} />
      <main id="kerneKompPage" className="row">
        <div id="TopTitleDescription">
          <h1>Kerneværdier</h1>
          <div id="divider"></div>
          <p>
            Kernen af et godt samarbejde er, at vi kan finde fælles fodslag i
            vores <span>værdier.</span>
          </p>
        </div>
        <div id="kerneKompPageContent" className="row">
          <div id="sideTitleDescription" className="column">
            <h1>Kerneværdier</h1>

            <p>
              Kernen af et godt samarbejde er, at vi kan finde fælles fodslag i
              vores <span>værdier.</span>
            </p>
          </div>
          <div id="dividerVertical"></div>

          <div>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setActiveIndex(index === activeIndex ? null : index);
                  }}
                  className={`kerne-komp ${
                    index === activeIndex ? "kerne-komp-active" : ""
                  }`}
                >
                  <div className="kerne-komp-text">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                  </div>
                  <img src="/images/DoubleArrowDown.png" alt="arrow-down" />
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <KeldgorFooter />
    </>
  );
};

export default KerneKomp;
