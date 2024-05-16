import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Gallery({ housing }) {
  return housing.map((housing) => (
    <Link to={`/housing/${housing.id}`} className="gallery" key={housing.id}>
      <img src={housing.cover} alt={housing.title} />
      <h3>{housing.title}</h3>
    </Link>
  ));
}

Gallery.propTypes = {
  housing: propTypes.array.isRequired,
};

export default Gallery;
