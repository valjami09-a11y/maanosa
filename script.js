
"use strict";

/* =====================================
   ELÄINTEN MAAILMA
   Kaikki sivuston toiminnot
===================================== */

const continents = [
    {
        id: "afrikka",
        name: "Afrikka",
        emoji: "🦁",
        visual: "🌅",
        color: "#f8e7c9",
        description: "Afrikka on lämmin maanosa, jossa on suuria savanneja, metsiä ja aavikoita.",
        fact: "Afrikassa elää monia suuria eläimiä. Savannilla voi nähdä norsuja, leijonia ja kirahveja. Siellä on myös maailman suuria aavikoita.",
        animals: [
            {
                name: "Leijona",
                emoji: "🦁",
                description: "Leijona on suuri kissaeläin. Se elää usein savannilla ja sitä kutsutaan eläinten kuninkaaksi.",
                sound: "leijona"
            },
            {
                name: "Norsu",
                emoji: "🐘",
                description: "Norsulla on pitkä kärsä ja suuret korvat. Se käyttää kärsäänsä moniin asioihin.",
                sound: "norsu"
            },
            {
                name: "Kirahvi",
                emoji: "🦒",
                description: "Kirahvilla on todella pitkä kaula. Sen avulla se ylettyy korkealla kasvaviin lehtiin."
            },
            {
                name: "Seepra",
                emoji: "🦓",
                description: "Seebralla on mustia ja valkoisia raitoja. Jokaisen seepran raidat ovat erilaiset."
            }
        ]
    },

    {
        id: "aasia",
        name: "Aasia",
        emoji: "🐼",
        visual: "🎋",
        color: "#e3efd9",
        description: "Aasia on maailman suurin maanosa. Siellä on korkeita vuoria, metsiä ja suuria kaupunkeja.",
        fact: "Aasiassa elää monia erilaisia eläimiä. Siellä asuu esimerkiksi pandoja, tiikereitä ja norsuja. Aasiassa sijaitsee myös maailman korkein vuori Mount Everest.",
        animals: [
            {
                name: "Panda",
                emoji: "🐼",
                description: "Panda on mustavalkoinen karhu. Se tykkää syödä bambua.",
                sound: "panda"
            },
            {
                name: "Tiikeri",
                emoji: "🐅",
                description: "Tiikerillä on oranssi turkki ja mustia raitoja. Se on taitava metsästäjä."
            },
            {
                name: "Apina",
                emoji: "🐒",
                description: "Monet apinat kiipeilevät puissa ja käyttävät käsiään taitavasti.",
                sound: "apina"
            },
            {
                name: "Aasian norsu",
                emoji: "🐘",
                description: "Aasian norsu elää metsissä ja ruohoalueilla. Se on suuri ja vahva eläin.",
                sound: "norsu"
            }
        ]
    },

    {
        id: "eurooppa",
        name: "Eurooppa",
        emoji: "🐺",
        visual: "🌲",
        color: "#e1ebf6",
        description: "Euroopassa on metsiä, järviä, vuoria ja monia erilaisia eläimiä.",
        fact: "Euroopan metsissä elää esimerkiksi susia, karhuja, kettuja ja hirviä. Myös Suomessa elää paljon erilaisia metsän eläimiä.",
        animals: [
            {
                name: "Susi",
                emoji: "🐺",
                description: "Susi on koiraeläin, joka elää usein laumassa. Se osaa ulvoa.",
                sound: "susi"
            },
            {
                name: "Karhu",
                emoji: "🐻",
                description: "Karhu on suuri metsän eläin. Se syö esimerkiksi marjoja, kasveja ja muita ruokia."
            },
            {
                name: "Kettu",
                emoji: "🦊",
                description: "Kettu on taitava ja utelias eläin. Sillä on usein tuuhea häntä."
            },
            {
                name: "Hirvi",
                emoji: "🫎",
                description: "Hirvi on suuri eläin, joka elää metsissä. Sillä on pitkät jalat."
            }
        ]
    },

    {
        id: "pohjois-amerikka",
        name: "Pohjois-Amerikka",
        emoji: "🦬",
        visual: "🏔️",
        color: "#f4e5d6",
        description: "Pohjois-Amerikassa on suuria metsiä, vuoria, järviä ja laajoja tasankoja.",
        fact: "Pohjois-Amerikassa elää esimerkiksi biisoneita, karhuja, kotkia ja pesukarhuja. Siellä on myös hyvin kylmiä alueita.",
        animals: [
            {
                name: "Biisoni",
                emoji: "🦬",
                description: "Biisoni on suuri ja vahva eläin. Sillä on paksu turkki."
            },
            {
                name: "Mustakarhu",
                emoji: "🐻",
                description: "Mustakarhu elää metsissä ja osaa kiivetä puihin."
            },
            {
                name: "Kotka",
                emoji: "🦅",
                description: "Kotkalla on vahvat siivet ja tarkka näkö."
            },
            {
                name: "Pesukarhu",
                emoji: "🦝",
                description: "Pesukarhulla on tumma kuvio silmien ympärillä. Se on taitava käyttämään tassujaan."
            }
        ]
    },

    {
        id: "etela-amerikka",
        name: "Etelä-Amerikka",
        emoji: "🦜",
        visual: "🌴",
        color: "#e2efdb",
        description: "Etelä-Amerikassa on valtavia sademetsiä, korkeita vuoria ja pitkiä jokia.",
        fact: "Amazonin sademetsä sijaitsee Etelä-Amerikassa. Siellä asuu paljon erilaisia eläimiä, kuten jaguaareja, laiskiaisia ja värikkäitä papukaijoja.",
        animals: [
            {
                name: "Laiskiainen",
                emoji: "🦥",
                description: "Laiskiainen liikkuu hitaasti ja viettää paljon aikaa puissa."
            },
            {
                name: "Jaguaari",
                emoji: "🐆",
                description: "Jaguaari on suuri kissaeläin, jolla on kauniita täpliä."
            },
            {
                name: "Papukaija",
                emoji: "🦜",
                description: "Papukaijoilla on usein värikkäät höyhenet. Monet niistä osaavat matkia ääniä."
            },
            {
                name: "Kapyybara",
                emoji: "🐹",
                description: "Kapyybara on maailman suurin jyrsijä. Se tykkää olla veden lähellä."
            }
        ]
    },

    {
        id: "oseania",
        name: "Oseania",
        emoji: "🦘",
        visual: "🌊",
        color: "#e0eef3",
        description: "Oseaniaan kuuluu Australia ja monia Tyynenmeren saaria.",
        fact: "Australiassa elää monia erikoisia eläimiä. Siellä asuu esimerkiksi kenguruita ja koaloja.",
        animals: [
            {
                name: "Kenguru",
                emoji: "🦘",
                description: "Kenguru liikkuu hyppimällä ja kantaa poikastaan vatsapussissa.",
                sound: "kenguru"
            },
            {
                name: "Koala",
                emoji: "🐨",
                description: "Koala elää puissa ja syö eukalyptuksen lehtiä."
            },
            {
                name: "Vesinokkaeläin",
                emoji: "🦆",
                description: "Vesinokkaeläin on erikoinen nisäkäs, jolla on ankan nokkaa muistuttava kuono."
            },
            {
                name: "Emu",
                emoji: "🐦",
                description: "Emu on suuri lintu, joka ei osaa lentää."
            }
        ]
    },

    {
        id: "antarktis",
        name: "Etelämanner",
        emoji: "🐧",
        visual: "❄️",
        color: "#e1edf6",
        description: "Etelämanner on hyvin kylmä ja jäinen maanosa. Siellä on paljon lunta ja jäätä.",
        fact: "Etelämantereella elää pingviinejä ja hylkeitä. Siellä on niin kylmä, että ihmiset tarvitsevat lämpimät vaatteet.",
        animals: [
            {
                name: "Pingviini",
                emoji: "🐧",
                description: "Pingviini on lintu, joka ei osaa lentää. Se ui todella hyvin.",
                sound: "pingviini"
            },
            {
                name: "Hylje",
                emoji: "🦭",
                description: "Hylje elää meressä ja lepää joskus jäällä."
            },
            {
                name: "Miekkavalas",
                emoji: "🐋",
                description: "Miekkavalas on suuri merinisäkäs, joka elää kylmissä ja lämpimissä merissä."
            },
            {
                name: "Etelänmerilokki",
                emoji: "🐦",
                description: "Etelänmerilokki on lintu, joka elää myös Etelämantereen alueella."
            }
        ]
    }
];


