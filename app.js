const LETTERS = ["А", "Б", "В", "Г"];
const TOTAL_LEVELS = 15;

const RAW_QUESTIONS = `
През 1666 г., принуден да се оттегли от Кеймбридж заради чумната епидемия, младият английски учен Исак Нютон прекарва месеци в уединение. По-късно именно този период ще бъде наречен неговата annus mirabilis – година на чудесата. Тогава той прави огромни крачки в две области, които ще променят науката завинаги. Кои са те?
А) електричеството и магнетизма
Б) термодинамиката и астрономията
В) математическия анализ и оптиката
Г) химията и биологията
Правилен отговор: В) математическия анализ и оптиката
Преди да стане символ на науката, Галилей е и най-големият син в семейство, върху което падат не само надежди, но и сметки. След ранната смърт на баща му, неговите открития и изобретения вече не са само въпрос на любопитство, а и на оцеляване. Кое задължение тежи особено силно върху него?
А) издръжката на семейството и зестрата на сестра му
Б) издръжката на университетската библиотека
В) плащането на данъците на Венеция
Г) строежът на обсерватория в Пиза
Правилен отговор: А) издръжката на семейството и зестрата на сестра му
На пръв поглед и горещото кафе, и студеният сок просто „си стоят“ на масата. Но термодинамиката знае, че природата има любима посока. Какво става, ако ги оставим достатъчно дълго?
А) кафето става още по-горещо
Б) сокът става още по-студен
В) и двете се стремят към температурата на околната среда
Г) нищо не се променя
Правилен отговор: В) и двете се стремят към температурата на околната среда
Парата, буталата и фабриките променят света, но зад Индустриалната революция стои един прост факт: топлината може да се превръща в механична работа. Машината, която прави точно това, се нарича:
А) топлинен двигател
Б) електромагнит
В) генератор
Г) трансформатор
Правилен отговор: А) топлинен двигател
В електрониката има елемент, който се държи почти като еднопосочна врата — пропуска тока в едната посока и го спира в другата. Кой е той?
А) резистор
Б) диод
В) кондензатор
Г) бобина
Правилен отговор: Б) диод
Георг Ом оставя на физиката едно от най-полезните правила. Според него, ако напрежението се увеличава, а съпротивлението остава същото, какво става с тока?
А) намалява
Б) остава същият
В) увеличава се
Г) изчезва
Правилен отговор: В) увеличава се
В домашната инсталация има малък „герой“, който обикновено забелязваме чак когато изгори. Неговата работа е да прекъсне веригата при прекалено голям ток и така да предпази уредите. Това е:
А) предпазител
Б) генератор
В) електромер
Г) изолатор
Правилен отговор: А) предпазител
Векове преди сателитната навигация моряците се доверявали на компаса. Неговата стрелка сочи към север, но това „север“ не е толкова просто: северният край на магнитната стрелка се насочва към област близо до географския Северен полюс, защото там се намира кой полюс на земното магнитно поле?
А) северният магнитен полюс
Б) южният магнитен полюс
В) географският южен полюс
Г) електрическият полюс
Правилен отговор: Б) южният магнитен полюс
Всяка година хората казват, че лятото е топло, защото Земята е „по-близо до Слънцето“. Астрономията обаче не е толкова лесна. Коя е истинската основна причина за сезоните?
А) промяната в разстоянието между Земята и Слънцето
Б) наклонът на земната ос
В) силата на магнитното поле на Слънцето
Г) промяната в скоростта на въртене на Земята
Правилен отговор: Б) наклонът на земната ос
Когато гледаме нощното небе, не виждаме звездите точно такива, каквито са „в момента“. Причината е проста, но и малко смайваща. Каква?
А) звездите се движат твърде бавно
Б) земната атмосфера показва стар образ
В) светлината пътува с крайна скорост, затова виждаме миналото
Г) телескопите изостават във времето
Правилен отговор: В) светлината пътува с крайна скорост, затова виждаме миналото
Наричаме го „падаща звезда“, но в повечето случаи нито е звезда, нито пада от някакво звездно място. Какво всъщност виждаме, когато на небето проблесне такава следа?
А) комета
Б) метеор
В) астероид
Г) спътник
Правилен отговор: Б) метеор
Ако една звезда е на 100 светлинни години от нас, какво означава това най-точно?
А) че е на 100 години
Б) че светлината ѝ стига до нас за 100 дни
В) че я виждаме такава, каквато е била преди 100 години
Г) че обикаля Слънцето за 100 години
Правилен отговор: В) че я виждаме такава, каквато е била преди 100 години
Тя посвещава живота си на радиоактивността и променя науката завинаги. Но нейната работа има и жестока лична цена. От какво заболяване умира Мария Кюри, вероятно вследствие на дългогодишно облъчване?
А) пневмония
Б) апластична анемия
В) туберкулоза
Г) диабет
Правилен отговор: Б) апластична анемия
Днес атомите изглеждат безспорни. Но за един велик физик в края на XIX век, защитата на атомната теория се превръща в изтощителна лична битка срещу колеги, философи и духа на времето. Този учен се самоубива през 1906 г., малко преди науката окончателно да го оправдае. Кой е той?
А) Лудвиг Болцман
Б) Джеймс Максуел
В) Хайнрих Херц
Г) Нилс Бор
Правилен отговор: А) Лудвиг Болцман
Преди да стане лицето на гения, Алберт Айнщайн далеч не получава мечтаната академична позиция. Вместо това работи на място, което едва ли звучи като люлка на революции във физиката. Къде?
А) в банков трезор
Б) в патентното ведомство в Берн
В) в кралска обсерватория
Г) в корабостроителница
Правилен отговор: Б) в патентното ведомство в Берн
Докато се опитва да разгадае движението на планетите, Йоханес Кеплер е принуден да води и друга, далеч по-мрачна битка — за честта и живота на собствената си майка. В какво е обвинена тя?
А) в държавна измяна
Б) в алхимия
В) във вещерство
Г) в ерес срещу астрономията
Правилен отговор: В) във вещерство
Човекът, когото днес наричаме „баща на термодинамиката“, не доживява да види истинската слава на идеите си. Умира млад, едва на 36 години, по време на опустошителна епидемия. Коя?
А) едра шарка
Б) холера
В) чума
Г) тиф
Правилен отговор: Б) холера
Машина, която произвежда повече енергия, отколкото получава, е стара мечта на човечеството. Физиката обаче я поставя в раздел „невъзможни“. Как се нарича такава машина?
А) топлинен двигател
Б) генератор
В) перпетуум-мобиле
Г) трансформатор
Правилен отговор: В) перпетуум-мобиле
В модните среди името Келвин Клайн звучи като марка. Във физиката обаче Келвин е скала, която започва от най-ниската възможна температура. Как се нарича тази температура?
А) точка на замръзване
Б) абсолютна нула
В) стайна температура
Г) точка на кипене
Правилен отговор: Б) абсолютна нула
На върха на стръмна пързалка едно дете е почти неподвижно, но физиката вече „вижда“ в него запас от движение. Коя енергия е най-голяма в този момент?
А) кинетична
Б) потенциална
В) електрична
Г) ядрена
Правилен отговор: Б) потенциална
Едно камъче лежи спокойно на ръба на скала. Засега не се движи, но ако бъде бутнато, ще ускори надолу. Това означава, че още преди да падне то притежава най-вече каква енергия?
А) звукова
Б) потенциална
В) кинетична
Г) електромагнитна
Правилен отговор: Б) потенциална
Кое обяснява факта, че светкавицата се вижда преди да се чуе гръмът?
А) Светлината се разпространява по-бързо от звука
Б) Гръмът възниква след светкавицата
В) Звукът се движи само в облаците
Г) Светкавицата е по-близо от гръмотевицата
Правилен отговор: А) Светлината се разпространява по-бързо от звука
Когато автобусът спре рязко, пътниците се накланят напред поради:
А) триене
Б) инерция
В) дифракция
Г) магнитно поле
Правилен отговор: Б) инерция
Коя енергия има тяло, когато се движи?
А) потенциална
Б) вътрешна
В) кинетична
Г) електрична
Правилен отговор: В) кинетична
При нормално атмосферно налягане водата кипи при:
А) 0°C
Б) 50°C
В) 100°C
Г) 273°C
Правилен отговор: В) 100°C
Топлината винаги преминава самопроизволно от:
А) по-студено тяло към по-топло
Б) по-топло тяло към по-студено
В) по-леко тяло към по-тежко
Г) твърдо тяло към течно
Правилен отговор: Б) по-топло тяло към по-студено
Единицата за електричен ток е:
А) волт
Б) ом
В) ампер
Г) ват
Правилен отговор: В) ампер
Компасът се ориентира по:
А) електричното поле на Земята
Б) магнитното поле на Земята
В) светлината от Слънцето
Г) движението на облаците
Правилен отговор: Б) магнитното поле на Земята
Разлагането на бялата светлина на цветове при преминаване през призма се нарича:
А) отражение
Б) интерференция
В) дисперсия
Г) поглъщане
Правилен отговор: В) дисперсия
`;

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
  audience: document.querySelector("#audienceLifeline"),
  phone: document.querySelector("#phoneLifeline"),
  resultScreen: document.querySelector("#resultScreen"),
  resultKicker: document.querySelector("#resultKicker"),
  resultTitle: document.querySelector("#resultTitle"),
  resultProgress: document.querySelector("#resultProgress"),
  resultMessage: document.querySelector("#resultMessage"),
  resultRestartButton: document.querySelector("#resultRestartButton"),
  soundToggle: document.querySelector("#soundToggle")
};

