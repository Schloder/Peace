import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ital from "../Ital/Ital";

export default function Italok() {
  const [database, setDatabase] = useState([]);

  async function fetchData() {
    try {
      const alcoholic = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      );
      const nonAlcoholic = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      );
      setDatabase([...alcoholic.data.drinks, ...nonAlcoholic.data.drinks]);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  if (!database) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "120px",
        justifyContent: "center",
      }}
    >
      {database.map((ital) => {
        return (
          <Link to={`/italok/${ital.idDrink}`}>
            <Ital name={ital.strDrink} img={ital.strDrinkThumb}></Ital>
          </Link>
        );
      })}
    </div>
  );
}
