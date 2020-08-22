import React, { useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import Barcode from "react-barcode";
import QRCode from "react-qr-code";

import './App.css';

const App = () => {

  const [chartData] = useState({
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر"],
    datasets: [
      {
        label: "بارش باران",
        backgroundColor: "orange",
        border: "black",
        borderWidth: 2,
        data: [50, 75, 60, 90],
      },
      {
        label: "بارش باران",
        backgroundColor: "red",
        border: "black",
        borderWidth: 2,
        data: [40, 70, 70, 150],
      },
    ],
  });

  const [lineChartData] = useState({
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر"],
    datasets: [
      {
        label: "بارش باران",
        fill: true,
        backgroundColor: "orange",
        border: "black",
        borderWidth: 2,
        data: [50, 75, 60, 90],
      },
      {
        label: "بارش باران",
        fill: true,
        backgroundColor: "green",
        border: "black",
        borderWidth: 2,
        data: [45, 80, 70, 20],
      },
    ],
  });

  const [pieChartData] = useState({
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر"],
    datasets: [
      {
        label: "بارش باران",
        fill: false,
        backgroundColor: ["orange", "red", "green", "#edca05"],
        hoverBackgroundColor: "#05caed",
        border: "black",
        borderWidth: 2,
        data: [50, 75, 60, 90],
      },
      {
        label: "بارش باران",
        fill: false,
        backgroundColor: ["orange", "red", "green", "#edca05"],
        hoverBackgroundColor: "#05caed",
        border: "black",
        borderWidth: 2,
        data: [45, 80, 70, 20],
      },
      {
        label: "بارش باران",
        fill: false,
        backgroundColor: ["orange", "red", "green", "#edca05"],
        hoverBackgroundColor: "#05caed",
        border: "black",
        borderWidth: 2,
        data: [],
      },
    ],
  });

  return (
    <div className="App">
      <Barcode
        value="some data"
        text="this barcode"
        fontSize="15px"
        width="1px"
        height="35px"
      />
      <QRCode value="some data by QR" bgColor="white" fgColor="#05caed" size={150} />
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "بارش",
            fontSize: 20,
            fontStyle: "bold",
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
      <Line
        data={lineChartData}
        options={{
          title: {
            display: true,
            text: "بارش",
            fontSize: 20,
            fontStyle: "bold",
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
      <Pie
        data={pieChartData}
        options={{
          title: {
            display: true,
            text: "بارش",
            fontSize: 20,
            fontStyle: "bold",
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default App;
