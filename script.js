// Adding an event listener to the check button
const button = document.getElementById("check-btn");

button.addEventListener("click", function() {
    const inputText = document.getElementById('text-input').value.trim(); // Get input and trim leading/trailing spaces
    const resultDiv = document.getElementById('result');
    
    // Check if input is empty
    if (inputText === "") {
        alert("Please input a value");
        return;
    }
    
    // Sanitize input: remove non-alphanumeric characters and convert to lowercase
    const sanitizedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if the sanitized text is a palindrome
    if (sanitizedText === sanitizedText.split('').reverse().join('')) {
        resultDiv.innerHTML = `${inputText} is a palindrome`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `${inputText} is not a palindrome`;
        resultDiv.style.color = "red";
    }
});

