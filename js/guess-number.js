// function catMeow() {
//   let audio = new Audio();
//   let index = getNumberFrom0to10();
//   console.log(index);
//   audio.src = sounds[index];
//   audio.play();
// }

// function getNumberFrom0to10() {
//   return Math.random().toFixed(1) * 10;
// }
// let sounds = [
//   "./audio/kot-myaukaet.mp3",
//   "./audio/kotyata.mp3",
//   "./audio/grustnoe-myaukanie-k.mp3",
//   "./audio/myau-s-murlykaniem.mp3",
//   "./audio/odin-myau-g.mp3",
//   "./audio/zloy-staryiy-koshak.mp3",
//   "./audio/krik-golodnogo-kota.mp3",
//   "./audio/krik-kota-v-beshenstve.mp3",
//   "./audio/simpatichnyie-kotyata-zvuk.mp3",
//   "./audio/odin-myau-g.mp3",
//   "./audio/kotyata.mp3",
// ];
// cat.addEventListener("click", catMeow);
// goStart();

// function goStart() {
//   isGame = false;

//   let btn = document.querySelector("button#btn");
//   let btnCat = document.querySelector("button#btnCat");
//   let question = document.getElementById("question");
//   let btnLess = document.getElementById("less");
//   let btnMore = document.getElementById("more");
//   let btnMyNumber = document.getElementById("mynumber");
//   let pBegin = document.querySelector("p#begin");

//   let label = document.getElementById("label");
//   let input = document.getElementById("input");


//   // label.style.background = 'red';


//   btn.addEventListener("click", function () {
//     question.innerText = isText() + middle;
//     btn.classList.add("hide");
//     btnCat.classList.add("hide");
//     pBegin.classList.add("hide");
//     btnLess.parentNode.classList.remove("hide");
//   });
//   btnMyNumber.addEventListener('click', () => {
//     btn.classList.remove("hide");
//     btnCat.classList.remove("hide");
//     pBegin.classList.remove("hide");
//     btnLess.classList.add("hide");
//     btnMore.classList.add("hide");
//     btnMyNumber.classList.add("hide");
//     btnLess.classList.add("hide");
//     question.classList.add("hide");
//   })

//   let min = 0;
//   let max = 100;
//   let middle = Math.floor((min + max) / 2) + "?";

//   function search() {
//     console.log(`${min} ${max}`);
//     if(max-min ==2){alert(`your number is ${max-1}`)}
//     return Math.floor((min + max) / 2);
//   }

//   btnLess.addEventListener("click", function () {
//     max = Number(search());
//     question.innerText = isText() + search() + "?";
//   });

//   btnMore.addEventListener("click", function () {
//     min = Number(search());
//     question.innerText = isText() + search() + "?";
//   });

//   function isText() {
//     return `Is your number more than `;
//   }
// }
// /////////                 ANOTHER MODE

// const number = getNumberFrom0to10();
// let answer;

// console.log(number);

// let score = 5;

// btnCat.addEventListener("click", function () {
//   let btn = document.querySelector("button#btn");
//   let btnCat = document.querySelector("button#btnCat");
//   let pBegin = document.querySelector("p#begin");
//   let label = document.getElementById("label");
//   let input = document.getElementById("input");
//   let pText = document.querySelector("#content p#finalText");

//   let content = document.getElementById("content");

//   btn.classList.add("hide");
//   btnCat.classList.add("hide");
//   pBegin.classList.add("hide");
//   content.appendChild(label);
//   content.appendChild(input);
//   content.appendChild(pText);

//   input.addEventListener("change", function () {
    
//     isGuess();
//     function isGuess() {
     
//       answer = input.value;
//       if (input.value != number) {
//         input.value = "";
//         if (score > 0) score--;
//       } 

//       if (Number(answer) === number) {
//         input.remove();
//         label.remove();
//         pText.innerText = `You win and earned ${score} scores`;
//         console.log(`you win and earned ${score} scores`);
//         return;
//       } else if (answer === "EXIT") {
//         input.remove();
//         label.remove();
//         pText.innerText = `Thank you and goodbye`;
//         return;
//       } 
      
//       }
//     });
// });
