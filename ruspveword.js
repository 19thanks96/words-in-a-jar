import {words} from './rusWords.js'

let valuePlayer = 0;
let valueRobot = 0;
let area = document.querySelector('#textplace');
let returnResult = document.querySelector("#result");
let previous = [];

document.querySelector('.music').addEventListener('click', () => {
  let audio = new Audio('out.mp3');
  audio.play();
  document.querySelector('#sound').src="sound.png";
  });
  

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
document.querySelector('#tooltip').addEventListener('click', step);

function step() {
  var word = area.value.toLowerCase();

if (words.а.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.а);
  stepRobot(word, words.а);
  }
    else if (words.б.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.б);
  stepRobot(word, words.б);
  }
    else if (words.в.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.в);
  stepRobot(word, words.в);
  }
    else if (words.г.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.г);
  stepRobot(word, words.г);
  }
    else if (words.д.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.д);
  stepRobot(word, words.д);
  }
    else if (words.е.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.е);
  stepRobot(word, words.е);
  }
    else if (words.ё.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ё);
  stepRobot(word, words.ё);
  }
    else if (words.ж.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ж);
  stepRobot(word, words.ж);
  }
    else if (words.з.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.з);
  stepRobot(word, words.з);
  }
    else if (words.и.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.и);
  stepRobot(word, words.и);
  }
    else if (words.й.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.й);
  stepRobot(word, words.й);
  }
    else if (words.к.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.к);
  stepRobot(word, words.к);
  }
    else if (words.л.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.л);
  stepRobot(word, words.л);
  }
    else if (words.м.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.м);
  stepRobot(word, words.м);
  }
    else if (words.н.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.н);
  stepRobot(word, words.н);
  }
    else if (words.о.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.о);
  stepRobot(word, words.о);
  }
    else if (words.п.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.п);
  stepRobot(word, words.п);
  }
    else if (words.р.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.р);
  stepRobot(word, words.р);
  }
    else if (words.с.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.с);
  stepRobot(word, words.с);
  }
    else if (words.т.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.т);
  stepRobot(word, words.т);
  }
    else if (words.у.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.у);
  stepRobot(word, words.у);
  }
    else if (words.ф.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ф);
  stepRobot(word, words.ф);
  }
    else if (words.х.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.х);
  stepRobot(word, words.х);
  }
    else if (words.ц.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ц);
  stepRobot(word, words.ц);
  }
    else if (words.ч.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ч);
  stepRobot(word, words.ч);
  }
    else if (words.ш.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ш);
  stepRobot(word, words.ш);
  }
    else if (words.щ.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.щ);
  stepRobot(word, words.щ);
  }
    else if (words.э.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.э);
  stepRobot(word, words.э);
  }
    else if (words.ю.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.ю);
  stepRobot(word, words.ю);
  }
    else if (words.я.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, words.я);
  stepRobot(word, words.я);
  }
  else {
  nope(area);
  } 
}

function deletesValue(word, arrays) {
  let valueArray = arrays.indexOf(word);
  arrays.splice(valueArray, 1);
}
function stepRobot(word, arrays) {
  let robot = arrays.find(el => el.length < word.length+2);
    if (robot == undefined) {
      if (valueRobot > valuePlayer) {
        document.write("GAME OVeR" + "<br>" + 'Robot Wins');
      } else{
        document.write("GAME OVeR" + "<br>" + 'Player Wins');
      }
    } else {
    console.log(robot);
    returnResult.innerHTML +=  robot + "<br>";
    let numbWordRobot = arrays.indexOf(robot);
    arrays.splice(numbWordRobot, 1);
    valueRobot += robot.length;
    document.querySelector('#scores').innerHTML = valueRobot;
}
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

