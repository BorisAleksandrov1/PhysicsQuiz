const LETTERS = ["А", "Б", "В", "Г"];
const ANSWER_SHORTCUTS = new Map([
  ["KeyA", 0],
  ["KeyS", 1],
  ["KeyD", 2],
  ["KeyF", 3],
  ["65", 0],
  ["83", 1],
  ["68", 2],
  ["70", 3],
  ["a", 0],
  ["s", 1],
  ["d", 2],
  ["f", 3],
  ["а", 0],
  ["с", 1],
  ["д", 2],
  ["ф", 3]
]);
const LIFELINE_SHORTCUTS = new Map([
  ["Digit1", "host"],
  ["Digit2", "fifty"],
  ["Digit3", "phone"],
  ["Numpad1", "host"],
  ["Numpad2", "fifty"],
  ["Numpad3", "phone"],
  ["49", "host"],
  ["50", "fifty"],
  ["51", "phone"],
  ["97", "host"],
  ["98", "fifty"],
  ["99", "phone"],
  ["1", "host"],
  ["2", "fifty"],
  ["3", "phone"]
]);
const ANSWER_REVEAL_DELAY_MS = 2900;
const TOTAL_LEVELS = 8;
const PHONE_TIMER_SECONDS = 60;
const SET_STORAGE_KEY = "staniFizikQuestionSetIndex";
const BACKGROUND_MUSIC_VIDEO_ID = "6Wi9_QKJ_8A";
let fallbackSetIndex = 0;

