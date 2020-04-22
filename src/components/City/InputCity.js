import React, { useState } from "react";
import "./InputCity.css";

// import { Container } from './styles';

export default function City(props) {
  const { getCity } = props;
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
    getCity(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Cidade"
        value={city}
        onChange={handleChange}
      />
    </div>
  );
}
