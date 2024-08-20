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

const RepeatCustomers = ({ interval = "monthly" }) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://rqanalytics-backend.onrender.com/api/repeat-customers?interval=${interval}`
      )
      .then((response) => {
        const data = response.data;

        const labels = data.map((item) => (item._id ? item._id : "one"));
        const counts = data.map((item) => item.repeatCustomers);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: `Repeat Customers (${interval})`,
              data: counts,
              backgroundColor: "#4BC0C0",
            },
          ],
        });

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [interval]);

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
      <h2 className="text-lg font-semibold">Repeat Customers ({interval})</h2>
      <div style={{ width: "1000px", height: "500px" }}>
        {chartData && <Bar data={chartData} />}
      </div>
    </div>
  );
};

export default RepeatCustomers;