const QUESTION_SETS = [
  {
    title: "Денислав 1",
    questions: [
      {
        question: "Защо винаги виждаме само едната страна на Луната?",
        answers: [
          "Защото Луната не се върти около оста си",
          "Защото Луната се върти около оста си за същото време, за което обикаля около Земята",
          "Защото Земята спира въртенето на Луната",
          "Защото Слънцето осветява само едната ѝ страна"
        ],
        correct: 1
      },
      {
        question: "Тя посвещава живота си на радиоактивността и променя науката завинаги. Но нейната работа има и жестока лична цена. От какво заболяване умира Мария Кюри, вероятно вследствие на дългогодишно облъчване?",
        answers: ["пневмония", "апластична анемия", "туберкулоза", "диабет"],
        correct: 1
      },
      {
        question: "Кое твърдение за гама-лъчението е вярно?",
        answers: [
          "То е поток от хелиеви ядра",
          "То е електромагнитно лъчение",
          "То има най-малка проникваща способност",
          "То съществува само в атмосферата"
        ],
        correct: 1
      },
      {
        question: "Защо звездите изглеждат, че „премигват“?",
        answers: [
          "Защото постоянно се включват и изключват",
          "Заради турбуленции в земната атмосфера",
          "Защото са много близо до нас",
          "Защото Луната ги засенчва всяка секунда"
        ],
        correct: 1
      },
      {
        question: "На върха на стръмна пързалка едно дете е почти неподвижно, но физиката вече „вижда“ в него запас от движение. Коя енергия е най-голяма в този момент?",
        answers: ["кинетична", "потенциална", "електрична", "ядрена"],
        correct: 1
      },
      {
        question: "Ако една звезда е на 100 светлинни години от нас, какво означава това най-точно?",
        answers: [
          "че е на 100 години",
          "че светлината ѝ стига до нас за 100 дни",
          "че я виждаме такава, каквато е била преди 100 години",
          "че обикаля Слънцето за 100 години"
        ],
        correct: 2
      },
      {
        question: "На пръв поглед и горещото кафе, и студеният сок просто „си стоят“ на масата. Но термодинамиката знае, че природата има любима посока. Какво става, ако ги оставим достатъчно дълго?",
        answers: [
          "кафето става още по-горещо",
          "сокът става още по-студен",
          "и двете се стремят към температурата на околната среда",
          "нищо не се променя"
        ],
        correct: 2
      },
      {
        question: "Какво измерва амперметърът?",
        answers: ["Ток", "Сила", "Налягане", "Път"],
        correct: 0
      }
    ]
  },
  {
    title: "Денислав 2",
    questions: [
      {
        question: "Днес атомите изглеждат безспорни. Но за един велик физик в края на XIX век, защитата на атомната теория се превръща в изтощителна лична битка срещу колеги, философи и духа на времето. Този учен се самоубива през 1906 г., малко преди науката окончателно да го оправдае. Кой е той?",
        answers: ["Лудвиг Болцман", "Джеймс Максуел", "Хайнрих Херц", "Нилс Бор"],
        correct: 0
      },
      {
        question: "Преди да стане символ на науката, Галилей е и най-големият син в семейство, върху което падат не само надежди, но и сметки. След ранната смърт на баща му, неговите открития и изобретения вече не са само въпрос на любопитство, а и на оцеляване. Кое задължение тежи особено силно върху него?",
        answers: [
          "издръжката на семейството и зестрата на сестра му",
          "издръжката на университетската библиотека",
          "плащането на данъците на Венеция",
          "строежът на обсерватория в Пиза"
        ],
        correct: 0
      },
      {
        question: "На върха на стръмна пързалка едно дете е почти неподвижно, но физиката вече „вижда“ в него запас от движение. Коя енергия е най-голяма в този момент?",
        answers: ["кинетична", "потенциална", "електрична", "ядрена"],
        correct: 1
      },
      {
        question: "Защо на Марс годината е по-дълга от земната?",
        answers: [
          "Защото Марс е по-далеч от Слънцето",
          "Защото Марс е по-червен",
          "Защото няма океани",
          "Защото е по-малък"
        ],
        correct: 0
      },
      {
        question: "Наричаме го „падаща звезда“, но в повечето случаи нито е звезда, нито пада от някакво звездно място. Какво всъщност виждаме, когато на небето проблесне такава следа?",
        answers: ["комета", "метеор", "астероид", "спътник"],
        correct: 1
      },
      {
        question: "Какво представлява мълнията?",
        answers: ["Механична вълна", "Електричен разряд", "Вид планета", "Магнитно поле на Земята"],
        correct: 1
      },
      {
        question: "Коя планета е най-голяма в Слънчевата система?",
        answers: ["Земя", "Юпитер", "Марс", "Меркурий"],
        correct: 1
      },
      {
        question: "Какво се пренася от механичните вълни?",
        answers: ["Самото вещество на голямо разстояние", "Само цвят", "Енергия", "Електричен заряд"],
        correct: 2
      }
    ]
  },
  {
    title: "Йоан",
    questions: [
      {
        question: "През 1666 г., принуден да се оттегли от Кеймбридж заради чумната епидемия, младият английски учен Исак Нютон прекарва месеци в уединение. По-късно именно този период ще бъде наречен неговата annus mirabilis – година на чудесата. Тогава той прави огромни крачки в две области, които ще променят науката завинаги. Кои са те?",
        answers: ["електричеството и магнетизма", "термодинамиката и астрономията", "математическия анализ и оптиката", "химията и биологията"],
        correct: 2
      },
      {
        question: "Всяка година хората казват, че лятото е топло, защото Земята е „по-близо до Слънцето“. Астрономията обаче не е толкова лесна. Коя е истинската основна причина за сезоните?",
        answers: ["промяната в разстоянието между Земята и Слънцето", "наклонът на земната ос", "силата на магнитното поле на Слънцето", "промяната в скоростта на въртене на Земята"],
        correct: 1
      },
      {
        question: "Когато гледаме нощното небе, не виждаме звездите точно такива, каквито са „в момента“. Причината е проста, но и малко смайваща. Каква?",
        answers: ["звездите се движат твърде бавно", "земната атмосфера показва стар образ", "светлината пътува с крайна скорост, затова виждаме миналото", "телескопите изостават във времето"],
        correct: 2
      },
      {
        question: "Едно камъче лежи спокойно на ръба на скала. Засега не се движи, но ако бъде бутнато, ще ускори надолу. Това означава, че още преди да падне то притежава най-вече каква енергия?",
        answers: ["звукова", "потенциална", "кинетична", "електромагнитна"],
        correct: 1
      },
      {
        question: "Защо астронавтите не могат да чуят звук в открития Космос без радио връзка?",
        answers: ["Защото в Космоса няма въздух", "Защото ушите не работят там", "Защото светлината спира звука", "Защото Земята е далеч"],
        correct: 0
      },
      {
        question: "Какво причинява слънчево затъмнение?",
        answers: ["Земята застава между Слънцето и Луната", "Луната застава между Слънцето и Земята", "Марс скрива Слънцето", "Облаците в Космоса закриват Слънцето"],
        correct: 1
      },
      {
        question: "Кое от изброените е електричен изолатор?",
        answers: ["Мед", "Алуминий", "Пластмаса", "Желязо"],
        correct: 2
      },
      {
        question: "При нормално атмосферно налягане водата кипи при:",
        answers: ["0°C", "50°C", "100°C", "273°C"],
        correct: 2
      }
    ]
  },
  {
    title: "Влади",
    questions: [
      {
        question: "Човекът, когото днес наричаме „баща на термодинамиката“, не доживява да види истинската слава на идеите си. Никола Леонар Сади Карно умира млад, едва на 36 години, по време на опустошителна епидемия. Коя?",
        answers: ["едра шарка", "холера", "чума", "тиф"],
        correct: 1
      },
      {
        question: "В началото на XVII век един велик астроном и математик прави открития, които по-късно ще доведат до формулирането на законите за движението на планетите. Но за да се издържа финансово, в определени периоди той изготвя хороскопи и астрологични прогнози. Кой е този учен?",
        answers: ["Галилео Галилей", "Йоханес Кеплер", "Николай Коперник", "Тихо Брахе"],
        correct: 1
      },
      {
        question: "Машина, която произвежда повече енергия, отколкото получава, е стара мечта на човечеството. Физиката обаче я поставя в раздел „невъзможни“. Как се нарича такава машина?",
        answers: ["топлинен двигател", "генератор", "перпетуум-мобиле", "трансформатор"],
        correct: 2
      },
      {
        question: "Парата, буталата и фабриките променят света, но зад Индустриалната революция стои един прост факт: топлината може да се превръща в механична работа. Машината, която прави точно това, се нарича:",
        answers: ["топлинен двигател", "електромагнит", "генератор", "трансформатор"],
        correct: 0
      },
      {
        question: "Когато автобусът спре рязко, пътниците се накланят напред поради:",
        answers: ["триене", "инерция", "дифракция", "магнитно поле"],
        correct: 1
      },
      {
        question: "Кога една електрична крушка в проста верига свети?",
        answers: ["Когато веригата е затворена", "Когато веригата е прекъсната", "Само ако няма батерия", "Само ако проводникът е дървен"],
        correct: 0
      },
      {
        question: "Какво причинява слънчево затъмнение?",
        answers: ["Земята застава между Слънцето и Луната", "Луната застава между Слънцето и Земята", "Марс скрива Слънцето", "Облаците в Космоса закриват Слънцето"],
        correct: 1
      },
      {
        question: "Коя единица измерва честота?",
        answers: ["Нютон", "Херц", "Джаул", "Паскал"],
        correct: 1
      }
    ]
  },
  {
    title: "Борис 1",
    questions: [
      {
        question: "Векове преди сателитната навигация моряците се доверявали на компаса. Неговата стрелка сочи към север, но това „север“ не е толкова просто: северният край на магнитната стрелка се насочва към област близо до географския Северен полюс, защото там се намира кой полюс на земното магнитно поле?",
        answers: ["северният магнитен полюс", "южният магнитен полюс", "географският южен полюс", "електрическият полюс"],
        correct: 1
      },
      {
        question: "Докато се опитва да разгадае движението на планетите, Йоханес Кеплер е принуден да води и друга, далеч по-мрачна битка — за честта и живота на собствената си майка. В какво е обвинена тя?",
        answers: ["в държавна измяна", "в алхимия", "във вещерство", "в ерес срещу астрономията"],
        correct: 2
      },
      {
        question: "Георг Ом оставя на физиката едно от най-полезните правила. Според него, ако напрежението се увеличава, а съпротивлението остава същото, какво става с тока?",
        answers: ["намалява", "остава същият", "увеличава се", "изчезва"],
        correct: 2
      },
      {
        question: "Коя енергия има тяло, когато се движи?",
        answers: ["потенциална", "вътрешна", "кинетична", "електрична"],
        correct: 2
      },
      {
        question: "Топлината винаги преминава самопроизволно от:",
        answers: ["по-студено тяло към по-топло", "по-топло тяло към по-студено", "по-леко тяло към по-тежко", "твърдо тяло към течно"],
        correct: 1
      },
      {
        question: "В домашната инсталация има малък „герой“, който обикновено забелязваме чак когато изгори. Неговата работа е да прекъсне веригата при прекалено голям ток и така да предпази уредите. Това е:",
        answers: ["предпазител", "генератор", "електромер", "изолатор"],
        correct: 0
      },
      {
        question: "Какъв е зарядът на протона?",
        answers: ["Положителен", "Отрицателен", "Нулев", "Променлив"],
        correct: 0
      },
      {
        question: "Коя планета е известна с най-добре видимите си пръстени?",
        answers: ["Марс", "Сатурн", "Меркурий", "Венера"],
        correct: 1
      }
    ]
  },
  {
    title: "Борис 2",
    questions: [
      {
        question: "През 1896 г. френският учен Анри Бекерел изследва уранови соли. Той забелязва, че дори без да бъдат осветени от Слънцето, те могат да предизвикат потъмняване на фотографска плака. Така стига до откритието на естествената радиоактивност. Кой е този учен?",
        answers: ["Пиер Кюри", "Анри Бекерел", "Ърнест Ръдърфорд", "Дж. Дж. Томсън"],
        correct: 1
      },
      {
        question: "Преди да стане лицето на гения, Алберт Айнщайн далеч не получава мечтаната академична позиция. Вместо това работи на място, което едва ли звучи като люлка на революции във физиката. Къде?",
        answers: ["в банков трезор", "в патентното ведомство в Берн", "в кралска обсерватория", "в корабостроителница"],
        correct: 1
      },
      {
        question: "В електрониката има елемент, който се държи почти като еднопосочна врата — пропуска тока в едната посока и го спира в другата. Кой е той?",
        answers: ["резистор", "диод", "кондензатор", "бобина"],
        correct: 1
      },
      {
        question: "В модните среди името Келвин Клайн звучи като марка. Във физиката обаче Келвин е скала, която започва от най-ниската възможна температура. Как се нарича тази температура?",
        answers: ["точка на замръзване", "абсолютна нула", "стайна температура", "точка на кипене"],
        correct: 1
      },
      {
        question: "Кое обяснява факта, че светкавицата се вижда преди да се чуе гръмът?",
        answers: ["Светлината се разпространява по-бързо от звука", "Гръмът възниква след светкавицата", "Звукът се движи само в облаците", "Светкавицата е по-близо от гръмотевицата"],
        correct: 0
      },
      {
        question: "Какво показва плътността на веществото?",
        answers: ["Колко топло е тялото", "Колко маса се съдържа в единица обем", "Колко бързо се движи тялото", "Колко силно свети тялото"],
        correct: 1
      },
      {
        question: "Коя планета наричаме „червената планета“?",
        answers: ["Венера", "Марс", "Юпитер", "Уран"],
        correct: 1
      },
      {
        question: "В каква единица се измерва силата?",
        answers: ["Ампер", "Нютон", "Волт", "Херц"],
        correct: 1
      }
    ]
  }
];

