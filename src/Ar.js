import "./App.css";
import { useEffect, useState, Suspense, useRef } from "react";
import * as THREE from "three";
import {
  ARCanvas,
  DefaultXRControllers,
  Interactive,
  useInteraction,
  useXR,
} from "@react-three/xr";
import {
  useFBX,
  Text,
  Sphere,
  Plane,
  Html,
  useTexture,
  Billboard,
  PositionalAudio,
  useAspect,
} from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import "./styles.css";

import ClassOptions from "./components/ClassOptions";
import ARButton from "./components/CustomARButton";

// images
// import homework from "./calc-homework.jpeg";

// TODO: Change fonts

const Label = ({ color }) => {
  return (
    <Text
      position={[0, -0.1, -0.5]}
      color={color}
      fontSize={0.04}
      anchorY="middle"
    >
      Entrer dans l'école
    </Text>
  );
};

const Home = ({ forward }) => {
  const model = useFBX("school.fbx");

  return (
    <>
      <Label />
      <Interactive onSelect={forward}>
        <group
          scale={0.02}
          position={[0, 0.05, -0.5]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <mesh>
            <primitive object={model} />
          </mesh>
        </group>
      </Interactive>
    </>
  );
};

const Video = ({ play }) => {
  const size = useAspect(1800, 1000);
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "./physics.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    return vid;
  });
  // Keep in mind videos can only play once the user has interacted with the site ...
  useEffect(() => {
    if (play) {
      void video.play();
    }
  }, [video, play]);

  return (
    <mesh scale={size} position={[0, -0.05, -16]}>
      <planeBufferGeometry args={[0.25, 0.25]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
};

const ClassHome = () => {
  const texture = useTexture("calc-homework.png");
  const [zoomed, setZoomed] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);

  const { scale } = useSpring({ scale: zoomed ? 5 : 1 });
  const { scale: robotScale } = useSpring({
    from: { scale: 0.05 },
    to: { scale: 0.055 },
    config: { duration: 1000 },
    loop: { reverse: true },
    reset: true,
  });
  // const { scale: doorScale } = useSpring({ scale: doorOpen ? 0.1 : 0.004 });
  // const { z } = useSpring({ z: doorOpen ? 0 : -13 });

  const [door, robot, room] = useLoader(GLTFLoader, [
    "./door.gltf",
    "./robot/scene.gltf",
    "./classroom.gltf",
  ]);

  const { player } = useXR();

  useEffect(() => {
    if (doorOpen) {
      player.position.z -= 13;
    }
  }, [doorOpen]);
  return (
    <mesh position={[0, 0.1, -0.9]}>
      <Billboard args={[0.1, 0.1]} position={[-0.6, 0, 0.5]}>
        <mesh position={[0, 0.2, 0]}>
          <boxBufferGeometry attach="geometry" args={[0.4, 0.1, 0.05]} />
          <meshPhongMaterial attach="material" color={"black"} />
          <Text position={[0, 0, 0.06]} fontSize={0.05}>
            Devoirs
          </Text>
        </mesh>
        <Interactive onSelect={() => setZoomed(!zoomed)}>
          <animated.mesh position={[0, -0.05, 0.2]} scale={scale}>
            <planeBufferGeometry attach="geometry" args={[0.2, 0.25]} />
            <meshBasicMaterial attach="material" map={texture} />
          </animated.mesh>
        </Interactive>
      </Billboard>
      <mesh position={[0.7, 0.1, 0.2]} rotation={[0, -Math.PI / 4.5, 0]}>
        <Html transform distanceFactor={1}>
          <div
            style={{
              backgroundColor: "green",
              width: "300px",
              height: "200px",
              color: "white",
              fontSize: 15,
            }}
          >
            <p
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 21 }}
            >
              Travail à faire:
            </p>
            {/* TODO: Add cursive font to agenda */}
            <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              <p style={{ lineHeight: "120%" }}>
                • Faire les exercices de Maths 1 à 3
                <br />• Lire les 30 première du roman étudié
                <br />• Balayer la salle
              </p>
              {/* <p></p>
              <p></p> */}
            </div>
            <hr
              style={{
                // borderColor: "#964B00",
                borderWidth: 0,
                height: "5px",
                backgroundColor: "#964B00",
                marginTop: "95px",
              }}
            />
          </div>
        </Html>
      </mesh>
      <Suspense fallback={null}>
        <Interactive onSelect={() => setDoorOpen(true)}>
          {/* TODO: Animate door zoom */}
          <animated.mesh
            // scale={doorScale}
            scale={0.004}
            rotation={[0, Math.PI / 2, 0]}
            position={[0, -0.05, 0]}
          >
            <primitive object={door.scene} />
          </animated.mesh>
        </Interactive>
      </Suspense>
      <Text
        position={[0, 0.3, 0.06]}
        fontSize={0.03}
        fillOpacity={0}
        outlineWidth="2%"
      >
        EENTRER DANS LA SALLE
      </Text>
      {/* </animated.mesh> */}

      <mesh position={[0, -2, -13]}>
        <primitive object={room.scene} />
      </mesh>

      <animated.mesh position={[0, -1, -14]} scale={robotScale}>
        <primitive object={robot.scene} />
      </animated.mesh>
      <Video play={doorOpen} />
    </mesh>
  );
};

const Scene = () => {
  // holds the value of the displayed scene
  const [sceneVal, setSceneVal] = useState("home"); // TODO: change default to home

  switch (sceneVal) {
    case "home":
      return <Home forward={() => setSceneVal("classes")} />;
    case "classes":
      return <ClassOptions forward={() => setSceneVal("class_home")} />;
    case "class_home":
      return (
        <Suspense
          fallback={
            <Text fontSize={0.03} position={[0, 0, -0.5]}>
              Chargement
            </Text>
          }
        >
          <ClassHome />
        </Suspense>
      );
    default:
      return null;
  }
};

const AR = () => {
  return (
    // <div className="App">
    <ARCanvas
      mode="concurrent"
      onCreated={({ gl }) => {
        document.body.appendChild(ARButton.createButton(gl));
      }}
    >
      <ambientLight />
      <pointLight position={[4, 10, 10]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <DefaultXRControllers />
    </ARCanvas>
    // </div>
  );
};

export default AR;