const questionBank = parseQuestions(RAW_QUESTIONS);

const audio = createAudioEngine();

const state = {
  questions: [],
  level: 0,
  selected: false,
  failed: false,
  usedLifelines: {
    fifty: false,
    audience: false,
    phone: false
  }
};

function createAudioEngine() {
  const external = window.STANI_FIZIK_AUDIO || {};
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

    if (name === "lifeline" || name === "fifty" || name === "audience" || name === "phone") {
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

function parseQuestions(raw) {
  const lines = raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const questions = [];
  let current = null;

  function pushCurrent() {
    if (current && current.question && current.answers.length === 4 && Number.isInteger(current.correct)) {
      questions.push(current);
    }
  }

  lines.forEach((line) => {
    const answerMatch = line.match(/^([АБВГ])\)\s*(.+)$/);
    const correctMatch = line.match(/^Правилен отговор:\s*([АБВГ])\)/);

    if (correctMatch && current) {
      current.correct = LETTERS.indexOf(correctMatch[1]);
      pushCurrent();
      current = null;
      return;
    }

    if (answerMatch && current) {
      current.answers.push(answerMatch[2]);
      return;
    }

    if (!current) {
      current = {
        question: line.replace(/^\d+\)\s*/, ""),
        answers: [],
        correct: null
      };
      return;
    }

    current.question = `${current.question} ${line}`;
  });

  pushCurrent();

  return questions.map((question, index) => ({
    ...question,
    id: index,
    tier: getTier(question)
  }));
}

