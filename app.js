/* =========================================================
   5 MINUTOS 3.0
   JUEGOS + SOPA DE LETRAS INFINITA
   ========================================================= */


/* =========================================================
   DATOS GENERALES
   ========================================================= */

const quizData = {

  quick: {
    title: "Mente rápida",
    category: "MENTE RÁPIDA",
    questions: [
      {
        q: "¿Cuántos lados tiene un hexágono?",
        a: ["5", "6", "7", "8"],
        correct: 1
      },
      {
        q: "¿Cuál es el planeta más cercano al Sol?",
        a: ["Venus", "Marte", "Mercurio", "Júpiter"],
        correct: 2
      },
      {
        q: "¿Cuántos minutos tiene una hora?",
        a: ["50", "60", "70", "100"],
        correct: 1
      },
      {
        q: "¿Cuál es el resultado de 9 × 8?",
        a: ["64", "72", "81", "78"],
        correct: 1
      },
      {
        q: "¿Qué animal es conocido como el rey de la selva?",
        a: ["Tigre", "León", "Jaguar", "Oso"],
        correct: 1
      },
      {
        q: "¿Cuál es el océano más grande?",
        a: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        correct: 2
      },
      {
        q: "¿Cuántos días tiene una semana?",
        a: ["5", "6", "7", "8"],
        correct: 2
      },
      {
        q: "¿Qué sentido usamos para escuchar?",
        a: ["Vista", "Oído", "Tacto", "Gusto"],
        correct: 1
      },
      {
        q: "¿Cuál es el resultado de 100 ÷ 10?",
        a: ["5", "10", "20", "25"],
        correct: 1
      },
      {
        q: "¿Qué gas respiramos principalmente del aire?",
        a: ["Oxígeno", "Helio", "Hidrógeno", "Neón"],
        correct: 0
      }
    ]
  },

  quiz: {
    title: "Quiz express",
    category: "QUIZ EXPRESS",
    questions: [
      {
        q: "¿Cuál es la capital de Colombia?",
        a: ["Medellín", "Cali", "Bogotá", "Cartagena"],
        correct: 2
      },
      {
        q: "¿Cuál es el planeta conocido como planeta rojo?",
        a: ["Marte", "Venus", "Saturno", "Mercurio"],
        correct: 0
      },
      {
        q: "¿Quién pintó la Mona Lisa?",
        a: ["Picasso", "Da Vinci", "Van Gogh", "Dalí"],
        correct: 1
      },
      {
        q: "¿Cuántos continentes existen tradicionalmente?",
        a: ["5", "6", "7", "8"],
        correct: 2
      },
      {
        q: "¿Cuál es el animal terrestre más grande?",
        a: ["Rinoceronte", "Elefante", "Jirafa", "Hipopótamo"],
        correct: 1
      },
      {
        q: "¿Qué instrumento tiene teclas blancas y negras?",
        a: ["Violín", "Piano", "Flauta", "Trompeta"],
        correct: 1
      },
      {
        q: "¿Cuál es el idioma más hablado por número de hablantes nativos?",
        a: ["Español", "Inglés", "Chino mandarín", "Francés"],
        correct: 2
      },
      {
        q: "¿Qué planeta tiene anillos visibles?",
        a: ["Saturno", "Mercurio", "Marte", "Venus"],
        correct: 0
      },
      {
        q: "¿Cuál es el metal cuyo símbolo es Au?",
        a: ["Plata", "Oro", "Hierro", "Cobre"],
        correct: 1
      },
      {
        q: "¿Qué órgano bombea la sangre?",
        a: ["Pulmón", "Cerebro", "Corazón", "Hígado"],
        correct: 2
      }
    ]
  },

  prefer: {
    title: "¿Qué prefieres?",
    category: "DECIDE RÁPIDO",
    questions: [
      {
        q: "¿Qué prefieres?",
        a: ["Viajar al futuro", "Viajar al pasado"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Vivir en la playa", "Vivir en la montaña"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Ser invisible", "Poder volar"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Tener mucho dinero", "Tener mucho tiempo libre"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["No volver a usar redes sociales", "No volver a ver televisión"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Viajar por todo el mundo", "Tener la casa de tus sueños"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Leer todos los libros", "Ver todas las películas"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Tener memoria perfecta", "Aprender cualquier habilidad rápidamente"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Ser famoso", "Ser completamente anónimo"],
        correct: -1
      },
      {
        q: "¿Qué prefieres?",
        a: ["Comer tu comida favorita siempre", "Probar una comida nueva cada día"],
        correct: -1
      }
    ]
  },

  guess: {
    title: "Adivina",
    category: "ADIVINA",
    questions: [
      {
        q: "Tengo dientes pero no puedo comer. ¿Qué soy?",
        a: ["Un peine", "Un perro", "Un tenedor", "Una llave"],
        correct: 0
      },
      {
        q: "Tengo agujas pero no sé coser. ¿Qué soy?",
        a: ["Un reloj", "Un árbol", "Una camisa", "Un libro"],
        correct: 0
      },
      {
        q: "Cuanto más quitas, más grande se vuelve. ¿Qué es?",
        a: ["Un agujero", "Una caja", "Una piedra", "Una mesa"],
        correct: 0
      },
      {
        q: "Tiene ciudades pero no casas, ríos pero no agua. ¿Qué es?",
        a: ["Un mapa", "Un libro", "Un avión", "Una fotografía"],
        correct: 0
      },
      {
        q: "Sube y baja pero nunca se mueve de su lugar.",
        a: ["Una escalera", "Un ascensor", "El sol", "Una puerta"],
        correct: 0
      },
      {
        q: "Tiene cuello pero no cabeza.",
        a: ["Una botella", "Una persona", "Un árbol", "Una camisa"],
        correct: 0
      },
      {
        q: "Cuanto más seca, más moja.",
        a: ["Una toalla", "Una piedra", "Una nube", "Una hoja"],
        correct: 0
      },
      {
        q: "Vuelo sin alas y lloro sin ojos.",
        a: ["Una nube", "Un avión", "Un pájaro", "Un árbol"],
        correct: 0
      },
      {
        q: "Tiene manos pero no puede aplaudir.",
        a: ["Un reloj", "Una persona", "Un árbol", "Un muñeco"],
        correct: 0
      },
      {
        q: "Tiene un ojo pero no puede ver.",
        a: ["Una aguja", "Un gato", "Una cámara", "Una ventana"],
        correct: 0
      }
    ]
  }
};


/* =========================================================
   BANCO GRANDE PARA SOPA DE LETRAS
   ========================================================= */

const WORD_CATEGORIES = {

  Animales: [
    "ELEFANTE", "TIGRE", "LEON", "JAGUAR", "GATO",
    "PERRO", "CABALLO", "ZORRO", "LOBO", "MONO",
    "GORILA", "CEBRA", "JIRAFA", "OSO", "CONEJO",
    "DELFIN", "BALLENA", "TIBURON", "AGUILA", "BUHO",
    "LORO", "PATO", "GANSO", "SERPIENTE", "IGUANA"
  ],

  Comida: [
    "PIZZA", "HAMBURGUESA", "PASTA", "ARROZ", "SOPA",
    "AREPA", "TACO", "QUESO", "PAN", "POLLO",
    "CARNE", "ENSALADA", "CEVICHE", "SUSHI", "PAELLA",
    "LASAGNA", "EMPANADA", "TAMAL", "SANDWICH", "PAPAS",
    "CHOCOLATE", "GALLETA", "HELADO", "YOGURT", "TORTA"
  ],

  Tecnologia: [
    "CELULAR", "COMPUTADOR", "TABLETA", "INTERNET", "CAMARA",
    "TECLADO", "MOUSE", "PANTALLA", "ROBOT", "SERVIDOR",
    "CODIGO", "PROGRAMA", "APLICACION", "NAVEGADOR", "DATOS",
    "MEMORIA", "BATERIA", "PROCESADOR", "SISTEMA", "RED",
    "WIFI", "BLUETOOTH", "NUBE", "SOFTWARE", "HARDWARE"
  ],

  Colombia: [
    "COLOMBIA", "BOGOTA", "MEDELLIN", "CARTAGENA", "CALI",
    "BARRANQUILLA", "SANTA MARTA", "ARMENIA", "PEREIRA", "IBAGUE",
    "PASTO", "MANIZALES", "VALLEDUPAR", "MONTERIA", "TUNJA",
    "AMAZONAS", "CARIBE", "ANDES", "CAFE", "AREPA",
    "CUMBIA", "VALLENATO", "GUATAPE", "SANANDRES", "PACIFICO"
  ],

  Espacio: [
    "PLANETA", "ESTRELLA", "LUNA", "SOL", "MARTE",
    "VENUS", "JUPITER", "SATURNO", "NEPTUNO", "URANO",
    "MERCURIO", "GALAXIA", "ASTRONAUTA", "COHETE", "COMETA",
    "ASTEROIDE", "ORBITA", "UNIVERSO", "COSMOS", "SATELITE",
    "ECLIPSE", "GRAVEDAD", "NEBULOSA", "METEORO", "TIERRA"
  ],

  Naturaleza: [
    "BOSQUE", "RIO", "MONTAÑA", "PLAYA", "ARBOLES",
    "FLORES", "HOJAS", "LLUVIA", "NUBE", "VIENTO",
    "TRUENO", "RAYO", "LAGO", "CASCADA", "VOLCAN",
    "DESIERTO", "SELVA", "OCEANO", "ARENA", "TIERRA",
    "ROCA", "HIERBA", "JARDIN", "AMANECER", "ATARDECER"
  ],

  Deportes: [
    "FUTBOL", "TENIS", "BOXEO", "NATACION", "CICLISMO",
    "BALONCESTO", "VOLEIBOL", "BEISBOL", "ATLETISMO", "GOLF",
    "SURF", "PATINAJE", "AJEDREZ", "RUGBY", "MARATON",
    "ESCALAR", "ESQUI", "KARATE", "JUDO", "TAEKWONDO",
    "GIMNASIA", "REMO", "CARRERA", "DEPORTE", "EQUIPO"
  ],

  Musica: [
    "MUSICA", "CANCION", "RITMO", "MELODIA", "PIANO",
    "GUITARRA", "BATERIA", "VIOLIN", "TROMPETA", "FLAUTA",
    "CUMBIA", "SALSA", "ROCK", "JAZZ", "POP",
    "RAP", "VALLENATO", "MERENGUE", "REGGAE", "TANGO",
    "CONCIERTO", "ARTISTA", "CANTANTE", "SONIDO", "BAILE"
  ],

  Cine: [
    "PELICULA", "ACTOR", "ACTRIZ", "DIRECTOR", "CAMARA",
    "ESCENA", "GUION", "HEROE", "VILLANO", "COMEDIA",
    "DRAMA", "ACCION", "TERROR", "ROMANCE", "CINE",
    "SERIE", "TRAILER", "OSCAR", "ESTRENO", "PERSONAJE",
    "MARVEL", "BATMAN", "SUPERMAN", "SPIDERMAN", "AVATAR"
  ],

  Viajes: [
    "VIAJE", "HOTEL", "MALETA", "AVION", "TREN",
    "BUS", "BARCO", "PLAYA", "TURISMO", "MAPA",
    "PASAPORTE", "CAMARA", "DESTINO", "CIUDAD", "PAIS",
    "AEROPUERTO", "RESERVA", "VACACIONES", "GUIA", "RUTA",
    "ISLA", "MOCHILA", "CAMINATA", "EXCURSION", "AVENTURA"
  ],

  Ciencia: [
    "CIENCIA", "ATOMO", "CELULA", "ENERGIA", "MATERIA",
    "FISICA", "QUIMICA", "BIOLOGIA", "GENETICA", "PLANETA",
    "MOLECULA", "ELECTRON", "PROTON", "NEUTRON", "LITRO",
    "METRO", "GRAVEDAD", "FUSION", "REACCION", "LABORATORIO",
    "MICROSCOPIO", "TEORIA", "EXPERIMENTO", "DATO", "FORMULA"
  ],

  Profesiones: [
    "MEDICO", "ENFERMERO", "ABOGADO", "INGENIERO", "DOCENTE",
    "POLICIA", "BOMBERO", "CHEF", "PILOTO", "ARQUITECTO",
    "CONTADOR", "PROGRAMADOR", "DISEÑADOR", "MUSICO", "ACTOR",
    "PERIODISTA", "FOTOGRAFO", "VETERINARIO", "MECANICO", "ELECTRICISTA",
    "CARPINTERO", "PINTOR", "PANADERO", "AGRICULTOR", "GUARDIA"
  ],

  Hogar: [
    "CASA", "MESA", "SILLA", "CAMA", "SOFA",
    "COCINA", "BAÑO", "PUERTA", "VENTANA", "TECHO",
    "PARED", "LAMPARA", "ESPEJO", "ARMARIO", "NEVERA",
    "HORNO", "ESTUFA", "TELEVISOR", "ALMOHADA", "SABANA",
    "TOALLA", "PLATO", "VASO", "CUCHARA", "TENEDOR"
  ],

  Cuerpo: [
    "CABEZA", "CABELLO", "OJOS", "NARIZ", "BOCA",
    "OREJA", "CUELLO", "BRAZO", "MANO", "DEDO",
    "PECHO", "ESPALDA", "PIERNA", "RODILLA", "PIE",
    "CORAZON", "CEREBRO", "PULMON", "HIGADO", "ESTOMAGO",
    "HUESO", "MUSCULO", "SANGRE", "PIEL", "DIENTE"
  ],

  Escuela: [
    "ESCUELA", "LIBRO", "LAPIZ", "CUADERNO", "CLASE",
    "TAREA", "EXAMEN", "PROFESOR", "ESTUDIANTE", "TABLERO",
    "MATERIA", "HISTORIA", "MATEMATICA", "CIENCIA", "IDIOMA",
    "LECTURA", "ESCRITURA", "ARTE", "MUSICA", "GEOGRAFIA",
    "RECREO", "MOCHILA", "REGLA", "PAPEL", "PLUMA"
  ],

  Transporte: [
    "CARRO", "MOTO", "BUS", "TREN", "AVION",
    "BARCO", "BICICLETA", "TAXI", "CAMION", "METRO",
    "TRAM", "HELICOPTERO", "COHETE", "PATINETA", "VEHICULO",
    "MOTOR", "RUEDA", "CARRETERA", "PUENTE", "ESTACION",
    "AEROPUERTO", "PUERTO", "TUNEL", "TRAFICO", "VIA"
  ],

  Paises: [
    "COLOMBIA", "MEXICO", "ESPAÑA", "FRANCIA", "ITALIA",
    "BRASIL", "ARGENTINA", "CHILE", "PERU", "ECUADOR",
    "CANADA", "JAPON", "CHINA", "INDIA", "AUSTRALIA",
    "EGIPTO", "ALEMANIA", "PORTUGAL", "PANAMA", "VENEZUELA",
    "BOLIVIA", "URUGUAY", "PARAGUAY", "CUBA", "JAMAICA"
  ],

  Frutas: [
    "MANZANA", "BANANO", "MANGO", "NARANJA", "LIMON",
    "SANDIA", "MELON", "PAPAYA", "PIÑA", "UVA",
    "FRESA", "CEREZA", "PERA", "DURAZNO", "KIWI",
    "COCO", "GUAYABA", "MARACUYA", "GRANADILLA", "MANDARINA",
    "CIRUELA", "MORA", "FRAMBUESA", "AGUACATE", "TOMATE"
  ],

  Juegos: [
    "JUEGO", "CARTAS", "DADOS", "AJEDREZ", "DOMINO",
    "LOTERIA", "PARQUES", "MEMORIA", "PUZZLE", "VIDEOJUEGO",
    "CONTROL", "CONSOLA", "NIVEL", "PUNTOS", "PREMIO",
    "RETO", "RACHA", "VICTORIA", "EQUIPO", "TORNEO",
    "TABLERO", "FICHA", "CUBO", "MESA", "CARRERA"
  ]

};


/* =========================================================
   VARIABLES
   ========================================================= */

let currentGame = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let quizPoints = 0;
let quizStreak = 0;
let quizTimer = null;
let quizTimeLeft = 20;

let wordBoardData = [];
let wordPositions = {};
let wordFound = [];
let selectedCells = [];
let isSelecting = false;
let wordTimer = null;
let wordTimeLeft = 120;
let wordPoints = 0;
let wordStreak = 0;
let wordGameEnded = false;
let currentWordSetSignature = "";

const BOARD_SIZE = 10;
const WORDS_PER_GAME = 8;

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

let stats = JSON.parse(
  localStorage.getItem("cincoMinutosStats") || "{}"
);

stats.games = stats.games || 0;
stats.points = stats.points || 0;
stats.bestStreak = stats.bestStreak || 0;
stats.words = stats.words || 0;

let wordHistory = JSON.parse(
  localStorage.getItem("wordPuzzleHistory") || "[]"
);

function saveStats() {
  localStorage.setItem(
    "cincoMinutosStats",
    JSON.stringify(stats)
  );
}

function saveWordHistory() {
  localStorage.setItem(
    "wordPuzzleHistory",
    JSON.stringify(wordHistory)
  );
}


/* =========================================================
   NAVEGACION
   ========================================================= */

function showPage(id) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(id);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo(0, 0);
}

