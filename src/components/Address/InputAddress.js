import React, { useState } from "react";

import "./InputAddress.css";

// import { Container } from './styles';

export default function Address(props) {
  const { getAddress } = props;
  const [address, setAddress] = useState("");

  const handleChange = (e) => {
    setAddress(e.target.value);
    getAddress(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Logradouro"
        value={address}
        onChange={handleChange}
      />
    </div>
  );
}
