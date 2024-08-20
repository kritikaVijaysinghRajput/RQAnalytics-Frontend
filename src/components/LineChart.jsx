import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const LineChartComponent = () => {
  return <Line data={chartData} options={chartOptions} />;
};

export default LineChartComponent;
