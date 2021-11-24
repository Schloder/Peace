import React, { useState, useEffect } from "react";
import axios from "axios";
import ItalLeíras from "../ItalLeíras/ItalLeíras";

export default function Unatkozom() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setDatabase(result.data);
    };
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

  console.log("random", database.drinks[0]);

  return (
    <div>
      <ItalLeíras ital={database.drinks[0]}> </ItalLeíras>
    </div>
  );
}
