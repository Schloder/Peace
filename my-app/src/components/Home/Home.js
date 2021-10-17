import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div style={{ backgroundColor: "blueviolet" }}>
      <h1
        style={{
          color: "lightyellow",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        HAGYOMÁNYOS TÚRÓS CSUSZA
      </h1>
      <img
        src={
          "https://i.pinimg.com/originals/e0/f8/ea/e0f8ea8c92a1e410a6358a1fc44edfaf.jpg"
        }
        border="0"
        height="auto"
        width="300px"
      ></img>
      <h2
        style={{
          color: "purple",
          textAlign: "left",
          backgroundColor: "darkgrey",
        }}
      >
        Hozzávalók:
      </h2>
      <p
        style={{
          color: "black",
          textAlign: "left",
          backgroundColor: "lightsalmon",
        }}
      >
        {"-40 dkg csuszatészta"}
        <br />
        {"-25 dkg húsos szalonna"}
        <br />
        {"-50 túró"}
        <br />
        {"-4 dcl tejföl"}
        <br />
        {"-só"}
      </p>
      <h3
        style={{
          color: "purple",
          textAlign: "left",
          backgroundColor: "darkgrey",
        }}
      >
        Elkészítése:
      </h3>
      <p
        style={{
          color: "black",
          textAlign: "left",
          backgroundColor: "lightsalmon",
        }}
      >
        {
          "1. A tésztát a csomagoláson található előírás szerint forró, sós vízben kifőzzük, majd lecsepegtetjük."
        }
        <br />
        {
          "2. A szalonnát kockára vágva pörcösre sütjük. Amikor kisült, a zsírját a tésztára öntjük, hozzákeverjük a fele túrót, a tejföl felét és a pörcök felét is, megsózzuk."
        }
        <br />
        {
          "3. Tűzálló tálban sütőbe tesszük, tetejére tejfölt simítunk és az egészet összesütjük 190 fokon 30 perc alatt. Az utolsó 5-10 percben a grillfokozatot is használhatjuk. Tálaláskor tehetünk még rá túrót, tejfölt és pörcöt is."
        }
      </p>
    </div>
  );
}
