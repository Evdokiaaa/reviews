const review = [
  {
    id: 1,
    name: "Alex Ovan",
    img: "img1.png",
    job: "Frontend Dev",
    text:
      "ed ut perspiciatis unde omnis iste natus error sit" +
      "voluptatem accusantium doloremque laudantium",
  },
  {
    id: 2,
    name: "Olga Anavna",
    img: "img2.png",
    job: "Manager",
    text:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur" +
      "aut odit aut fugit, sed quia consequuntur magni dolores" +
      "eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 3,
    name: "Diana Pandova",
    img: "img3.png",
    job: "Cashier",
    text: "Excepteur sint occaecat cupidatat non proident",
  },
];

const img = document.getElementById("image-person");
const author = document.querySelector(".name");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const PrevBTN = document.querySelector(".prev-button");
const NextBTN = document.querySelector(".next-button");

let current = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(current);
});

PrevBTN.addEventListener("click", function () {
  current--;
  console.log(current);
  if (current == -1) {
    current = 2;
  }
  showPerson(current);
});

NextBTN.addEventListener("click", function () {
  current++;
  if (current > review.length - 1) {
    current = 0;
  }
  showPerson(current);
});

function showPerson(person) {
  const item = review[current];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}
