const chooseMode = document.querySelector("p#chooseMode");
const btnUserGuess = document.querySelector("button#btnUserGuess");
const btnCatGuess = document.querySelector("button#btnCatGuess");
const questionFromCat = document.querySelector("div#questionFromCat");

const btnLess = document.querySelector("button#less");
const btnMore = document.querySelector("button#more");
const btnMyNumber = document.querySelector("button#mynumber");
const btnStop = document.querySelector("button#stop");

const label = document.querySelector("label");
const input = document.querySelector("input");
const finalText = document.querySelector("p#finalText");

goStart();

function goStart() {
  btnCatGuess.addEventListener("click", function () {
    questionFromCat.classList.remove("hide");
    questionFromCat.innerText = isText() + middle;
    btnCatGuess.classList.add("hide");
    btnUserGuess.classList.add("hide");
    chooseMode.classList.add("hide");
    btnLess.classList.remove("hide");
    btnMore.classList.remove("hide");
    btnMyNumber.classList.remove("hide");
    btnStop.classList.remove("hide");
    finalText.classList.add("hide");
  });
  btnMyNumber.addEventListener("click", () => {
    finalText.classList.remove("hide");
    finalText.innerText = "I always win!";
    btnCatGuess.classList.remove("hide");
    btnUserGuess.classList.remove("hide");
    chooseMode.classList.remove("hide");
    btnLess.classList.add("hide");
    btnMore.classList.add("hide");
    btnMyNumber.classList.add("hide");
    btnStop.classList.add("hide");
    questionFromCat.classList.add("hide");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  });

  let min = 0;
  let max = 100;
  let middle = Math.floor((min + max) / 2) + "?";

  function search() {
    console.log(`${min} ${max}`);

    return Math.floor((min + max) / 2);
  }

  btnLess.addEventListener("click", function () {
    max = Number(search());
    questionFromCat.innerText = isText() + search() + "?";
    if (max - min < 3) {
      alert(`I'm 99% sure that your number is ${min + 1}`);
    }
  });

  btnMore.addEventListener("click", function () {
    min = Number(search());
    questionFromCat.innerText = isText() + search() + "?";

    if (max - min == 2) {
      alert(`I'm 99% sure that your number is ${max - 1}`);
    }
  });

  function isText() {
    return `Is your number more than `;
  }
}

btnStop.addEventListener("click", function () {
  window.location.reload();
});

/////////                 ANOTHER MODE

const number = getNumberFrom0to10();
let answer;

console.log(number);

let score = 5;

function getNumberFrom0to10() {
  return Math.random().toFixed(1) * 10;
}

btnUserGuess.addEventListener("click", function () {
  btnStop.classList.remove("hide");
  btnCatGuess.classList.add("hide");
  btnUserGuess.classList.add("hide");
  chooseMode.classList.add("hide");
  label.classList.remove("hide");
  input.classList.remove("hide");
});

input.addEventListener("change", function () {
  isGuess();
  function isGuess() {
    answer = input.value;
    if (input.value != number) {
      input.value = "";
      if (score > 0) score--;
      finalText.innerText = `Your score is ${score}`;
    }

    if (Number(answer) === number) {
      input.classList.add("hide");
      label.classList.add("hide");
      finalText.innerText = `You win and earned ${score} scores`;
      console.log(`you win and earned ${score} scores`);
      btnCatGuess.classList.remove("hide");
      btnUserGuess.classList.remove("hide");
      chooseMode.classList.remove("hide");
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }
});

function catMeow() {
  let audio = new Audio();
  let index = getNumberFrom0to10();
  console.log(index);
  audio.src = sounds[index];
  audio.play();
}

function getNumberFrom0to10() {
  return Math.random().toFixed(1) * 10;
}
let sounds = [
  "./audio/kot-myaukaet.mp3",
  "./audio/kotyata.mp3",
  "./audio/grustnoe-myaukanie-k.mp3",
  "./audio/myau-s-murlykaniem.mp3",
  "./audio/odin-myau-g.mp3",
  "./audio/zloy-staryiy-koshak.mp3",
  "./audio/krik-golodnogo-kota.mp3",
  "./audio/simpatichnyie-kotyata-zvuk.mp3",
  "./audio/myau-s-murlykaniem.mp3",
  "./audio/odin-myau-g.mp3",
  "./audio/kotyata.mp3",
];
cat.addEventListener("click", catMeow);
