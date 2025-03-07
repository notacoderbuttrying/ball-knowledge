// Utility to get a day-based index for question rotation
function getDayIndex() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay); // Day of the year (0-364/365)
}

// Format current date for display
function displayCurrentDate() {
  const dateElement = document.getElementById('current-date');
  if (dateElement) {
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }
}

// Load quiz dynamically based on category
function loadQuiz(category) {
  const quizContainer = document.getElementById(`${category.toLowerCase()}-questions`);
  if (!quizContainer) {
    console.error(`Quiz container for ${category} not found`);
    return;
  }
  const data = window[`${category}Data`]?.[category];
  if (!data) {
    console.error(`No data found for ${category}`);
    quizContainer.innerHTML = `<p>No ${category} questions available. Check back later!</p>`;
    return;
  }

  // Select questions for today (e.g., 5 questions per day)
  const questionsPerDay = 5;
  const dayIndex = getDayIndex();
  const startIndex = (dayIndex * questionsPerDay) % data.length; // Rotate based on day
  const selectedQuestions = [];
  for (let i = 0; i < questionsPerDay; i++) {
    const idx = (startIndex + i) % data.length; // Wrap around if we exceed length
    selectedQuestions.push(data[idx]);
  }

  // Render selected questions
  quizContainer.innerHTML = '';
  selectedQuestions.forEach((q, index) => {
    const globalIndex = (startIndex + index) % data.length; // For answer lookup
    const div = document.createElement('div');
    div.innerHTML = `<p>${index + 1}. ${q.text}</p>
      <select id="${category.toLowerCase()}-q${index}" aria-label="Answer for question ${index + 1}">
        <option value="">Select an answer</option>
        ${potentialAnswers[category][globalIndex].map(ans => `<option value="${ans}">${ans}</option>`).join('')}
      </select>`;
    quizContainer.appendChild(div);
  });
}

// Check answers and display score
function checkAnswers(category) {
  const data = window[`${category}Data`]?.[category];
  if (!data) {
    alert(`No ${category} data available to check.`);
    return;
  }

  // Recompute the same selected questions for scoring
  const questionsPerDay = 5;
  const dayIndex = getDayIndex();
  const startIndex = (dayIndex * questionsPerDay) % data.length;
  const selectedQuestions = [];
  for (let i = 0; i < questionsPerDay; i++) {
    const idx = (startIndex + i) % data.length;
    selectedQuestions.push(data[idx]);
  }

  let score = 0;
  const totalQuestions = selectedQuestions.length;
  const scoreDisplay = document.getElementById(`${category.toLowerCase()}-score`);
  if (!scoreDisplay) return;

  selectedQuestions.forEach((q, index) => {
    const userAnswer = document.getElementById(`${category.toLowerCase()}-q${index}`).value;
    if (q.solutions.includes(userAnswer)) score++;
  });

  const percentage = (score / totalQuestions) * 100;
  scoreDisplay.textContent = `Score: ${score} out of ${totalQuestions} (${percentage.toFixed(1)}%)`;
  scoreDisplay.style.color = percentage >= 70 ? '#2a5298' : '#d32f2f';
  if (percentage === 100) alert('Perfect score! Amazing job!');
}

// Reset quiz for a category
function resetQuiz(category) {
  loadQuiz(category); // Reload questions
  const scoreDisplay = document.getElementById(`${category.toLowerCase()}-score`);
  if (scoreDisplay) scoreDisplay.textContent = ''; // Clear score
  // Reset select elements to default
  const selects = document.querySelectorAll(`#${category.toLowerCase()}-questions select`);
  selects.forEach(select => (select.value = ''));
}

// Initialize quizzes on load
window.onload = () => {
  displayCurrentDate();
  ['NFL', 'Golf'].forEach(category => loadQuiz(category));
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') btn.click();
    });
  });
};
