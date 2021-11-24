import React from "react";

export default function ItalLeíras({ ital }) {
  console.log("valami", ital);
  return (
    <div>
      <img
        src={ital.strDrinkThumb}
        style={{ width: "auto", height: "500px" }}
      />
      <div>
        <h1
          style={{
            color: "black",
            position: "absolute",
            left: "800px",
            top: "200px",
            marginRight: "10%",
          }}
        >
          {ital.strDrink}
        </h1>
        <h2
          style={{
            color: "black",
            position: "absolute",
            left: "800px",
            top: "300px",
          }}
        >
          {ital.strAlcoholic}
        </h2>
        <h3
          style={{
            color: "black",
            position: "absolute",
            left: "795px",
            top: "400px",
            marginRight: "10%",
          }}
        >
          {ital.strInstructions}
        </h3>
      </div>
    </div>
  );
}
