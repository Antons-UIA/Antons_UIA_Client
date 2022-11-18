import React from "react";
import Paper from "@mui/material/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Stack, Animation } from "@devexpress/dx-react-chart";

const cationsData = [
  {
    state: "Cations",
    Na: 120,
    Lactate: 1.35,
    K: 5,
  },
];

const anionsData = [
  {
    state: "Anions",
    Cl: 100,
    Lactate: 1.35,
    Phos: 30,
    Prot: 25,
    HCO3: 24,
    UnmeasuredAnions: 20,
  },
];

const Root = (props) => (
  <Legend.Root
    {...props}
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      margin: "auto",
    }}
  />
);

const Statistics = () => {
  return (
    <div className="px-8 py-4">
      <h1 className="text-3xl font-bold text-[#6B40F9]">Statistics</h1>
      <div className="flex">
        <div>
          <Chart data={cationsData}>
            <ArgumentAxis />
            <ValueAxis />

            <BarSeries name="Na" valueField="Na" argumentField="state" />
            <BarSeries
              name="Lactate"
              valueField="Lactate"
              argumentField="state"
            />
            <BarSeries name="K" valueField="K" argumentField="state" />
            <Animation />
            <Legend position="bottom" rootComponent={Root} />
            <Title text="Cations" />
            <Stack stacks={[{ series: ["Na", "Lactate", "K"] }]} />
          </Chart>
        </div>
        <div>
          <Chart data={anionsData}>
            <ArgumentAxis />
            <ValueAxis />
            <BarSeries name="Cl" valueField="Cl" argumentField="state" />
            <BarSeries
              name="Lactate"
              valueField="Lactate"
              argumentField="state"
            />
            <BarSeries name="Phos" valueField="Phos" argumentField="state" />
            <BarSeries name="Prot" valueField="Prot" argumentField="state" />
            <BarSeries name="HCO3" valueField="HCO3" argumentField="state" />
            <BarSeries
              name="Unmeasured Anions"
              valueField="UnmeasuredAnions"
              argumentField="state"
            />
            <Animation />
            <Legend position="bottom" rootComponent={Root} />
            <Title text="Anions" />
            <Stack
              stacks={[
                {
                  series: [
                    "Cl",
                    "Lactate",
                    "Phos",
                    "Prot",
                    "HCO3",
                    "Unmeasured Anions",
                  ],
                },
              ]}
            />
          </Chart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
