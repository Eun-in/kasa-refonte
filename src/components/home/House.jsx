import { useParams } from "react-router-dom";
import housing from "../housing.json";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import Collapse from "../services/Collapse";
import NotFound from "../notFound/NotFound";

const houseID = (id) => {
  return housing.find((house) => house.id === id);
};

function House() {
  const { id } = useParams();
  const [slide, setSlide] = useState(0);
  const house = houseID(id);
  /// ORDRE IMPORTANT/ NE RENVOIE PAS UN TAB > FIND
  /// FILTER RENVOIE UN TABLEAU
  /// FIND RENVOIE UNE DONNEE, L'OBJET
  if (!house) {
    return <NotFound />;
  }
  const pictures = house.pictures;
  const displayStars = (num) => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      if (i < num) {
        arr.push(
          <li key={i}>
            <FaStar className="fill" />
          </li>
        );
      } else {
        arr.push(
          <li key={i}>
            {" "}
            <FaStar className="empty" />
          </li>
        );
      }
    }
    return arr;
  };
  const prevSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };
  const nextSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };
  return (
    <div className="house">
      <div className="house-carousel">
        <div className="carousel">
          {pictures.length > 1
            ? displayMultiple(pictures, setSlide, slide, nextSlide, prevSlide)
            : displayUnique(pictures)}
        </div>
      </div>
      <div className="house-info">
        <div className="house-info-address">
          <h2>{house.title}</h2>
          <p>{house.location}</p>
          <ul className="house-tags">
            {house.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="house-info-right">
          <div className="house-info-owner">
            <p>{house.host.name}</p>
            <img
              src={house.host.picture}
              alt="photo du propiétaire de la location"
            />
          </div>
          <ul className="house-stars">{displayStars(house.rating)}</ul>
        </div>
      </div>
      <div className="collapse-double">
        <Collapse
          className={"collapse-inline"}
          itemClass={"collapse-item"}
          data={[
            { cat: "Description", equip: house.description },
            { cat: "Equipements", equip: house.equipments },
          ]}
        />
      </div>
    </div>
  );
}

const displayMultiple = (pictures, setSlide, slide, nextSlide, prevSlide) => {
  return (
    <>
      <MdKeyboardArrowLeft className="arrow arrow-left" onClick={nextSlide} />
      {pictures.map((picture, index) => {
        return (
          <img
            src={picture}
            alt={picture.title}
            key={index}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <MdKeyboardArrowRight className="arrow arrow-right" onClick={prevSlide} />
      <span className="indicators">
        <h3 className="indicator">
          {slide + 1}/{pictures.length}
        </h3>
      </span>
    </>
  );
};

const displayUnique = (picture) => {
  return (
    <>
      {picture.map((p, index) => {
        return (
          <img src={p} alt={p.title} key={(p, index)} className={"slide"} />
        );
      })}
    </>
  );
};

export default House;
