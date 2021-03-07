import React from "react";
import Helmet from "react-helmet";
import KerneKomp from "../components/kerne-komp";

const items = [
  {
    title: "Respektfuld",
    content: `Jeg giver plads til andres holdninger og værdier, og
    respekterer både den kultur jeg befinder mig i, og de
    mennesker jeg arbejder med. Respekt er en af grundstenene i
    et godt samarbejde, og det er en mærkesag for Keldgor at
    fremme et godt og respektfuldt samarbejde.`,
  },
  {
    title: "Kvalitetsbevidst",
    content: `Jeg efterlader ikke halvfærdige, uigennemtænkte eller
    utilfredsstillende løsninger. Jeg sætter stor faglig
    stolthed i at levere gennemtænkte løsninger på jeres
    problemer, og brænder for at levere arbejde i højeste
    kvalitet. En grundlæggende værdi for mig er at ’Gøre de
    rigtige ting rigtigt`,
  },
  {
    title: "Empatisk",
    content: `Jeg værdsætter vores medmennesker, deres værdier og holdninger, og elsker at lære vores kollegaer at kende. Alle på teamet er vigtige brikker i puslespillet, og en oprigtig empatisk tilgang giver både et behageligt og produktivt arbejdsmiljø.`,
  },
  {
    title: "Humoristisk",
    content:
      "Jeg kan grine og have det sjovt med humor som virkemiddel, samtidig med, at jeg får udført arbejdet foran mig. Humor og varme er helt naturlige virkemidler til at lære mere om de mennesker jeg arbejder med.",
  },
  {
    title: "Imødekommende",
    content:
      "Jeg opfatter det som naturligt og en selvfølge, at kunne imødekomme og favne alle typer mennesker i vores moderne og diverse verden.",
  },
];

const KerneværdierPage = () => {
  return (
    <>
      <Helmet
        title="Keldgor | Kerneværdier"
        author="Sara Skovbjerg Kjeldgaard"
        description="Kernen af et godt samarbejde er, at vi kan finde fælles fodslag i vores værdier"
      />
      <KerneKomp items={items} active="Kerneværdier" />
    </>
  );
};

export default KerneværdierPage;
