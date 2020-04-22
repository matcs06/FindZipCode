import React from "react";
import "./Button.css";
// import { Container } from './styles';

export default function Button(props) {
  const { isClicked } = props;

  return (
    <div className="button-container">
      <button className="button" type="submit" onClick={isClicked}>
        Buscar CEP
      </button>
    </div>
  );
}