function goHome() {

  stopTimers();

  closeModal();

  showPage("homePage");

  updateHomeStats();
}


/* =========================================================
   ESTADISTICAS
   ========================================================= */

function updateHomeStats() {

  document.getElementById("homePoints").textContent =
    stats.points;

  document.getElementById("statGames").textContent =
    stats.games;

  document.getElementById("statPoints").textContent =
    stats.points;

  document.getElementById("statBest").textContent =
    stats.bestStreak;

  document.getElementById("statWords").textContent =
    stats.words;

  updateAchievement();
}

function updateAchievement() {

  const title = document.getElementById("achievementTitle");
  const text = document.getElementById("achievementText");

  if (stats.games === 0) {

    title.textContent = "Primer paso";
    text.textContent = "Juega tu primera partida";

  } else if (stats.points >= 1000) {

    title.textContent = "⚡ Imparable";
    text.textContent = "Has conseguido más de 1000 puntos";

  } else if (stats.words >= 50) {

    title.textContent = "🔤 Cazador de palabras";
    text.textContent = "Has encontrado 50 palabras";

  } else if (stats.bestStreak >= 5) {

    title.textContent = "🔥 En racha";
    text.textContent = "Has conseguido una racha de 5";

  } else {

    title.textContent = "🚀 En marcha";
    text.textContent = "Sigue jugando para desbloquear logros";
  }
}


