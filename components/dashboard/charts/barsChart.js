import React, { Component } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class BarsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Sales",
          data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
        },
      ],
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          style: {
            fontSize: "10px",
            fontFamily: "Plus Jakarta Display",
          },
          onDatasetHover: {
            style: {
              fontSize: "10px",
              fontFamily: "Plus Jakarta Display",
            },
          },
          theme: "dark",
        },
        xaxis: {
          categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          show: false,
          labels: {
            show: false,
            style: {
              colors: "#fff",
              fontSize: "10px",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
          color: "#fff",
          labels: {
            show: true,
            style: {
              colors: "#fff",
              fontSize: "10px",
              fontFamily: "Plus Jakarta Display",
            },
          },
        },
        grid: {
          show: false,
        },
        fill: {
          colors: "#fff",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            borderRadius: 8,
            columnWidth: "12px",
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              plotOptions: {
                bar: {
                  borderRadius: 0,
                },
              },
            },
          },
        ],
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={150}
        />
      </div>
    );
  }
}

export default BarsChart;
