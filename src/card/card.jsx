import { useState } from "react";
import { data } from "../data/data";
import "./card.css";

export const Card = () => {
  const [active, setActive] = useState(false);
  const cardStyle = {
    backgroundColor: active ? "#334155" : "#f8fafc",
    color: active ? "#f8fafc" : "#334155",
  };
  return (
    <div className="card" onClick={() => setActive(!active)} style={cardStyle}>
      <img src={`/src/assets/${data.image}`} alt={data.title} width={300} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <button>More details</button>
    </div>
  );
};
