const questions = [
  {
    question: "日本の首都はどこ？",
    choices: ["大阪", "東京", "札幌", "福岡"],
    answer: "東京"
  },
  {
    question: "3 + 5 は？",
    choices: ["5", "8", "10", "7"],
    answer: "8"
  },
  {
    question: "富士山の高さは？",
    choices: ["3776m", "3000m", "2800m", "4000m"],
    answer: "3776m"
  }
];

function loadRandomQuestion() {
  const q = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").textContent = q.question;

  const choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => {
      if (choice === q.answer) {
        alert("正解！");
      } else {
        alert("不正解！");
      }
    };
    choicesList.appendChild(li);
  });
}

document.getElementById("next-button").onclick = loadRandomQuestion;

// 初期表示
loadRandomQuestion();
