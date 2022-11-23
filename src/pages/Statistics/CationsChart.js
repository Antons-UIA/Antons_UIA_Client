import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const CationsChart = () => {
  const data = [{ name: "Cations", Na: 120, Lactate: 1.35, K: 5 }];

  return (
    <BarChart width={250} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="Na" stackId="a" fill="#8884d8" />
      <Bar dataKey="Lactate" stackId="a" fill="#fa7445" />
      <Bar dataKey="K" stackId="a" fill="#82ca77" />
    </BarChart>
  );
};

export default CationsChart;