/* =====================================
   TALLENNUS
===================================== */

const STORAGE_KEY = "elainmaailma_progress_v1";

function loadProgress() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter(id =>
            continents.some(continent => continent.id === id)
        );

    } catch (error) {
        console.warn("Tallennusta ei voitu lukea.", error);
        return [];
    }
}

let collectedStars = loadProgress();

function saveProgress() {
    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(collectedStars)
        );
    } catch (error) {
        console.warn("Tallennus ei onnistunut.", error);
    }
}

function earnStar(id) {
    if (!collectedStars.includes(id)) {
        collectedStars.push(id);
        saveProgress();
    }

    updateProgress();
}


/* =====================================
   SIVUJEN VAIHTAMINEN
===================================== */

const pageIds = [
    "home",
    "map",
    "continent-page",
    "quiz",
    "collection"
];

function showPage(id) {
    pageIds.forEach(pageId => {
        const page = document.getElementById(pageId);

        if (page) {
            page.classList.toggle("hidden", pageId !== id);
        }
    });

    document.querySelectorAll(".nav-button").forEach(button => {
        const active =
            button.dataset.page === id ||
            (id === "continent-page" && button.dataset.page === "map");

        button.classList.toggle("active", active);
    });

    closeMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateProgress();
}

function showHome() {
    showPage("home");
}

