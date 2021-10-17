import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
/*
function App() {
  const [database, setDatabase] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000");
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  const initialNumber = 0;
  const [number, setNumber] = useState(initialNumber);

  if (!database) {
    return <p>Wait</p>;
  }
  // database === false, ugyanaz a felső sorral

  console.log("ide", database.Database);

  const { name, job, picture, description, like } = database[number];

  const Title = (arg) => {
    return (
      <h1
        style={{
          color: "green",
          backgroundColor: "lightblue",
          textAlign: "center",
        }}
      >
        {arg.text}
      </h1>
    );
  };

  return (
    <div className="App">
      <Title text={"Ala"} />

      <h2>{job}</h2>
      <img src={picture} border="0" height="auto" width="300px"></img>
      <p>{description}</p>
      <input type={"date"} id="appt" name="appt"></input>
      <br />
      <button
        onClick={() => {
          setDatabase(
            database.map((profile) => {
              if (profile.name === name) {
                profile.like = !like;
              }
              return profile;
            })
          );
        }}
      >
        {like ? "Unlike" : "Like"}
      </button>
      <br />

      <button
        onClick={() => {
          if (0 !== number) setNumber(number - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (database.length - 1 !== number) setNumber(number + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
*/
export default function App1() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
