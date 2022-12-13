var monet = 0;
var area = document.querySelector('#textplace');
var returnResult = document.querySelector("#result");
var previous = [];
var letterFirstа = [ 'абажур', 'абонемент', 'абрикос', 'авоська', 'автобус', 'автомобиль', 'агрегат', 'адамант', 'азбука', 'аист', 'аквамарин', 'акварель', 'аквариум', 'аккумулятор', 'аксессуар', 'алкоголь', 'алмаз', 'альбом', 'альманах', 'алюминий', 'амулет', 'амуниция', 'амфетамин', 'амфибия', 'ананас', 'анкета', 'апельсин', 'аппарат', 'аптечка', 'арбуз', 'аркан', 'арт-объект', 'артерия', 'артефакт', 'архив', 'астероид', 'асфальт', 'атом', 'аура', 'афродизиак', 'аэрозоль'];
var letterFirstб = [ 'бабло', 'бабочка', 'багаж', 'бак', 'банан', 'баночка', 'баннер', 'барабан', 'батарейка', 'батарея', 'бейдж', 'белизна', 'белка', 'бензин', 'берет', 'бетон', 'Библия', 'бижутерия', 'билет', 'биография', 'бирка', 'бисер', 'бланк', 'блестки', 'блокнот', 'богатство', 'бокал', 'болт', 'бомба', 'Бор', 'ботинки', 'браслет', 'бревно', 'бриллиант', 'бровь', 'бронь', 'брошь', 'брошюра', 'брус', 'брызги', 'брэнд', 'брюки', 'будильник', 'буква', 'букварь', 'букет', 'буклет', 'булка', 'булочка', 'булыжник', 'бумага', 'бумеранг', 'бусы', 'бутерброд', 'бутон', 'бутылка', 'бухло', 'бюджет', 'бюллетень', 'бюст', 'бюстгальтер'];
var letterFirstв = [ 'ваза', 'вакуум', 'вакцина', 'Вал', 'валюта', 'вектор', 'веревка', 'Весы', 'ветка', 'вешалка', 'вещество', 'вещь', 'виза', 'вино', 'витамин', 'вихрь', 'вода', 'водка', 'воздух', 'волос', 'воробей', 'воронка', 'выделения', 'выигрыш', 'выпечка', 'выплата', 'вьюга', ];
var letterFirstг = [ 'гаджет', 'гадюка', 'газировка', 'гайка', 'галантерея', 'галоши', 'галстук', 'галька', 'гамак', 'гамбургер', 'гарант', 'гарантия', 'гардина', 'гармонь', 'гарнитура', 'гашиш', 'гвоздика', 'гвоздь', 'Гель', 'гель-смазка', 'герб', 'герметик', 'героин', 'гильотина', 'гипс', 'гирлянда', 'гиря', 'глаз', 'глина', 'глист', 'глобус', 'глоток', 'глюкоза', 'гнездо', 'гниль', 'гном', 'гобелен', 'гоблин', 'гольф', 'голова', 'головастик', 'головка', 'головоломка', 'голограмма', 'голубь', 'горб', 'горелка', 'горло', 'гормон', 'горн', 'горох', 'горошек', 'горсть', 'горшок', 'грааль', 'град', 'градусник', 'грамм', 'грамота', 'гранат', 'граната', 'гранд', 'гранит', 'грант', 'гранула', 'график', 'графика', 'графин', 'граффити', 'грач', 'гребень', 'грибница', 'гриб', 'грива', 'гривна', 'грим', 'гриф', 'гроздь', 'грош', 'груди', 'грудь', 'грузовик', 'грунт', 'груша', 'грыжа', 'грызун', 'грязь', 'губа', 'губка', 'губы', 'гуль', 'гусеница', 'гуща'];
var letterFirstд = [ 'дар', 'датчик', 'дело', 'деньги', 'депозит', 'деталь', 'детеныш', 'джем', 'джинсы', 'диплом', 'дисплей', 'дичь', 'дневник', 'ДНК', 'добыча', 'доза', 'документ', 'доллар', 'доход', 'древесина', 'дробь', 'дрова', 'дурь', 'дятел', ];
var letterFirstе = [ 'Евангелие','евро','егерь','евровалюта','европакет','егермейстер','еда','ежевика','ежик','ежка','ежовник','елочка','енот','ерж','ерш','ершик','ехидна',];
var letterFirstё = [ 'ёж-рыба', 'ёжик', 'ёла', 'ёлка', 'ёлочка', 'ёлчь', 'ёль', 'ёршик',];
var letterFirstж = [ 'жаба', 'жаворонок', 'жакет', 'жалюзи', 'жар', 'жар-птица', 'жасмин', 'жвачка', 'жгут', 'жезл', 'желатин', 'железо', 'желудь', 'желудок', 'желчный', 'желчь', 'жемчуг', 'жемчужина', 'женьшень', 'жесть', 'жетон', 'живопись', 'животик', 'животное', 'живчик', 'жидкость', 'жижа', 'жила', 'жилет', 'жилетка', 'жир', 'жнива', 'жребий', 'жук', 'жук-навозник', 'жюльен', ];
var letterFirstз = [ 'зад', 'зажигалка', 'зайчик', 'заколка', 'закорючка', 'закуска', 'замок', 'занавеска', 'занавес', 'заначка', 'заноза', 'запал', 'запах', 'записка', 'заплатка', 'заповедь', 'заправка', 'запястье', 'зараза', 'зарплата', 'зарядка', 'засов', 'заточка', 'зачетка', 'заяц', 'звезда', 'звено', 'звонок', 'зелень', 'зелье', 'зеница', 'зеркальце', 'зефир', 'змея', 'знамя', 'значок', 'зрачок', 'зуб', ];
var letterFirstи = [ 'игла','иголка','игрушка','изделие','изумруд','Изюм','иконка','икра','имплант','иней','искра','испарение','исходник',];
var letterFirstй = [ 'йо-йо','йогурт','йод','Йорк','йоркшир-терьер',];
var letterFirstк = [ 'кабель', 'каблук', 'Камень', 'камера', 'короп', 'канат', 'кандалы', 'капитал', 'капля', 'капсула', 'капуста', 'капюшон', 'карандаш', 'карикатура', 'каркас', 'карман', 'карта', 'картинка', 'картофель', 'карточка', 'картошка', 'каталог', 'каша', 'кекс', 'кинжал', 'Кисть', 'клей', 'клеймо', 'клочок', 'ключ', 'книга', 'кнут', 'коврик', 'коготь', 'кожа', 'кокаин', 'колокольчик', 'колпак', 'кольцо', 'ком', 'комар', 'комикс', 'комок', 'компромат', 'конверт', 'конопля', 'конспект', 'конфета', 'концентрат', 'копия', 'кора', 'корень', 'корм', 'коробка', 'корона', 'коса', 'косарь', 'косметика', 'кость', 'костюм', 'косяк', 'кот', 'котенок', 'кошелек', 'краска', 'крем', 'крест', 'крестик', 'кристалл', 'кровь', 'кролик', 'кроссовок', 'крошка', 'кружева', 'крылья', 'крыса', 'крючок', 'кузнечик', 'кукла', 'кулак', 'Кулон', 'купальник', 'купон', 'купюра', 'Курица', 'куртка', 'кусок', 'куст', 'куш', ];
var letterFirstл = [ 'ладан', 'ладонь', 'лампочка', 'лассо', 'ластик', 'ласточка', 'лебедка', 'лебедь', 'леденец', 'лемур', 'лепесток', 'лепешка', 'лещ', 'лещина', 'лимон', 'лимонад', 'линейка', 'линза', 'липучка', 'лист', 'листок', 'литр', 'лифчик', 'личинка', 'ловушка', 'лопатка', 'лосины', 'лосось', 'лосьон', 'лощина', 'лук', 'лягушка', 'лялька', ];
var letterFirstм = [ 'магазин', 'магнит', 'мазь', 'майка', 'макароны', 'малина', 'мантия', 'марихуана', 'маска', 'масло', 'мед', 'медуза', 'мелочь', 'мембрана', 'менструация', 'мерило', 'мерка', 'мерч', 'мех', 'мешок', 'микроб', 'микрофон', 'мобильник', 'мозг', 'мозоль', 'молекула', 'моллюск', 'монета', 'морепродукт', 'морковка', 'мороженое', 'мотылек', 'мох', 'моча', 'мочалка', 'мошонка', 'мощи', 'мрамор', 'мука', 'мундир', 'муравейник', 'мурашка', 'муха', 'мыло', 'мышь', 'мякоть', 'мясо', 'мяч', ];
var letterFirstн = [ 'набросок', 'нажива', 'наказ', 'налог', 'напиток', 'нарцисс', 'наследство', 'наушники', 'недра', 'нервы', 'нефть', 'нить', 'ништяк', 'нож', 'нос', 'нота', ];
var letterFirstо = [ 'обед', 'оберег', 'обертка', 'облицовка', 'обломки', 'оболочка', 'обувь', 'овощ', 'одежда', 'оковы', 'окурок', 'оплата', 'опухоль', 'орган', 'орех', 'оружие', 'осадок', 'осколок', 'останки', 'отвар', 'откат', 'открытка', 'отрава', 'отходы', ];
var letterFirstп = [ 'пакет', 'палец', 'палка', 'паразит', 'песок', 'пенал', 'пиво', 'писька', 'письмо', 'питание', 'питомец', 'пища', 'план', 'плата', 'платеж', 'плод', 'подарок', 'подделка', 'поделка', 'подушка', 'попа', 'почва', 'премия', 'препарат', 'протокол', 'птица', 'пыль', ];
var letterFirstр = [ 'радиация','радио','разъем','ракушка','рама','рамен','рамка','расческа','реестр','резинка','рейдер','ремень','ржавчина','рог','родимка','роза','розетка','ромашка','роса','роутер','рубашка','рукопись','рукоятка','рулон','рыба','рюкзак','рюмка','рябина',];
var letterFirstс = [ 'салют', 'сахар', 'светильник', 'стринги', 'соль', 'сироп', 'cвеча', 'сердце', 'серебро', 'сертификат', 'сигарета', 'сиська', 'слеза', 'словарь', 'смартфон', 'смесь', 'снег', 'снежинка', 'сок', 'cоль', 'сорняк', 'сосок', 'сосуд', 'статья', 'стих', 'cтрела', 'струя', 'стык', 'субсидия', 'сувенир', 'сумка', 'сфера', 'схема', 'счет', 'сюрприз', ];
var letterFirstт = [ 'табак', 'таблетка', 'тайник', 'талисман', 'талон', 'тапки', 'таракан', 'тарелка', 'творог', 'телеграмма', 'телефон', 'тент', 'тень', 'терка', 'термометр', 'тест', 'тесто', 'тетрадь', 'тирамису', 'токсин', 'толстовка', 'топаз', 'топик', 'тост', 'тотем', 'трава', 'травка', 'трекер', 'трикотаж', 'трофей', 'трубка', 'трубочка', 'трусы', 'трутень', 'тряпка', 'тумблер', 'туфля', 'тюбик', 'тюльпан', ];
var letterFirstу = [ 'уголь', 'ужин', 'узел', 'указ', 'уксус', 'улей', 'униформа', 'уста', 'устав', 'утка', 'ухо', 'учебник', 'уши', ];
var letterFirstф = [ 'фаберже', 'фазан', 'файл', 'фаланга', 'фантик', 'фартук', 'фарфор', 'фарш', 'фасоль', 'фаст-фуд', 'фата', 'фекалии', 'фенечка', 'ферзь', 'феромон', 'фиалка', 'фигура', 'фигурка', 'фикус', 'филе', 'филин', 'финансы', 'финик', 'финка', 'фисташка', 'фишка', 'флейта', 'флешка', 'фолиант', 'фольга', 'фонарик', 'форель', 'фосфор', 'фотокарточка', 'фотопленка', 'фотоснимок', 'фреон', 'фрукт', 'фужер', 'фундук', 'футболка', ];
var letterFirstх = [ 'хавка', 'хайлайтер', 'халва', 'хамелеон', 'харчок', 'хер', 'хиджаб', 'химикат', 'хинкали', 'хлам', 'хлеб', 'хлебцы', 'хлопушка', 'хлопья', 'хлороформ', 'хлыст', 'холка', 'хомячок', 'хрен', 'хром', 'хромосома', 'хронометр', 'хрусталь', 'худи', 'хурма', ];
var letterFirstц = [ 'цветок', 'целлофан', 'целлюлит', 'цель', 'цемент', 'ценник', 'цент', 'цепочка', 'цианид', 'цибуля', 'цикада', 'цинк', 'циркуль', 'цитрус', 'циферблат', 'цоколь', 'цуцик', ];
var letterFirstч = [ 'часть', 'часы', 'чача', 'чаша', 'чашечка', 'чашка', 'чебурек', 'чекушка', 'челюсть', 'чепчик', 'червь', 'червяк', 'черепашка', 'черешня', 'черника', 'чернила', 'чернильница', 'черновик', 'чернозем', 'чернослив', 'чертеж', 'чеснок', 'чешуя', 'чижик', 'чизбургер', 'чизкейк', 'чипсы', 'чрево', 'чресла', 'чулок', 'чучело', ];
var letterFirstш = [ 'шагомер', 'шампанское', 'шампиньон', 'шампунь', 'шантаж', 'шапочка', 'шар', 'шарик', 'шарлотка', 'шарнир', 'шарф', 'шаурма', 'шашка', 'шашлык', 'шелк', 'шелковица', 'шелуха', 'шерсть', 'шершень', 'шестеренка', 'шишка', 'шлепанцы', 'шлепки', 'шмель', 'шницель', 'шнурок', 'шокер', 'шоколад', 'шпаргалка', 'шпилька', 'штаны', 'штатив', 'штекер', 'шторка', 'штукатурка', 'штык', ];
var letterFirstщ = [ 'щебенка', 'щебень', 'щека', 'щелочь', 'щенок', 'щепка', 'щепотка', 'щербет', 'щипцы', 'щука', 'щупальце', 'щур', ];
var letterFirstэ = [ 'эвкалипт', 'эклер', 'эклипс', 'экономка', 'экран', 'экскременты', 'экстракт', 'элексир', 'электрод', 'электрон', 'электрошокер', 'эмаль', 'эмблема', 'эмбрион', 'эмульсия', 'эндорфин', 'энергетик', 'эпинефрин', 'этикетка', 'эякуляция', ];
var letterFirstю = [ 'юань', 'юбка', 'ювелирка', 'юла', 'юппи', 'юфта', 'юшка',];
var letterFirstя = [ 'яблоко', 'явка', 'язык', 'язычок', 'яичница', 'яйцо', 'янтарь', 'ярлычок', 'ястреб',];
var sendWord = [];


function step() {
  var word = area.value;
  console.log("word:" , word[0]);
  console.log(word);
  console.log(word[word.length-1]);
  console.log(previous);
  //console.log(letterFirstа.includes(word) ==  previous[word]);
if (letterFirstа.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstб.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstв.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstг.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstд.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstе.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstё.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstж.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstз.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstи.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstй.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstк.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstл.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstм.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstн.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstо.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstп.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstр.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstс.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstт.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstу.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstф.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstх.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstц.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstч.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstш.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstщ.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstэ.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstю.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
    else if (letterFirstя.includes(word)) {
  returnResult.innerHTML += word + "<br>";
  previous += word + ",";
  printLettersNum(word);
  area.placeholder = "мышь";
  area.value = "";
  console.log(previous);
  }
  else {
  nope(area);
  } 
}

function printLettersNum(word) {
console.log(word);
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