const els = {
  startScreen: document.querySelector("#startScreen"),
  startButton: document.querySelector("#startButton"),
  questionText: document.querySelector("#questionText"),
  questionFrame: document.querySelector(".question-frame"),
  answers: document.querySelector("#answers"),
  continueButton: document.querySelector("#continueButton"),
  newGameButton: document.querySelector("#newGameButton"),
  questionNumber: document.querySelector("#questionNumber"),
  helperPanel: document.querySelector("#helperPanel"),
  fifty: document.querySelector("#fiftyLifeline"),
  host: document.querySelector("#hostLifeline"),
  phone: document.querySelector("#phoneLifeline"),
  resultScreen: document.querySelector("#resultScreen"),
  resultKicker: document.querySelector("#resultKicker"),
  resultTitle: document.querySelector("#resultTitle"),
  resultProgress: document.querySelector("#resultProgress"),
  resultMessage: document.querySelector("#resultMessage"),
  resultRestartButton: document.querySelector("#resultRestartButton"),
  phoneOverlay: document.querySelector("#phoneOverlay"),
  phoneCountdown: document.querySelector("#phoneCountdown"),
  soundToggle: document.querySelector("#soundToggle")
};

const audio = createAudioEngine();

const state = {
  questions: [],
  activeSetIndex: 0,
  level: 0,
  selected: false,
  failed: false,
  resultShown: false,
  answerRevealTimerId: null,
  phoneTimerId: null,
  phoneTimerStartedAt: 0,
  usedLifelines: {
    fifty: false,
    host: false,
    phone: false
  }
};

