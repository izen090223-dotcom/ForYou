/* =====================================
   STORY
===================================== */

const storyPages = [

    {
        title: "For you.",
        button: "Begin"
    },

    {
        title: "",
        message:
            "There's something I've been wanting to tell you.",
        button: "Continue"
    },

    {
        title: "",
        message:
            "I've thought about how to say it more times than I can count.",
        button: "Continue"
    },

    {
        title: "",
        message:
            "And somehow, none of the words ever felt quite right.",
        button: "Continue"
    },

    {
        title: "",
        message:
            "So I decided to do this instead.",
        button: "Continue"
    },

    {
        title: "",
        message:
            "Take your time.",
        button: "Continue"
    }

];


let storyPage = 0;


/* =====================================
   LETTER

   gate:

   "none"  = immediately continue

   "delay" = wait a few seconds

   "scroll" = reach the bottom first
===================================== */

const letterPages = [

    {
        text:
`Dear you,

I've been trying to figure out how to say this.

I don't really know where to start.

So maybe I'll start with something small.`,

        gate: "none"
    },


    {
        text:
`There are so many things about you that I don't think you realize I've noticed.

The little things.

The things you probably don't think anyone pays attention to.

I do.`,

        gate: "delay",

        delay: 4000
    },


    {
        text:
`Maybe that's what scares me the most.

How easily I remember things about you.

The little expressions you make.

The way you react to certain things.

The moments that probably meant nothing to you, but somehow stayed with me.

I've collected so many of them without even meaning to.`,

        gate: "scroll"
    },


    {
        text:
`And somewhere along the way,

I realized that I wasn't simply noticing you anymore.

I was looking for you.

In a crowded room.

In a conversation.

In the little moments of my day.

And somehow, my day always seemed a little better when you were part of it.`,

        gate: "delay",

        delay: 5000
    },


    {
        text:
`I don't know exactly when it happened.

There wasn't some grand moment where everything suddenly changed.

It was quieter than that.

It happened slowly.

Almost without me noticing.

Until one day I realized that you had become someone I cared about more than I knew how to explain.`,

        gate: "scroll"
    },


    {
        text:
`And this is the part I've been trying to find the courage to say.

The part I've rewritten in my head over and over.

The part that makes everything before this make sense.`,

        gate: "delay",

        delay: 6000
    },


    {
        text:
`I like you.`,

        gate: "none",

        confession: true
    },


    {
        text:
`Not casually.

Not temporarily.

And not because I expect anything from you.

I just wanted you to know.

Whatever you feel after reading this, I'll respect it.

You don't owe me an answer simply because I finally found the courage to tell you.`,

        gate: "scroll"
    },


    {
        text:
`I made all of this because I wanted you to have something that you could experience at your own pace.

Something you could stop.

Something you could go back through.

Something that didn't ask you to rush.

Because if there was one thing I wanted you to know,

it's that your feelings matter just as much as mine do.`,

        gate: "scroll"
    },


    {
        text:
`Thank you for reading this.

And thank you for being someone worth writing it for.`,

        gate: "none"
    }

];


let letterPage = 0;


/*
    Remembers which pages have already
    been unlocked.

    Once true, going back will not
    lock the page again.
*/

const unlockedPages =
    new Array(letterPages.length).fill(false);


/* =====================================
   STORY ELEMENTS
===================================== */

const storyScreen =
    document.getElementById("storyScreen");

const storyContent =
    document.getElementById("storyContent");

const title =
    document.getElementById("title");

const message =
    document.getElementById("message");

const nextButton =
    document.getElementById("nextButton");

const backButton =
    document.getElementById("backButton");


/* =====================================
   MUSIC ELEMENTS
===================================== */

const musicScreen =
    document.getElementById("musicScreen");

const musicBackButton =
    document.getElementById("musicBackButton");

const letterButton =
    document.getElementById("letterButton");


/* =====================================
   LETTER ELEMENTS
===================================== */

const letterScreen =
    document.getElementById("letterScreen");

const letterText =
    document.getElementById("letterText");

const letterNext =
    document.getElementById("letterNext");

const letterBack =
    document.getElementById("letterBack");

const gateMessage =
    document.getElementById("gateMessage");

const letterContent =
    document.getElementById("letterContent");


/* =====================================
   SHOW STORY PAGE
===================================== */

function showStoryPage() {

    title.textContent =
        storyPages[storyPage].title;

    message.textContent =
        storyPages[storyPage].message;

    nextButton.textContent =
        storyPages[storyPage].button;


    if (storyPage === 0) {

        backButton.style.visibility =
            "hidden";

    } else {

        backButton.style.visibility =
            "visible";

    }

}


/* =====================================
   STORY NEXT
===================================== */

function storyNext() {

    if (
        storyPage ===
        storyPages.length - 1
    ) {

        openMusic();

        return;

    }


    transitionStory(() => {

        storyPage++;

        showStoryPage();

    });

}


/* =====================================
   STORY BACK
===================================== */

function storyBack() {

    if (storyPage === 0) {

        return;

    }


    transitionStory(() => {

        storyPage--;

        showStoryPage();

    });

}


