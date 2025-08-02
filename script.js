const questions = [
  {
    question: "Qui est le frère de Sasuke ?",
    answers: ["Naruto", "Kakashi", "Itachi", "Jiraya"],
    correct: 2
  },
  {
    question: "Quel est le nom du capitaine de Luffy ?",
    answers: ["Shanks", "Ace", "Zoro", "Luffy"],
    correct: 3
  },
  {
    question: "Dans Death Note, comment s'appelle le Shinigami ?",
    answers: ["Ryuk", "Light", "Misa", "L"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(index) {
  const isCorrect = index === questions[currentQuestion].correct;
  if (isCorrect) score++;
  document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    document.getElementById("next-btn").classList.add("hidden");
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent = `${score}/${questions.length}`;
  if (score === questions.length) {
    document.getElementById("reward-message").textContent = "🎁 Tu as gagné une récompense !";
  } else {
    document.getElementById("reward-message").textContent = "Réessaie pour gagner une récompense !";
  }
}

showQuestion();