/* =========================================================
   SORPRÉNDEME
   ========================================================= */

function surpriseMe() {

  const games = [
    "quick",
    "quiz",
    "prefer",
    "guess",
    "word"
  ];

  const random =
    games[Math.floor(Math.random() * games.length)];

  if (random === "word") {
    startWordSearch();
  } else {
    startQuiz(random);
  }
}


/* =========================================================
   QUIZ
   ========================================================= */

function startQuiz(type) {

  stopTimers();

  currentGame = type;

  const data = quizData[type];

  if (!data) return;

  currentQuestions =
    shuffle([...data.questions]);

  currentQuestionIndex = 0;
  quizPoints = 0;
  quizStreak = 0;

  showPage("quizPage");

  document.getElementById("quizCategory").textContent =
    data.category;

  document.getElementById("quizTitle").textContent =
    data.title;

  document.getElementById("quizPoints").textContent = "0";
  document.getElementById("quizStreak").textContent = "0";

  loadQuestion();
}

function loadQuestion() {

  clearInterval(quizTimer);

  const question =
    currentQuestions[currentQuestionIndex];

  if (!question) {
    finishQuiz();
    return;
  }

  document.getElementById("questionNumber").textContent =
    currentQuestionIndex + 1;

  document.getElementById("questionText").textContent =
    question.q;

  document.getElementById("quizPoints").textContent =
    quizPoints;

  document.getElementById("quizStreak").textContent =
    quizStreak;

  document.getElementById("quizProgress").style.width =
    ((currentQuestionIndex) /
      currentQuestions.length * 100) + "%";

  const answers =
    document.getElementById("answers");

  answers.innerHTML = "";

  question.a.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.className = "answer-btn";

    button.textContent = answer;

    button.onclick = () =>
      answerQuestion(index, button);

    answers.appendChild(button);
  });

  document
    .getElementById("nextQuestionBtn")
    .classList.add("hidden");

  quizTimeLeft = 20;

  document.getElementById("quizTimer").textContent =
    quizTimeLeft;

  quizTimer = setInterval(() => {

    quizTimeLeft--;

    document.getElementById("quizTimer").textContent =
      quizTimeLeft;

    if (quizTimeLeft <= 0) {

      clearInterval(quizTimer);

      lockAnswers();

      quizStreak = 0;

      document.getElementById("quizStreak").textContent =
        quizStreak;

      document
        .getElementById("nextQuestionBtn")
        .classList.remove("hidden");
    }

  }, 1000);
}

