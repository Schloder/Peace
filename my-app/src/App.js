import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ÖtCsillagKocsma from "./components/ÖtCsillagKocsma/ÖtCsillagKocsma";
import Italok from "./components/Italok/Italok";
import Unatkozom from "./components/Unatkozom/Unatkozom";
import Navigation from "./components/Navigation/Navigation";
import ItalRészlet from "./components/ItalRészlet/ItalRészlet";

export default function App() {
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
  if (!database.length) {
    return (
      <div className="heart-container">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
  }

  const drinkID = database.map((drinkID) => {
    return drinkID.idDrink;
  });

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/italok/:id">
          <ItalRészlet drinkID={database} />
        </Route>
        <Route path="/unatkozom">
          <Unatkozom />
        </Route>
        <Route path="/italok">
          <Italok />
        </Route>
        <Route path="/">
          <ÖtCsillagKocsma database={database} />
        </Route>
      </Switch>
    </Router>
  );
}
