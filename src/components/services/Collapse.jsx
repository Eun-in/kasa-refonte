import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Collapse = ({ data, className, itemClass }) => {
  console.log(data);
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={className}>
      {data.map((item, i) => (
        <div className={itemClass} key={i}>
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.cat}</h2>
            <div className={`dropdown ${selected === i ? "open" : ""}`}>
              {selected === i ? (
                <span>
                  <MdOutlineKeyboardArrowUp />
                </span>
              ) : (
                <span>
                  <MdOutlineKeyboardArrowUp />
                </span>
              )}
            </div>
          </div>
          <div className={selected === i ? "content show" : "content"}>
            {Array.isArray(item.equip) ? (
              <ul className="equipment-list">
                {item.equip.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            ) : (
              <p>{item.equip}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;