function answerQuestion(index, selectedButton) {

  clearInterval(quizTimer);

  const question =
    currentQuestions[currentQuestionIndex];

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (question.correct === -1) {

    selectedButton.classList.add("correct");

    quizPoints += 10;
    quizStreak++;

  } else if (index === question.correct) {

    selectedButton.classList.add("correct");

    const bonus =
      Math.max(0, quizTimeLeft);

    quizPoints += 10 + bonus;
    quizStreak++;

  } else {

    selectedButton.classList.add("wrong");

    buttons[question.correct]
      .classList.add("correct");

    quizStreak = 0;
  }

  if (quizStreak > stats.bestStreak) {
    stats.bestStreak = quizStreak;
  }

  document.getElementById("quizPoints").textContent =
    quizPoints;

  document.getElementById("quizStreak").textContent =
    quizStreak;

  document
    .getElementById("nextQuestionBtn")
    .classList.remove("hidden");
}

function lockAnswers() {

  const buttons =
    document.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.disabled = true;
  });
}

function nextQuestion() {

  currentQuestionIndex++;

  if (currentQuestionIndex >= currentQuestions.length) {
    finishQuiz();
    return;
  }

  loadQuestion();
}

function finishQuiz() {

  stopTimers();

  stats.games++;
  stats.points += quizPoints;

  if (quizStreak > stats.bestStreak) {
    stats.bestStreak = quizStreak;
  }

  saveStats();

  showResult(
    "🎉",
    "QUIZ TERMINADO",
    "¡Terminaste todas las preguntas!",
    quizPoints,
    false
  );
}


