const totalSteps = 6;
const progressBar = document.getElementById("progressbar");
const ingredientBtn = document.getElementById("toggleIngredients");
const ingredientsList = document.getElementById("ingredients");
const steps = document.querySelectorAll(".steps li");
const toggleBtn = document.getElementById("toggleSteps");
const stepsContainer = document.getElementById("steps");

ingredientBtn.addEventListener("click", () => {
    ingredientsList.classList.toggle("hidden");

    if (ingredientsList.classList.contains("hidden")) {
        ingredientBtn.innerText = "Show Ingredients";
    } else {
        ingredientBtn.innerText = "Hide Ingredients";
    }
});



// Show steps on button click
toggleBtn.addEventListener("click", () => {
    stepsContainer.classList.toggle("hidden");

    if (stepsContainer.classList.contains("hidden")) {
        toggleBtn.innerText = "Show Preparation Steps";
        progressBar.style.width = "0%";
        steps.forEach(step => step.classList.remove("active"));
    } else {
        toggleBtn.innerText = "Hide Preparation Steps";
    }
});

// Progress bar on hover
steps.forEach((step, index) => {
    step.addEventListener("mouseenter", () => {
        updateProgress(index + 1);
    });
});

function updateProgress(stepNumber) {
    const progressPercent = (stepNumber / totalSteps) * 100;
    progressBar.style.width = progressPercent + "%";

    steps.forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
}
