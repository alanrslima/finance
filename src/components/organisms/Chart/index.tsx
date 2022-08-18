import { ReactElement } from "react";
import { Container } from "./styles";
import { VictoryChart, VictoryTheme, VictoryArea } from "victory";

const sampleData = [
  { x: 1, y: 13000 },
  { x: 2, y: 16500 },
  { x: 3, y: 14250 },
  { x: 4, y: 19000 },
  { x: 5, y: 13000 },
  { x: 6, y: 16500 },
  { x: 7, y: 14250 },
  { x: 8, y: 30000 },
];

export function Chart(): ReactElement {
  return (
    <Container>
      <svg style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="blue" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryChart>
        <VictoryArea
          interpolation="natural"
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: { fill: "url(#myGradient)" },
          }}
          data={sampleData}
        />
      </VictoryChart>
    </Container>
  );
}
