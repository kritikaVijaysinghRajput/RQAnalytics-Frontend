import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const GeographicalDistribution = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/geographical-distribution`)
      .then((response) => {
        const data = response.data;

        // Process the data
        const labels = data.map((item) => item._id); // City names
        const counts = data.map((item) => item.customerCount); // Customer counts

        // Set chart data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Customer Distribution",
              data: counts,
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#FF6384",
              ],
              hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
                "#FF6384",
              ],
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
      <div style={{ width: "600px", height: "600px" }}>
        <h2 className="text-lg font-semibold" style={{ textAlign: "center" }}>
          Geographical Distribution
        </h2>
        {chartData && <Pie data={chartData} height={600} width={600} />}
      </div>
    </div>
  );
};

export default GeographicalDistribution;
