const ul = document.getElementById("ul-list");
let text="";
let data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

for (let i=0; i<data.length; i++){
    text = text + `<li class="${data[i].category} li">
    <img src="${data[i].icon}" alt="icono"> ${data[i].category}
    <div>
      <p id="bold">${data[i].score}</p>
      <p>/ 100</p>
    </div>
  </li>
  `
}

ul.innerHTML=text;


