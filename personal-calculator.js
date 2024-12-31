// Constants for emission factors
const electricityEmissionFactor = 0.92; // kg CO2e per kWh
const vehicleEmissionFactors = { car: 0.21, bus: 0.1, bike: 0, walking: 0 };
const dietEmissionFactors = { omnivore: 2200, vegetarian: 1600, vegan: 1200 };
const landfillEmissionFactor = 0.3; // kg CO2e per kg waste

// Function to calculate personal carbon footprint
function calculatePersonalFootprint() {
    // Get user inputs
    const monthly_kWh = parseFloat(document.getElementById("monthly_kWh").value) || 0;
    const weekly_commute_distance = parseFloat(document.getElementById("weekly_commute_distance").value) || 0;
    const vehicle_type = document.getElementById("vehicle_type").value;
    const diet_type = document.getElementById("diet_type").value;
    const monthlyWaste = parseFloat(document.getElementById("monthlyWaste").value) || 0;

    // Calculations
    const electricityEmissions = monthly_kWh * electricityEmissionFactor * 12; // Annual electricity emissions
    const commuteEmissions = weekly_commute_distance * vehicleEmissionFactors[vehicle_type] * 52; // Annual commute emissions
    const dietEmissions = dietEmissionFactors[diet_type]; // Annual diet emissions
    const wasteEmissions = monthlyWaste * landfillEmissionFactor * 12; // Annual waste emissions

    // Total Carbon Footprint
    const totalPersonalCarbonFootprint = electricityEmissions + commuteEmissions + dietEmissions + wasteEmissions;

    // Display the result
    const resultElement = document.getElementById("personalResult");
    resultElement.innerText = `Your annual carbon footprint is ${totalPersonalCarbonFootprint.toFixed(2)} kg CO2e.`;
}
