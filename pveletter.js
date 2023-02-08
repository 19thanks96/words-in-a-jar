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
  let words = {
  'а' : ['абажур', 'абонемент', 'абрикос', 'авоська', 'агрегат', 'адамант', 'аерозоль', 'азбука', 'аквамарин', 'акварель', 'акваріум', 'аксесуар', 'акумулятор', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюміній', 'амулет', 'амуніція', 'амфетамін', 'амфібія', 'ананас', 'анкета', 'апарат', 'апельсин', 'аптечка', 'аркан', 'арт-обєкт', 'артерія', 'артефакт', 'архів', 'астероїд', 'асфальт', 'атом', 'аура', 'афродизіак',],
  'б' : ['бабло', 'багаж', 'багатство', 'банан', 'банер', 'баночка', 'барабан', 'батарейка', 'батарея', 'батіг', 'бейдж', 'бензин', 'бере', 'бетон', 'бирка', 'бланк', 'блискітки', 'блокнот', 'болт', 'бомба', 'Бор', 'браслет', 'брова', 'бронь', 'брошка', 'брошура', 'бруд', 'брус', 'брюки', 'будильник', 'буква', 'буквар', 'букет', 'буклет', 'булка', 'булочка', 'булыжник', 'бумеранг', 'бурштин', 'бурян', 'буси', 'бутерброд', 'бутон', 'бухло', 'бюджет', 'бюлетень', 'бюст', 'бюстгальтер', 'Біблія', 'біжутерія', 'білизна', 'білка', 'біографія', 'бісер',],
  'в' : ['вага', 'вакцина', 'Вал', 'валюта', 'вечеря', 'взуття', 'виграш', 'видобуток', 'виділення', 'вино', 'випаровування', 'виплата', 'випічка', 'виріб', 'вихованець', 'вихор', 'вихідник', 'вода', 'волос', 'воронка', 'вугілля', 'вузол', 'вулик', 'вуха', 'вухо', 'відвар', 'відкат', 'відходи', 'віза', 'вірш', 'вітамін', 'вішалка',],
  'г' : ['гаджет', 'гадюка', 'газування', 'гайка', 'галантерея', 'галоші', 'галька', 'гамак', 'гаманець', 'гамбургер', 'ганчірка', 'гарантія', 'гардина', 'гармонь', 'гарнітура', 'гачок', 'гашиш', 'гвоздика', 'гель', 'гель-мастило', 'герб', 'герметик', 'героїн', 'глина', 'глист', 'глобус', 'глоток', 'глюкоза', 'гниль', 'гном', 'гніздо', 'годинник', 'голка', 'голова', 'головастик', 'головка', 'головоломка', 'голограма', 'голуб', 'горб', 'горло', 'горобець', 'горобина', 'горох', 'горошок', 'горщик', 'горілка', 'горіх', 'грааль', 'град', 'градусник', 'грак', 'грам', 'грамота', 'гранат', 'граната', 'гранд', 'грант', 'гранула', 'граніт', 'графік', 'графіка', 'графін', 'графіті', 'гребінець', 'гребінь', 'гриб', 'грибниця', 'грива', 'гривня', 'грижа', 'гризун', 'грим', 'гриф', 'гроно', 'грош', 'гроші', 'груди', 'грунт', 'груша', 'губа', 'губи', 'губка', 'гуль', 'гума', 'гусениця', 'гуща', 'гілка', 'гіпс', 'гірлянда',],
  'д' : ['дар', 'датчик', 'депозит', 'деревина', 'деталь', 'джгут', 'джем', 'джинси', 'джміль', 'дзвінок', 'дзвіночок', 'дзеркальце', 'диплом', 'дисплей', 'дитинча', 'дичина', 'ДНК', 'доза', 'документ', 'долар', 'долонь', 'дохід', 'дроб', 'дрова', 'дрібниця', 'дур', 'дятел', 'діамант',],
  'е' : ['евкаліпт', 'еклер', 'екліпс', 'економка', 'екран', 'екскременти', 'екстракт', 'елексир', 'електрод', 'електрон', 'електрошокер', 'емаль', 'емблема', 'ембріон', 'емульсія', 'ендорфін', 'енергетик', 'епінефрін', 'етикетка', 'еякуляція',],
  'є' : ['Євангеліє', 'євро', 'євровалюта', 'європакет', 'єгер', 'єгермейстер', 'єжовник', 'єнот', 'єрж', 'єрш', 'єршик', 'єхідна',],
  'ж' : ['жаба', 'жайворонок', 'жакет', 'жалюзі', 'жар', 'жар-птиця', 'жасмин', 'жезл', 'желатин', 'женьшень', 'жереб', 'жесть', 'жетон', 'живопис', 'животик', 'живчик', 'жижа', 'жила', 'жилет', 'жилетка', 'жир', 'жменя', 'жнива', 'жовч', 'жовчний', 'жуйка', 'жук', 'жук-гнійник', 'жюльєн',],
  'з' : ['завіса', 'завіска', 'зад', 'зайчик', 'заколка', 'закорючка', 'закуска', 'залізо', 'заліковка', 'замок', 'заначка', 'заноза', 'запал', 'запальничка', 'запах', 'записка', 'заповідь', 'заправка', 'запясті', 'зараза', 'зарплата', 'зарядка', 'засув', 'заточка', 'заєць', 'зброя', 'зелень', 'зениця', 'зефір', 'змія', 'значок', 'зошит', 'зуб', 'зілля', 'зіниця', 'зірка',],
  'и' : ['имберь' , 'инджибаба', 'иржа',],
  'і' : ['іграшка', 'Ізюм', 'іконка', 'ікра', 'імплант', 'іній', 'іржа', 'іскра',],
  'ї' : ['їжа', 'їжак-риба', 'їжачок',],
  'й' : ['йо-йо', 'йогурт', 'йод', 'йоржик', 'Йорк', 'йоркшир-терєр',],
  'к' : ['кабель', 'каблук', 'кавун', 'камера', 'Камінь', 'канат', 'канди', 'капсула', 'капуста', 'капюшон', 'капітал', 'карикатура', 'каркас', 'кароп', 'карта', 'картинка', 'картка', 'картопля', 'каталог', 'качка', 'каша', 'квасоля', 'квиток', 'квітка', 'кекс', 'келих', 'килимок', 'кинжал', 'кишеня', 'клаптик', 'клей', 'клеймо', 'ключ', 'книга', 'ковпак', 'кокаїн', 'колода', 'ком', 'комар', 'комок', 'компромат', 'комікс', 'конверт', 'коник', 'конопля', 'конспект', 'концентрат', 'копія', 'кора', 'коржик', 'корм', 'коробка', 'корона', 'корінь', 'коса', 'косар', 'косметика', 'костюм', 'косяк', 'кошеня', 'краватка', 'крапля', 'крем', 'крила', 'кристал', 'крихта', 'кришталь', 'кров', 'кролик', 'кросівок', 'кукла', 'кулак', 'Кулон', 'куля', 'купальник', 'купон', 'купюра', 'куриця', 'куртка', 'куш', 'кущ', 'кіготь', 'кільце', 'кістка', 'кіт',],
  'л' : ['ладан', 'лампочка', 'ланка', 'ланцюжок', 'ласо', 'ластик', 'ластівка', 'латка', 'лебідка', 'лебідь', 'лелека', 'лемур', 'лимон', 'лимонад', 'липучка', 'лист', 'листок', 'листівка', 'личинка', 'лопатка', 'лосини', 'лосось', 'лосьйон', 'лощина', 'лужок', 'луска', 'лушпиння', 'льодяник', 'лялька', 'лящ', 'лінза', 'лінійка', 'літр', 'ліфчик', 'ліхтарик', 'ліщина',],
  'м' : ['магазин', 'магніт', 'мазь', 'майка', 'макарони', 'малина', 'малюнок', 'мантія', 'марихуана', 'мармур', 'маска', 'масло', 'мед', 'медуза', 'мембрана', 'менструація', 'мережі', 'мерка', 'мерч', 'метелик', 'мило', 'миша', 'мобильник', 'мова', 'мозок', 'мозоль', 'молекула', 'молюск', 'монета', 'морепродукт', 'морковка', 'морозиво', 'мотузка', 'мох', 'мочалка', 'мочі', 'мошонка', 'мука', 'мундир', 'мурашка', 'мурашник', 'муха', 'мякоть', 'мясо', 'мяч', 'мікроб', 'мікрофон', 'мірило', 'мішок',],
  'н' : ['навушник', 'надра', 'нажива', 'наказ', 'напій', 'нарцис', 'нафта', 'нерви', 'нитка', 'нота', 'ніж', 'ніс', 'ніштяк',],
  'о' : ['обгортка', 'оберіг', 'облицьовування', 'оболонка', 'обід', 'овощ', 'огірок', 'одяг', 'ожина', 'окови', 'окурок', 'олівець', 'оплата', 'орган', 'осад', 'останки', 'отрута', 'оцет', 'очі',],
  'п' : ['пакет', 'палець', 'палиця', 'путін', 'панчоха', 'папір', 'паразит', 'пастка', 'пелюстка', 'пенал', 'Пензель', 'перли', 'перлина', 'пиво', 'пил', 'писка', 'план', 'пластівці', 'плата', 'платіж', 'пляшка', 'плід', 'повітря', 'подарунок', 'податок', 'помідор', 'подушка', 'попа', 'порцеляна', 'прапор', 'премія', 'препарат', 'протокол', 'птах', 'пухлина', 'підробка', 'підручник', 'пісок',],
  'р' : ['радіація', 'радіо', 'рама', 'рамен', 'рамка', 'рахунок', 'рейдер', 'ремінь', 'речовина', 'реєстр', 'риба', 'робка', 'родимка', 'розетка', 'розєм', 'ромашка', 'роса', 'роутер', 'рукопис', 'рукоятка', 'рулон', 'рюкзак', 'рюмка', 'ріг', 'рідина', 'річ',],
  'с' : ['салют', 'світильник', 'свічка', 'сертифікат', 'серце', 'сеча', 'сигарета', 'сир', 'сироп', 'сиська', 'словник', 'сльоза', 'смарагд', 'смартфон', 'сніг', 'сніжинка', 'сорочка', 'сосок', 'спадщина', 'справа', 'спідниця', 'срібло', 'стаття', 'стегна', 'стик', 'струм', 'стріли', 'стрінги', 'субсидія', 'сувенір', 'судина', 'сумка', 'суміш', 'сфера', 'схема', 'схованка', 'сюрприз', 'сік', 'сіль',],
  'т' : ['таблетка', 'талон', 'талісман', 'тапки', 'тарган', 'тарілка', 'тварина', 'телеграма', 'телефон', 'тент', 'термометр', 'тертка', 'тест', 'тесто', 'тирамісу', 'токсин', 'толстовка', 'топаз', 'топік', 'тост', 'тотем', 'трава', 'трекер', 'трикотаж', 'трофей', 'троянда', 'трубка', 'трубочка', 'труси', 'трутень', 'тумблер', 'туфля', 'тюбик', 'тюльпан', 'тютюн', 'тінь',],
  'у' : ['указ', 'уламки', 'уламок', 'уніформа', 'уста', 'устав',],
  'ф' : ['фаберже', 'фазан', 'файл', 'фаланга', 'фантик', 'фарба', 'фартух', 'фарш', 'фаст-фуд', 'фата', 'фекалії', 'фенечка', 'ферзь', 'феромон', 'флейта', 'флешка', 'фольга', 'фоліант', 'форель', 'фосфор', 'фотознімок', 'фотокарточка', 'фотоплівка', 'фреон', 'фрукт', 'фужер', 'фундук', 'футболка', 'фіалка', 'фігура', 'фігурка', 'фікус', 'філе', 'філин', 'фінанси', 'фінка', 'фінік', 'фісташка', 'фішка',],
  'х' : ['хайлайтер', 'халва', 'хамелеон', 'харчок', 'харчування', 'хер', 'хлам', 'хлист', 'хлопушка', 'хлороформ', 'хліб', 'хлібці', 'холка', 'хомячок', 'хрест', 'хрестик', 'хробак', 'хром', 'хромосома', 'хронометр', 'хрін', 'худи', 'хурма', 'хутро', 'хіджаб', 'хімікат', 'хінкалі',],
  'ц' : ['цвях', 'целофан', 'целюліт', 'цемент', 'цент', 'цибуля', 'цикада', 'цинк', 'циркуль', 'цитрус', 'циферблат', 'цоколь', 'цукерка', 'цукор', 'цуценя', 'цуцик', 'ціанід', 'ціль', 'цінник',],
  'ч' : ['часник', 'частина', 'чача', 'чаша', 'чашечка', 'чашка', 'чебурек', 'чека', 'чепчик', 'червяк', 'черевики', 'черево', 'черепашка', 'черешня', 'чернетка', 'чертеж', 'чижик', 'чизбургер', 'чизкейк', 'чорнила', 'чорнильниця', 'чорниця', 'чорнозем', 'чорнослив', 'чучело', 'чіпси',],
  'ш' : ['шагомер', 'шампанське', 'шампунь', 'шампіньйон', 'шантаж', 'шапочка', 'шарлотка', 'шарнір', 'шарф', 'шаурма', 'шашка', 'шашлик', 'шерсть', 'шершень', 'шестерня', 'шишка', 'шкіра', 'шлунок', 'шльопанці', 'шматок', 'шницель', 'шнурок', 'шовк', 'шовковиця', 'шокер', 'шоколад', 'шпаргалка', 'шпилька', 'штани', 'штатив', 'штекер', 'штик', 'шторка', 'штукатурка',],
  'щ' : ['щебеня', 'щебінь', 'щелепа', 'щербет', 'щипці', 'щоденник', 'щука', 'щупальце', 'щур', 'щіка', 'щіпка',],
  'ю' : ['юань', 'ювелірка', 'юла', 'юппі', 'юфта', 'юшка',],
  'я' : ['яблуко', 'явка', 'язичок', 'яйце', 'ялина', 'ялинка', 'ярлик', 'яструб', 'яєчня',],
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

