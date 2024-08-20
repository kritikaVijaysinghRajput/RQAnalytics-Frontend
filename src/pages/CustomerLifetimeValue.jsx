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

// Register necessary components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CustomerLifetimeValue = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/customer-lifetime-value`)
      .then((response) => {
        const data = response.data;

        const labels = data.map((item) => item._id);
        const values = data.map((item) => item.avgLifetimeValue);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Customer Lifetime Value",
              data: values,
              backgroundColor: "#FF9F40",
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "52px",
      }}
    >
      <h2 className="text-lg font-semibold">Customer Lifetime Value</h2>
      <div style={{ width: "80%", maxWidth: "1000px", height: "500px" }}>
        {chartData && <Bar data={chartData} />}
      </div>
    </div>
  );
};

export default CustomerLifetimeValue;
