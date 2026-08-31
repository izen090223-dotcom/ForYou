/* =========================
   STORY PAGES
========================= */

const pages = [

    {
        title: "For you.",
        message: "Whenever you're ready.",
        button: "Begin"
    },

    {
        title: "",
        message: "There's something I've been wanting to tell you.",
        button: "Continue"
    },

    {
        title: "",
        message: "I've thought about how to say it more times than I can count.",
        button: "Continue"
    },

    {
        title: "",
        message: "And somehow, none of the words ever felt quite right.",
        button: "Continue"
    },

    {
        title: "",
        message: "So I decided to do this instead.",
        button: "Continue"
    },

    {
        title: "",
        message: "Take your time.",
        button: "Continue"
    }

];


/* =========================
   VARIABLES
========================= */

let currentPage = 0;


/* =========================
   ELEMENTS
========================= */

const title = document.getElementById("title");

const message = document.getElementById("message");

const nextButton = document.getElementById("nextButton");

const backButton = document.getElementById("backButton");

const content = document.getElementById("content");

const musicScreen = document.getElementById("musicScreen");

const letterScreen = document.getElementById("letterScreen");

const letterButton = document.getElementById("letterButton");


/* =========================
   SHOW CURRENT PAGE
========================= */

function showPage() {

    title.textContent = pages[currentPage].title;

    message.textContent = pages[currentPage].message;

    nextButton.textContent = pages[currentPage].button;


    /*
        Hide Back button
        on the first page.
    */

    if (currentPage === 0) {

        backButton.style.visibility = "hidden";

    } else {

        backButton.style.visibility = "visible";

    }

}


/* =========================
   NEXT PAGE
========================= */

function goNext() {

    /*
        If we're on the
        "Take your time" page,
        open the music screen.
    */

    if (currentPage === pages.length - 1) {

        openMusicScreen();

        return;
    }


    content.classList.add("fade-out");


    setTimeout(() => {

        currentPage++;

        showPage();

        content.classList.remove("fade-out");

    }, 800);

}


/* =========================
   PREVIOUS PAGE
========================= */

function goBack() {

    /*
        Don't allow the user
        to go before page 1.
    */

    if (currentPage === 0) {

        return;
    }


    content.classList.add("fade-out");


    setTimeout(() => {

        currentPage--;

        showPage();

        content.classList.remove("fade-out");

    }, 800);

}


/* =========================
   OPEN MUSIC SCREEN
========================= */

function openMusicScreen() {

    content.classList.add("fade-out");


    setTimeout(() => {

        content.style.display = "none";

        musicScreen.classList.add("active");

    }, 800);

}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    musicScreen.classList.remove("active");


    setTimeout(() => {

        letterScreen.classList.add("active");

    }, 700);

}


/* =========================
   BUTTON EVENTS
========================= */

nextButton.addEventListener("click", () => {

    goNext();

});


backButton.addEventListener("click", () => {

    goBack();

});


letterButton.addEventListener("click", () => {

    openLetter();

});


/* =========================
   INITIALIZE
========================= */

showPage();