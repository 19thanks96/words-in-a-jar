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
let letterFirstа = [ 'абажур', 'абонемент', 'абрикос', 'авоська',  'агрегат', 'адамант', 'азбука', 'аист', 'аквамарин', 'акварель', 'аквариум', 'аккумулятор', 'аксессуар', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюминий', 'амулет', 'амуниция', 'амфетамин', 'амфибия', 'ананас', 'анкета', 'апельсин', 'аппарат', 'аптечка', 'арбуз', 'аркан', 'арт-объект', 'артерия', 'артефакт', 'архив', 'астероид', 'асфальт', 'атом', 'аура', 'афродизиак', 'аэрозоль', ];
let letterFirstб = [ 'бабло', 'бабочка', 'багаж', 'банан', 'баночка', 'баннер', 'барабан', 'батарейка', 'батарея', 'бейдж', 'белизна', 'белка', 'бензин', 'берет', 'бетон', 'Библия', 'бижутерия', 'билет', 'биография', 'бирка', 'бисер', 'бланк', 'блестки', 'блокнот', 'богатство', 'бокал', 'болт', 'бомба', 'Бор', 'ботинки', 'браслет', 'бревно', 'бриллиант', 'бровь', 'бронь', 'брошь', 'брошюра', 'брус', 'брызги', 'брюки', 'будильник', 'буква', 'букварь', 'букет', 'буклет', 'булка', 'булочка', 'булыжник', 'бумага', 'бумеранг', 'бусы', 'бутерброд', 'бутон', 'бутылка', 'бухло', 'бюджет', 'бюллетень', 'бюст', 'бюстгальтер'];
let letterFirstв = [ 'вакцина', 'Вал', 'валюта', 'вектор', 'веревка', 'весы', 'ветка', 'вешалка', 'вещество', 'вещь', 'виза', 'вино', 'витамин', 'вихрь', 'вода', 'водка', 'воздух', 'волос', 'воробей', 'воронка', 'выделения', 'выигрыш', 'выпечка', 'выплата', 'вьюга', ];
let letterFirstг = [ 'гаджет', 'гадюка', 'газировка', 'гайка', 'галантерея', 'галоши', 'галстук', 'галька', 'гамак', 'гамбургер', 'гарантия', 'гардина', 'гармонь', 'гарнитура', 'гашиш', 'гвоздика', 'гвоздь', 'гель', 'гель-смазка', 'герб', 'герметик', 'героин',  'гипс', 'гирлянда', 'глаз', 'глина', 'глист', 'глобус', 'глоток', 'глюкоза', 'гнездо', 'гниль', 'гном', 'голова', 'головастик', 'головка', 'головоломка', 'голограмма', 'голубь', 'горб', 'горелка', 'горло', 'горох', 'горошек', 'горсть', 'горшок', 'грааль', 'град', 'градусник', 'грамм', 'грамота', 'гранат', 'граната', 'гранд', 'гранит', 'грант', 'гранула', 'график', 'графика', 'графин', 'граффити', 'грач', 'гребень', 'грибница', 'гриб', 'грива', 'гривна', 'грим', 'гриф', 'гроздь', 'грош', 'груди', 'грудь', 'грунт', 'груша', 'грыжа', 'грызун', 'грязь', 'губа', 'губка', 'губы', 'гуль', 'гусеница', 'гуща'];
let letterFirstд = [ 'дар', 'датчик', 'дело', 'деньги', 'депозит', 'деталь', 'детеныш', 'джем', 'джинсы', 'диплом', 'дисплей', 'дичь', 'дневник', 'ДНК', 'добыча', 'доза', 'документ', 'доллар', 'доход', 'древесина', 'дробь', 'дрова', 'дурь', 'дятел', ];
let letterFirstе = [ 'Евангелие','евро','егерь','евровалюта','европакет','егермейстер','еда','ежевика','ежик','ежка','ежовник','елочка','енот','ерж','ерш','ершик','ехидна',];
let letterFirstё = [ 'ёж-рыба', 'ёжик', 'ёла', 'ёлка', 'ёлочка', 'ёлчь', 'ёль', 'ёршик',];
let letterFirstж = [ 'жаба', 'жаворонок', 'жакет', 'жалюзи', 'жар', 'жар-птица', 'жасмин', 'жвачка', 'жгут', 'жезл', 'желатин', 'железо', 'желудь', 'желудок', 'желчный', 'желчь', 'жемчуг', 'жемчужина', 'женьшень', 'жесть', 'жетон', 'живопись', 'животик', 'животное', 'живчик', 'жидкость', 'жижа', 'жила', 'жилет', 'жилетка', 'жир', 'жнива', 'жребий', 'жук', 'жук-навозник', 'жюльен', ];
let letterFirstз = [ 'зад', 'зажигалка', 'зайчик', 'заколка', 'закорючка', 'закуска', 'замок', 'занавеска', 'занавес', 'заначка', 'заноза', 'запал', 'запах', 'записка', 'заплатка', 'заповедь', 'заправка', 'запястье', 'зараза', 'зарплата', 'зарядка', 'засов', 'заточка', 'зачетка', 'заяц', 'звезда', 'звено', 'звонок', 'зелень', 'зелье', 'зеница', 'зеркальце', 'зефир', 'змея', 'знамя', 'значок', 'зрачок', 'зуб', ];
let letterFirstи = [ 'игла','иголка','игрушка','изделие','изумруд','Изюм','иконка','икра','имплант','иней','искра','испарение','исходник',];
let letterFirstй = [ 'йо-йо','йогурт','йод','Йорк','йоркшир-терьер',];
let letterFirstк = [ 'кабель', 'каблук', 'Камень', 'камера', 'короп', 'канат', 'кандалы', 'капитал', 'капля', 'капсула', 'капуста', 'капюшон', 'карандаш', 'карикатура', 'каркас', 'карман', 'карта', 'картинка', 'картофель', 'карточка', 'картошка', 'каталог', 'каша', 'кекс', 'кинжал', 'Кисть', 'клей', 'клеймо', 'клочок', 'ключ', 'книга', 'кнут', 'коврик', 'коготь', 'кожа', 'кокаин', 'колокольчик', 'колпак', 'кольцо', 'ком', 'комар', 'комикс', 'комок', 'компромат', 'конверт', 'конопля', 'конспект', 'конфета', 'концентрат', 'копия', 'кора', 'корень', 'корм', 'коробка', 'корона', 'коса', 'косарь', 'косметика', 'кость', 'костюм', 'косяк', 'кот', 'котенок', 'кошелек', 'краска', 'крем', 'крест', 'крестик', 'кристалл', 'кровь', 'кролик', 'кроссовок', 'крошка', 'кружева', 'крылья', 'крыса', 'крючок', 'кузнечик', 'кукла', 'кулак', 'Кулон', 'купальник', 'купон', 'купюра', 'Курица', 'куртка', 'кусок', 'куст', 'куш', ];
let letterFirstл = [ 'ладан', 'ладонь', 'лампочка', 'лассо', 'ластик', 'ласточка', 'лебедка', 'лебедь', 'леденец', 'лемур', 'лепесток', 'лепешка', 'лещ', 'лещина', 'лимон', 'лимонад', 'линейка', 'линза', 'липучка', 'лист', 'листок', 'литр', 'лифчик', 'личинка', 'ловушка', 'лопатка', 'лосины', 'лосось', 'лосьон', 'лощина', 'лук', 'лягушка', 'лялька', ];
let letterFirstм = [ 'магазин', 'магнит', 'мазь', 'майка', 'макароны', 'малина', 'мантия', 'марихуана', 'маска', 'масло', 'мед', 'медуза', 'мелочь', 'мембрана', 'менструация', 'мерило', 'мерка', 'мерч', 'мех', 'мешок', 'микроб', 'микрофон', 'мобильник', 'мозг', 'мозоль', 'молекула', 'моллюск', 'монета', 'морепродукт', 'морковка', 'мороженое', 'мотылек', 'мох', 'моча', 'мочалка', 'мошонка', 'мощи', 'мрамор', 'мука', 'мундир', 'муравейник', 'мурашка', 'муха', 'мыло', 'мышь', 'мякоть', 'мясо', 'мяч', ];
let letterFirstн = [ 'набросок', 'нажива', 'наказ', 'налог', 'напиток', 'нарцисс', 'наследство', 'наушники', 'недра', 'нервы', 'нефть', 'нить', 'ништяк', 'нож', 'нос', 'нота', ];
let letterFirstо = [ 'обед', 'оберег', 'обертка', 'облицовка', 'обломки', 'оболочка', 'обувь', 'овощ', 'одежда', 'оковы', 'окурок', 'оплата', 'опухоль', 'орган', 'орех', 'оружие', 'осадок', 'осколок', 'останки', 'отвар', 'откат', 'открытка', 'отрава', 'отходы', ];
let letterFirstп = [ 'пакет', 'палец', 'палка', 'паразит', 'песок', 'пенал', 'пиво', 'писька', 'письмо', 'питание', 'питомец', 'пища', 'план', 'плата', 'платеж', 'плод', 'подарок', 'подделка', 'поделка', 'подушка', 'попа', 'почва', 'премия', 'препарат', 'протокол', 'птица', 'пыль', ];
let letterFirstр = [ 'радиация','радио','разъем','ракушка','рама','рамен','рамка','расческа','реестр','резинка','рейдер','ремень','ржавчина','рог','родимка','роза','розетка','ромашка','роса','роутер','рубашка','рукопись','рукоятка','рулон','рыба','рюкзак','рюмка','рябина',];
let letterFirstс = [ 'салют', 'сахар', 'светильник', 'стринги', 'соль', 'сироп', 'cвеча', 'сердце', 'серебро', 'сертификат', 'сигарета', 'сиська', 'слеза', 'словарь', 'смартфон', 'смесь', 'снег', 'снежинка', 'сок', 'cоль', 'сорняк', 'сосок', 'сосуд', 'статья', 'стих', 'cтрела', 'струя', 'стык', 'субсидия', 'сувенир', 'сумка', 'сфера', 'схема', 'счет', 'сюрприз', ];
let letterFirstт = [ 'табак', 'таблетка', 'тайник', 'талисман', 'талон', 'тапки', 'таракан', 'тарелка', 'творог', 'телеграмма', 'телефон', 'тент', 'тень', 'терка', 'термометр', 'тест', 'тесто', 'тетрадь', 'тирамису', 'токсин', 'толстовка', 'топаз', 'топик', 'тост', 'тотем', 'трава', 'травка', 'трекер', 'трикотаж', 'трофей', 'трубка', 'трубочка', 'трусы', 'трутень', 'тряпка', 'тумблер', 'туфля', 'тюбик', 'тюльпан', ];
let letterFirstу = [ 'уголь', 'ужин', 'узел', 'указ', 'уксус', 'улей', 'униформа', 'уста', 'устав', 'утка', 'ухо', 'учебник', 'уши', ];
let letterFirstф = [ 'фаберже', 'фазан', 'файл', 'фаланга', 'фантик', 'фартук', 'фарфор', 'фарш', 'фасоль', 'фаст-фуд', 'фата', 'фекалии', 'фенечка', 'ферзь', 'феромон', 'фиалка', 'фигура', 'фигурка', 'фикус', 'филе', 'филин', 'финансы', 'финик', 'финка', 'фисташка', 'фишка', 'флейта', 'флешка', 'фолиант', 'фольга', 'фонарик', 'форель', 'фосфор', 'фотокарточка', 'фотопленка', 'фотоснимок', 'фреон', 'фрукт', 'фужер', 'фундук', 'футболка', ];
let letterFirstх = [ 'хавка', 'хайлайтер', 'халва', 'хамелеон', 'харчок', 'хер', 'хиджаб', 'химикат', 'хинкали', 'хлам', 'хлеб', 'хлебцы', 'хлопушка', 'хлопья', 'хлороформ', 'хлыст', 'холка', 'хомячок', 'хрен', 'хром', 'хромосома', 'хронометр', 'хрусталь', 'худи', 'хурма', ];
let letterFirstц = [ 'цветок', 'целлофан', 'целлюлит', 'цель', 'цемент', 'ценник', 'цент', 'цепочка', 'цианид', 'цибуля', 'цикада', 'цинк', 'циркуль', 'цитрус', 'циферблат', 'цоколь', 'цуцик', ];
let letterFirstч = [ 'часть', 'часы', 'чача', 'чаша', 'чашечка', 'чашка', 'чебурек', 'чекушка', 'челюсть', 'чепчик', 'червь', 'червяк', 'черепашка', 'черешня', 'черника', 'чернила', 'чернильница', 'черновик', 'чернозем', 'чернослив', 'чертеж', 'чеснок', 'чешуя', 'чижик', 'чизбургер', 'чизкейк', 'чипсы', 'чрево', 'чресла', 'чулок', 'чучело', ];
let letterFirstш = [ 'шагомер', 'шампанское', 'шампиньон', 'шампунь', 'шантаж', 'шапочка', 'шар', 'шарик', 'шарлотка', 'шарнир', 'шарф', 'шаурма', 'шашка', 'шашлык', 'шелк', 'шелковица', 'шелуха', 'шерсть', 'шершень', 'шестеренка', 'шишка', 'шлепанцы', 'шлепки', 'шмель', 'шницель', 'шнурок', 'шокер', 'шоколад', 'шпаргалка', 'шпилька', 'штаны', 'штатив', 'штекер', 'шторка', 'штукатурка', 'штык', ];
let letterFirstщ = [ 'щебенка', 'щебень', 'щека', 'щелочь', 'щенок', 'щепка', 'щепотка', 'щербет', 'щипцы', 'щука', 'щупальце', 'щур', ];
let letterFirstэ = [ 'эвкалипт', 'эклер', 'эклипс', 'экономка', 'экран', 'экскременты', 'экстракт', 'элексир', 'электрод', 'электрон', 'электрошокер', 'эмаль', 'эмблема', 'эмбрион', 'эмульсия', 'эндорфин', 'энергетик', 'эпинефрин', 'этикетка', 'эякуляция', ];
let letterFirstю = [ 'юань', 'юбка', 'ювелирка', 'юла', 'юппи', 'юфта', 'юшка',];
let letterFirstя = [ 'яблоко', 'явка', 'язык', 'язычок', 'яичница', 'яйцо', 'янтарь', 'ярлычок', 'ястреб',];
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

if (letterFirstа.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstа);
  stepRobot(word, letterFirstа);
  }
    else if (letterFirstб.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstб);
  stepRobot(word, letterFirstб);
  }
    else if (letterFirstв.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstв);
  stepRobot(word, letterFirstв);
  }
    else if (letterFirstг.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstг);
  stepRobot(word, letterFirstг);
  }
    else if (letterFirstд.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstд);
  stepRobot(word, letterFirstд);
  }
    else if (letterFirstе.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstе);
  stepRobot(word, letterFirstе);
  }
    else if (letterFirstё.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstё);
  stepRobot(word, letterFirstё);
  }
    else if (letterFirstж.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstж);
  stepRobot(word, letterFirstж);
  }
    else if (letterFirstз.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstз);
  stepRobot(word, letterFirstз);
  }
    else if (letterFirstи.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstи);
  stepRobot(word, letterFirstи);
  }
    else if (letterFirstй.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstй);
  stepRobot(word, letterFirstй);
  }
    else if (letterFirstк.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstк);
  stepRobot(word, letterFirstк);
  }
    else if (letterFirstл.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstл);
  stepRobot(word, letterFirstл);
  }
    else if (letterFirstм.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstм);
  stepRobot(word, letterFirstм);
  }
    else if (letterFirstн.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstн);
  stepRobot(word, letterFirstн);
  }
    else if (letterFirstо.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstо);
  stepRobot(word, letterFirstо);
  }
    else if (letterFirstп.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstп);
  stepRobot(word, letterFirstп);
  }
    else if (letterFirstр.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstр);
  stepRobot(word, letterFirstр);
  }
    else if (letterFirstс.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstс);
  stepRobot(word, letterFirstс);
  }
    else if (letterFirstт.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstт);
  stepRobot(word, letterFirstт);
  }
    else if (letterFirstу.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstу);
  stepRobot(word, letterFirstу);
  }
    else if (letterFirstф.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstф);
  stepRobot(word, letterFirstф);
  }
    else if (letterFirstх.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstх);
  stepRobot(word, letterFirstх);
  }
    else if (letterFirstц.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstц);
  stepRobot(word, letterFirstц);
  }
    else if (letterFirstч.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstч);
  stepRobot(word, letterFirstч);
  }
    else if (letterFirstш.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstш);
  stepRobot(word, letterFirstш);
  }
    else if (letterFirstщ.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstщ);
  stepRobot(word, letterFirstщ);
  }
    else if (letterFirstэ.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstэ);
  stepRobot(word, letterFirstэ);
  }
    else if (letterFirstю.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstю);
  stepRobot(word, letterFirstю);
  }
    else if (letterFirstя.includes(word)) {
  printLettersNum(word);
  emptyField(word);
  deletesValue(word, letterFirstя);
  stepRobot(word, letterFirstя);
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

