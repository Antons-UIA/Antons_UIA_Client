import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const AnionsChart = () => {
  const data = [
    {
      name: "Anions",
      Cl: 100,
      Lactate: 1.35,
      Phos: 30,
      Prot: 25,
      HCO3: 24,
      UnmeasuredAnions: 20,
    },
  ];

  return (
    <BarChart width={250} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="Cl" stackId="a" fill="#8884d8" />
      <Bar dataKey="Lactate" stackId="a" fill="#82ca9d" />
      <Bar dataKey="Phos" stackId="a" fill="#82ca77" />
      <Bar dataKey="Prot" stackId="a" fill="#00ffff" />
      <Bar dataKey="HCO3" stackId="a" fill="#1b4d3e" />
      <Bar dataKey="UnmeasuredAnions" stackId="a" fill="#c3e8de" />
    </BarChart>
  );
};

export default AnionsChart;
