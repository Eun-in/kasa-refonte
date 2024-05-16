import Collapse from "./Collapse";

function About() {
  const data = [
    {
      cat: "Fiabilité",
      equip:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réfgulièrement vérifiées par nos équipes.",
    },
    {
      cat: "Respect",
      equip:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      cat: "Service",
      equip:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      cat: "Sécurité",
      equip:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cele permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div className="banner-a-propos">
      <div className="banner">
        <img src="/foret-montagnes.png" alt="Forêt, montagnes et ciel bleu" />
      </div>
      <div className="collapse">
        <Collapse className={"wrapper"} itemClass={"item"} data={data} />
      </div>
    </div>
  );
}

export default About;
