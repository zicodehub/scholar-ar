import { useEffect, useState, Suspense, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Button } from "antd";
// components
import AR from "./Ar";
// css
import "./App.css";
import "antd/dist/antd.css";

import bgImage from "./bgImage/bg.jpg";
import bg from "./bgImage/19545.jpg";


const Card = ({ img, width, description }) => {
  return (
    <div
      style={{
        width: "10vw",
        height: "10vw",
        padding: "0 10vw",
        borderRadius: "5px",
        boxShadow: "0px 11px 5px 0px rgba(0,0,0,0.15)",
        marginRight: "8vw",
        marginLeft: "3vw",
      }}
    >
      <img
        src={img}
        style={{
          width,
          borderRadius: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
        }}
      />
      <p
        style={{
          margin: "3vw",
          fontWeight: "500",
          width: "100%",
          // backgroundColor: "green",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const Cards = () => {
  return (
    <div
      className="scroll"
      style={{
        marginTop: "5vh",
        display: "flex",
        //overflow: "scroll",
        // height: "75vw",
        scrollbarWidth: "none",
        // width: "102vw",
        // overflowX: "auto",
        // overflowY: "hidden",
        // whiteSpace: "nowrap",
        // width: "250vw",
      }}
    >
      {/* <div style={{ width: "100vw", display: "flex" }}> */}
      {/* <Card
        img="./blue-school.png"
        width="25vw"
        height="10vw"
        description="Stimuler l'apprentissage en travaillant avec des leçons en 3 dimensions"
      /> */}
      {/* <Card
        img="./ar-symbol.png"
        width="32vw"
        description="Uses state-of-the-art technology to render powerful virtual classroom"
      /> */}
      {/* <Card
        img="./cubes.png"
        width="32vw"
        description="Boost learning by working with 3-dimensional lessons"
      /> */}

      {/* </div> */}
    </div>
  );
};

const Home = () => {
  const history = useHistory();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        //paddingBottom: "15px",
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        fontSize:'100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* <div
          style={{
            height: "60vw",
            width: "60vw",
            borderRadius: "30vw",
            backgroundColor: "#DA0037",
            opacity: 0.34,
            position: "absolute",
            top: "-10vh",
            left: "-20vw",
          }}
        ></div> */}
        <h1 style={{ fontSize: 60,color: "#FFFFFF"}}>
          404 Ecole<span style={{ color: "#DA0037" }}>AR</span>
        </h1>

      </div>

      <Cards />
      <p
        style={{
          fontSize: 20,
          fontWeight: "500",
          textAlign: "center",
          margin: "5vh 0",
        }}
      >
        L'apprentissage virtuel repensé
      </p>
      <Button
        type="primary"
        shape="round"
        size="large"
        onClick={() => history.push("/ar")}
        style={{
          display: "block",
          backgroundColor: "#DA0037",
          borderWidth: 0,
          fontWeight: "bolder",
          fontSize: 25,
          height: "90px",
          width: "320px",
          borderRadius: "50px",
          margin: "15px auto 20px auto",
          marginBottom: "20px",
          alignSelf: "center",
        }}
      >
        Debutez 404 School Ar
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/ar">
          <AR />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;