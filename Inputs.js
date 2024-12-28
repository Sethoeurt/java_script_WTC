// Select the input, button, and display elements
const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('btnSubmit');
const displayText = document.getElementById('displayText');

// Add an event listener to the button
submitButton.addEventListener('click', () => {
    // Get the value of the input field
    const inputValue = inputField.value;

    // Display the value in the paragraph
    displayText.textContent = `You entered: ${inputValue}`;

    // Optional: Log the value to the console
    console.log(`User Input: ${inputValue}`);
});
