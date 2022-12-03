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

const Card = ({ img, width, description }) => {
  return (
    <div
      style={{
        width: "60vw",
        height: "70vw",
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
        overflow: "scroll",
        height: "75vw",
        scrollbarWidth: "none",
        // width: "102vw",
        // overflowX: "auto",
        // overflowY: "hidden",
        // whiteSpace: "nowrap",
        // width: "250vw",
      }}
    >
      {/* <div style={{ width: "100vw", display: "flex" }}> */}
      <Card
        img="./blue-school.png"
        width="35vw"
        // description="Experience school in an interactive augmented environment"
        description="L'école en réalité augmentée"
      />
      <Card
        img="./ar-symbol.png"
        width="32vw"
        // description="Uses state-of-the-art technology to render powerful virtual classroom"
        description="La technologie pour virtualiser une classe"
      />
      <Card
        img="./cubes.png"
        width="32vw"
        description="Immertion presque totale, pour mieux apprendre ! "
      />

      {/* </div> */}
    </div>
  );
};

const Home = () => {
  const history = useHistory();
  return (
    <div
      style={{
        // height: "100%",
        width: "100%",
        paddingBottom: "15px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
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
        ></div>
        <h1 style={{ fontSize: 60 }}>
          Ecole<span style={{ color: "#DA0037" }}> 404</span>
        </h1>
        <p
          style={{
            fontWeight: "300",
            maxWidth: "55vw",
            fontSize: 18,
            alignSelf: "center",
            margin: "0 auto",
          }}
        >
          L'apprentissage immertifs au bout de vos doigts
        </p>
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
        L'apprentissage à distance réinventé
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
          width: "250px",
          borderRadius: "50px",
          margin: "15px auto 20px auto",
          marginBottom: "20px",
          alignSelf: "center",
        }}
      >
        Commencer
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
