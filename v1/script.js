const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selecting DOM ELEMENTS

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: render facts in list
factsList.innerHTML = "";

// Load data from Supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://hkrvapxbjlrgymyiyiji.supabase.co/rest/v1/Facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcnZhcHhiamxyZ3lteWl5aWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTgxNjcsImV4cCI6MTk5MzMzNDE2N30.uGe4M_-lt2JHUPbS877Kn2uEVue8egXWUQ7DLs4Yw68",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcnZhcHhiamxyZ3lteWl5aWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTgxNjcsImV4cCI6MTk5MzMzNDE2N30.uGe4M_-lt2JHUPbS877Kn2uEVue8egXWUQ7DLs4Yw68",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

function createFactsList(dataArray) {
  //factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
  <p>
    ${fact.text}
     <a class="source"
     href="${fact.source}"_blank">
     (source)
     </a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">
    ${fact.category}
  </span>
  
  </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let a = 10;
let b = a;
if (a === b) {
  console.log("yes bro a and b are equal lmao");
} else if (a > b) {
  console.log("interesting fact!");
} else if (a < b) {
  console.log("Mindblowing fact!");
}


const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(text);
console.log(upperText);
const str = `The current fact is "${text}".`;
console.log(str);


const fact = ["Lisbon is the capital of Portugal", 2015, true];

const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
};

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map((el) => el.text);
console.log(factAges);
*/
