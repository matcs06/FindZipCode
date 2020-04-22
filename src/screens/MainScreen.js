import React, { useState } from "react";
import "./MainScreen.css";
import CityInput from "../components/City/InputCity";
import StateInput from "../components/State/InputState";
import AdressInput from "../components/Address/InputAddress";
import CustomButton from "../components/Button/Button";

import api from "../services/api";
// import { Container } from './styles';

const Main = (props) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [apidata, setApiData] = useState([]);

  async function SearchZip() {
    const respose = await api.get(`/${state}/${city}/${address}/json`);
    setApiData(respose.data);
  }

  return (
    <>
      <div className="main-container">
        <div className="input-container">
          <CityInput getCity={setCity} />
          <StateInput getState={setState} />
          <AdressInput getAddress={setAddress} />
        </div>
        <CustomButton isClicked={SearchZip} />
      </div>
      <div>
        <h1>
          {apidata.map((data) => (
            <div key={data.cep}>
              <p>CEP: {` ` + data.cep}</p>
              <p>Cidade: {`` + data.localidade}</p>
            </div>
          ))}{" "}
        </h1>
      </div>
    </>
  );
};

export default Main;
