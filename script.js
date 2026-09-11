/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loadingScreen =
            document.getElementById("loadingScreen");

        loadingScreen.style.opacity = "0";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 600);

    }, 2800);

});


/* ==========================================
   ALIEN DICTIONARY
========================================== */

const alienDictionary = {

    hello: "Vora",
    hi: "Vora",

    welcome: "Velora",

    friend: "Nalu",

    earth: "Terra",

    human: "Terran",

    space: "Xuun",

    star: "Zarek",

    stars: "Zareki",

    moon: "Lunai",

    sun: "Solara",

    planet: "Orbis",

    alien: "Xenari",

    spaceship: "Vexora",

    galaxy: "Galax",

    universe: "Omnara",

    love: "Avari",

    peace: "Nerai",

    war: "Kraeth",

    water: "Aqua",

    fire: "Pyra",

    food: "Noma",

    home: "Veyra",

    yes: "Kai",

    no: "Nok",

    good: "Vara",

    bad: "Kora",

    thank: "Tavai",

    thanks: "Tavai",

    please: "Savai",

    goodbye: "Varen",

    day: "Luma",

    night: "Nox",

    light: "Elara",

    dark: "Nera",

    power: "Zora",

    time: "Chrona",

    dream: "Aelun",

    secret: "Xyra",

    world: "Orana",

    leader: "Varek",

    warrior: "Kareth",

    computer: "Nexor",

    technology: "Tekara"

};


/* ==========================================
   ALIEN WORD GENERATOR
========================================== */

const alienConsonants = [
    "v",
    "z",
    "x",
    "k",
    "r",
    "n",
    "l",
    "th",
    "q"
];

const alienVowels = [
    "a",
    "e",
    "i",
    "o",
    "u"
];


function randomFrom(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];
}


function makeAlienWord(word) {

    let result = "";

    for (let i = 0; i < word.length; i++) {

        if ("aeiou".includes(word[i])) {

            result += randomFrom(alienVowels);

        } else {

            result += randomFrom(alienConsonants);
        }
    }

    return (
        result.charAt(0).toUpperCase()
        + result.slice(1)
    );
}


/* ==========================================
   TRANSLATOR
========================================== */

function translateText() {

    const input =
        document.getElementById("englishInput").value.trim();

    const output =
        document.getElementById("alienOutput");


    if (!input) {

        output.innerText =
            "Please enter something to translate.";

        return;
    }


    const words =
        input.split(/(\s+|[,.!?])/);


    const translated =
        words.map(word => {

            const clean =
                word.toLowerCase()
                    .replace(/[,.!?]/g, "");


            if (alienDictionary[clean]) {

                let result =
                    alienDictionary[clean];

                const punctuation =
                    word.match(/[,.!?]/);

                if (punctuation) {
                    result += punctuation[0];
                }

                return result;
            }


            if (clean.length === 0) {
                return word;
            }


            return makeAlienWord(clean);

        });


    output.innerText =
        translated.join("");
}


/* ==========================================
   RANDOM ALIEN LANGUAGE
========================================== */

const alienWords = [

    "Vora",
    "Nalu",
    "Xuun",
    "Zarek",
    "Velora",
    "Kareth",
    "Aelun",
    "Veyra",
    "Nerai",
    "Orana",
    "Xenari",
    "Tavai",
    "Lunai",
    "Vexora",
    "Kora",
    "Zora",
    "Elara",
    "Nox",
    "Avari",
    "Chrona"

];


const alienMeanings = [

    "The stars are watching...",
    "A strange signal is coming...",
    "Welcome to our world...",
    "The moon remembers everything...",
    "Your spaceship is nearby...",
    "The universe is listening...",
    "We come in peace...",
    "Something is hiding beyond the stars..."

];


function generateAlienLanguage() {

    let sentence = [];

    const length =
        Math.floor(Math.random() * 4) + 4;


    for (let i = 0; i < length; i++) {

        sentence.push(
            randomFrom(alienWords)
        );

    }


    sentence[0] =
        sentence[0].charAt(0).toUpperCase()
        + sentence[0].slice(1);


    document.getElementById(
        "generatedLanguage"
    ).innerText =
        sentence.join(" ") + ".";


    document.querySelector(
        ".translation-hint"
    ).innerText =
        randomFrom(alienMeanings);
}


/* ==========================================
   ALIEN ALPHABET
========================================== */

const alienAlphabet = {

    a: "∆",
    b: "ß",
    c: "¢",
    d: "Ð",
    e: "Ξ",
    f: "ϟ",
    g: "Ǥ",
    h: "҂",
    i: "¡",
    j: "ʝ",
    k: "Ҡ",
    l: "Ł",
    m: "Μ",
    n: "И",
    o: "Ø",
    p: "Þ",
    q: "Ϙ",
    r: "Я",
    s: "§",
    t: "Ŧ",
    u: "Ü",
    v: "√",
    w: "Ш",
    x: "Ж",
    y: "¥",
    z: "Ƶ"

};


function generateAlphabet() {

    const input =
        document.getElementById(
            "alphabetInput"
        ).value.toLowerCase();


    const output =
        document.getElementById(
            "alphabetOutput"
        );


    if (!input.trim()) {

        output.innerText =
            "Type something first.";

        return;
    }


    let result = "";


    for (const character of input) {

        if (alienAlphabet[character]) {

            result +=
                alienAlphabet[character] + " ";

        } else {

            result +=
                character + " ";
        }
    }


    output.innerText = result;
}


/* ==========================================
   DICTIONARY
========================================== */

function loadDictionary() {

    const container =
        document.getElementById(
            "dictionaryContainer"
        );


    for (const word in alienDictionary) {

        const card =
            document.createElement("div");


        card.className =
            "dictionary-card";


        card.innerHTML = `

            <div class="english">
                ${word}
            </div>

            <div class="alien">
                ${alienDictionary[word]}
            </div>

        `;


        container.appendChild(card);
    }
}


/* ==========================================
   ALIEN NAME GENERATOR
========================================== */

const namePartOne = [

    "Za",
    "Xe",
    "Vo",
    "Ka",
    "Lu",
    "Ae",
    "Ny",
    "Va",
    "Ro",
    "Qi"

];


const namePartTwo = [

    "rex",
    "lun",
    "var",
    "nox",
    "zen",
    "rak",
    "thor",
    "vex",
    "kai",
    "nar"

];


function generateAlienName() {

    const input =
        document.getElementById(
            "nameInput"
        ).value.trim();


    const output =
        document.getElementById(
            "alienNameOutput"
        );


    let first =
        randomFrom(namePartOne);

    let second =
        randomFrom(namePartTwo);


    let name =
        first + second;


    if (input) {

        name =
            input.charAt(0).toUpperCase()
            + name.substring(1);

    }


    output.innerText =
        name;
}


/* ==========================================
   SECRET MESSAGE
========================================== */

function generateSecretMessage() {

    const input =
        document.getElementById(
            "secretInput"
        ).value.toLowerCase();


    const output =
        document.getElementById(
            "secretOutput"
        );


    if (!input.trim()) {

        output.innerText =
            "Type a secret message first.";

        return;
    }


    let result = "";


    for (const character of input) {

        if (alienAlphabet[character]) {

            result += alienAlphabet[character];

        } else if (character === " ") {

            result += "   ";

        } else {

            result += character;
        }

        result += " ";
    }


    output.innerText =
        result;
}


/* ==========================================
   INITIAL CONTENT
========================================== */

generateAlienLanguage();

generateAlienName();

loadDictionary();