function getTier(question) {
  if (question.question.length < 92) return "easy";
  if (question.question.length < 190) return "medium";
  return "hard";
}

function shuffle(items) {
  return [...items]
    .map((item) => ({ item, order: crypto.getRandomValues(new Uint32Array(1))[0] }))
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item);
}

function buildQuestionSet() {
  const easy = shuffle(questionBank.filter((question) => question.tier === "easy"));
  const medium = shuffle(questionBank.filter((question) => question.tier === "medium"));
  const hard = shuffle(questionBank.filter((question) => question.tier === "hard"));
  const selected = [...easy.slice(0, 5), ...medium.slice(0, 5), ...hard.slice(0, 5)];

  if (selected.length < 15) {
    const selectedIds = new Set(selected.map((question) => question.id));
    const rest = shuffle(questionBank.filter((question) => !selectedIds.has(question.id)));
    selected.push(...rest.slice(0, 15 - selected.length));
  }

  return selected.slice(0, 15);
}

function startGame() {
  audio.unlock();
  audio.play("intro");
  audio.startAmbient();
  state.questions = buildQuestionSet();
  state.level = 0;
  state.selected = false;
  state.failed = false;
  state.usedLifelines = { fifty: false, audience: false, phone: false };
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
    const buttonIndex = Number(button.dataset.index);
    button.disabled = true;
    button.classList.remove("hidden-answer");
    if (buttonIndex === question.correct) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  if (isCorrect) {
    state.level += 1;
    state.failed = false;
    setTimeout(() => audio.play("correct"), 260);
  } else {
    state.failed = true;
    setTimeout(() => audio.play("wrong"), 260);
  }

  els.continueButton.disabled = false;
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
}

