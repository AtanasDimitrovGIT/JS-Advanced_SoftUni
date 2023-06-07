function solve() {
  function quiz() {
    var questions = [
      {
        question: "What attribute is used to define an event handler in HTML?",
        answers: ["onclick", "onload"],
        correctAnswer: "onclick"
      },
      {
        question: "Which function is used to convert a JavaScript object to a JSON string?",
        answers: ["JSON.parse()", "JSON.stringify()"],
        correctAnswer: "JSON.stringify()"
      },
      {
        question: "What does the acronym API stand for?",
        answers: ["Application Programming Interface", "Advanced Programming Interface"],
        correctAnswer: "Application Programming Interface"
      }
    ];
  
    var currentQuestion = 0;
    var rightAnswers = 0;
  
    function showQuestion() {
      var questionSection = document.getElementById("questionSection");
      var questionTitle = document.getElementById("questionTitle");
      var answerList = document.getElementById("answerList");
  
      questionTitle.textContent = questions[currentQuestion].question;
  
      while (answerList.firstChild) {
        answerList.firstChild.remove();
      }
  
      questions[currentQuestion].answers.forEach(function (answer) {
        var li = document.createElement("li");
        li.textContent = answer;
        li.addEventListener("click", checkAnswer);
        answerList.appendChild(li);
      });
  
      questionSection.style.display = "block";
    }
  
    function checkAnswer(event) {
      var selectedAnswer = event.target.textContent;
  
      if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        rightAnswers++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResults();
      }
    }
  
    function showResults() {
      var questionSection = document.getElementById("questionSection");
      var resultsSection = document.getElementById("resultsSection");
      var resultsTitle = document.getElementById("resultsTitle");
  
      questionSection.style.display = "none";
      resultsSection.style.display = "block";
  
      if (rightAnswers === questions.length) {
        resultsTitle.textContent = "You are recognized as top JavaScript fan!";
      } else {
        resultsTitle.textContent = "You have " + rightAnswers + " right answers";
      }
    }
  
    showQuestion();
  }
  
  quiz();
  
}