/* =========================================================
   RETO DIARIO
   ========================================================= */

function dailyChallenge() {

  const today =
    new Date().toISOString().slice(0, 10);

  const seed =
    today.split("-").join("");

  const number =
    Number(seed) % quizData.quick.questions.length;

  currentGame = "quick";

  currentQuestions = [
    quizData.quick.questions[number]
  ];

  currentQuestionIndex = 0;
  quizPoints = 0;
  quizStreak = 0;

  showPage("quizPage");

  document.getElementById("quizCategory").textContent =
    "🔥 RETO DIARIO";

  document.getElementById("quizTitle").textContent =
    "Reto de hoy";

  loadQuestion();
}


/* =========================================================
   SOPA DE LETRAS 3.0
   ========================================================= */

function startWordSearch() {

  stopTimers();

  wordGameEnded = false;
  wordPoints = 0;
  wordStreak = 0;
  wordFound = [];
  selectedCells = [];
  wordPositions = {};

  const puzzle =
    createUniquePuzzle();

  if (!puzzle) {
    alert("No se pudo generar una nueva sopa. Intenta otra vez.");
    return;
  }

  const {
    words,
    category
  } = puzzle;

  currentWordSetSignature =
    words.slice().sort().join("|");

  wordFound =
    words.map(() => false);

  document.getElementById("wordTheme").textContent =
    category;

  document.getElementById("wordPoints").textContent =
    "0";

  document.getElementById("wordStreak").textContent =
    "0";

  document.getElementById("foundCount").textContent =
    "0";

  document.getElementById("wordDifficulty").textContent =
    "NUEVA";

  renderWordList(words);

  showPage("wordPage");

  generateWordBoard(words);

  setupTouchSelection();

  startWordTimer();
}

function newWordGame() {
  startWordSearch();
}


/* =========================================================
   CREAR PUZZLE NUEVO
   ========================================================= */

