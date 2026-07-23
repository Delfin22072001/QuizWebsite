const questions = [
  { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean" },
  { question: "Which planet is known as Earth's twin due to similar size?", options: ["Mars", "Venus", "Mercury", "Jupiter"], answer: "Venus" },
  { question: "What percentage of Earth's surface is covered by water?", options: ["50%", "60%", "71%", "85%"], answer: "71%" },
  { question: "What is the longest river in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], answer: "Nile River" },
  { question: "Which layer of the Earth is the hottest?", options: ["Crust", "Mantle", "Outer Core", "Inner Core"], answer: "Inner Core" },
  { question: "What is the largest desert in the world (by area)?", options: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Arabian Desert"], answer: "Antarctic Desert" },
  { question: "Which gas makes up the majority of Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Nitrogen" },
  { question: "What causes the Earth's seasons?", options: ["Distance from the Sun", "The tilt of Earth's axis", "Ocean currents", "Moon's gravity"], answer: "The tilt of Earth's axis" },
  { question: "Which continent is home to the most countries?", options: ["Asia", "Africa", "Europe", "South America"], answer: "Africa" },
  { question: "What is the tallest mountain in the world (above sea level)?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], answer: "Mount Everest" }
];

const qn = document.getElementById('question')
const nxt_btn = document.getElementById('next-btn')
const div = document.getElementById('options')
const ans = document.getElementById('answer')
const progress_bar = document.getElementById('progress-bar')
const play_again = document.getElementById('playagain-btn')

let index = 0
let score = 0

function displayQuestion() {

  progress_bar.textContent = `${index + 1} of 10`
  qn.textContent = questions[index].question
  div.innerHTML = ""

  questions[index].options.forEach((option, i) => {
    const input = document.createElement('input')
    const label = document.createElement('label')

    input.type = "radio"
    input.name = "option"
    input.value = option

    label.appendChild(input)
    label.append(" " + option)

    div.appendChild(label)
    div.appendChild(document.createElement('br'))
  })
}

displayQuestion()


// next button
nxt_btn.addEventListener('click', () => {

  const selected = document.querySelector('input[name="option"]:checked')

  if (!selected) {
    alert("Please select a option")
    return
  }

  if (selected.value === questions[index].answer) {
    console.log(selected.value)
    score++
  }
  index++

  if (index == 9) {
    nxt_btn.textContent = "Submit"
  }

  if (index < 10) {
    displayQuestion()
  }


  else {
    qn.textContent = "Quiz Completed"
    div.textContent = ""
    progress_bar.textContent = ""
    ans.innerHTML = `Your Final Score:<b> ${score} / ${questions.length}</b>`
    nxt_btn.style.display = "none"
    play_again.style.display = "inline-block"
  }
})


// play again
play_again.addEventListener('click', () => {
  index = 0
  score = 0
  nxt_btn.style.display = "inline-block"
  play_again.style.display = "none"
  ans.innerHTML = ""
  displayQuestion()
})






