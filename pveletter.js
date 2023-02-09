import {words} from "./ukrWords.js";

let valuePlayer = 0;
let valueRobot = 0;
let area = document.querySelector('#textplace');
let returnResult = document.querySelector("#result");
let previous = [];
let robotWord = [];

  // music
  function play() {
  let audio = new Audio('out.mp3');
  audio.play();
  document.querySelector('#sound').src="sound.png";
  }
  
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

function step() {
    var word = area.value.toLowerCase();
if (lastLetter == word[0] || lastLetter == "") {
if(words.а.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.а);
    stepRobot(word,  words.а);
  } else if (words.б.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.б);
    stepRobot(word, words.б);
  } else if (words.в.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.в);
    stepRobot(word, words.в);
  } else if (words.г.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.г);
    stepRobot(word, words.г);
  } else if (words.д.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.д);
    stepRobot(word, words.д);
  }  else if (words.е.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.е);
    stepRobot(word, words.е);
  } else if (words.є.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.є);
    stepRobot(word, words.є);
  } else if (words.ж.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ж);
    stepRobot(word, words.ж);
  } else if (words.з.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.з);
    stepRobot(word, words.з);
  } else if (words.и.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.и);
    stepRobot(word, words.и);
  } else if (words.і.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.і);
    stepRobot(word, words.і);
  } else if (words.ї.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ї);
    stepRobot(word, words.ї);
  } else if (words.й.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.й);
    stepRobot(word, words.й);
  } else if (words.к.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.к);
    stepRobot(word, words.к);
  } else if (words.л.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.л);
    stepRobot(word, words.л);
  } else if (words.м.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.м);
    stepRobot(word, words.м);
  } else if (words.н.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.н);
    stepRobot(word, words.н);
  } else if (words.о.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.о);
    stepRobot(word, words.о);
  } else if (words.п.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.п);
    stepRobot(word, words.п);
  } else if (words.р.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.р);
    stepRobot(word, words.р);
  } else if (words.с.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.с);
    stepRobot(word, words.с);
  } else if (words.т.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.т);
    stepRobot(word, words.т);
  } else if (words.у.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.у);
    stepRobot(word, words.у);
  } else if (words.ф.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ф);
    stepRobot(word, words.ф);
  } else if (words.х.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.х);
    stepRobot(word, words.х);
  } else if (words.ц.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ц);
    stepRobot(word, words.ц);
  } else if (words.ч.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ч);
    stepRobot(word, words.ч);
  } else if (words.ш.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ш);
    stepRobot(word, words.ш);
  } else if (words.щ.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.щ);
    stepRobot(word, words.щ);
  } else if (words.ю.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.ю);
    stepRobot(word, words.ю);
  } else if (words.я.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, words.я);
    stepRobot(word, words.я);
  } else {
    wrong(area);
  }
}
}

function writeWord(word) {
    checkLastWord(word);
  valuePlayer += word.length;
  document.querySelector('#stars').innerHTML = valuePlayer; 
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

function deletesValueArray(word, arrays) {
  let valueArray = arrays.indexOf(word);
  arrays.splice(valueArray, 1);
}

function stepRobot(word, arrays) {
    let robot = words[lastLetter].find(el => el.length < word.length+2);
    robotWord.push(robot);
    lastLetter = robot[robot.length-1];
      if (robot == undefined) {
        if (valueRobot > valuePlayer) {
          document.write("GAME OVeR" + "<br>" + 'Robot Wins');
        } else{
          document.write("GAME OVeR" + "<br>" + 'Player Wins');
        }
      } else {
      console.log(robot);
      returnResult.innerHTML += "<br>" + robotWord.reverse();
      let numbWordRobot = arrays.indexOf(robot);
      arrays.splice(numbWordRobot, 1);
      valueRobot += robot.length;
      document.querySelector('#scores').innerHTML = valueRobot;
  }
  }
    

function wrong(area) {
area.value = "";
area.placeholder = "Краще б пупкіна спробував би...";
}

function derivationStars() {
  document.querySelector('#starsWords').style.left = 0;
  document.querySelector('#starsWords').innerHTML = previous;
  document.querySelector('#closeStars').style.display = 'block';
}

function derivationScores() {
  document.querySelector('#scoresWords').style.right = 0;
  document.querySelector('#scoresWords').innerHTML = robotWord;
  document.querySelector('#closeStars').style.display = 'block';
}

function hideResult() {
  document.querySelector('#closeStars').style.display = 'none';
  document.querySelector('#starsWords').style.left = '-100%';
  document.querySelector('#scoresWords').style.right = '-100%';
}

let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;
      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };

