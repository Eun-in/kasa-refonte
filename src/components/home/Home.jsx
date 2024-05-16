import Gallery from "./Gallery";
import housing from "../housing.json";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <img src="falaise.png" alt="une falaise au bord de l'eau" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <Gallery housing={housing} />
      </div>
    </div>
  );
}

export default Home;
