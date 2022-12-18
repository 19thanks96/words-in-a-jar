var monet = 0;
var area = document.querySelector('#textplace');
var returnResult = document.querySelector("#result");
var previous = '';
var usedWords = [];
var letterFirstа = [  'атом', 'аура', 'афродизиак',];




function step() {
    var word = area.value;
    var countElementsArr = letterFirstа. length;
    console. log(countElementsArr);
    //let index = letterFirstа.findIndex(el => el == word);
        if (letterFirstа.includes(word)) {
            returnResult.innerHTML += word + "<br>";
            usedWords.push(word);
            previous += word + ",";
            printLettersNum(word);
            area.placeholder = "мышь";
            area.value = "";
            console.log(previous);
            let index = letterFirstа.indexOf(word);
            letterFirstа.splice(index, 1);
            console.log(index);
            console.log(usedWords);
            console.log(letterFirstа);
            
            var robot = letterFirstа.find(el => el.length < word.length+2);
            if (robot == undefined) {
                document.write("GAME OVeR");
            }
            console.log(robot);
            returnResult.innerHTML += robot + "<br>";
            let wordrobot = letterFirstа.indexOf(robot);
            letterFirstа.splice(wordrobot, 1);
            }
    else {
        nope(area);
        }
    
}

function printLettersNum(word) {
    monet += word.length;
    document.querySelector('#stars').innerHTML = monet;
}

function nope(area) {
    area.value = "";
    area.placeholder = "не влезло((";
}

/*
function step() {
  var word = area.value;
  console.log("word:" , word[0]);
  console.log("area.value:" , area.value);
  if (word == 'пенал' || word == 'сыр' || word == 'мак' || word == 'рак') {
  document.querySelector("#result").innerHTML += word + "<br>";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
}
else{
  area.value = "";
  area.placeholder = "не влезло((";
}
}

существительніе. іменник. оператор сортировки массива

function printLettersNum(word) {
console.log(word);
monet += word.length;
document.querySelector('#stars').innerHTML = monet;
}


    var word = area.value;

    console.log(word[8]);
    console.log(word.length);
    var numbers = word.length - 1;
    console.log(numbers);
    console.log(word[numbers]);

    var word = area.value;

     if (word[0] == "а") {
        alert('a');
    }
    else {
        alert('not a')
    }


    leterFirstA += [,'анаша'];
*/