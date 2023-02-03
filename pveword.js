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

  let letterFirstа = ['абажур', 'абонемент', 'абрикос', 'авоська', 'агрегат', 'адамант', 'аерозоль', 'азбука', 'аквамарин', 'акварель', 'акваріум', 'аксесуар', 'акумулятор', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюміній', 'амулет', 'амуніція', 'амфетамін', 'амфібія', 'ананас', 'анкета', 'апарат', 'апельсин', 'аптечка', 'аркан', 'арт-обєкт', 'артерія', 'артефакт', 'архів', 'астероїд', 'асфальт', 'атом', 'аура', 'афродизіак',];
  let letterFirstб = ['бабло', 'багаж', 'багатство', 'банан', 'банер', 'баночка', 'барабан', 'батарейка', 'батарея', 'батіг', 'бейдж', 'бензин', 'бере', 'бетон', 'бирка', 'бланк', 'блискітки', 'блокнот', 'болт', 'бомба', 'Бор', 'браслет', 'брова', 'бронь', 'брошка', 'брошура', 'бруд', 'брус', 'брюки', 'будильник', 'буква', 'буквар', 'букет', 'буклет', 'булка', 'булочка', 'булыжник', 'бумеранг', 'бурштин', 'бурян', 'буси', 'бутерброд', 'бутон', 'бухло', 'бюджет', 'бюлетень', 'бюст', 'бюстгальтер', 'Біблія', 'біжутерія', 'білизна', 'білка', 'біографія', 'бісер',];
  let letterFirstв = ['вага', 'вакцина', 'Вал', 'валюта', 'вечеря', 'взуття', 'виграш', 'видобуток', 'виділення', 'вино', 'випаровування', 'виплата', 'випічка', 'виріб', 'вихованець', 'вихор', 'вихідник', 'вода', 'волос', 'воронка', 'вугілля', 'вузол', 'вулик', 'вуха', 'вухо', 'відвар', 'відкат', 'відходи', 'віза', 'вірш', 'вітамін', 'вішалка',];
  let letterFirstг = ['гаджет', 'гадюка', 'газування', 'гайка', 'галантерея', 'галоші', 'галька', 'гамак', 'гаманець', 'гамбургер', 'ганчірка', 'гарантія', 'гардина', 'гармонь', 'гарнітура', 'гачок', 'гашиш', 'гвоздика', 'гель', 'гель-мастило', 'герб', 'герметик', 'героїн', 'глина', 'глист', 'глобус', 'глоток', 'глюкоза', 'гниль', 'гном', 'гніздо', 'годинник', 'голка', 'голова', 'головастик', 'головка', 'головоломка', 'голограма', 'голуб', 'горб', 'горло', 'горобець', 'горобина', 'горох', 'горошок', 'горщик', 'горілка', 'горіх', 'грааль', 'град', 'градусник', 'грак', 'грам', 'грамота', 'гранат', 'граната', 'гранд', 'грант', 'гранула', 'граніт', 'графік', 'графіка', 'графін', 'графіті', 'гребінець', 'гребінь', 'гриб', 'грибниця', 'грива', 'гривня', 'грижа', 'гризун', 'грим', 'гриф', 'гроно', 'грош', 'гроші', 'груди', 'грунт', 'груша', 'губа', 'губи', 'губка', 'гуль', 'гума', 'гусениця', 'гуща', 'гілка', 'гіпс', 'гірлянда',];
  let letterFirstд = ['дар', 'датчик', 'депозит', 'деревина', 'деталь', 'джгут', 'джем', 'джинси', 'джміль', 'дзвінок', 'дзвіночок', 'дзеркальце', 'диплом', 'дисплей', 'дитинча', 'дичина', 'ДНК', 'доза', 'документ', 'долар', 'долонь', 'дохід', 'дроб', 'дрова', 'дрібниця', 'дур', 'дятел', 'діамант',];
  let letterFirstе = ['евкаліпт', 'еклер', 'екліпс', 'економка', 'екран', 'екскременти', 'екстракт', 'елексир', 'електрод', 'електрон', 'електрошокер', 'емаль', 'емблема', 'ембріон', 'емульсія', 'ендорфін', 'енергетик', 'епінефрін', 'етикетка', 'еякуляція',];
  let letterFirstє = ['Євангеліє', 'євро', 'євровалюта', 'європакет', 'єгер', 'єгермейстер', 'єжовник', 'єнот', 'єрж', 'єрш', 'єршик', 'єхідна',];
  let letterFirstж = ['жаба', 'жайворонок', 'жакет', 'жалюзі', 'жар', 'жар-птиця', 'жасмин', 'жезл', 'желатин', 'женьшень', 'жереб', 'жесть', 'жетон', 'живопис', 'животик', 'живчик', 'жижа', 'жила', 'жилет', 'жилетка', 'жир', 'жменя', 'жнива', 'жовч', 'жовчний', 'жуйка', 'жук', 'жук-гнійник', 'жюльєн',];
  let letterFirstз = ['завіса', 'завіска', 'зад', 'зайчик', 'заколка', 'закорючка', 'закуска', 'залізо', 'заліковка', 'замок', 'заначка', 'заноза', 'запал', 'запальничка', 'запах', 'записка', 'заповідь', 'заправка', 'запясті', 'зараза', 'зарплата', 'зарядка', 'засув', 'заточка', 'заєць', 'зброя', 'зелень', 'зениця', 'зефір', 'змія', 'значок', 'зошит', 'зуб', 'зілля', 'зіниця', 'зірка',];
  let letterFirstи = ['имберь' , 'инджибаба', 'иржа',];
  let letterFirstі = ['іграшка', 'Ізюм', 'іконка', 'ікра', 'імплант', 'іній', 'іржа', 'іскра',];
  let letterFirstї = ['їжа', 'їжак-риба', 'їжачок',];
  let letterFirstй = ['йо-йо', 'йогурт', 'йод', 'йоржик', 'Йорк', 'йоркшир-терєр',];
  let letterFirstк = ['кабель', 'каблук', 'кавун', 'камера', 'Камінь', 'канат', 'канди', 'капсула', 'капуста', 'капюшон', 'капітал', 'карикатура', 'каркас', 'кароп', 'карта', 'картинка', 'картка', 'картопля', 'каталог', 'качка', 'каша', 'квасоля', 'квиток', 'квітка', 'кекс', 'келих', 'килимок', 'кинжал', 'кишеня', 'клаптик', 'клей', 'клеймо', 'ключ', 'книга', 'ковпак', 'кокаїн', 'колода', 'ком', 'комар', 'комок', 'компромат', 'комікс', 'конверт', 'коник', 'конопля', 'конспект', 'концентрат', 'копія', 'кора', 'коржик', 'корм', 'коробка', 'корона', 'корінь', 'коса', 'косар', 'косметика', 'костюм', 'косяк', 'кошеня', 'краватка', 'крапля', 'крем', 'крила', 'кристал', 'крихта', 'кришталь', 'кров', 'кролик', 'кросівок', 'кукла', 'кулак', 'Кулон', 'куля', 'купальник', 'купон', 'купюра', 'куриця', 'куртка', 'куш', 'кущ', 'кіготь', 'кільце', 'кістка', 'кіт',];
  let letterFirstл = ['ладан', 'лампочка', 'ланка', 'ланцюжок', 'ласо', 'ластик', 'ластівка', 'латка', 'лебідка', 'лебідь', 'лелека', 'лемур', 'лимон', 'лимонад', 'липучка', 'лист', 'листок', 'листівка', 'личинка', 'лопатка', 'лосини', 'лосось', 'лосьйон', 'лощина', 'лужок', 'луска', 'лушпиння', 'льодяник', 'лялька', 'лящ', 'лінза', 'лінійка', 'літр', 'ліфчик', 'ліхтарик', 'ліщина',];
  let letterFirstм = ['магазин', 'магніт', 'мазь', 'майка', 'макарони', 'малина', 'малюнок', 'мантія', 'марихуана', 'мармур', 'маска', 'масло', 'мед', 'медуза', 'мембрана', 'менструація', 'мережі', 'мерка', 'мерч', 'метелик', 'мило', 'миша', 'мобильник', 'мова', 'мозок', 'мозоль', 'молекула', 'молюск', 'монета', 'морепродукт', 'морковка', 'морозиво', 'мотузка', 'мох', 'мочалка', 'мочі', 'мошонка', 'мука', 'мундир', 'мурашка', 'мурашник', 'муха', 'мякоть', 'мясо', 'мяч', 'мікроб', 'мікрофон', 'мірило', 'мішок',];
  let letterFirstн = ['навушник', 'надра', 'нажива', 'наказ', 'напій', 'нарцис', 'нафта', 'нерви', 'нитка', 'нота', 'ніж', 'ніс', 'ніштяк',];
  let letterFirstо = ['обгортка', 'оберіг', 'облицьовування', 'оболонка', 'обід', 'овощ', 'одяг', 'ожина', 'окови', 'окурок', 'олівець', 'оплата', 'орган', 'осад', 'останки', 'отрута', 'оцет', 'очі',];
  let letterFirstп = ['пакет', 'палець', 'палиця', 'путін', 'панчоха', 'папір', 'паразит', 'пастка', 'пелюстка', 'пенал', 'Пензель', 'перли', 'перлина', 'пиво', 'пил', 'писка', 'план', 'пластівці', 'плата', 'платіж', 'пляшка', 'плід', 'повітря', 'подарунок', 'податок', 'подушка', 'попа', 'порцеляна', 'прапор', 'премія', 'препарат', 'протокол', 'птах', 'пухлина', 'підробка', 'підручник', 'пісок',];
  let letterFirstр = ['радіація', 'радіо', 'рама', 'рамен', 'рамка', 'рахунок', 'рейдер', 'ремінь', 'речовина', 'реєстр', 'риба', 'робка', 'родимка', 'розетка', 'розєм', 'ромашка', 'роса', 'роутер', 'рукопис', 'рукоятка', 'рулон', 'рюкзак', 'рюмка', 'ріг', 'рідина', 'річ',];
  let letterFirstс = ['салют', 'світильник', 'свічка', 'сертифікат', 'серце', 'сеча', 'сигарета', 'сир', 'сироп', 'сиська', 'словник', 'сльоза', 'смарагд', 'смартфон', 'сніг', 'сніжинка', 'сорочка', 'сосок', 'спадщина', 'справа', 'спідниця', 'срібло', 'стаття', 'стегна', 'стик', 'струм', 'стріли', 'стрінги', 'субсидія', 'сувенір', 'судина', 'сумка', 'суміш', 'сфера', 'схема', 'схованка', 'сюрприз', 'сік', 'сіль',];
  let letterFirstт = ['таблетка', 'талон', 'талісман', 'тапки', 'тарган', 'тарілка', 'тварина', 'телеграма', 'телефон', 'тент', 'термометр', 'тертка', 'тест', 'тесто', 'тирамісу', 'токсин', 'толстовка', 'топаз', 'топік', 'тост', 'тотем', 'трава', 'трекер', 'трикотаж', 'трофей', 'троянда', 'трубка', 'трубочка', 'труси', 'трутень', 'тумблер', 'туфля', 'тюбик', 'тюльпан', 'тютюн', 'тінь',];
  let letterFirstу = ['указ', 'уламки', 'уламок', 'уніформа', 'уста', 'устав',];
  let letterFirstф = ['фаберже', 'фазан', 'файл', 'фаланга', 'фантик', 'фарба', 'фартух', 'фарш', 'фаст-фуд', 'фата', 'фекалії', 'фенечка', 'ферзь', 'феромон', 'флейта', 'флешка', 'фольга', 'фоліант', 'форель', 'фосфор', 'фотознімок', 'фотокарточка', 'фотоплівка', 'фреон', 'фрукт', 'фужер', 'фундук', 'футболка', 'фіалка', 'фігура', 'фігурка', 'фікус', 'філе', 'філин', 'фінанси', 'фінка', 'фінік', 'фісташка', 'фішка',];
  let letterFirstх = ['хайлайтер', 'халва', 'хамелеон', 'харчок', 'харчування', 'хер', 'хлам', 'хлист', 'хлопушка', 'хлороформ', 'хліб', 'хлібці', 'холка', 'хомячок', 'хрест', 'хрестик', 'хробак', 'хром', 'хромосома', 'хронометр', 'хрін', 'худи', 'хурма', 'хутро', 'хіджаб', 'хімікат', 'хінкалі',];
  let letterFirstц = ['цвях', 'целофан', 'целюліт', 'цемент', 'цент', 'цибуля', 'цикада', 'цинк', 'циркуль', 'цитрус', 'циферблат', 'цоколь', 'цукерка', 'цукор', 'цуценя', 'цуцик', 'ціанід', 'ціль', 'цінник',];
  let letterFirstч = ['часник', 'частина', 'чача', 'чаша', 'чашечка', 'чашка', 'чебурек', 'чека', 'чепчик', 'червяк', 'черевики', 'черево', 'черепашка', 'черешня', 'чернетка', 'чертеж', 'чижик', 'чизбургер', 'чизкейк', 'чорнила', 'чорнильниця', 'чорниця', 'чорнозем', 'чорнослив', 'чучело', 'чіпси',];
  let letterFirstш = ['шагомер', 'шампанське', 'шампунь', 'шампіньйон', 'шантаж', 'шапочка', 'шарлотка', 'шарнір', 'шарф', 'шаурма', 'шашка', 'шашлик', 'шерсть', 'шершень', 'шестерня', 'шишка', 'шкіра', 'шлунок', 'шльопанці', 'шматок', 'шницель', 'шнурок', 'шовк', 'шовковиця', 'шокер', 'шоколад', 'шпаргалка', 'шпилька', 'штани', 'штатив', 'штекер', 'штик', 'шторка', 'штукатурка',];
  let letterFirstщ = ['щебеня', 'щебінь', 'щелепа', 'щербет', 'щипці', 'щоденник', 'щука', 'щупальце', 'щур', 'щіка', 'щіпка',];
  let letterFirstю = ['юань', 'ювелірка', 'юла', 'юппі', 'юфта', 'юшка',];
  let letterFirstя = ['яблуко', 'явка', 'язичок', 'яйце', 'ялина', 'ялинка', 'ярлик', 'яструб', 'яєчня',];

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
var word = area.value;
if(letterFirstа.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstа);
    stepRobot(word,  letterFirstа);
  } else if (letterFirstб.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstб);
    stepRobot(word, letterFirstб);
  } else if (letterFirstв.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstв);
    stepRobot(word, letterFirstв);
  } else if (letterFirstг.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstг);
    stepRobot(word, letterFirstг);
  } else if (letterFirstд.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstд);
    stepRobot(word, letterFirstд);
  }  else if (letterFirstе.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstе);
    stepRobot(word, letterFirstе);
  } else if (letterFirstє.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstє);
    stepRobot(word, letterFirstє);
  } else if (letterFirstж.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstж);
    stepRobot(word, letterFirstж);
  } else if (letterFirstз.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstз);
    stepRobot(word, letterFirstз);
  } else if (letterFirstи.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstи);
    stepRobot(word, letterFirstи);
  } else if (letterFirstі.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstі);
    stepRobot(word, letterFirstі);
  } else if (letterFirstї.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstї);
    stepRobot(word, letterFirstї);
  } else if (letterFirstй.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstй);
    stepRobot(word, letterFirstй);
  } else if (letterFirstк.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstк);
    stepRobot(word, letterFirstк);
  } else if (letterFirstл.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstл);
    stepRobot(word, letterFirstл);
  } else if (letterFirstм.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstм);
    stepRobot(word, letterFirstм);
  } else if (letterFirstн.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstн);
    stepRobot(word, letterFirstн);
  } else if (letterFirstо.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstо);
    stepRobot(word, letterFirstо);
  } else if (letterFirstп.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstп);
    stepRobot(word, letterFirstп);
  } else if (letterFirstр.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstр);
    stepRobot(word, letterFirstр);
  } else if (letterFirstс.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstс);
    stepRobot(word, letterFirstс);
  } else if (letterFirstт.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstт);
    stepRobot(word, letterFirstт);
  } else if (letterFirstу.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstу);
    stepRobot(word, letterFirstу);
  } else if (letterFirstф.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstф);
    stepRobot(word, letterFirstф);
  } else if (letterFirstх.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstх);
    stepRobot(word, letterFirstх);
  } else if (letterFirstц.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstц);
    stepRobot(word, letterFirstц);
  } else if (letterFirstч.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstч);
    stepRobot(word, letterFirstч);
  } else if (letterFirstш.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstш);
    stepRobot(word, letterFirstш);
  } else if (letterFirstщ.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstщ);
    stepRobot(word, letterFirstщ);
  } else if (letterFirstю.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstю);
    stepRobot(word, letterFirstю);
  } else if (letterFirstя.includes(word)) {
    writeWord(word);
    emptyField(word);
    deletesValueArray(word, letterFirstя);
    stepRobot(word, letterFirstя);
  } else {
    wrong(area);
  }
}

function writeWord(word) {
  valuePlayer += word.length;
  document.querySelector('#stars').innerHTML = valuePlayer; 
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
    let robot = arrays.find(el => el.length < word.length+2);
    robotWord.push(robot);
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