let questions = [];

// ←★ あなたのスプレッドシートに合わせたURL（タブ名: シート1）
const sheetURL = "https://opensheet.elk.sh/1qLvFe3OLQ1015LLAPu_nU7Ty0CQysbiuAO12FxLj6gM/シート1";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    questions = data.map(row => ({
      question: row.question,
      choices: [row.choice1, row.choice2, row.choice3, row.choice4],
      answer: row.answer
    }));
    loadRandomQuestion();
  })
  .catch(err => {
    document.getElementById("question").textContent = "データの読み込みに失敗しました";
    console.error(err);
  });

function loadRandomQuestion() {
  if (questions.length === 0) return;

  const q = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").textContent = q.question;

  const choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  q.choices.forEach(choice => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => {
      alert(choice === q.answer ? "正解！" : `不正解！正解は「${q.answer}」`);
    };
    choicesList.appendChild(li);
  });
}

document.getElementById("next-button").onclick = loadRandomQuestion;