function createUniquePuzzle() {

  const categories =
    Object.keys(WORD_CATEGORIES);

  for (let attempt = 0; attempt < 1000; attempt++) {

    const category =
      categories[
        Math.floor(Math.random() * categories.length)
      ];

    const source =
      WORD_CATEGORIES[category]
        .filter(word => word.length >= 4)
        .filter(word => word.length <= BOARD_SIZE);

    const words =
      shuffle([...source])
        .slice(0, WORDS_PER_GAME);

    if (words.length < WORDS_PER_GAME) {
      continue;
    }

    const signature =
      words.slice().sort().join("|");

    if (wordHistory.includes(signature)) {
      continue;
    }

    if (!canBuildPuzzle(words)) {
      continue;
    }

    wordHistory.push(signature);

    saveWordHistory();

    return {
      words,
      category
    };
  }

  /*
     Si después de muchos intentos hay coincidencia,
     usamos una mezcla de categorías.
  */

  const allWords = [];

  categories.forEach(category => {

    WORD_CATEGORIES[category].forEach(word => {

      if (
        word.length >= 4 &&
        word.length <= BOARD_SIZE &&
        !allWords.includes(word)
      ) {
        allWords.push(word);
      }

    });

  });

  for (let attempt = 0; attempt < 1000; attempt++) {

    const words =
      shuffle([...allWords])
        .slice(0, WORDS_PER_GAME);

    const signature =
      words.slice().sort().join("|");

    if (wordHistory.includes(signature)) {
      continue;
    }

    if (!canBuildPuzzle(words)) {
      continue;
    }

    wordHistory.push(signature);

    saveWordHistory();

    return {
      words,
      category: "MEZCLA"
    };
  }

  return null;
}


/* =========================================================
   GENERADOR DE TABLERO
   ========================================================= */

function canBuildPuzzle(words) {

  const board =
    Array.from(
      { length: BOARD_SIZE },
      () => Array(BOARD_SIZE).fill("")
    );

  for (const word of shuffle([...words])) {

    let placed = false;

    for (let attempt = 0; attempt < 500; attempt++) {

      const direction =
        DIRECTIONS[
          Math.floor(Math.random() * DIRECTIONS.length)
        ];

      const row =
        Math.floor(Math.random() * BOARD_SIZE);

      const col =
        Math.floor(Math.random() * BOARD_SIZE);

      if (
        canPlaceWordOnBoard(
          board,
          word,
          row,
          col,
          direction[0],
          direction[1]
        )
      ) {

        placeWordOnBoard(
          board,
          word,
          row,
          col,
          direction[0],
          direction[1]
        );

        placed = true;
        break;
      }
    }

    if (!placed) {
      return false;
    }
  }

  return true;
}

function generateWordBoard(words) {

  wordBoardData =
    Array.from(
      { length: BOARD_SIZE },
      () => Array(BOARD_SIZE).fill("")
    );

  wordPositions = {};

  /*
     Intentamos construir el tablero muchas veces.
  */

  let success = false;

  for (let boardAttempt = 0; boardAttempt < 300; boardAttempt++) {

    const board =
      Array.from(
        { length: BOARD_SIZE },
        () => Array(BOARD_SIZE).fill("")
      );

    const positions = {};

    let allPlaced = true;

    /*
       Las palabras largas primero.
    */

    const orderedWords =
      [...words].sort(
        (a, b) => b.length - a.length
      );

    for (const word of orderedWords) {

      let placed = false;

      for (let attempt = 0; attempt < 700; attempt++) {

        const direction =
          DIRECTIONS[
            Math.floor(Math.random() * DIRECTIONS.length)
          ];

        const row =
          Math.floor(Math.random() * BOARD_SIZE);

        const col =
          Math.floor(Math.random() * BOARD_SIZE);

        if (
          canPlaceWordOnBoard(
            board,
            word,
            row,
            col,
            direction[0],
            direction[1]
          )
        ) {

          const cells =
            placeWordOnBoard(
              board,
              word,
              row,
              col,
              direction[0],
              direction[1]
            );

          positions[word] = cells;

          placed = true;

          break;
        }
      }

      if (!placed) {

        allPlaced = false;

        break;
      }
    }

    if (allPlaced) {

      wordBoardData = board;
      wordPositions = positions;

      success = true;

      break;
    }
  }

  /*
     Si falló, generamos de nuevo con otro conjunto.
  */

  if (!success) {

    const newPuzzle =
      createUniquePuzzle();

    if (newPuzzle) {

      wordHistory =
        wordHistory.filter(
          item => item !== currentWordSetSignature
        );

      saveWordHistory();

      startWordSearch();

      return;
    }
  }

  /*
     Rellenar huecos.
  */

  for (let row = 0; row < BOARD_SIZE; row++) {

    for (let col = 0; col < BOARD_SIZE; col++) {

      if (!wordBoardData[row][col]) {

        wordBoardData[row][col] =
          randomLetter();
      }

    }
  }

  renderWordBoard();
}

function canPlaceWordOnBoard(
  board,
  word,
  row,
  col,
  dr,
  dc
) {

  for (let i = 0; i < word.length; i++) {

    const r = row + dr * i;
    const c = col + dc * i;

    if (
      r < 0 ||
      r >= BOARD_SIZE ||
      c < 0 ||
      c >= BOARD_SIZE
    ) {
      return false;
    }

    const existing = board[r][c];

    if (
      existing &&
      existing !== word[i]
    ) {
      return false;
    }
  }

  return true;
}

function placeWordOnBoard(
  board,
  word,
  row,
  col,
  dr,
  dc
) {

  const cells = [];

  for (let i = 0; i < word.length; i++) {

    const r = row + dr * i;
    const c = col + dc * i;

    board[r][c] = word[i];

    cells.push({
      row: r,
      col: c
    });
  }

  return cells;
}

