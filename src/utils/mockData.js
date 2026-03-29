export const calculateTotalCost = (destination) => {
  // Simple mock: Flights are $600, Hotel $120/nt, Food $50/day for 5 days
  const flight = 600;
  const hotel = 120 * 5;
  const daily = 50 * 5;
  return flight + hotel + daily; // Total: $1450
};