function showMap() {
    renderContinents();
    showPage("map");
}

function showCollection() {
    renderCollection();
    showPage("collection");
}

function showQuiz() {
    showPage("quiz");

    if (!currentQuestion) {
        newQuestion();
    }
}


/* =====================================
   MOBIILIVALIKKO
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

function closeMenu() {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Avaa valikko");
}

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Sulje valikko" : "Avaa valikko"
    );
});


/* =====================================
   ETUSIVUN JA ETEENEMISEN PÄIVITYS
===================================== */

function updateProgress() {
    const total = continents.length;
    const amount = collectedStars.length;
    const percentage = (amount / total) * 100;

    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");

    if (progressText) {
        progressText.textContent =
            `${amount} / ${total} maanosaa tutkittu`;
    }

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    const homeText = document.getElementById("home-progress-text");
    const homeBar = document.getElementById("home-progress-bar");

    if (homeText) {
        homeText.textContent =
            `${amount} / ${total} maanosaa tutkittu`;
    }

    if (homeBar) {
        homeBar.style.width = `${percentage}%`;
    }

    const collectionCount =
        document.getElementById("collection-count");

    if (collectionCount) {
        collectionCount.textContent =
            `${amount} / ${total} tähteä`;
    }
}


/* =====================================
   MAANOSIEN KORTIT
===================================== */

function renderContinents() {
    const container = document.getElementById("continent-list");

    container.innerHTML = continents.map(continent => {
        const earned = collectedStars.includes(continent.id);

        return `
            <button class="continent-card"
                onclick="openContinent('${continent.id}')">

                <div class="continent-visual"
                    style="background:${continent.color}">

                    ${continent.emoji}
                    <small>${continent.visual}</small>
                </div>

                <h3>${continent.name}</h3>

                <p>${continent.description}</p>

                <div class="continent-bottom">
                    <span>${earned ? "⭐ Tutkittu" : "Tutkimaan →"}</span>
                    ${earned
                        ? '<span class="earned-label">✓ Tähti saatu</span>'
                        : '<span>🐾</span>'
                    }
                </div>
            </button>
        `;
    }).join("");

    updateProgress();
}


/* =====================================
   YKSITTÄISEN MAANOSAN AVAAMINEN
===================================== */

function openContinent(id) {
    const continent = continents.find(item => item.id === id);

    if (!continent) {
        return;
    }

    earnStar(id);

    const container =
        document.getElementById("continent-information");

    const animalCards = continent.animals.map(animal => `
        <article class="animal-card">
            <div class="animal-picture">${animal.emoji}</div>

            <div>
                <h3>${animal.name}</h3>
                <p>${animal.description}</p>
            </div>
        </article>
    `).join("");

    container.innerHTML = `
        <div class="continent-hero"
            style="background:${continent.color}">

            <div class="big-emoji">${continent.emoji}</div>

            <span class="eyebrow">UUSI TUTKIMUSKOHDE</span>

            <h1>${continent.name}</h1>

            <p>${continent.description}</p>

            <div style="margin-top:20px;font-weight:900;">
                ⭐ Tähti lisätty kokoelmaasi!
            </div>
        </div>

        <div class="fact-box">
            <h2>📖 Tiesitkö tämän?</h2>
            <p>${continent.fact}</p>
        </div>

        <h2 style="margin:30px 0 20px;">
            🐾 Tutustu eläimiin
        </h2>

        <div class="animal-grid">
            ${animalCards}
        </div>

        <button class="primary-button"
            style="margin-top:30px"
            onclick="showMap()">
            ← Takaisin kartalle
        </button>
    `;

    showPage("continent-page");
}


/* =====================================
   TÄHTIKOKOELMA
===================================== */

