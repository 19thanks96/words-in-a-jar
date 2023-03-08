import {words} from './rusWords.js'

let valuePlayer = 0;
let valueSecondPlayer = 0;
let area = document.querySelector('#textplace');
let returnResult = document.querySelector("#result");
let previous = [];
let stepСounter = 0;
let wordsFirstP = [];
let wordsSecondP = [];

  // music
  document.querySelector('.music').addEventListener('click', () => {
    let audio = new Audio('out.mp3');
    audio.play();
    document.querySelector('#sound').src="sound.png";
    });
    
let sendWord = [];
var lastLetter = '';

  // click on the button start examination word
  document.addEventListener("keydown", handleKeyDown);
  function handleKeyDown (event) {
    if (event.key === " ") {
      step();
    //  if (area.value === ' ') {area.value = '';}
    } else if (event.key === "Enter") {
      step();
    }
  }

document.querySelector('#tooltip').addEventListener('click', step);

function step() {
  var word = area.value.toLowerCase();
  stepСounter += 1;
  if(stepСounter === 3) {
    stepСounter = 1;
  }


  if (lastLetter == word[0] || lastLetter == "") {

if (words.а.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.а);
  }
    else if (words.б.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.б);
  }
    else if (words.в.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.в);
  }
    else if (words.г.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.г);
  }
    else if (words.д.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.д);
  }
    else if (words.е.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.е);
  }
    else if (words.ё.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ё);
  }
    else if (words.ж.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ж);
  }
    else if (words.з.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.з);
  }
    else if (words.и.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.и);
  }
    else if (words.й.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.й);
  }
    else if (words.к.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.к);
  }
    else if (words.л.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.л);
  }
    else if (words.м.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.м);
  }
    else if (words.н.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.н);
  }
    else if (words.о.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.о);
  }
    else if (words.п.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.п);
  }
    else if (words.р.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.р);
  }
    else if (words.с.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.с);
  }
    else if (words.т.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.т);
  }
    else if (words.у.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.у);
  }
    else if (words.ф.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ф);
  }
    else if (words.х.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.х);
  }
    else if (words.ц.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ц);
  }
    else if (words.ч.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ч);
  }
    else if (words.ш.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ш);
  }
    else if (words.щ.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.щ);
  }
    else if (words.э.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.э);
  }
    else if (words.ю.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ю);
  }
    else if (words.я.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.я);
  }
  else {
  nope(area);
  } 
}
}

function printLettersNum(word) {
    checkLastWord(word);
    if (stepСounter === 1) {
    valuePlayer += word.length;
    wordsFirstP.push(word);
    document.querySelector('#stars').innerHTML = valuePlayer;
    } else if (stepСounter === 2)  {
      valueSecondPlayer += word.length;
      wordsSecondP.push(word);
      document.querySelector('#scores').innerHTML = valueSecondPlayer;
    } 
  }

function checkLastWord(word) {
  lastLetter = word[word.length-1];
  if (lastLetter === 'ь') {
    lastLetter = word[word.length-2];
  } 
}
  
function emptyField(word) {
  previous.push(word);
  returnResult.innerHTML = previous.reverse();
  area.placeholder = "Є!)";
  area.value = "";
}
  
function deletesValue(word, arrays) {
  let valueArray = arrays.indexOf(word);
  arrays.splice(valueArray, 1);
}

function nope(area) {
area.value = "";
area.placeholder = "Краще б пупкіна спробував би...";
}

document.querySelector('#stars').addEventListener('click' , () => {
  document.querySelector('#starsWords').style.left = 0;
  document.querySelector('#starsWords').innerHTML = wordsFirstP;
  document.querySelector('#closeStars').style.display = 'block';
});

document.querySelector('#scores').addEventListener('click' , () => {
  document.querySelector('#scoresWords').style.right = 0;
  document.querySelector('#scoresWords').innerHTML = wordsSecondP;
  document.querySelector('#closeStars').style.display = 'block';
});

document.querySelector('#closeStars').addEventListener('click' , () => {
  document.querySelector('#closeStars').style.display = 'none';
  document.querySelector('#starsWords').style.left = '-100%';
  document.querySelector('#scoresWords').style.right = '-100%';
});