/* =====================================
   STORY TRANSITION
===================================== */

function transitionStory(callback) {

    storyContent.classList.add(
        "fade-out"
    );


    setTimeout(() => {

        callback();

        storyContent.classList.remove(
            "fade-out"
        );

    }, 800);

}


/* =====================================
   OPEN MUSIC
===================================== */

function openMusic() {

    storyScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        musicScreen.classList.add(
            "active"
        );

    }, 500);

}


/* =====================================
   MUSIC BACK
===================================== */

function musicBack() {

    musicScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        storyScreen.classList.add(
            "active"
        );

    }, 500);

}


/* =====================================
   OPEN LETTER
===================================== */

function openLetter() {

    musicScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        letterScreen.classList.add(
            "active"
        );

        showLetterPage();

    }, 700);

}


/* =====================================
   SHOW LETTER PAGE
===================================== */

function showLetterPage() {

    const page =
        letterPages[letterPage];


    letterText.textContent =
        page.text;


    /*
        Reset scroll position.

        If it's a page she has already
        unlocked, she doesn't have to
        read it again.
    */

    letterContent.scrollTop = 0;


    /*
        Confession styling.
    */

    if (page.confession) {

        letterText.classList.add(
            "confession"
        );

    } else {

        letterText.classList.remove(
            "confession"
        );

    }


    /*
        Determine the gate.
    */

    if (unlockedPages[letterPage]) {

        unlockLetterButton();

    } else {

        lockLetterButton();

    }


    /*
        First letter page cannot go back
        to a previous letter page.
    */

    if (letterPage === 0) {

        letterBack.style.visibility =
            "hidden";

    } else {

        letterBack.style.visibility =
            "visible";

    }

}


/* =====================================
   LOCK LETTER BUTTON
===================================== */

function lockLetterButton() {

    const page =
        letterPages[letterPage];


    letterNext.classList.add(
        "locked"
    );


    letterNext.disabled = true;


    if (page.gate === "delay") {

        startDelay(page.delay);

    }


    else if (page.gate === "scroll") {

        gateMessage.textContent =
            "Read to the bottom.";

    }


    else {

        unlockLetterButton();

    }

}


/* =====================================
   UNLOCK LETTER BUTTON
===================================== */

function unlockLetterButton() {

    unlockedPages[letterPage] =
        true;


    letterNext.classList.remove(
        "locked"
    );


    letterNext.disabled = false;


    gateMessage.textContent = "";

}


/* =====================================
   DELAY GATE
===================================== */

function startDelay(milliseconds) {

    let remaining =
        Math.ceil(milliseconds / 1000);


    gateMessage.textContent =
        `Take a moment... ${remaining}`;


    const timer =
        setInterval(() => {

            remaining--;


            if (remaining > 0) {

                gateMessage.textContent =
                    `Take a moment... ${remaining}`;

            }


            else {

                clearInterval(timer);

                unlockLetterButton();

            }

        }, 1000);

}


/* =====================================
   SCROLL GATE
===================================== */

function checkScroll() {

    const page =
        letterPages[letterPage];


    /*
        Only relevant to scroll pages.
    */

    if (
        page.gate !== "scroll" ||
        unlockedPages[letterPage]
    ) {

        return;

    }


    const atBottom =
        letterContent.scrollTop +
        letterContent.clientHeight >=
        letterContent.scrollHeight - 20;


    if (atBottom) {

        unlockLetterButton();

        gateMessage.textContent =
            "You made it.";

    }

}


/* =====================================
   LETTER NEXT
===================================== */

function nextLetterPage() {

    if (
        letterNext.disabled
    ) {

        return;

    }


    /*
        Final page.
    */

    if (
        letterPage >=
        letterPages.length - 1
    ) {

        finishLetter();

        return;

    }


    letterPage++;

    showLetterPage();

}


/* =====================================
   LETTER BACK
===================================== */

function previousLetterPage() {

    if (letterPage === 0) {

        /*
            Return to music.
        */

        letterScreen.classList.remove(
            "active"
        );


        setTimeout(() => {

            musicScreen.classList.add(
                "active"
            );

        }, 700);


        return;

    }


    letterPage--;

    showLetterPage();

}


/* =====================================
   FINISH
===================================== */

function finishLetter() {

    letterText.textContent =
        "Thank you for reading this.";

    letterText.classList.remove(
        "confession"
    );


    letterNext.style.display =
        "none";


    letterBack.style.display =
        "none";


    gateMessage.textContent =
        "— Me";

}


/* =====================================
   EVENTS
===================================== */

nextButton.addEventListener(
    "click",
    storyNext
);


backButton.addEventListener(
    "click",
    storyBack
);


musicBackButton.addEventListener(
    "click",
    musicBack
);


letterButton.addEventListener(
    "click",
    openLetter
);


letterNext.addEventListener(
    "click",
    nextLetterPage
);


letterBack.addEventListener(
    "click",
    previousLetterPage
);


letterContent.addEventListener(
    "scroll",
    checkScroll
);


/* =====================================
   START
===================================== */

showStoryPage();