function createYouTubeAmbient(videoId) {
  const safeVideoId = String(videoId || "").trim();
  const playerState = {
    frame: null,
    pendingPlay: false,
    requestedPlaying: false,
    muted: false,
    disabled: !safeVideoId,
    volume: 30
  };

  function ensureContainer() {
    let container = document.querySelector("#youtubeBackgroundMusic");
    if (container) return container;

    container = document.createElement("div");
    container.id = "youtubeBackgroundMusic";
    container.className = "youtube-background";
    container.setAttribute("aria-hidden", "true");
    document.body.appendChild(container);
    return container;
  }

  function ensureFrame() {
    if (playerState.disabled) return;
    if (playerState.frame) return;

    const frame = document.createElement("iframe");
    const params = new URLSearchParams({
      autoplay: "0",
      controls: "0",
      disablekb: "1",
      enablejsapi: "1",
      fs: "0",
      iv_load_policy: "3",
      loop: "1",
      modestbranding: "1",
      playsinline: "1",
      playlist: safeVideoId,
      rel: "0",
      origin: window.location.origin
    });

    frame.title = "Фонова музика";
    frame.tabIndex = -1;
    frame.setAttribute("tabindex", "-1");
    frame.allow = "autoplay; encrypted-media";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.src = `https://www.youtube.com/embed/${encodeURIComponent(safeVideoId)}?${params.toString()}`;
    frame.addEventListener("load", () => {
      sendCommand("setVolume", [playerState.volume]);
      sendCommand(playerState.muted ? "mute" : "unMute");
      if (playerState.pendingPlay) sendCommand("playVideo");
      frame.blur();
      window.focus();
    });

    ensureContainer().appendChild(frame);
    playerState.frame = frame;
  }

  function sendCommand(func, args = []) {
    if (!playerState.frame || !playerState.frame.contentWindow) return;

    playerState.frame.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func,
        args
      }),
      "https://www.youtube.com"
    );
  }

  function play() {
    if (playerState.disabled) return;

    playerState.requestedPlaying = true;
    playerState.pendingPlay = true;
    ensureFrame();
    sendCommand("setVolume", [playerState.volume]);
    sendCommand(playerState.muted ? "mute" : "unMute");
    sendCommand("playVideo");
    playerState.pendingPlay = false;
  }

  function stop() {
    playerState.requestedPlaying = false;
    playerState.pendingPlay = false;
    sendCommand("pauseVideo");
  }

  function setMuted(nextMuted) {
    playerState.muted = Boolean(nextMuted);
    sendCommand(playerState.muted ? "mute" : "unMute");
  }

  function setTension(amount) {
    const tension = Math.max(0, Math.min(1, amount));
    playerState.volume = Math.round(28 + tension * tension * 18);
    sendCommand("setVolume", [playerState.volume]);
  }

  return {
    isEnabled: () => !playerState.disabled,
    play,
    stop,
    setMuted,
    setTension
  };
}

