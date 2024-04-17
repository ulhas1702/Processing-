// Get references to elements
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const circleCountSelect = document.getElementById('circleCount');

// Initialize current step
let currentStep = 1;

// Event listener for dropdown change
circleCountSelect.addEventListener('change', function() {
    const count = parseInt(this.value);
    createCircles(count);
});

// Event listener for next button click
nextButton.addEventListener("click", () => {
    // Validate current step
    if (validateStep(currentStep)) {
        currentStep++;
        update();
    }
});

// Event listener for previous button click
prevButton.addEventListener("click", () => {
    currentStep--;
    update();
});

// Function to create circles based on count
function createCircles(count) {
    progressContainer.innerHTML = ''; // Clear existing circles
    
    for (let i = 1; i <= count; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.textContent = i;
        progressContainer.appendChild(circle);
    }
    
    // Reset current step to 1
    currentStep = 1;
    update();
}

// Function to update UI based on current step
function update() {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, idx) => {
        if (idx < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    
    // Disable previous button if current step is 1, otherwise enable it
    prevButton.disabled = currentStep === 1;
    
    // Disable next button if current step is equal to the total number of circles, otherwise enable it
    nextButton.disabled = currentStep === circles.length;
}

// Function to validate step
function validateStep(step) {
    // Example validation logic
    if (step === 1) {
        // Perform validation for step 1
        return true; // Return true if step is valid
    } else if (step === 2) {
        // Perform validation for step 2
        return true; // Return true if step is valid
    }
    // Add more validation logic for other steps as needed
}
