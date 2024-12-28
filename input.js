function performOperation() {
    // Retrieve input values
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return;
    }

    // Perform a basic operation (addition)
    const result = num1 + num2;

    // Display the result
    document.getElementById('output').innerText = `The result of adding ${num1} and ${num2} is ${result}.`;

    // Show an alert
    alert(`Calculation complete! Result: ${result}`);
}