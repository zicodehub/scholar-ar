import { Interactive } from "@react-three/xr";
import { Text, Html } from "@react-three/drei";

import ClassCard from "./ClassCard";

const ClassOptions = ({ forward }) => {
  return (
    <>
      <mesh position={[0, 0.1, -1]}>
        <Interactive onSelect={forward}>
          <mesh position={[-1.3, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"orange"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
              Select
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[-0.8, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#F61153"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
              Select
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[-0, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#00CFFF"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
              Select
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[0.6, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#FFCD00"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
              Select
            </Text>
          </mesh>
        </Interactive>
        <Interactive onSelect={forward}>
          <mesh position={[1.3, -0.4, 0.4]}>
            <circleGeometry attach="geometry" args={[0.1, 30]} />
            <meshPhongMaterial attach="material" color={"#21DFBC"} />
            <Text fontSize={0.05} position={[0, 0.02, 0.03]} color="black">
              Select
            </Text>
          </mesh>
        </Interactive>

        <Html transform distanceFactor={1}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1500px",
            }}
          >
            <ClassCard
              color="orange"
              className="AP Calculus AB"
              teacher="Ms. Friedman"
              period="1st"
              time="8:30 - 9:15"
              img="teacher1"
            />

            <ClassCard
              color="#F61153"
              className="Spanish II"
              teacher="Ms. Chen"
              period="2nd"
              time="9:30 - 10:15"
              img="teacher2"
            />
            <ClassCard
              color="#00CFFF"
              className="Physics"
              teacher="Mr. Stamos"
              period="3rd"
              time="10:30 - 11:15"
              img="teacher3"
              inSession
            />
            <ClassCard
              color="#FFCD00"
              className="World History"
              teacher="Ms. Thomas"
              period="4th"
              time="11:30 - 12:15"
              img="teacher4"
            />
            <ClassCard
              color="#21DFBC"
              className="English III"
              teacher="Ms. Smith"
              period="5th"
              time="12:30 - 1:15"
              img="teacher5"
            />
          </div>
        </Html>
      </mesh>
    </>
  );
};

export default ClassOptions;
