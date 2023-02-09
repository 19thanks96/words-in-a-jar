import {words} from './rusWords.js'

let valuePlayer = 0;
let valueRobot = 0;
let area = document.querySelector('#textplace');
let returnResult = document.querySelector("#result");
let previous = [];

function play() {
let audio = new Audio('out.mp3');
audio.play();

document.querySelector('#sound').src="/sound.png";
console.log(document.querySelector('#sound').src="sound.png");
/*console.log(sounds.src.replace());
sounds.src.replace('file://sound.png');*/
}

let sendWord = [];

document.addEventListener("keydown", handleKeyDown);
function handleKeyDown (event) {
  console.log (event.key);
  if (event.key === " ") {
    step();
    console.log("empry");
  } else if (event.key === "Enter") {
    step();
  } 
}
document.addEventListener("keydown", handleKeyDown);

function step() {
  var word = area.value.toLowerCase();
 
  //console.log(words.а.includes(word) ==  previous[word]);
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

function deletesValue(word, arrays) {
  let valueArray = arrays.indexOf(word);
  arrays.splice(valueArray, 1);
}



function emptyField(word) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  area.placeholder = "мышь";
  area.value = "";
}

function printLettersNum(word) {
console.log(word);
valuePlayer += word.length;
document.querySelector('#stars').innerHTML = valuePlayer;
}

function nope(area) {
area.value = "";
area.placeholder = "не влезло((";
}