function renderCollection() {
    const container = document.getElementById("collection-list");

    container.innerHTML = continents.map(continent => {
        const earned = collectedStars.includes(continent.id);

        return `
            <div class="collection-item ${earned ? "collected" : ""}">
                <span>${earned ? "⭐" : "🔒"}</span>
                <strong>${continent.name}</strong>
                <small>${earned ? "Tutkittu!" : "Ei vielä tutkittu"}</small>
            </div>
        `;
    }).join("");

    const finish = document.getElementById("finish-message");

    if (collectedStars.length === continents.length) {
        finish.innerHTML = `
            <span>🏆</span>
            <h2>ONNEKSI OLKOON!</h2>
            <p>
                Olet tutkinut kaikki seitsemän maanosaa
                ja kerännyt kaikki tähdet!
                Olet oikea maailmanmatkaaja!
            </p>
        `;
    } else {
        finish.innerHTML = `
            <span>🌍</span>
            <h2>Suuri tutkimusmatka odottaa!</h2>
            <p>
                Olet kerännyt ${collectedStars.length} / 7 tähteä.
                Jatka tutkimista ja löydä loputkin!
            </p>
        `;
    }

    updateProgress();
}


/* =====================================
   ELÄINVISA
===================================== */

const quizAnimals = [
    {
        name: "Leijona",
        emoji: "🦁",
        file: "leijona.mp3"
    },
    {
        name: "Norsu",
        emoji: "🐘",
        file: "norsu.mp3"
    },
    {
        name: "Apina",
        emoji: "🐒",
        file: "apina.mp3"
    },
    {
        name: "Panda",
        emoji: "🐼",
        file: "panda.mp3"
    },
    {
        name: "Kenguru",
        emoji: "🦘",
        file: "kenguru.mp3"
    },
    {
        name: "Pingviini",
        emoji: "🐧",
        file: "pingviini.mp3"
    },
    {
        name: "Susi",
        emoji: "🐺",
        file: "susi.mp3"
    }
];

let currentQuestion = null;
let currentAudio = null;
let score = 0;
let questionCount = 0;
let questionAnswered = false;

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function newQuestion() {
    stopQuizSound();

    questionAnswered = false;
    questionCount++;

    currentQuestion =
        quizAnimals[Math.floor(Math.random() * quizAnimals.length)];

    const wrongAnswers = shuffle(
        quizAnimals.filter(
            animal => animal.name !== currentQuestion.name
        )
    ).slice(0, 3);

    const answers = shuffle([
        currentQuestion,
        ...wrongAnswers
    ]);

    document.getElementById("question-number").textContent =
        questionCount;

    document.getElementById("quiz-feedback").textContent = "";

    document.getElementById("sound-status").textContent =
        "Ääni odottaa kuuntelua.";

    document.getElementById("next-question").classList.add("hidden");

    const answerContainer =
        document.getElementById("quiz-answers");

    answerContainer.innerHTML = answers.map(animal => `
        <button class="answer-button"
            onclick="checkAnswer('${animal.name}', this)">

            ${animal.emoji} ${animal.name}
        </button>
    `).join("");
}

function playQuizSound() {
    if (!currentQuestion) {
        return;
    }

    stopQuizSound();

    currentAudio = new Audio(
        "aanet/" + currentQuestion.file
    );

    currentAudio.addEventListener("ended", () => {
        document.getElementById("sound-status").textContent =
            "Ääni loppui. Voit kuunnella uudestaan!";
    }, { once: true });

    currentAudio.addEventListener("error", () => {
        document.getElementById("sound-status").textContent =
            "Ääntä ei löytynyt. Tarkista aanet-kansio ja tiedoston nimi.";
    }, { once: true });

    document.getElementById("sound-status").textContent =
        "🔊 Kuunnellaan...";

    currentAudio.play().catch(() => {
        document.getElementById("sound-status").textContent =
            "Äänen toisto ei onnistunut. Yritä uudelleen.";
    });
}

function stopQuizSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

function checkAnswer(answer, button) {
    if (questionAnswered) {
        return;
    }

    questionAnswered = true;

    const buttons =
        document.querySelectorAll(".answer-button");

    buttons.forEach(item => {
        item.disabled = true;

        if (item.textContent.includes(currentQuestion.name)) {
            item.classList.add("correct");
        }
    });

    const feedback =
        document.getElementById("quiz-feedback");

    if (answer === currentQuestion.name) {
        score++;

        feedback.textContent = "🎉 Oikein! Hienosti arvattu!";
        feedback.style.color = "#39854c";

        button.classList.add("correct");
    } else {
        feedback.textContent =
            `Melkein! Oikea vastaus oli ${currentQuestion.name}.`;

        feedback.style.color = "#b66b50";

        button.classList.add("wrong");
    }

    document.getElementById("score").textContent = score;

    document.getElementById("next-question")
        .classList.remove("hidden");
}


/* =====================================
   KÄYNNISTYS
===================================== */

function initializeWebsite() {
    renderContinents();
    renderCollection();
    updateProgress();

    showHome();
}

initializeWebsite();
