import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class Splinechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mobile apps",
          data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
        },
        {
          name: "Websites",
          data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#c8cfca",
              fontSize: "10px",
            },
          },
        },
        legend: {
          show: false,
        },
        grid: {
          strokeDashArray: 5,
          borderColor: "#56577A",
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
          },
          colors: ["#04c3e6", "#daba01"],
        },
        colors: ["#04c3e6", "#daba01"],
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={200}
        />
      </div>
    );
  }
}

export default Splinechart;