function createAudioEngine() {
  const external = window.STANI_FIZIK_AUDIO || {};
  const youtubeAmbient = createYouTubeAmbient(BACKGROUND_MUSIC_VIDEO_ID);
  let ctx = null;
  let master = null;
  let muted = false;
  let ambient = null;
  const activeFiles = new Map();

  function setup() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain();
    master.gain.value = 0.78;
    master.connect(ctx.destination);
  }

  function unlock() {
    setup();
    if (ctx.state === "suspended") ctx.resume();
  }

  function setMuted(nextMuted) {
    muted = nextMuted;
    if (master) master.gain.setTargetAtTime(muted ? 0 : 0.78, ctx.currentTime, 0.03);
    youtubeAmbient.setMuted(muted);
    if (!muted && ambient && ambient.youtube) youtubeAmbient.play();
    if (els.soundToggle) {
      els.soundToggle.setAttribute("aria-pressed", String(muted));
      els.soundToggle.title = muted ? "Пусни звука" : "Спри звука";
    }
  }

  function toggleMuted() {
    unlock();
    setMuted(!muted);
  }

  function file(name, options = {}) {
    const src = external[name];
    if (!src || muted) return null;

    const existing = activeFiles.get(name);
    if (existing && options.loop) return existing;

    const element = new Audio(src);
    element.loop = Boolean(options.loop);
    element.volume = options.volume ?? 0.75;
    element.preload = "auto";
    const started = element.play();
    if (started && started.catch) started.catch(() => synth(name, options));
    if (options.loop) activeFiles.set(name, element);
    return element;
  }

  function stopFile(name) {
    const element = activeFiles.get(name);
    if (!element) return;
    element.pause();
    element.currentTime = 0;
    activeFiles.delete(name);
  }

  function play(name, options = {}) {
    unlock();
    if (muted) return;
    if (external[name]) {
      file(name, options);
      return;
    }
    synth(name, options);
  }

  function startAmbient() {
    unlock();
    stopAmbient();
    if (muted) return;

    if (external.ambient) {
      const element = file("ambient", { loop: true, volume: 0.35 });
      ambient = { external: true, element };
      return;
    }

    if (youtubeAmbient.isEnabled()) {
      ambient = { youtube: true };
      youtubeAmbient.play();
      setTension(0);
      return;
    }

    const base = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, base);
    gain.gain.exponentialRampToValueAtTime(0.052, base + 1.7);
    gain.connect(master);

    const low = oscillator("sine", 55, gain, base, 0);
    const fifth = oscillator("triangle", 82.41, gain, base, 0);
    const shimmer = oscillator("sine", 220, gain, base, 0);
    shimmer.detune.setValueAtTime(7, base);

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.18;
    lfoGain.gain.value = 0.018;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start(base);

    const pulseFilter = ctx.createBiquadFilter();
    pulseFilter.type = "lowpass";
    pulseFilter.frequency.setValueAtTime(420, base);
    pulseFilter.Q.setValueAtTime(7, base);

    const pulseGain = ctx.createGain();
    pulseGain.gain.setValueAtTime(0.0001, base);
    pulseFilter.connect(pulseGain);
    pulseGain.connect(master);

    const pulse = oscillator("sawtooth", 82.41, pulseFilter, base, 0);

    ambient = {
      gain,
      lfo,
      lfoGain,
      pulse,
      pulseFilter,
      pulseGain,
      nodes: [low, fifth, shimmer, lfo, pulse]
    };
    setTension(0);
  }

  function setTension(amount) {
    if (!ctx || !ambient) return;

    const tension = Math.max(0, Math.min(1, amount));
    const shaped = tension * tension;

    if (ambient.youtube) {
      youtubeAmbient.setTension(tension);
      return;
    }

    if (ambient.external) {
      if (ambient.element) {
        ambient.element.volume = 0.3 + shaped * 0.4;
        ambient.element.playbackRate = 1 + shaped * 0.045;
      }
      return;
    }

    const now = ctx.currentTime;
    ambient.gain.gain.setTargetAtTime(0.05 + shaped * 0.055, now, 0.35);
    ambient.lfo.frequency.setTargetAtTime(0.18 + shaped * 3.8, now, 0.35);
    ambient.lfoGain.gain.setTargetAtTime(0.018 + shaped * 0.052, now, 0.35);
    ambient.pulse.frequency.setTargetAtTime(82.41 + shaped * 112, now, 0.35);
    ambient.pulseFilter.frequency.setTargetAtTime(420 + shaped * 2100, now, 0.35);
    ambient.pulseGain.gain.setTargetAtTime(tension > 0.28 ? (tension - 0.28) * 0.09 : 0.0001, now, 0.25);
  }

  function stopAmbient() {
    stopFile("ambient");
    if (!ambient) return;
    if (ambient.youtube) {
      youtubeAmbient.stop();
      ambient = null;
      return;
    }
    if (ambient.external) {
      ambient = null;
      return;
    }

    const end = ctx.currentTime + 0.4;
    ambient.gain.gain.cancelScheduledValues(ctx.currentTime);
    ambient.gain.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.08);
    ambient.nodes.forEach((node) => {
      try {
        node.stop(end);
      } catch {
        // Node may already be stopped.
      }
    });
    ambient = null;
  }

  function oscillator(type, frequency, destination, start, duration) {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    osc.connect(destination);
    osc.start(start);
    if (duration) osc.stop(start + duration);
    return osc;
  }

  function tone({ type = "sine", frequency, start, duration, gain = 0.18, destination = master, attack = 0.015, release = 0.08, detune = 0 }) {
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    osc.detune.setValueAtTime(detune, start);
    amp.gain.setValueAtTime(0.0001, start);
    amp.gain.exponentialRampToValueAtTime(gain, start + attack);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration + release);
    osc.connect(amp);
    amp.connect(destination);
    osc.start(start);
    osc.stop(start + duration + release + 0.02);
    return osc;
  }

  function noiseHit(start, duration, gainValue, filterFrequency) {
    const length = Math.max(1, Math.floor(ctx.sampleRate * duration));
    const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length);
    }

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    filter.type = "bandpass";
    filter.frequency.value = filterFrequency;
    filter.Q.value = 7;
    amp.gain.setValueAtTime(gainValue, start);
    amp.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.buffer = buffer;
    source.connect(filter);
    filter.connect(amp);
    amp.connect(master);
    source.start(start);
  }

  function synth(name) {
    if (!ctx || muted) return;
    const now = ctx.currentTime;

    if (name === "intro") {
      [130.81, 196, 261.63, 329.63].forEach((freq, index) => {
        tone({ type: "sawtooth", frequency: freq, start: now + index * 0.12, duration: 0.5, gain: 0.08, release: 0.28 });
      });
      noiseHit(now + 0.48, 0.34, 0.12, 2400);
      return;
    }

    if (name === "question") {
      [164.81, 196, 246.94].forEach((freq, index) => {
        tone({ type: "triangle", frequency: freq, start: now + index * 0.11, duration: 0.22, gain: 0.075, release: 0.16 });
      });
      return;
    }

    if (name === "select") {
      tone({ type: "triangle", frequency: 220, start: now, duration: 0.08, gain: 0.09, release: 0.05 });
      tone({ type: "triangle", frequency: 329.63, start: now + 0.08, duration: 0.1, gain: 0.075, release: 0.06 });
      return;
    }

    if (name === "correct") {
      [261.63, 329.63, 392, 523.25].forEach((freq, index) => {
        tone({ type: "sawtooth", frequency: freq, start: now + index * 0.11, duration: 0.28, gain: 0.08, release: 0.16 });
      });
      noiseHit(now + 0.42, 0.28, 0.09, 3200);
      return;
    }

    if (name === "wrong") {
      [329.63, 246.94, 185, 138.59].forEach((freq, index) => {
        tone({ type: "sawtooth", frequency: freq, start: now + index * 0.13, duration: 0.38, gain: 0.09, release: 0.22 });
      });
      return;
    }

    if (name === "lifeline" || name === "fifty" || name === "host" || name === "phone") {
      noiseHit(now, 0.26, 0.1, 1800);
      [392, 523.25, 659.25].forEach((freq, index) => {
        tone({ type: "triangle", frequency: freq, start: now + index * 0.075, duration: 0.13, gain: 0.06, release: 0.09 });
      });
      return;
    }

    if (name === "final") {
      [196, 261.63, 329.63, 392, 523.25].forEach((freq, index) => {
        tone({ type: "sawtooth", frequency: freq, start: now + index * 0.14, duration: 0.36, gain: 0.075, release: 0.22 });
      });
    }
  }

  return {
    unlock,
    play,
    startAmbient,
    stopAmbient,
    setTension,
    toggleMuted,
    setMuted
  };
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, order: crypto.getRandomValues(new Uint32Array(1))[0] }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item);
}

