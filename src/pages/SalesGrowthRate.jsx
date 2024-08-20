import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesGrowthRate = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rqanalytics-backend.onrender.com/api/sales-growth-rate`)
      .then((response) => {
        const data = response.data;

        const labels = data.map((item) => item._id);
        const growthRates = data.map((item) => item.growthRate);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Sales Growth Rate",
              data: growthRates,
              backgroundColor: "#36A2EB",
            },
          ],
        });

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ textAlign: "center", margin: "52px" }}>
      <h2 className="text-lg font-semibold">Sales Growth Rate</h2>
      <div
        style={{ display: "inline-block", width: "1000px", height: "500px" }}
      >
        {chartData && <Bar data={chartData} />}
      </div>
    </div>
  );
};

export default SalesGrowthRate;
