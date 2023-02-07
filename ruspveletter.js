let valuePlayer = 0;
let valueRobot = 0;
let area = document.querySelector('#textplace');
let returnResult = document.querySelector("#result");
let previous = [];
let robotWord = [];

function play() {
let audio = new Audio('out.mp3');
audio.play();

document.querySelector('#sound').src="/sound.png";
console.log(document.querySelector('#sound').src="sound.png");
/*console.log(sounds.src.replace());
sounds.src.replace('file://sound.png');*/
}

let words = {
  'а' : [ 'абажур', 'абонемент', 'абрикос', 'авоська',  'агрегат', 'адамант', 'азбука', 'аист', 'аквамарин', 'акварель', 'аквариум', 'аккумулятор', 'аксессуар', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюминий', 'амулет', 'амуниция', 'амфетамин', 'амфибия', 'ананас', 'анкета', 'апельсин', 'аппарат', 'аптечка', 'арбуз', 'аркан', 'арт-объект', 'артерия', 'артефакт', 'архив', 'астероид', 'асфальт', 'атом', 'аура', 'афродизиак', 'аэрозоль',],
  'б' : [ 'бабло', 'бабочка', 'багаж', 'банан', 'баночка', 'баннер', 'барабан', 'батарейка', 'батарея', 'бейдж', 'белизна', 'белка', 'бензин', 'берет', 'бетон', 'Библия', 'бижутерия', 'билет', 'биография', 'бирка', 'бисер', 'бланк', 'блестки', 'блокнот', 'богатство', 'бокал', 'болт', 'бомба', 'Бор', 'ботинки', 'браслет', 'бревно', 'бриллиант', 'бровь', 'бронь', 'брошь', 'брошюра', 'брус', 'брызги', 'брюки', 'будильник', 'буква', 'букварь', 'букет', 'буклет', 'булка', 'булочка', 'булыжник', 'бумага', 'бумеранг', 'бусы', 'бутерброд', 'бутон', 'бутылка', 'бухло', 'бюджет', 'бюллетень', 'бюст', 'бюстгальтер'],
  'в' : [ 'вакцина', 'Вал', 'валюта', 'вектор', 'веревка', 'весы', 'ветка', 'вешалка', 'вещество', 'вещь', 'виза', 'вино', 'витамин', 'вихрь', 'вода', 'водка', 'воздух', 'волос', 'воробей', 'воронка', 'выделения', 'выигрыш', 'выпечка', 'выплата', 'вьюга',],
  'г' : [ 'гаджет', 'гадюка', 'газировка', 'гайка', 'галантерея', 'галоши', 'галстук', 'галька', 'гамак', 'гамбургер', 'гарантия', 'гардина', 'гармонь', 'гарнитура', 'гашиш', 'гвоздика', 'гвоздь', 'гель', 'гель-смазка', 'герб', 'герметик', 'героин',  'гипс', 'гирлянда', 'глаз', 'глина', 'глист', 'глобус', 'глоток', 'глюкоза', 'гнездо', 'гниль', 'гном', 'голова', 'головастик', 'головка', 'головоломка', 'голограмма', 'голубь', 'горб', 'горелка', 'горло', 'горох', 'горошек', 'горсть', 'горшок', 'грааль', 'град', 'градусник', 'грамм', 'грамота', 'гранат', 'граната', 'гранд', 'гранит', 'грант', 'гранула', 'график', 'графика', 'графин', 'граффити', 'грач', 'гребень', 'грибница', 'гриб', 'грива', 'гривна', 'грим', 'гриф', 'гроздь', 'грош', 'груди', 'грудь', 'грунт', 'груша', 'грыжа', 'грызун', 'грязь', 'губа', 'губка', 'губы', 'гуль', 'гусеница', 'гуща'],
  'д' : [ 'дар', 'датчик', 'дело', 'деньги', 'депозит', 'деталь', 'детеныш', 'джем', 'джинсы', 'диплом', 'дисплей', 'дичь', 'дневник', 'ДНК', 'добыча', 'доза', 'документ', 'доллар', 'доход', 'древесина', 'дробь', 'дрова', 'дурь', 'дятел',],
  'е' : [ 'Евангелие','евро','егерь','евровалюта','европакет','егермейстер','еда','ежевика','ежик','ежка','ежовник','елочка','енот','ерж','ерш','ершик','ехидна',],
  'ё' : [ 'ёж-рыба', 'ёжик', 'ёла', 'ёлка', 'ёлочка', 'ёлчь', 'ёль', 'ёршик',],
  'ж' : [ 'жаба', 'жаворонок', 'жакет', 'жалюзи', 'жар', 'жар-птица', 'жасмин', 'жвачка', 'жгут', 'жезл', 'желатин', 'железо', 'желудь', 'желудок', 'желчный', 'желчь', 'жемчуг', 'жемчужина', 'женьшень', 'жесть', 'жетон', 'живопись', 'животик', 'животное', 'живчик', 'жидкость', 'жижа', 'жила', 'жилет', 'жилетка', 'жир', 'жнива', 'жребий', 'жук', 'жук-навозник', 'жюльен',],
  'з' : [ 'зад', 'зажигалка', 'зайчик', 'заколка', 'закорючка', 'закуска', 'замок', 'занавеска', 'занавес', 'заначка', 'заноза', 'запал', 'запах', 'записка', 'заплатка', 'заповедь', 'заправка', 'запястье', 'зараза', 'зарплата', 'зарядка', 'засов', 'заточка', 'зачетка', 'заяц', 'звезда', 'звено', 'звонок', 'зелень', 'зелье', 'зеница', 'зеркальце', 'зефир', 'змея', 'знамя', 'значок', 'зрачок', 'зуб',],
  'и' : [ 'игла','иголка','игрушка','изделие','изумруд','Изюм','иконка','икра','имплант','иней','искра','испарение','исходник',],
  'й' : [ 'йо-йо','йогурт','йод','Йорк','йоркшир-терьер',],
  'к' : [ 'кабель', 'каблук', 'Камень', 'камера', 'короп', 'канат', 'кандалы', 'капитал', 'капля', 'капсула', 'капуста', 'капюшон', 'карандаш', 'карикатура', 'каркас', 'карман', 'карта', 'картинка', 'картофель', 'карточка', 'картошка', 'каталог', 'каша', 'кекс', 'кинжал', 'Кисть', 'клей', 'клеймо', 'клочок', 'ключ', 'книга', 'кнут', 'коврик', 'коготь', 'кожа', 'кокаин', 'колокольчик', 'колпак', 'кольцо', 'ком', 'комар', 'комикс', 'комок', 'компромат', 'конверт', 'конопля', 'конспект', 'конфета', 'концентрат', 'копия', 'кора', 'корень', 'корм', 'коробка', 'корона', 'коса', 'косарь', 'косметика', 'кость', 'костюм', 'косяк', 'кот', 'котенок', 'кошелек', 'краска', 'крем', 'крест', 'крестик', 'кристалл', 'кровь', 'кролик', 'кроссовок', 'крошка', 'кружева', 'крылья', 'крыса', 'крючок', 'кузнечик', 'кукла', 'кулак', 'Кулон', 'купальник', 'купон', 'купюра', 'Курица', 'куртка', 'кусок', 'куст', 'куш',],
  'л' : [ 'ладан', 'ладонь', 'лампочка', 'лассо', 'ластик', 'ласточка', 'лебедка', 'лебедь', 'леденец', 'лемур', 'лепесток', 'лепешка', 'лещ', 'лещина', 'лимон', 'лимонад', 'линейка', 'линза', 'липучка', 'лист', 'листок', 'литр', 'лифчик', 'личинка', 'ловушка', 'лопатка', 'лосины', 'лосось', 'лосьон', 'лощина', 'лук', 'лягушка', 'лялька',],
  'м' : [ 'магазин', 'магнит', 'мазь', 'майка', 'макароны', 'малина', 'мантия', 'марихуана', 'маска', 'масло', 'мед', 'медуза', 'мелочь', 'мембрана', 'менструация', 'мерило', 'мерка', 'мерч', 'мех', 'мешок', 'микроб', 'микрофон', 'мобильник', 'мозг', 'мозоль', 'молекула', 'моллюск', 'монета', 'морепродукт', 'морковка', 'мороженое', 'мотылек', 'мох', 'моча', 'мочалка', 'мошонка', 'мощи', 'мрамор', 'мука', 'мундир', 'муравейник', 'мурашка', 'муха', 'мыло', 'мышь', 'мякоть', 'мясо', 'мяч',],
  'н' : [ 'набросок', 'нажива', 'наказ', 'налог', 'напиток', 'нарцисс', 'наследство', 'наушники', 'недра', 'нервы', 'нефть', 'нить', 'ништяк', 'нож', 'нос', 'нота',],
  'о' : [ 'обед', 'оберег', 'обертка', 'облицовка', 'обломки', 'оболочка', 'обувь', 'овощ', 'одежда', 'оковы', 'окурок', 'оплата', 'опухоль', 'орган', 'орех', 'оружие', 'осадок', 'осколок', 'останки', 'отвар', 'откат', 'открытка', 'отрава', 'отходы',],
  'п' : [ 'пакет', 'палец', 'палка', 'паразит', 'песок', 'пенал', 'пиво', 'писька', 'письмо', 'питание', 'питомец', 'пища', 'план', 'плата', 'платеж', 'плод', 'подарок', 'подделка', 'поделка', 'подушка', 'попа', 'почва', 'премия', 'препарат', 'протокол', 'птица', 'пыль',],
  'р' : [ 'радиация','радио','разъем','ракушка','рама','рамен','рамка','расческа','реестр','резинка','рейдер','ремень','ржавчина','рог','родимка','роза','розетка','ромашка','роса','роутер','рубашка','рукопись','рукоятка','рулон','рыба','рюкзак','рюмка','рябина',],
  'с' : [ 'салют', 'сахар', 'светильник', 'стринги', 'соль', 'сироп', 'cвеча', 'сердце', 'серебро', 'сертификат', 'сигарета', 'сиська', 'слеза', 'словарь', 'смартфон', 'смесь', 'снег', 'снежинка', 'сок', 'cоль', 'сорняк', 'сосок', 'сосуд', 'статья', 'стих', 'cтрела', 'струя', 'стык', 'субсидия', 'сувенир', 'сумка', 'сфера', 'схема', 'счет', 'сюрприз',],
  'т' : [ 'табак', 'таблетка', 'тайник', 'талисман', 'талон', 'тапки', 'таракан', 'тарелка', 'творог', 'телеграмма', 'телефон', 'тент', 'тень', 'терка', 'термометр', 'тест', 'тесто', 'тетрадь', 'тирамису', 'токсин', 'толстовка', 'топаз', 'топик', 'тост', 'тотем', 'трава', 'травка', 'трекер', 'трикотаж', 'трофей', 'трубка', 'трубочка', 'трусы', 'трутень', 'тряпка', 'тумблер', 'туфля', 'тюбик', 'тюльпан',],
  'у' : [ 'уголь', 'ужин', 'узел', 'указ', 'уксус', 'улей', 'униформа', 'уста', 'устав', 'утка', 'ухо', 'учебник', 'уши',],
  'ф' : [ 'фаберже', 'фазан', 'файл', 'фаланга', 'фантик', 'фартук', 'фарфор', 'фарш', 'фасоль', 'фаст-фуд', 'фата', 'фекалии', 'фенечка', 'ферзь', 'феромон', 'фиалка', 'фигура', 'фигурка', 'фикус', 'филе', 'филин', 'финансы', 'финик', 'финка', 'фисташка', 'фишка', 'флейта', 'флешка', 'фолиант', 'фольга', 'фонарик', 'форель', 'фосфор', 'фотокарточка', 'фотопленка', 'фотоснимок', 'фреон', 'фрукт', 'фужер', 'фундук', 'футболка',],
  'х' : [ 'хавка', 'хайлайтер', 'халва', 'хамелеон', 'харчок', 'хер', 'хиджаб', 'химикат', 'хинкали', 'хлам', 'хлеб', 'хлебцы', 'хлопушка', 'хлопья', 'хлороформ', 'хлыст', 'холка', 'хомячок', 'хрен', 'хром', 'хромосома', 'хронометр', 'хрусталь', 'худи', 'хурма',],
  'ц' : [ 'цветок', 'целлофан', 'целлюлит', 'цель', 'цемент', 'ценник', 'цент', 'цепочка', 'цианид', 'цибуля', 'цикада', 'цинк', 'циркуль', 'цитрус', 'циферблат', 'цоколь', 'цуцик',],
  'ч' : [ 'часть', 'часы', 'чача', 'чаша', 'чашечка', 'чашка', 'чебурек', 'чекушка', 'челюсть', 'чепчик', 'червь', 'червяк', 'черепашка', 'черешня', 'черника', 'чернила', 'чернильница', 'черновик', 'чернозем', 'чернослив', 'чертеж', 'чеснок', 'чешуя', 'чижик', 'чизбургер', 'чизкейк', 'чипсы', 'чрево', 'чресла', 'чулок', 'чучело',],
  'ш' : [ 'шагомер', 'шампанское', 'шампиньон', 'шампунь', 'шантаж', 'шапочка', 'шар', 'шарик', 'шарлотка', 'шарнир', 'шарф', 'шаурма', 'шашка', 'шашлык', 'шелк', 'шелковица', 'шелуха', 'шерсть', 'шершень', 'шестеренка', 'шишка', 'шлепанцы', 'шлепки', 'шмель', 'шницель', 'шнурок', 'шокер', 'шоколад', 'шпаргалка', 'шпилька', 'штаны', 'штатив', 'штекер', 'шторка', 'штукатурка', 'штык',],
  'щ' : [ 'щебенка', 'щебень', 'щека', 'щелочь', 'щенок', 'щепка', 'щепотка', 'щербет', 'щипцы', 'щука', 'щупальце', 'щур',],
  'э' : [ 'эвкалипт', 'эклер', 'эклипс', 'экономка', 'экран', 'экскременты', 'экстракт', 'элексир', 'электрод', 'электрон', 'электрошокер', 'эмаль', 'эмблема', 'эмбрион', 'эмульсия', 'эндорфин', 'энергетик', 'эпинефрин', 'этикетка', 'эякуляция',],
  'ю' : [ 'юань', 'юбка', 'ювелирка', 'юла', 'юппи', 'юфта', 'юшка',],
  'я' : [ 'яблоко', 'явка', 'язык', 'язычок', 'яичница', 'яйцо', 'янтарь', 'ярлычок', 'ястреб',],
}

let sendWord = [];
var lastLetter = '';

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
  if (lastLetter == word[0] || lastLetter == "") {
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
}

function deletesValue(word, arrays) {
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
  

function emptyField(word) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  area.placeholder = "мышь";
  area.value = "";
}

function printLettersNum(word) {
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

function nope(area) {
area.value = "";
area.placeholder = "не влезло((";
}

