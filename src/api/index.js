const API_URL = "http://localhost:5000/api";

export const fetchSalesOverTime = async () => {
  const response = await fetch(`${API_URL}/sales/over-time`);
  return response.json();
};

export const fetchSalesGrowthRate = async (interval) => {
  const response = await fetch(
    `${API_URL}/sales/growth-rate?interval=${interval}`
  );
  return response.json();
};

export const fetchNewCustomers = async () => {
  const response = await fetch(`${API_URL}/customers/new-customers`);
  return response.json();
};

export const fetchRepeatCustomers = async (interval) => {
  const response = await fetch(
    `${API_URL}/customers/repeat?interval=${interval}`
  );
  return response.json();
};

export const fetchGeographicalDistribution = async () => {
  const response = await fetch(`${API_URL}/sales/geographical-distribution`);
  return response.json();
};

export const fetchCustomerLifetimeValue = async () => {
  const response = await fetch(`${API_URL}/customers/lifetime-value`);
  return response.json();
};
