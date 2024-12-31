// Questions Bank
const questionsBank = {
    transportation: [
        { question: "What type of vehicle produces the least carbon emissions?", options: ["Electric car", "Diesel car", "Petrol car", "Hybrid car"], answer: 0 },
        { question: "Which mode of transport has the smallest carbon footprint?", options: ["Carpooling", "Walking", "Flying", "Driving alone"], answer: 1 },
        { question: "What fuel is considered renewable?", options: ["Gasoline", "Biodiesel", "Coal", "Diesel"], answer: 1 },
        { question: "How can you reduce your commute emissions?", options: ["Drive alone", "Carpool", "Buy a new car", "Fly"], answer: 1 },
        { question: "Which is the most eco-friendly public transport?", options: ["Train", "Bus", "Taxi", "Plane"], answer: 0 },
        { question: "What is the benefit of cycling to work?", options: ["No emissions", "Fast", "Expensive", "Limited routes"], answer: 0 },
        { question: "Which contributes the most emissions?", options: ["Electric cars", "Hybrid cars", "Diesel cars", "Gasoline cars"], answer: 3 },
        { question: "What helps cut fuel usage?", options: ["Regular maintenance", "Aggressive driving", "High speeds", "Overloaded car"], answer: 0 },
        { question: "Which material is recyclable in cars?", options: ["Steel", "Rubber", "Plastic", "Leather"], answer: 0 },
        { question: "Which transport is worst for the environment?", options: ["Plane", "Train", "Carpool", "Bike"], answer: 0 },
    ],
    energy: [
        { question: "What is the cleanest source of energy?", options: ["Coal", "Natural Gas", "Solar", "Oil"], answer: 2 },
        { question: "What is an energy-efficient lighting option?", options: ["Incandescent bulb", "Halogen bulb", "LED bulb", "Fluorescent bulb"], answer: 2 },
        { question: "What is a renewable source of energy?", options: ["Wind", "Gasoline", "Coal", "Natural Gas"], answer: 0 },
        { question: "What appliance uses the most energy at home?", options: ["TV", "Refrigerator", "Fan", "Microwave"], answer: 1 },
        { question: "Which energy-saving tip is most effective?", options: ["Use LEDs", "Leave appliances on", "Open fridge often", "High water heater temp"], answer: 0 },
        { question: "What is the primary benefit of solar energy?", options: ["Low cost", "Zero emissions", "Unreliable", "Rare"], answer: 1 },
        { question: "What improves home insulation?", options: ["Open windows", "Thick curtains", "Thin walls", "No roofing"], answer: 1 },
        { question: "What is a fossil fuel?", options: ["Coal", "Solar", "Wind", "Geothermal"], answer: 0 },
        { question: "What does an energy audit do?", options: ["Saves money", "Uses more energy", "No benefits", "Raises bills"], answer: 0 },
        { question: "What can replace traditional electricity?", options: ["Renewables", "Gasoline", "Nuclear weapons", "Coal"], answer: 0 },
    ],
    food: [
        { question: "Which diet has the smallest carbon footprint?", options: ["Vegetarian", "Vegan", "Meat-based", "Pescatarian"], answer: 1 },
        { question: "What food produces the most carbon emissions?", options: ["Beef", "Pork", "Chicken", "Fish"], answer: 0 },
        { question: "What is a sustainable way to consume food?", options: ["Locally-sourced", "Imported", "Processed", "Canned"], answer: 0 },
        { question: "What is the best way to reduce food waste?", options: ["Compost leftovers", "Throw away food", "Overcook", "Overbuy"], answer: 0 },
        { question: "Which uses the least water to produce?", options: ["Lentils", "Beef", "Almonds", "Milk"], answer: 0 },
        { question: "What type of food packaging is most eco-friendly?", options: ["Plastic", "Glass", "Metal cans", "Paper"], answer: 3 },
        { question: "What type of farming produces fewer emissions?", options: ["Organic farming", "Industrial farming", "Factory farming", "Genetic farming"], answer: 0 },
        { question: "What is a benefit of eating seasonal produce?", options: ["Lower emissions", "Expensive", "More waste", "Lower quality"], answer: 0 },
        { question: "How can you preserve food longer?", options: ["Proper storage", "Leave exposed", "Open containers", "Freeze everything"], answer: 0 },
        { question: "What type of fish is most sustainable?", options: ["Wild-caught", "Overfished species", "Farmed fish", "Non-local fish"], answer: 2 },
    ]
};

// Event Listeners for Quiz Category Buttons
document.querySelectorAll(".quizCategory").forEach((button) => {
    button.addEventListener("click", function () {
        const category = this.dataset.category;
        loadQuiz(category);
    });
});

// Load Quiz
function loadQuiz(category) {
    const questions = questionsBank[category];
    const quizContainer = document.getElementById("quizContainer");
    const questionsDiv = document.getElementById("questions");

    document.getElementById("quizTitle").textContent = `Quiz: ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    quizContainer.style.display = "block";
    questionsDiv.innerHTML = "";

    // Always Select the First 10 Questions
    questions.slice(0, 10).forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionElement.appendChild(questionText);

        q.options.forEach((option, i) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="question-${index}" value="${i}"> ${option}`;
            questionElement.appendChild(label);
        });

        questionsDiv.appendChild(questionElement);
    });

    document.getElementById("submitQuiz").style.display = "inline-block";

    document.getElementById("submitQuiz").onclick = function () {
        const answers = Array.from(questionsDiv.querySelectorAll("input:checked")).map(input => parseInt(input.value, 10));
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].answer) score++;
        });

        document.getElementById("quizResult").style.display = "block";
        document.getElementById("quizResult").textContent = `You scored ${score} out of 10!`;
    };
}
