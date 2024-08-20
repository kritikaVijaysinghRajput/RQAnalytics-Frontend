import React, { useState } from "react";
import TotalSalesOverTime from "../pages/SalesOverTime";
import SalesGrowthRateOverTime from "../pages/SalesGrowthRate";
import NewCustomersAddedOverTime from "../pages/NewCustomers";
import RepeatCustomersOverTime from "../pages/RepeatCustomers";
import GeographicalDistribution from "../pages/GeographicalDistribution";
import CustomerLifetimeValueByCohorts from "../pages/CustomerLifetimeValue";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("TotalSalesOverTime");

  const renderContent = () => {
    switch (selectedPage) {
      case "TotalSalesOverTime":
        return <TotalSalesOverTime />;
      case "SalesGrowthRateOverTime":
        return <SalesGrowthRateOverTime />;
      case "NewCustomersAddedOverTime":
        return <NewCustomersAddedOverTime />;
      case "RepeatCustomersOverTime":
        return <RepeatCustomersOverTime />;
      case "GeographicalDistribution":
        return <GeographicalDistribution />;
      case "CustomerLifetimeValueByCohorts":
        return <CustomerLifetimeValueByCohorts />;
      default:
        return <TotalSalesOverTime />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-72 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <button
              className={`w-full text-left font-semibold py-2 px-4 rounded-md ${
                selectedPage === "TotalSalesOverTime"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("TotalSalesOverTime")}
            >
              Total Sales Over Time
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 font-semibold rounded-md ${
                selectedPage === "SalesGrowthRateOverTime"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("SalesGrowthRateOverTime")}
            >
              Sales Growth Rate Over Time
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 font-semibold rounded-md ${
                selectedPage === "NewCustomersAddedOverTime"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("NewCustomersAddedOverTime")}
            >
              New Customers Added Over Time
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 px-4 font-semibold rounded-md ${
                selectedPage === "RepeatCustomersOverTime"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("RepeatCustomersOverTime")}
            >
              Repeat Customers Over Time
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 font-semibold px-4 rounded-md ${
                selectedPage === "GeographicalDistribution"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("GeographicalDistribution")}
            >
              Geographical Distribution
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left py-2 font-semibold px-4 rounded-md ${
                selectedPage === "CustomerLifetimeValueByCohorts"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPage("CustomerLifetimeValueByCohorts")}
            >
              Customer Lifetime Value by Cohorts
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-grow p-8 bg-gray-100 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
