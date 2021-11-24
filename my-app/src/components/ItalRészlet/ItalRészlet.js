import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItalLeíras from "../ItalLeíras/ItalLeíras";
import { Table } from "react-bootstrap";

export default function ItalRészlet({ drinkID }) {
  const params = useParams();
  const drink = drinkID.find((x) => params.id === x.idDrink);
  const [ital, setItal] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
      );
      setItal(result.data);
    };
    fetchData();
  }, []);

  if (!ital) {
    return <p>Wait</p>;
  }
  console.log("ital", ital);
  return (
    <div>
      <ItalLeíras ital={ital.drinks[0]} />
    </div>
  );
}
