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

const NewCustomers = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/new-customers`)
      .then((response) => {
        const data = response.data;

        const labels = data.map((item) => item._id);
        const newCustomers = data.map((item) => item.newCustomers);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "New Customers",
              data: newCustomers,
              backgroundColor: "#FFCE56",
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
    <div style={{ display: "flex", justifyContent: "center", margin: "52px" }}>
      <div style={{ width: "1000px", height: "500px" }}>
        <h2 className="text-lg font-semibold" style={{ textAlign: "center" }}>
          New Customers Added
        </h2>
        {chartData && <Bar data={chartData} />}
      </div>
    </div>
  );
};

export default NewCustomers;
