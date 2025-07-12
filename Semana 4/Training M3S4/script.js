
// Logic for interactive form with Local Storage and Session Storage

// DOM element selection
const form = document.getElementById('userForm');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const outputDiv = document.getElementById('output');
const counterDiv = document.getElementById('counter');
const feedbackDiv = document.getElementById('feedback');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');

// Event to save data in Local Storage
saveButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('Form elements do not exist');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // Additional validations
    if (!name || !ageInput.value) {
        alert('Please complete both fields');
        return;
    }
    if (isNaN(age) || age <= 0) {
        alert('Age must be a positive number');
        return;
    }
    if (age < 1 || age > 120) {
        alert('Please enter a realistic age (between 1 and 120 years)');
        return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
    displayData();
    showFeedback('Data saved successfully.', false);
    updateInteractionCount();
    // Log to console for validation
    console.log(`Saved data: Name = ${name}, Age = ${age}`);
    // Clear input fields after saving
    nameInput.value = '';
    ageInput.value = '';
    nameInput.style.borderColor = '#e0e0e0';
    ageInput.style.borderColor = '#e0e0e0';
});

// Function to display stored data
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if (name && age) {
        outputDiv.textContent = `Hello ${name} 👋🏻, you are ${age} years old.`;
        // Log to console for validation
        console.log(`Loaded data: Name = ${name}, Age = ${age}`);
    } else {
        outputDiv.textContent = 'No data stored.';
        // Log to console for validation
        console.log('No data stored.');
    }
}

// Session Storage interaction counter
function updateInteractionCount(init = false) {
    // Initialize if it doesn't exist
    if (!sessionStorage.getItem('interactionCount') || init) {
        sessionStorage.setItem('interactionCount', '0');
    }
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    if (!init) {
        count++;
        sessionStorage.setItem('interactionCount', count);
    }
    counterDiv.textContent = `Interactions this session: ${count}`;
}

// Clear Local Storage data
clearButton.addEventListener('click', () => {
    localStorage.clear();
    displayData();
    showFeedback('Data cleared', false);
    updateInteractionCount();
    // Log to console for validation
    console.log('All data cleared from Local Storage.');
    // Clear input fields after clearing
    nameInput.value = '';
    ageInput.value = '';
    nameInput.style.borderColor = '#e0e0e0';
    ageInput.style.borderColor = '#e0e0e0';
});

// Show feedback to the user
function showFeedback(message, isError = true) {
    feedbackDiv.textContent = message;
    feedbackDiv.style.color = isError ? '#e57373' : '#51cf66';
    setTimeout(() => {
        feedbackDiv.textContent = '';
    }, 2000);
}

// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length < 2) {
        nameInput.style.borderColor = '#e57373';
        showFeedback('Name must have at least 2 letters.');
    } else {
        nameInput.style.borderColor = '#a5a1f7';
        showFeedback('Valid name.', false);
    }
});
ageInput.addEventListener('input', () => {
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age <= 0) {
        ageInput.style.borderColor = '#e57373';
        showFeedback('Age must be a positive number.');
    } else if (age < 1 || age > 120) {
        ageInput.style.borderColor = '#e57373';
        showFeedback('Please enter a realistic age (between 1 and 120 years).');
    } else {
        ageInput.style.borderColor = '#a5a1f7';
        showFeedback('Valid age.', false);
    }
});

// Prevent default form submit
form.addEventListener('submit', (e) => e.preventDefault());

// Initialization on page load
window.onload = () => {
    displayData();
    updateInteractionCount(true);
}; 