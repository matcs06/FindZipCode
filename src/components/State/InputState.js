import React, { useState } from "react";
import "./InputState.css";

// import { Container } from './styles';

export default function State(props) {
  const { getState } = props;
  const [state, setState] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
    getState(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="inputS"
        type="text"
        placeholder="UF"
        value={state}
        onChange={handleChange}
      />
    </div>
  );
}