function getStoredSetIndex() {
  try {
    const stored = Number(localStorage.getItem(SET_STORAGE_KEY));
    if (Number.isInteger(stored) && stored >= 0) return stored % QUESTION_SETS.length;
  } catch {}

  return fallbackSetIndex;
}

function setStoredSetIndex(index) {
  const nextIndex = ((index % QUESTION_SETS.length) + QUESTION_SETS.length) % QUESTION_SETS.length;
  fallbackSetIndex = nextIndex;

  try {
    localStorage.setItem(SET_STORAGE_KEY, String(nextIndex));
  } catch {}
}

function advanceQuestionSet() {
  setStoredSetIndex(state.activeSetIndex + 1);
}

function buildQuestionSet(setIndex = getStoredSetIndex()) {
  const set = QUESTION_SETS[setIndex];
  state.activeSetIndex = setIndex;

  return set.questions.slice(0, TOTAL_LEVELS).reverse().map((question, index) => ({
    ...question,
    id: `${setIndex}-${index}`,
    answers: [...question.answers]
  }));
}

function startGame() {
  startGameAtSet(getStoredSetIndex());
}

function startGameAtSet(setIndex) {
  setStoredSetIndex(setIndex);
  audio.unlock();
  audio.play("intro");
  audio.startAmbient();
  clearPhoneTimer();
  state.questions = buildQuestionSet(setIndex);
  state.level = 0;
  state.selected = false;
  state.failed = false;
  state.resultShown = false;
  state.usedLifelines = { fifty: false, host: false, phone: false };
  els.startScreen.classList.remove("is-visible");
  els.resultScreen.classList.remove("is-visible");
  els.resultScreen.setAttribute("aria-hidden", "true");
  resetLifelines();
  showQuestion();
  tryFullscreen();
}

function tryFullscreen() {
  if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}

function currentQuestion() {
  return state.questions[state.level];
}

