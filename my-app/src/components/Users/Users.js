import "./Users.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Users() {
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

  const SubTitle = (arg) => {
    return <h2>{arg.job}</h2>;
  };

  const ProfileImage = (arg) => {
    return <img src={arg.image} border="0" height="auto" width="300px"></img>;
  };

  const NavButtons = (arg) => {
    return (
      <div>
        {" "}
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
  };

  const LikeButton = () => {
    return (
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
    );
  };

  const DateInput = () => {
    return <input type={"date"} id="appt" name="appt"></input>;
  };

  return (
    <div className="App">
      <Title text={name} />

      <SubTitle job={job} />
      <ProfileImage image={picture} />
      <p>{description}</p>
      <DateInput />
      <br />
      <LikeButton />
      <br />

      <NavButtons />
    </div>
  );
}
