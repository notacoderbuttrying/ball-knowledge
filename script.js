document.addEventListener('DOMContentLoaded', () => {
    // Category buttons
    const nflBtn = document.getElementById('nflBtn');
    const collegeFootballBtn = document.getElementById('collegeFootballBtn');
    const nbaBtn = document.getElementById('nbaBtn');
    const nhlBtn = document.getElementById('nhlBtn');
    const collegeBasketballBtn = document.getElementById('collegeBasketballBtn');
    const soccerBtn = document.getElementById('soccerBtn');
    const randomBtn = document.getElementById('randomBtn');
    const golfBtn = document.getElementById('golfBtn'); // Added Golf button

    // Quiz sections
    const nflQuiz = document.getElementById('nflQuiz');
    const collegeFootballQuiz = document.getElementById('collegeFootballQuiz');
    const nbaQuiz = document.getElementById('nbaQuiz');
    const nhlQuiz = document.getElementById('nhlQuiz');
    const collegeBasketballQuiz = document.getElementById('collegeBasketballQuiz');
    const soccerQuiz = document.getElementById('soccerQuiz');
    const randomQuiz = document.getElementById('randomQuiz');
    const golfQuiz = document.getElementById('golfQuiz'); // Added Golf quiz

    // Question containers
    const nflQuestionsDiv = document.getElementById('nflQuestions');
    const collegeFootballQuestionsDiv = document.getElementById('collegeFootballQuestions');
    const nbaQuestionsDiv = document.getElementById('nbaQuestions');
    const nhlQuestionsDiv = document.getElementById('nhlQuestions');
    const collegeBasketballQuestionsDiv = document.getElementById('collegeBasketballQuestions');
    const soccerQuestionsDiv = document.getElementById('soccerQuestions');
    const randomQuestionsDiv = document.getElementById('randomQuestions');
    const golfQuestionsDiv = document.getElementById('golfQuestions'); // Added Golf questions div

    // Submit and reset buttons
    const submitNflBtn = document.getElementById('submitNfl');
    const submitCollegeFootballBtn = document.getElementById('submitCollegeFootball');
    const submitNbaBtn = document.getElementById('submitNba');
    const submitNhlBtn = document.getElementById('submitNhl');
    const submitCollegeBasketballBtn = document.getElementById('submitCollegeBasketball');
    const submitSoccerBtn = document.getElementById('submitSoccer');
    const submitRandomBtn = document.getElementById('submitRandom');
    const submitGolfBtn = document.getElementById('submitGolf'); // Added Golf submit button

    const resetNflBtn = document.getElementById('resetNfl');
    const resetCollegeFootballBtn = document.getElementById('resetCollegeFootball');
    const resetNbaBtn = document.getElementById('resetNba');
    const resetNhlBtn = document.getElementById('resetNhl');
    const resetCollegeBasketballBtn = document.getElementById('resetCollegeBasketball');
    const resetSoccerBtn = document.getElementById('resetSoccer');
    const resetRandomBtn = document.getElementById('resetRandom');
    const resetGolfBtn = document.getElementById('resetGolf'); // Added Golf reset button

    // Calculate the day of the year for question rotation
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    // Function to hide all quizzes
    const hideAllQuizzes = () => {
        nflQuiz.style.display = 'none';
        collegeFootballQuiz.style.display = 'none';
        nbaQuiz.style.display = 'none';
        nhlQuiz.style.display = 'none';
        collegeBasketballQuiz.style.display = 'none';
        soccerQuiz.style.display = 'none';
        randomQuiz.style.display = 'none';
        golfQuiz.style.display = 'none'; // Added Golf quiz hide
    };

    // Function to display questions
    const displayQuestions = (category, questionsDiv) => {
        questionsDiv.innerHTML = '';
        const questions = quizData[category];
        if (!questions || questions.length === 0) {
            questionsDiv.innerHTML = `<p>No ${category} questions available. Check back later or add data to questions.js!</p>`;
            return;
        }

        // Select 5 questions based on the day of the year
        const startIndex = (dayOfYear * 5) % questions.length;
        const selectedQuestions = [];
        for (let i = 0; i < 5; i++) {
            const index = (startIndex + i) % questions.length;
            selectedQuestions.push(questions[index]);
        }

        // Display each question with a dropdown
        selectedQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <input list="${category.toLowerCase()}-options-${index}" id="${category.toLowerCase()}-q${index}" class="answer-input">
                <datalist id="${category.toLowerCase()}-options-${index}">
                    ${potentialAnswers[category][index].map(answer => `<option value="${answer}">${answer}</option>`).join('')}
                </datalist>
                <div id="${category.toLowerCase()}-result-${index}" class="result"></div>
            `;
            questionsDiv.appendChild(questionDiv);
        });
    };

    // Function to check answers and show Wordle-like feedback
    const checkAnswers = (category, questionsDiv) => {
        const questions = quizData[category];
        if (!questions || questions.length === 0) {
            alert(`Checking answers for ${category} - No data available to check yet. Add questions.js with quiz data!`);
            return;
        }

        const startIndex = (dayOfYear * 5) % questions.length;
        let correctCount = 0;

        for (let i = 0; i < 5; i++) {
            const index = (startIndex + i) % questions.length;
            const selectedAnswer = document.getElementById(`${category.toLowerCase()}-q${i}`).value;
            const correctAnswers = questions[index].solutions;
            const resultDiv = document.getElementById(`${category.toLowerCase()}-result-${i}`);

            if (selectedAnswer && correctAnswers.includes(selectedAnswer)) {
                correctCount++;
                resultDiv.innerHTML = `Correct! Answer: ${selectedAnswer}`;
                resultDiv.style.color = '#28a745'; // Green for correct
            } else {
                resultDiv.innerHTML = `Incorrect. Correct answer: ${correctAnswers.join(' or ')}`;
                resultDiv.style.color = '#dc3545'; // Red for incorrect
            }
        }

        alert(`You got ${correctCount}/5 correct for ${category}!`);
    };

    // Function to reset quiz
    const resetQuiz = (category, questionsDiv) => {
        displayQuestions(category, questionsDiv);
    };

    // Event listeners for category buttons
    nflBtn.addEventListener('click', () => {
        hideAllQuizzes();
        nflQuiz.style.display = 'block';
        displayQuestions('NFL', nflQuestionsDiv);
    });

    collegeFootballBtn.addEventListener('click', () => {
        hideAllQuizzes();
        collegeFootballQuiz.style.display = 'block';
        displayQuestions('CollegeFootball', collegeFootballQuestionsDiv);
    });

    nbaBtn.addEventListener('click', () => {
        hideAllQuizzes();
        nbaQuiz.style.display = 'block';
        displayQuestions('Basketball', nbaQuestionsDiv);
    });

    nhlBtn.addEventListener('click', () => {
        hideAllQuizzes();
        nhlQuiz.style.display = 'block';
        displayQuestions('NHL', nhlQuestionsDiv);
    });

    collegeBasketballBtn.addEventListener('click', () => {
        hideAllQuizzes();
        collegeBasketballQuiz.style.display = 'block';
        displayQuestions('CollegeBasketball', collegeBasketballQuestionsDiv);
    });

    soccerBtn.addEventListener('click', () => {
        hideAllQuizzes();
        soccerQuiz.style.display = 'block';
        displayQuestions('Soccer', soccerQuestionsDiv);
    });

    randomBtn.addEventListener('click', () => {
        hideAllQuizzes();
        randomQuiz.style.display = 'block';
        displayQuestions('Random', randomQuestionsDiv);
    });

    golfBtn.addEventListener('click', () => { // Added Golf button listener
        hideAllQuizzes();
        golfQuiz.style.display = 'block';
        displayQuestions('Golf', golfQuestionsDiv);
    });

    // Event listeners for submit buttons
    submitNflBtn.addEventListener('click', () => checkAnswers('NFL', nflQuestionsDiv));
    submitCollegeFootballBtn.addEventListener('click', () => checkAnswers('CollegeFootball', collegeFootballQuestionsDiv));
    submitNbaBtn.addEventListener('click', () => checkAnswers('Basketball', nbaQuestionsDiv));
    submitNhlBtn.addEventListener('click', () => checkAnswers('NHL', nhlQuestionsDiv));
    submitCollegeBasketballBtn.addEventListener('click', () => checkAnswers('CollegeBasketball', collegeBasketballQuestionsDiv));
    submitSoccerBtn.addEventListener('click', () => checkAnswers('Soccer', soccerQuestionsDiv));
    submitRandomBtn.addEventListener('click', () => checkAnswers('Random', randomQuestionsDiv));
    submitGolfBtn.addEventListener('click', () => checkAnswers('Golf', golfQuestionsDiv)); // Added Golf submit listener

    // Event listeners for reset buttons
    resetNflBtn.addEventListener('click', () => resetQuiz('NFL', nflQuestionsDiv));
    resetCollegeFootballBtn.addEventListener('click', () => resetQuiz('CollegeFootball', collegeFootballQuestionsDiv));
    resetNbaBtn.addEventListener('click', () => resetQuiz('Basketball', nbaQuestionsDiv));
    resetNhlBtn.addEventListener('click', () => resetQuiz('NHL', nhlQuestionsDiv));
    resetCollegeBasketballBtn.addEventListener('click', () => resetQuiz('CollegeBasketball', collegeBasketballQuestionsDiv));
    resetSoccerBtn.addEventListener('click', () => resetQuiz('Soccer', soccerQuestionsDiv));
    resetRandomBtn.addEventListener('click', () => resetQuiz('Random', randomQuestionsDiv));
    resetGolfBtn.addEventListener('click', () => resetQuiz('Golf', golfQuestionsDiv)); // Added Golf reset listener

    // Hide all quizzes initially
    hideAllQuizzes();
});