function showQuestion() {
  clearAnswerRevealTimer();
  const question = currentQuestion();
  state.selected = false;
  state.failed = false;

  els.helperPanel.classList.remove("is-visible");
  els.helperPanel.innerHTML = "";
  els.continueButton.disabled = true;
  els.questionNumber.textContent = state.level + 1;
  els.questionText.textContent = question.question;
  els.questionFrame.dataset.size = question.question.length > 255 ? "very-long" : question.question.length > 170 ? "long" : "normal";

  els.answers.innerHTML = question.answers.map((answer, index) => `
    <button class="answer" type="button" data-index="${index}" data-size="${answer.length > 38 ? "long" : "normal"}">
      <span class="letter">${LETTERS[index]}:</span>
      <span class="answer-text">${answer}</span>
    </button>
  `).join("");

  els.answers.querySelectorAll(".answer").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.index)));
  });

  audio.play("question");
}

function selectAnswer(index) {
  if (state.selected) return;

  const question = currentQuestion();
  const isCorrect = index === question.correct;
  state.selected = true;
  audio.play("select");

  els.answers.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    button.classList.remove("hidden-answer");
  });

  const selectedButton = els.answers.querySelector(`.answer[data-index="${index}"]`);
  if (selectedButton) selectedButton.classList.add("selected");

  clearAnswerRevealTimer();
  state.answerRevealTimerId = window.setTimeout(() => {
    state.answerRevealTimerId = null;

    els.answers.querySelectorAll(".answer").forEach((button) => {
      const buttonIndex = Number(button.dataset.index);
      button.classList.remove("selected");
      if (buttonIndex === question.correct) button.classList.add("correct");
      if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
    });

    if (isCorrect) {
      state.level += 1;
      state.failed = false;
      audio.play("correct");
    } else {
      state.failed = true;
      audio.play("wrong");
    }

    els.continueButton.disabled = false;
  }, ANSWER_REVEAL_DELAY_MS);
}

function continueGame() {
  if (!state.selected) return;

  if (state.failed || state.level >= TOTAL_LEVELS) {
    showResult();
    return;
  }

  showQuestion();
}

function showResult() {
  if (state.resultShown) return;
  state.resultShown = true;

  clearAnswerRevealTimer();
  clearPhoneTimer();
  audio.stopAmbient();
  audio.play("final");
  const wonAll = state.level >= TOTAL_LEVELS;
  const title = getResultTitle();
  els.resultKicker.textContent = wonAll ? "Финал" : "Край на играта";
  els.resultTitle.textContent = title;
  els.resultProgress.textContent = `${state.level} / ${TOTAL_LEVELS}`;
  els.resultMessage.textContent = getResultMessage();
  els.resultScreen.classList.add("is-visible");
  els.resultScreen.setAttribute("aria-hidden", "false");
  advanceQuestionSet();
}

function getResultTitle() {
  if (state.level >= 8) return "Ти спечели титлата „Златен физик“!";
  if (state.level >= 6) return "Ти си в лигата на елитните физици!";
  if (state.level >= 4) return "Ти спечели титлата „Сребърен физик“!";
  if (state.level >= 2) return "Ти спечели титлата „Бронзов физик“!";
  return "Опитът приключи";
}

function getResultMessage() {
  if (state.level >= 8) return "Аплодисменти за това, че превърна знанието в злато.";
  if (state.level >= 6) return "В подножието на триумфа всичко е възможно.";
  if (state.level >= 4) return "Ерудицията ти буди възхищение.";
  if (state.level >= 2) return "Пътят нагоре е труден, но постижим със солидни знания.";
  return "Върни се към лабораторията и опитай отново.";
}

function resetLifelines() {
  [els.fifty, els.host, els.phone].forEach((button) => {
    button.disabled = false;
    button.classList.remove("used");
  });
}

function useFifty() {
  if (state.usedLifelines.fifty || state.selected) return;
  audio.play("fifty");

  state.usedLifelines.fifty = true;
  els.fifty.disabled = true;
  els.fifty.classList.add("used");

  const question = currentQuestion();
  const wrongAnswers = shuffle([0, 1, 2, 3].filter((index) => index !== question.correct)).slice(0, 2);
  wrongAnswers.forEach((index) => {
    const button = els.answers.querySelector(`[data-index="${index}"]`);
    button.classList.add("hidden-answer");
    button.disabled = true;
  });
}

function useHost() {
  if (state.usedLifelines.host || state.selected) return;
  audio.play("host");

  state.usedLifelines.host = true;
  els.host.disabled = true;
  els.host.classList.add("used");
}

function usePhone() {
  if (state.usedLifelines.phone || state.selected) return;
  audio.play("phone");

  state.usedLifelines.phone = true;
  els.phone.disabled = true;
  els.phone.classList.add("used");

  startPhoneTimer();
}

function startPhoneTimer() {
  clearPhoneTimer();

  state.phoneTimerStartedAt = Date.now();
  updatePhoneTimer(PHONE_TIMER_SECONDS);
  els.phoneOverlay.classList.add("is-visible");
  els.phoneOverlay.setAttribute("aria-hidden", "false");

  state.phoneTimerId = window.setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.phoneTimerStartedAt) / 1000);
    const remaining = Math.max(0, PHONE_TIMER_SECONDS - elapsed);
    updatePhoneTimer(remaining);

    if (remaining <= 0) {
      clearPhoneTimer();
    }
  }, 250);
}

