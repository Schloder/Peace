import React from "react";
import "./About.css";

export default function About() {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1
        style={{
          color: "blue",
          backgroundColor: "grey",
          textAlign: "center",
        }}
      >
        Szilvás buktás recept
      </h1>
      <img
        src={
          "https://image-api.nosalty.hu/nosalty/images/recipes/LI/wk/szilvas-bukta-kingustol.jpeg?w=640&h=480&fit=crop&s=9e381b45cfca20407f72581784df94bf"
        }
      ></img>
      <h2 style={{ color: "red", textAlign: "left", backgroundColor: "black" }}>
        Hozzávalók:
      </h2>
      <p
        style={{
          color: "black",
          textAlign: "left",
          backgroundColor: "lightgreen",
        }}
      >
        {"A tésztához:"}
        <br />
        {"-50 dkg finomliszt"}
        <br />
        {"-5 dkg margarin"}
        <br />
        {"-5 dkg porcukor"}
        <br />
        {"-20 g élesztő"}
        <br />
        {"-3 dl tej"}
        <br />
        {"-2 db tojássárgája"}
        <br />
        {"-1 csipet só"}
        <br />
        {" -1 db tojás (a kenéshez)"}
        <br />
        {"A töltelékhez:"}
        <br />
        {"-20 dkg szilvalekvár"}
      </p>
      <h3
        style={{ color: "orange", textAlign: "left", backgroundColor: "black" }}
      >
        Elkészítése:
      </h3>
      <p
        style={{
          color: "black",
          textAlign: "left",
          backgroundColor: "lightgreen",
        }}
      >
        {
          "1.A lisztet és a porcukrot átszitáljuk, a margarint megolvasztjuk, a tejet meglangyosítjuk. Az élesztőt egy kis cukros tejben felfuttatjuk, majd a liszthez öntve a többi hozzávalóval együtt sima, az edény oldalához nem ragadó tésztát gyúrunk."
        }{" "}
        <br />
        {
          "2.A tésztát  megszórjuk egy kis liszttel, majd meleg helyen nagyjából 25-30 percig kelesztjük, amíg duplájára nem dagad. Ekkor óvatosan átgyúrjuk és újból kelesztjük, megint nagyjából 25-30 percig."
        }{" "}
        <br />
        {
          "3. Kelesztés után a tésztát ujjnyi vastagra nyújtjuk, majd négyzet vagy téglalap alakú kisebb lapokra vágjuk. A lapok közepébe szilvalekvárt teszünk, összehajtjuk őket és a végeiket behajtjuk."
        }
        <br />{" "}
        {
          "4. A buktákat egy kivajazott tepsibe, egymástól kis távolságra elhelyezzük, az oldalukat megkenjük olvasztott vajjal, a tetejüket pedig tojással. Meleg helyen további 20-25 percet kelesztjük, amíg kissé meg nem kelnek és a tojás meg nem szárad a tetejükön."
        }
        <br />{" "}
        {
          "5. Ekkor újra lekenjük őket tojással, majd előmelegített sütőben 180-200 fokon nagyjából 25-30 percig sütjük."
        }
        <br />
        {"6. Porcukorral megszórva tálaljuk."}
      </p>
    </div>
  );
}
