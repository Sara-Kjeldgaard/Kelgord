import React from "react";
import Helmet from "react-helmet";
import KerneKomp from "../components/kerne-komp";

const items = [
  {
    title: "Forretningsforståelse",
    content: `Mine mange års erfaring gør at jeg hurtigt kan sætte mig ind i netop jeres virksomhed. Uanset hvilken branche jeres virksomhed arbejder indenfor, eller hvilken størrelse den har, er der altid et sæt at processer, værdier og mål, der gør netop jer unikke`,
  },
  {
    title: "Innovativ",
    content: `Jeg tænker ud af boksen og sætter stor værdi i at være med til hele tiden at sætte skub i udviklingen. Jeg er ikke bange for at takle jeres udfordringer og processer fra andre vinkler og vil til enhver tid prøve at finde de rigtige værktøjer til et givent problem.`,
  },
  {
    title: "Analyse",
    content: `Jeg redefinerer processer, opbygger standarder og skaber nye strukturer ved at bruge mine stærke logiske og analytiske egenskaber.`,
  },
  {
    title: "Struktur",
    content:
      "Jeg arbejder struktureret og fokuseret. Forandringer skal ske på et faktabaseret grundlag og med ordentlige hensyntagen til de involverede personer.",
  },
  {
    title: "Energi",
    content:
      "Ved løsning af opgaver er jeg entusiastiske og arbejder med stor energi. Jeg opererer naturligt i spændingsfeltet mellem forretning og IT.",
  },
];

const KompetencerPage = () => {
  return (
    <>
      <Helmet
        title="Keldgor | Kompetencer"
        author="Sara Skovbjerg Kjeldgaard"
        description="Mange års erfaring i den virkelige verden giver både brede og dybe kompetencer"
      />
      <KerneKomp items={items} active="Kompetencer" />
    </>
  );
};

export default KompetencerPage;
