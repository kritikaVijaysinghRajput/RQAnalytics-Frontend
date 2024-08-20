import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const SalesOverTime = () => {
  const [dailyData, setDailyData] = useState(null);
  const [monthlyData, setMonthlyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dailyResponse, monthlyResponse] = await Promise.all([
          axios.get(
            "https://rqanalytics-backend.onrender.com/api/sales-over-time?interval=daily"
          ),
          axios.get(
            "https://rqanalytics-backend.onrender.com/api/sales-over-time?interval=monthly"
          ),
        ]);

        const dailyLabels = dailyResponse.data.map((item) => item._id);
        const dailySales = dailyResponse.data.map((item) => item.totalSales);

        const monthlyLabels = monthlyResponse.data.map((item) => item._id);
        const monthlySales = monthlyResponse.data.map(
          (item) => item.totalSales
        );

        setDailyData({
          labels: dailyLabels,
          datasets: [
            {
              label: "Daily Sales",
              data: dailySales,
              borderColor: "#FF6384",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              fill: true,
            },
          ],
        });

        setMonthlyData({
          labels: monthlyLabels,
          datasets: [
            {
              label: "Monthly Sales",
              data: monthlySales,
              borderColor: "#36A2EB",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              fill: true,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-lg font-semibold">Sales Over Time</h2>
      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        {dailyData && <Line data={dailyData} height={200} width={300} />}
      </div>
      <div style={{ margin: "0 auto", maxWidth: "800px" }}>
        <h3 className="text-lg font-semibold">Monthly Sales</h3>
        {monthlyData && <Line data={monthlyData} height={200} width={300} />}
      </div>
    </div>
  );
};

export default SalesOverTime;
