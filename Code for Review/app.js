// local reviews data
const reviews = [
  // I change all the info of the people in here
  {
    id: 1,
    name: 'mark zuckerberg',
    job: 'professions',
    img: 'https://i.vgy.me/ZbCyJI.png',
    text: "Mark Zuckerberg is the co-founder and CEO of Meta Platforms, Inc., overseeing the company's strategic direction and product development, including its flagship social media platforms Facebook, Instagram, WhatsApp, and Oculus. He is a prominent figure in the tech industry, shaping the landscape of social networking and virtual reality.",
  },
  {
    id: 2,
    name: 'bill gates',
    job: 'professions',
    img: 'https://i.vgy.me/rKaa6X.png',
    text: 'Bill Gates is the co-founder of Microsoft Corporation, where he played a pivotal role in the development of the personal computer revolution. As a philanthropist, he is also known for his work through the Bill & Melinda Gates Foundation, addressing global health, education, and poverty issues.',
  },
  {
    id: 3,
    name: 'rosa parks',
    job: 'professions',
    img: 'https://i.vgy.me/Zm3rRl.png',
    text: 'Rosa Parks was a civil rights activist best known for her pivotal role in the Montgomery Bus Boycott in 1955. Her refusal to give up her bus seat to a white man sparked a significant moment in the American civil rights movement, leading to widespread changes in segregation laws and inspiring a new era of activism.',
  },
  {
    id: 4,
    name: 'nick vujicic',
    job: 'professions',
    img: 'https://i.vgy.me/aw7aIK.png',
    text: 'Nick Vujicic is a motivational speaker, author, and evangelist known for inspiring millions worldwide with his life story. Born with a rare condition called tetra-amelia syndrome, which left him without limbs, Vujicic shares messages of hope, resilience, and faith, encouraging people to overcome challenges and embrace their unique strengths.',
  },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn');
const endBtn = document.querySelector('.end-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// I added the function for Start Button here
startBtn.addEventListener('click', function () {
  currentItem = reviews.findIndex(person => person.name === 'mark zuckerberg');
  showPerson(currentItem);
});

// I added the function for End Button here
endBtn.addEventListener('click', function () {
  currentItem = reviews.findIndex(person => person.name === 'nick vujicic');
  showPerson(currentItem);
});