// Variables to track state
let currentStage = 0;
let totalImpact = 0;

// Stages
const stages = ["morningChoices", "afternoonChoices", "eveningChoices"];
const totalStages = stages.length;

// Initialize Event Listeners
document.querySelectorAll(".choiceButton").forEach((button) => {
    button.addEventListener("click", function () {
        const impact = parseInt(this.dataset.impact, 10);
        totalImpact += impact;

        // Move to next stage
        document.getElementById(stages[currentStage]).style.display = "none";
        currentStage++;

        if (currentStage < totalStages) {
            document.getElementById(stages[currentStage]).style.display = "block";
        } else {
            displayResults();
        }
    });
});

// Display Results
function displayResults() {
    const resultMessage = document.getElementById("resultMessage");

    if (totalImpact <= 3) {
        resultMessage.textContent = "Great job! Your carbon footprint is very low today.";
    } else if (totalImpact <= 6) {
        resultMessage.textContent = "Good effort! You made some eco-friendly choices.";
    } else {
        resultMessage.textContent = "Your carbon footprint is high. Try making greener choices next time!";
    }

    document.getElementById("scenarioResult").style.display = "block";
}

// Restart Scenario
document.getElementById("restartScenario").addEventListener("click", function () {
    currentStage = 0;
    totalImpact = 0;

    // Hide result and reset to first stage
    document.getElementById("scenarioResult").style.display = "none";
    document.getElementById(stages[0]).style.display = "block";
});