function renderWordBoard() {

  const board =
    document.getElementById("wordBoard");

  board.innerHTML = "";

  for (let row = 0; row < BOARD_SIZE; row++) {

    for (let col = 0; col < BOARD_SIZE; col++) {

      const cell =
        document.createElement("div");

      cell.className = "word-cell";

      cell.dataset.row = row;
      cell.dataset.col = col;

      cell.textContent =
        wordBoardData[row][col];

      board.appendChild(cell);
    }
  }
}


/* =========================================================
   SELECCIONAR CON EL DEDO
   ========================================================= */

function setupTouchSelection() {

  const board =
    document.getElementById("wordBoard");

  board.onpointerdown = handlePointerDown;
  board.onpointermove = handlePointerMove;
  board.onpointerup = handlePointerUp;
  board.onpointercancel = handlePointerCancel;
}

function handlePointerDown(event) {

  if (wordGameEnded) return;

  event.preventDefault();

  const board =
    document.getElementById("wordBoard");

  const cell =
    getCellFromPoint(event.clientX, event.clientY);

  if (!cell) return;

  isSelecting = true;

  selectedCells = [cell];

  board.setPointerCapture(event.pointerId);

  showWordPreview();
}

function handlePointerMove(event) {

  if (!isSelecting || wordGameEnded) return;

  event.preventDefault();

  const cell =
    getCellFromPoint(event.clientX, event.clientY);

  if (!cell) return;

  const last =
    selectedCells[selectedCells.length - 1];

  if (
    last &&
    last.row === cell.row &&
    last.col === cell.col
  ) {
    return;
  }

  const line =
    getLineCells(
      selectedCells[0],
      cell
    );

  if (line.length > 0) {

    selectedCells = line;

    showWordPreview();
  }
}

function handlePointerUp(event) {

  if (!isSelecting) return;

  event.preventDefault();

  isSelecting = false;

  finishWordSelection();

  const board =
    document.getElementById("wordBoard");

  try {
    board.releasePointerCapture(event.pointerId);
  } catch (error) {}
}

function handlePointerCancel() {

  if (!isSelecting) return;

  isSelecting = false;

  clearWordPreview();

  selectedCells = [];
}

function getCellFromPoint(x, y) {

  const board =
    document.getElementById("wordBoard");

  if (!board) return null;

  const rect =
    board.getBoundingClientRect();

  const relativeX =
    x - rect.left;

  const relativeY =
    y - rect.top;

  if (
    relativeX < 0 ||
    relativeY < 0 ||
    relativeX > rect.width ||
    relativeY > rect.height
  ) {
    return null;
  }

  const cellWidth =
    rect.width / BOARD_SIZE;

  const cellHeight =
    rect.height / BOARD_SIZE;

  const col =
    Math.floor(relativeX / cellWidth);

  const row =
    Math.floor(relativeY / cellHeight);

  if (
    row < 0 ||
    row >= BOARD_SIZE ||
    col < 0 ||
    col >= BOARD_SIZE
  ) {
    return null;
  }

  return {
    row,
    col
  };
}


/* =========================================================
   LINEA DE SELECCION
   ========================================================= */

function getLineCells(start, end) {

  const dr =
    end.row - start.row;

  const dc =
    end.col - start.col;

  /*
     Solo permitimos:
     horizontal
     vertical
     diagonal
  */

  const absR = Math.abs(dr);
  const absC = Math.abs(dc);

  if (
    dr !== 0 &&
    dc !== 0 &&
    absR !== absC
  ) {
    return [];
  }

  const stepR =
    dr === 0 ? 0 : Math.sign(dr);

  const stepC =
    dc === 0 ? 0 : Math.sign(dc);

  const length =
    Math.max(absR, absC) + 1;

  const cells = [];

  for (let i = 0; i < length; i++) {

    cells.push({
      row: start.row + stepR * i,
      col: start.col + stepC * i
    });
  }

  return cells;
}

function showWordPreview() {

  clearWordPreview();

  selectedCells.forEach(cell => {

    const element =
      getWordCell(
        cell.row,
        cell.col
      );

    if (element) {
      element.classList.add("preview");
    }
  });
}

function clearWordPreview() {

  document
    .querySelectorAll(".word-cell.preview")
    .forEach(cell => {
      cell.classList.remove("preview");
    });
}


/* =========================================================
   COMPROBAR PALABRA
   ========================================================= */

