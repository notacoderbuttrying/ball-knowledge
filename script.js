document.addEventListener('DOMContentLoaded', () => {
    // Category buttons
    const nflBtn = document.getElementById('nflBtn');
    const collegeFootballBtn = document.getElementById('collegeFootballBtn');
    const nbaBtn = document.getElementById('nbaBtn');
    const nhlBtn = document.getElementById('nhlBtn');
    const collegeBasketballBtn = document.getElementById('collegeBasketballBtn');
    const soccerBtn = document.getElementById('soccerBtn');
    const randomBtn = document.getElementById('randomBtn');

    // Quiz sections
    const nflQuiz = document.getElementById('nflQuiz');
    const collegeFootballQuiz = document.getElementById('collegeFootballQuiz');
    const nbaQuiz = document.getElementById('nbaQuiz');
    const nhlQuiz = document.getElementById('nhlQuiz');
    const collegeBasketballQuiz = document.getElementById('collegeBasketballQuiz');
    const soccerQuiz = document.getElementById('soccerQuiz');
    const randomQuiz = document.getElementById('randomQuiz');

    // Question containers
    const nflQuestionsDiv = document.getElementById('nflQuestions');
    const collegeFootballQuestionsDiv = document.getElementById('collegeFootballQuestions');
    const nbaQuestionsDiv = document.getElementById('nbaQuestions');
    const nhlQuestionsDiv = document.getElementById('nhlQuestions');
    const collegeBasketballQuestionsDiv = document.getElementById('collegeBasketballQuestions');
    const soccerQuestionsDiv = document.getElementById('soccerQuestions');
    const randomQuestionsDiv = document.getElementById('randomQuestions');

    // Submit and reset buttons
    const submitNflBtn = document.getElementById('submitNfl');
    const submitCollegeFootballBtn = document.getElementById('submitCollegeFootball');
    const submitNbaBtn = document.getElementById('submitNba');
    const submitNhlBtn = document.getElementById('submitNhl');
    const submitCollegeBasketballBtn = document.getElementById('submitCollegeBasketball');
    const submitSoccerBtn = document.getElementById('submitSoccer');
    const submitRandomBtn = document.getElementById('submitRandom');

    const resetNflBtn = document.getElementById('resetNfl');
    const resetCollegeFootballBtn = document.getElementById('resetCollegeFootball');
    const resetNbaBtn = document.getElementById('resetNba');
    const resetNhlBtn = document.getElementById('resetNhl');
    const resetCollegeBasketballBtn = document.getElementById('resetCollegeBasketball');
    const resetSoccerBtn = document.getElementById('resetSoccer');
    const resetRandomBtn = document.getElementById('resetRandom');

    // Function to hide all quizzes
    const hideAllQuizzes = () => {
        nflQuiz.style.display = 'none';
        collegeFootballQuiz.style.display = 'none';
        nbaQuiz.style.display = 'none';
        nhlQuiz.style.display = 'none';
        collegeBasketballQuiz.style.display = 'none';
        soccerQuiz.style.display = 'none';
        randomQuiz.style.display = 'none';
    };

    // Function to display questions (placeholder for now)
    const displayQuestions = (category, questionsDiv) => {
        questionsDiv.innerHTML = '';
        // Placeholder message since no data is loaded yet
        questionsDiv.innerHTML = `<p>No ${category} questions available. Check back later or add data to questions.js!</p>`;
    };

    // Function to check answers (placeholder for now)
    const checkAnswers = (category, questionsDiv) => {
        alert(`Checking answers for ${category} - No data available to check yet. Add questions.js with quiz data!`);
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

    // Event listeners for submit buttons
    submitNflBtn.addEventListener('click', () => checkAnswers('NFL', nflQuestionsDiv));
    submitCollegeFootballBtn.addEventListener('click', () => checkAnswers('CollegeFootball', collegeFootballQuestionsDiv));
    submitNbaBtn.addEventListener('click', () => checkAnswers('Basketball', nbaQuestionsDiv));
    submitNhlBtn.addEventListener('click', () => checkAnswers('NHL', nhlQuestionsDiv));
    submitCollegeBasketballBtn.addEventListener('click', () => checkAnswers('CollegeBasketball', collegeBasketballQuestionsDiv));
    submitSoccerBtn.addEventListener('click', () => checkAnswers('Soccer', soccerQuestionsDiv));
    submitRandomBtn.addEventListener('click', () => checkAnswers('Random', randomQuestionsDiv));

    // Event listeners for reset buttons
    resetNflBtn.addEventListener('click', () => resetQuiz('NFL', nflQuestionsDiv));
    resetCollegeFootballBtn.addEventListener('click', () => resetQuiz('CollegeFootball', collegeFootballQuestionsDiv));
    resetNbaBtn.addEventListener('click', () => resetQuiz('Basketball', nbaQuestionsDiv));
    resetNhlBtn.addEventListener('click', () => resetQuiz('NHL', nhlQuestionsDiv));
    resetCollegeBasketballBtn.addEventListener('click', () => resetQuiz('CollegeBasketball', collegeBasketballQuestionsDiv));
    resetSoccerBtn.addEventListener('click', () => resetQuiz('Soccer', soccerQuestionsDiv));
    resetRandomBtn.addEventListener('click', () => resetQuiz('Random', randomQuestionsDiv));

    // Hide all quizzes initially
    hideAllQuizzes();
});
