var monet = 0;
var area = document.querySelector('#textplace');
var returnResult = document.querySelector("#result");
var previous = '';
var usedWords = [];
var letterFirstа = [ 'абажур', 'абонемент', 'абрикос', 'авоська', 'автобус', 'автомобиль', 'агрегат', 'адамант', 'азбука', 'аист', 'аквамарин', 'акварель', 'аквариум', 'аккумулятор', 'аксессуар', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюминий', 'амулет', 'амуниция', 'амфетамин', 'амфибия', 'ананас', 'анкета', 'апельсин', 'аппарат', 'аптечка', 'арбуз', 'аркан', 'арт-объект', 'артерия', 'артефакт', 'архив', 'астероид', 'асфальт', 'атом', 'аура', 'афродизиак', 'аэрозоль'];




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
            console.log(index);
            letterFirstа.splice(index, 1);
            console.log(usedWords);
            console.log(letterFirstа);
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