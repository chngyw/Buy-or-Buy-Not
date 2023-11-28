// Store the user's answers
const userAnswers = {};

// Function to handle user's answer for each question
function answerQuestion(answer, questionNumber) {
    // Store the user's answer
    userAnswers[`question${questionNumber}`] = answer;
}

// Function to handle form submission
function submitForm() {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Count the number of 'yes' responses in userAnswers
    var yesCount = Object.values(userAnswers).filter(answer => answer === 'yes').length;

    if (yesCount >= 3) {
        resultsDiv.innerHTML = '<p>Please proceed and spend that moolah! Enjoy your purchase and the thoughtful investment in your own happiness! </p>';
        resultsDiv.style.backgroundColor = '#00B8A9';
    } else {
        resultsDiv.innerHTML = '<p>While the temptation to buy may be strong, consider holding off for now. Taking a moment to reconsider can lead to more thoughtful and fulfilling choices in the long run.</p>';
        resultsDiv.style.backgroundColor = '#FF9292';
    }

    // Make the result box visible
    resultsDiv.style.display = 'block';
}

