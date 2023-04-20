let result = document.querySelector("#result");
let reaction = document.querySelector("#reaction");

let json = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
  },
];

let calcScore = json.reduce((sum, user) => {
  return sum + user.score;
}, 0);
let calcDiv = `${(calcScore / 4).toFixed()}`;
result.innerHTML = +`${calcDiv}`;