function finishWordSelection() {

  clearWordPreview();

  if (
    selectedCells.length < 2 ||
    wordGameEnded
  ) {
    selectedCells = [];
    return;
  }

  const selectedWord =
    selectedCells
      .map(cell =>
        wordBoardData[cell.row][cell.col]
      )
      .join("");

  const reversed =
    selectedWord
      .split("")
      .reverse()
      .join("");

  let foundIndex = -1;

  for (let i = 0; i < wordFound.length; i++) {

    if (wordFound[i]) continue;

    const word =
      getCurrentWords()[i];

    if (
      selectedWord === word ||
      reversed === word
    ) {

      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) {

    selectedCells = [];

    return;
  }

  wordFound[foundIndex] = true;

  wordStreak++;

  wordPoints +=
    20 +
    wordStreak * 5 +
    Math.min(30, wordTimeLeft);

  stats.words++;

  if (wordStreak > stats.bestStreak) {
    stats.bestStreak = wordStreak;
  }

  document.getElementById("wordPoints").textContent =
    wordPoints;

  document.getElementById("wordStreak").textContent =
    wordStreak;

  document.getElementById("foundCount").textContent =
    wordFound.filter(Boolean).length;

  markFoundCells(
    getCurrentWords()[foundIndex]
  );

  renderWordList(
    getCurrentWords()
  );

  selectedCells = [];

  if (
    wordFound.every(Boolean)
  ) {

    setTimeout(() => {
      finishWordSearch(false);
    }, 350);
  }
}

function markFoundCells(word) {

  const positions =
    wordPositions[word];

  if (!positions) return;

  positions.forEach(cell => {

    const element =
      getWordCell(
        cell.row,
        cell.col
      );

    if (element) {
      element.classList.add("found");
    }
  });
}

function getWordCell(row, col) {

  return document.querySelector(
    `.word-cell[data-row="${row}"][data-col="${col}"]`
  );
}

function getCurrentWords() {

  return currentWordSetSignature
    .split("|")
    .filter(Boolean);
}


/* =========================================================
   LISTA DE PALABRAS
   ========================================================= */

function renderWordList(words) {

  const container =
    document.getElementById("wordList");

  container.innerHTML = "";

  words.forEach((word, index) => {

    const item =
      document.createElement("div");

    item.className = "word-item";

    if (wordFound[index]) {
      item.classList.add("found");
    }

    item.textContent = word;

    container.appendChild(item);
  });
}


/* =========================================================
   TEMPORIZADOR SOPA
   ========================================================= */

function startWordTimer() {

  clearInterval(wordTimer);

  wordTimeLeft = 120;

  document.getElementById("wordTimer").textContent =
    wordTimeLeft;

  wordTimer = setInterval(() => {

    if (wordGameEnded) {
      clearInterval(wordTimer);
      return;
    }

    wordTimeLeft--;

    document.getElementById("wordTimer").textContent =
      wordTimeLeft;

    if (wordTimeLeft <= 0) {

      clearInterval(wordTimer);

      finishWordSearch(true);
    }

  }, 1000);
}


/* =========================================================
   TERMINAR SOPA
   ========================================================= */

function finishWordSearch(timeUp = false) {

  if (wordGameEnded) return;

  wordGameEnded = true;

  clearInterval(wordTimer);

  const found =
    wordFound.filter(Boolean).length;

  const total =
    wordFound.length;

  stats.games++;
  stats.points += wordPoints;

  saveStats();

  if (found === total) {

    showResult(
      "🏆",
      "¡SOPA COMPLETADA!",
      "Encontraste las 8 palabras. ¡Excelente partida!",
      wordPoints,
      true
    );

  } else if (timeUp) {

    showResult(
      "⏱️",
      "SE ACABÓ EL TIEMPO",
      `Encontraste ${found} de ${total} palabras.`,
      wordPoints,
      true
    );

  } else {

    showResult(
      "🔤",
      "PARTIDA TERMINADA",
      `Encontraste ${found} de ${total} palabras.`,
      wordPoints,
      true
    );
  }
}


/* =========================================================
   RESULTADOS
   ========================================================= */

let resultIsWordGame = false;

function showResult(
  emoji,
  title,
  text,
  points,
  isWordGame
) {

  resultIsWordGame = isWordGame;

  document.getElementById("resultEmoji").textContent =
    emoji;

  document.getElementById("resultSmall").textContent =
    isWordGame
      ? "SOPA DE LETRAS"
      : "RESULTADO";

  document.getElementById("resultTitle").textContent =
    title;

  document.getElementById("resultText").textContent =
    text;

  document.getElementById("resultPoints").textContent =
    points;

  const button =
    document.getElementById("resultPrimary");

  button.textContent =
    isWordGame
      ? "🔤 Nueva sopa"
      : "Continuar";

  document
    .getElementById("resultModal")
    .classList.remove("hidden");
}

function resultPrimaryAction() {

  closeModal();

  if (resultIsWordGame) {

    startWordSearch();

  } else {

    goHome();
  }
}

function closeModal() {

  document
    .getElementById("resultModal")
    .classList.add("hidden");
}


/* =========================================================
   UTILIDADES
   ========================================================= */

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [
      array[i],
      array[j]
    ] = [
      array[j],
      array[i]
    ];
  }

  return array;
}

function randomLetter() {

  return LETTERS[
    Math.floor(
      Math.random() * LETTERS.length
    )
  ];
}

function stopTimers() {

  clearInterval(quizTimer);
  clearInterval(wordTimer);

  quizTimer = null;
  wordTimer = null;
}


/* =========================================================
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  updateHomeStats();

  showPage("homePage");
});

/* =========================================================
   PWA — REGISTRO DEL SERVICE WORKER
   ========================================================= */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", () => {

    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {

        console.log("5 Minutos PWA: Service Worker activo");

      })
      .catch(error => {

        console.log(
          "5 Minutos PWA: Service Worker pendiente de activar",
          error
        );

      });

  });

}