function updatePhoneTimer(remaining) {
  const progress = ((PHONE_TIMER_SECONDS - remaining) / PHONE_TIMER_SECONDS) * 360;
  els.phoneCountdown.textContent = String(remaining).padStart(2, "0");
  els.phoneOverlay.style.setProperty("--phone-progress", `${progress}deg`);
}

function isPhoneTimerActive() {
  return Boolean(state.phoneTimerId);
}

function clearPhoneTimer() {
  if (state.phoneTimerId) {
    window.clearInterval(state.phoneTimerId);
    state.phoneTimerId = null;
  }

  state.phoneTimerStartedAt = 0;
  if (!els.phoneOverlay) return;

  els.phoneOverlay.classList.remove("is-visible");
  els.phoneOverlay.setAttribute("aria-hidden", "true");
  updatePhoneTimer(PHONE_TIMER_SECONDS);
}

function clearAnswerRevealTimer() {
  if (!state.answerRevealTimerId) return;

  window.clearTimeout(state.answerRevealTimerId);
  state.answerRevealTimerId = null;
}

function isStartVisible() {
  return els.startScreen.classList.contains("is-visible");
}

function isResultVisible() {
  return els.resultScreen.classList.contains("is-visible");
}

function continueOrStartNext() {
  if (isPhoneTimerActive()) return;

  if (isStartVisible() || isResultVisible()) {
    startGame();
    return;
  }

  if (!els.continueButton.disabled) {
    continueGame();
  }
}

function resetCurrentGame() {
  const setIndex = isStartVisible() && !isResultVisible() ? getStoredSetIndex() : state.activeSetIndex;
  startGameAtSet(setIndex);
}

function getShortcutValue(map, event) {
  const candidates = [
    event.code,
    event.key,
    event.key ? event.key.toLowerCase() : "",
    event.which ? String(event.which) : "",
    event.keyCode ? String(event.keyCode) : ""
  ];

  for (const candidate of candidates) {
    if (map.has(candidate)) return map.get(candidate);
  }

  return undefined;
}

function useLifelineShortcut(lifeline) {
  const gameBlocked =
    isPhoneTimerActive() ||
    state.selected ||
    state.resultShown ||
    !state.questions.length ||
    isStartVisible() ||
    isResultVisible();

  if (gameBlocked) return false;

  const actions = {
    host: useHost,
    fifty: useFifty,
    phone: usePhone
  };

  const action = actions[lifeline];
  if (!action) return false;

  action();
  return true;
}

function handleKeyboardShortcuts(event) {
  if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;

  if (event.code === "Space" || event.key === " ") {
    if (isPhoneTimerActive()) {
      event.preventDefault();
      clearPhoneTimer();
    }
    return;
  }

  if (event.code === "Enter") {
    event.preventDefault();
    continueOrStartNext();
    return;
  }

  if (event.code === "KeyR") {
    event.preventDefault();
    resetCurrentGame();
    return;
  }

  const lifeline = getShortcutValue(LIFELINE_SHORTCUTS, event);
  if (lifeline !== undefined) {
    if (useLifelineShortcut(lifeline)) {
      event.preventDefault();
      event.stopPropagation();
    }
    return;
  }

  const answerIndex = getShortcutValue(ANSWER_SHORTCUTS, event);
  if (answerIndex === undefined) return;

  const gameBlocked =
    isPhoneTimerActive() ||
    state.selected ||
    state.resultShown ||
    !state.questions.length ||
    isStartVisible() ||
    isResultVisible();

  if (gameBlocked) return;

  const answerButton = els.answers.querySelector(`.answer[data-index="${answerIndex}"]`);
  if (!answerButton || answerButton.disabled || answerButton.classList.contains("hidden-answer")) return;

  event.preventDefault();
  event.stopPropagation();
  answerButton.click();
}

function restartToStart() {
  clearAnswerRevealTimer();
  clearPhoneTimer();
  audio.stopAmbient();
  els.resultScreen.classList.remove("is-visible");
  els.resultScreen.setAttribute("aria-hidden", "true");
  els.startScreen.classList.add("is-visible");
  state.level = 0;
  state.selected = false;
  state.failed = false;
  state.resultShown = false;
  els.questionText.textContent = "Натисни „Играй“, за да започнеш.";
  els.answers.innerHTML = "";
  els.helperPanel.classList.remove("is-visible");
  els.continueButton.disabled = true;
}

els.startButton.addEventListener("click", startGame);
els.continueButton.addEventListener("click", continueGame);
els.newGameButton.addEventListener("click", restartToStart);
els.resultRestartButton.addEventListener("click", restartToStart);
els.fifty.addEventListener("click", useFifty);
els.host.addEventListener("click", useHost);
els.phone.addEventListener("click", usePhone);
els.soundToggle.addEventListener("click", audio.toggleMuted);
window.addEventListener("keydown", handleKeyboardShortcuts, true);