function getResultTitle() {
  if (state.level >= 15) return "Ти спечели титлата „Златен физик“!";
  if (state.level >= 12) return "Ти си в лигата на елитните физици!";
  if (state.level >= 10) return "Ти спечели титлата „Сребърен физик“!";
  if (state.level >= 5) return "Ти спечели титлата „Бронзов физик“!";
  return "Опитът приключи";
}

function getResultMessage() {
  if (state.level >= 15) return "Аплодисменти за това, че превърна знанието в злато.";
  if (state.level >= 12) return "В подножието на триумфа всичко е възможно.";
  if (state.level >= 10) return "Ерудицията ти буди възхищение.";
  if (state.level >= 5) return "Пътят нагоре е труден, но постижим със солидни знания.";
  return "Върни се към лабораторията и опитай отново.";
}

function resetLifelines() {
  [els.fifty, els.audience, els.phone].forEach((button) => {
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

function useAudience() {
  if (state.usedLifelines.audience || state.selected) return;
  audio.play("audience");

  state.usedLifelines.audience = true;
  els.audience.disabled = true;
  els.audience.classList.add("used");

  const question = currentQuestion();
  const correctPercent = randomBetween(55, 82);
  let remaining = 100 - correctPercent;
  const values = [0, 0, 0, 0];
  values[question.correct] = correctPercent;

  const wrong = [0, 1, 2, 3].filter((index) => index !== question.correct);
  wrong.forEach((index, order) => {
    if (order === wrong.length - 1) {
      values[index] = remaining;
    } else {
      const value = randomBetween(3, Math.max(4, remaining - 4));
      values[index] = value;
      remaining -= value;
    }
  });

  values.forEach((value, index) => {
    const text = els.answers.querySelector(`[data-index="${index}"] .answer-text`);
    text.insertAdjacentHTML("beforeend", ` <span class="poll-percent">${value}%</span>`);
  });
}

function usePhone() {
  if (state.usedLifelines.phone || state.selected) return;
  audio.play("phone");

  state.usedLifelines.phone = true;
  els.phone.disabled = true;
  els.phone.classList.add("used");

  const question = currentQuestion();
  const answer = question.answers[question.correct];
  const confidence = state.level < 9 ? "почти сигурен" : "не съм напълно сигурен, но бих заложил";
  els.helperPanel.innerHTML = `
    <h3>Вашият приятел казва:</h3>
    <p>Аз съм ${confidence} на ${LETTERS[question.correct]}: ${answer}.</p>
  `;
  els.helperPanel.classList.add("is-visible");
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function restartToStart() {
  audio.stopAmbient();
  els.resultScreen.classList.remove("is-visible");
  els.resultScreen.setAttribute("aria-hidden", "true");
  els.startScreen.classList.add("is-visible");
  state.level = 0;
  state.selected = false;
  state.failed = false;
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
els.audience.addEventListener("click", useAudience);
els.phone.addEventListener("click", usePhone);
els.soundToggle.addEventListener("click", audio.toggleMuted);
