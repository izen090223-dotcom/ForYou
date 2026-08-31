/* =====================================================
   STORY PAGES
===================================================== */

/*
    TYPES:

    normal
    memory
    cards
    secret

    GATES:

    none
    delay
    scroll
*/


const storyPages = [

    /* =========================================
       1. OPENING
    ========================================== */

    {
        type: "normal",

        title: "For you.",

        message:
            "Whenever you're ready.",

        button: "Begin",

        gate: "none"
    },


    /* =========================================
       2.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "There's something I've been wanting to tell you.",

        button: "Continue",

        gate: "none"
    },


    /* =========================================
       3.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "I've thought about how to say it more times than I can count.",

        button: "Continue",

        gate: "delay",

        delay: 3000
    },


    /* =========================================
       4.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "And somehow, none of the words ever felt quite right.",

        button: "Continue",

        gate: "none"
    },


    /* =========================================
       5. MEMORY
    ========================================== */

    {
        type: "memory",

        title:
            "Do you remember this?",

        message:
            "I do.",

        image:
            "",

        caption:
            "Replace this with something only the two of us would understand.",

        button:
            "Continue",

        gate:
            "none"
    },


    /* =========================================
       6.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "There are so many little things about you that you probably don't realize I've noticed.",

        button: "Continue",

        gate: "none"
    },


    /* =========================================
       7. MEMORY
    ========================================== */

    {
        type: "memory",

        title:
            "The little things.",

        message:
            "The things you probably never thought I'd remember.",

        image:
            "",

        caption:
            "A small moment can become a very big memory.",

        button:
            "Continue",

        gate:
            "none"
    },


    /* =========================================
       8. CARDS
    ========================================== */

    {
        type: "cards",

        title:
            "There are things I never told you.",

        message:
            "Maybe it's time you knew.",

        button:
            "Continue",

        gate:
            "cards"
    },


    /* =========================================
       9. SECRET
    ========================================== */

    {
        type: "secret",

        title:
            "There's something else.",

        message:
            "But you have to look a little closer.",

        button:
            "Continue",

        gate:
            "secret"
    },


    /* =========================================
       10.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "Somewhere along the way, I stopped simply enjoying the moments I had with you...",

        button:
            "Continue",

        gate:
            "delay",

        delay:
            4000
    },


    /* =========================================
       11.
    ========================================== */

    {
        type: "normal",

        title: "",

        message:
            "And started wishing there could be more of them.",

        button:
            "Continue",

        gate:
            "none"
    },


    /* =========================================
       12. TAKE YOUR TIME
    ========================================== */

    {
        type: "normal",

        title:
            "Take your time.",

        message:
            "There's no need to rush this.",

        button:
            "Continue",

        gate:
            "none"
    }

];


/* =====================================================
   LETTER PAGES
===================================================== */

const letterPages = [

    /* =========================================
       LETTER 1
    ========================================== */

    {
        text:
`Dear you,

I've been trying to figure out how to say this.

I don't really know where to start.

So maybe I'll start with something small.`,

        gate:
            "none"
    },


    /* =========================================
       LETTER 2
    ========================================== */

    {
        text:
`I remember the little things.

The things you probably don't think anyone pays attention to.

I do.

Maybe that's one of the first things I should admit.`,

        gate:
            "delay",

        delay:
            4000
    },


    /* =========================================
       LETTER 3
    ========================================== */

    {
        text:
`How easily I remember things about you.

The little expressions you make.

The way you react to certain things.

The moments that probably meant nothing to you, but somehow stayed with me.

I've collected so many of them without even meaning to.

A word here.

A smile there.

A small moment that should have passed like any other.

But somehow, I kept it.

And then another moment came.

And another.

Until I realized I had somehow built an entire collection of little memories that I never asked myself to keep.

I just wanted to.

So take your time with this one.

There's no need to rush.`,

        gate:
            "scroll"
    },


    /* =========================================
       LETTER 4
    ========================================== */

    {
        text:
`And somewhere along the way,

I realized that I wasn't simply noticing you anymore.

I was looking for you.

In a crowded room.

In a conversation.

In the little moments of my day.

And somehow, my day always seemed a little better when you were part of it.`,

        gate:
            "delay",

        delay:
            5000
    },


    /* =========================================
       LETTER 5
    ========================================== */

    {
        text:
`I don't know exactly when it happened.

There wasn't some grand moment where everything suddenly changed.

It was quieter than that.

It happened slowly.

Almost without me noticing.

Until one day I realized that you had become someone I cared about more than I knew how to explain.`,

        gate:
            "scroll"
    },


    /* =========================================
       LETTER 6
    ========================================== */

    {
        text:
`And this is the part I've been trying to find the courage to say.

The part I've rewritten in my head over and over.

The part that makes everything before this make sense.`,

        gate:
            "delay",

        delay:
            6000
    },


    /* =========================================
       LETTER 7 — CONFESSION
    ========================================== */

    {
        text:
`I like you.`,

        gate:
            "none",

        confession:
            true
    },


    /* =========================================
       LETTER 8
    ========================================== */

    {
        text:
`Not casually.

Not temporarily.

And not because I expect anything from you.

I just wanted you to know.

Whatever you feel after reading this, I'll respect it.

You don't owe me an answer simply because I finally found the courage to tell you.`,

        gate:
            "scroll"
    },


    /* =========================================
       LETTER 9
    ========================================== */

    {
        text:
`I made all of this because I wanted you to have something that you could experience at your own pace.

Something you could stop.

Something you could go back through.

Something that didn't ask you to rush.

Because if there was one thing I wanted you to know,

it's that your feelings matter just as much as mine do.`,

        gate:
            "scroll"
    },


    /* =========================================
       LETTER 10
    ========================================== */

    {
        text:
`Thank you for reading this.

And thank you for being someone worth writing it for.`,

        gate:
            "none"
    }

];


/* =====================================================
   VARIABLES
===================================================== */

let storyPage = 0;

let letterPage = 0;


/*
    Once a page is unlocked,
    it stays unlocked.

    This is what allows her to go
    Back → Forward without repeating
    delays or scroll requirements.
*/

const unlockedStoryPages =
    new Array(storyPages.length).fill(false);

const unlockedLetterPages =
    new Array(letterPages.length).fill(false);


/*
    These keep track of special interactions.
*/

let openedCards =
    new Array(3).fill(false);

let secretOpened =
    false;


/* =====================================================
   ELEMENTS
===================================================== */

const storyScreen =
    document.getElementById("storyScreen");

const storyContent =
    document.getElementById("storyContent");

const pageNumber =
    document.getElementById("pageNumber");

const title =
    document.getElementById("title");

const message =
    document.getElementById("message");

const nextButton =
    document.getElementById("nextButton");

const backButton =
    document.getElementById("backButton");


const memoryContainer =
    document.getElementById("memoryContainer");

const memoryPlaceholder =
    document.getElementById("memoryPlaceholder");

const memoryImage =
    document.getElementById("memoryImage");

const memoryCaption =
    document.getElementById("memoryCaption");


const memoryCards =
    document.getElementById("memoryCards");

const cardReveal =
    document.getElementById("cardReveal");


const secretArea =
    document.getElementById("secretArea");

const secretButton =
    document.getElementById("secretButton");

const secretText =
    document.getElementById("secretText");


const musicScreen =
    document.getElementById("musicScreen");

const musicBackButton =
    document.getElementById("musicBackButton");

const letterButton =
    document.getElementById("letterButton");


const letterScreen =
    document.getElementById("letterScreen");

const letterContent =
    document.getElementById("letterContent");

const letterText =
    document.getElementById("letterText");

const letterNext =
    document.getElementById("letterNext");

const letterBack =
    document.getElementById("letterBack");

const gateMessage =
    document.getElementById("gateMessage");


/* =====================================================
   SHOW STORY PAGE
===================================================== */

function showStoryPage() {

    const page =
        storyPages[storyPage];


    /*
        Basic text.
    */

    title.textContent =
        page.title;

    message.textContent =
        page.message;


    /*
        Page number.

        Don't show it on the opening.
    */

    if (storyPage === 0) {

        pageNumber.textContent = "";

    } else {

        pageNumber.textContent =
            `${String(storyPage).padStart(2, "0")}`;

    }


    /*
        Reset special elements.
    */

    memoryContainer.style.display =
        "none";

    memoryCards.style.display =
        "none";

    cardReveal.style.display =
        "none";

    secretArea.style.display =
        "none";


    /*
        MEMORY PAGE
    */

    if (page.type === "memory") {

        memoryContainer.style.display =
            "block";


        memoryCaption.textContent =
            page.caption;


        if (page.image !== "") {

            memoryImage.src =
                page.image;

            memoryImage.style.display =
                "block";

            memoryPlaceholder.style.display =
                "none";

        } else {

            memoryImage.style.display =
                "none";

            memoryPlaceholder.style.display =
                "flex";

        }

    }


    /*
        CARDS PAGE
    */

    if (page.type === "cards") {

        memoryCards.style.display =
            "grid";

    }


    /*
        SECRET PAGE
    */

    if (page.type === "secret") {

        secretArea.style.display =
            "block";

    }


    /*
        Back button.
    */

    if (storyPage === 0) {

        backButton.style.visibility =
            "hidden";

    } else {

        backButton.style.visibility =
            "visible";

    }


    /*
        Gate handling.
    */

    if (
        unlockedStoryPages[storyPage]
    ) {

        unlockStoryButton();

    } else {

        handleStoryGate();

    }

}


/* =====================================================
   STORY GATES
===================================================== */

function handleStoryGate() {

    const page =
        storyPages[storyPage];


    if (page.gate === "none") {

        unlockStoryButton();

    }


    else if (page.gate === "delay") {

        startStoryDelay(
            page.delay
        );

    }


    else if (page.gate === "cards") {

        nextButton.classList.add(
            "locked"
        );

        nextButton.disabled =
            true;

        gateMessageStory(
            "Open all three."
        );

    }


    else if (page.gate === "secret") {

        nextButton.classList.add(
            "locked"
        );

        nextButton.disabled =
            true;

        gateMessageStory(
            "There's something hidden."
        );

    }

}


/*
    Story gate message is displayed
    through the normal message area.
*/

function gateMessageStory(text) {

    message.textContent =
        `${storyPages[storyPage].message}\n\n${text}`;

}


/* =====================================================
   UNLOCK STORY BUTTON
===================================================== */

function unlockStoryButton() {

    unlockedStoryPages[storyPage] =
        true;

    nextButton.classList.remove(
        "locked"
    );

    nextButton.disabled =
        false;

}


/* =====================================================
   STORY DELAY
===================================================== */

function startStoryDelay(milliseconds) {

    nextButton.classList.add(
        "locked"
    );

    nextButton.disabled =
        true;


    let remaining =
        Math.ceil(milliseconds / 1000);


    const originalMessage =
        storyPages[storyPage].message;


    message.textContent =
        `${originalMessage}\n\nTake a moment... ${remaining}`;


    const timer =
        setInterval(() => {

            remaining--;


            if (remaining > 0) {

                message.textContent =
                    `${originalMessage}\n\nTake a moment... ${remaining}`;

            } else {

                clearInterval(timer);

                message.textContent =
                    originalMessage;

                unlockStoryButton();

            }

        }, 1000);

}


/* =====================================================
   STORY NEXT
===================================================== */

function storyNext() {

    /*
        Don't do anything if locked.
    */

    if (nextButton.disabled) {

        return;

    }


    /*
        Final story page → music.
    */

    if (
        storyPage >=
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


/* =====================================================
   STORY BACK
===================================================== */

function storyBack() {

    if (storyPage === 0) {

        return;

    }


    transitionStory(() => {

        storyPage--;

        showStoryPage();

    });

}


/* =====================================================
   STORY TRANSITION
===================================================== */

function transitionStory(callback) {

    storyContent.classList.add(
        "fade-out"
    );


    setTimeout(() => {

        callback();

        storyContent.classList.remove(
            "fade-out"
        );

    }, 700);

}


/* =====================================================
   MEMORY CARDS
===================================================== */

const cardTexts = [

    `I remember more moments with you than I probably should.

Not because I tried to memorize them.

I just... liked having them.`,

    `I noticed the little things.

The expressions.

The way you talk.

The tiny habits you probably don't even realize you have.`,

    `I think somewhere along the way, being around you started feeling different.

A little warmer.

A little more important.

A little more like something I didn't want to lose.`

];


document
    .querySelectorAll(".memoryCard")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        card.dataset.card
                    );


                if (
                    openedCards[index]
                ) {

                    return;

                }


                openedCards[index] =
                    true;


                card.classList.add(
                    "opened"
                );


                cardReveal.style.display =
                    "block";


                cardReveal.textContent =
                    cardTexts[index];


                /*
                    Check whether all cards
                    have been opened.
                */

                if (
                    openedCards.every(
                        value => value === true
                    )
                ) {

                    unlockedStoryPages[storyPage] =
                        true;

                    nextButton.classList.remove(
                        "locked"
                    );

                    nextButton.disabled =
                        false;

                    message.textContent =
                        "Maybe now you understand a little.";

                }

            }
        );

    });


/* =====================================================
   SECRET
===================================================== */

secretButton.addEventListener(
    "click",
    () => {

        if (secretOpened) {

            return;

        }


        secretOpened =
            true;


        secretText.textContent =
`If you've made it this far,

there's something I hope you understand.

I didn't make this because I needed a perfect way to confess.

I made it because you deserve something sincere.`;


        secretText.classList.add(
            "visible"
        );


        secretButton.textContent =
            "♡";


        unlockedStoryPages[storyPage] =
            true;


        nextButton.classList.remove(
            "locked"
        );

        nextButton.disabled =
            false;

    }
);


/* =====================================================
   MUSIC
===================================================== */

function openMusic() {

    storyScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        musicScreen.classList.add(
            "active"
        );

    }, 700);

}


function musicBack() {

    musicScreen.classList.remove(
        "active"
    );


    setTimeout(() => {

        storyScreen.classList.add(
            "active"
        );

    }, 700);

}


/* =====================================================
   OPEN LETTER
===================================================== */

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


/* =====================================================
   SHOW LETTER PAGE
===================================================== */

function showLetterPage() {

    const page =
        letterPages[letterPage];


    /*
        Reset scroll.
    */

    letterContent.scrollTop =
        0;


    /*
        Text.
    */

    letterText.textContent =
        page.text;


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
        Back button.
    */

    if (letterPage === 0) {

        letterBack.style.visibility =
            "hidden";

    } else {

        letterBack.style.visibility =
            "visible";

    }


    /*
        Gate.
    */

    if (
        unlockedLetterPages[letterPage]
    ) {

        unlockLetterButton();

    } else {

        handleLetterGate();

    }

}


/* =====================================================
   LETTER GATES
===================================================== */

function handleLetterGate() {

    const page =
        letterPages[letterPage];


    if (page.gate === "none") {

        unlockLetterButton();

    }


    else if (page.gate === "delay") {

        startLetterDelay(
            page.delay
        );

    }


    else if (page.gate === "scroll") {

        letterNext.classList.add(
            "locked"
        );

        letterNext.disabled =
            true;

        gateMessage.textContent =
            "Read to the bottom.";

    }

}


/* =====================================================
   LETTER DELAY
===================================================== */

function startLetterDelay(milliseconds) {

    letterNext.classList.add(
        "locked"
    );

    letterNext.disabled =
        true;


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

            } else {

                clearInterval(timer);

                unlockLetterButton();

            }

        }, 1000);

}


/* =====================================================
   UNLOCK LETTER
===================================================== */

function unlockLetterButton() {

    unlockedLetterPages[letterPage] =
        true;


    letterNext.classList.remove(
        "locked"
    );

    letterNext.disabled =
        false;


    gateMessage.textContent =
        "";

}


/* =====================================================
   LETTER SCROLL DETECTION
===================================================== */

function checkLetterScroll() {

    const page =
        letterPages[letterPage];


    /*
        Only check scroll pages.
    */

    if (
        page.gate !== "scroll"
    ) {

        return;

    }


    /*
        If already unlocked,
        don't do anything.
    */

    if (
        unlockedLetterPages[letterPage]
    ) {

        return;

    }


    const scrollTop =
        letterContent.scrollTop;

    const visibleHeight =
        letterContent.clientHeight;

    const totalHeight =
        letterContent.scrollHeight;


    const distanceFromBottom =
        totalHeight -
        (scrollTop + visibleHeight);


    /*
        Ten pixels of tolerance
        prevents problems with
        different screen sizes.
    */

    if (
        distanceFromBottom <= 10
    ) {

        unlockLetterButton();

        gateMessage.textContent =
            "You made it.";

    }

}


/* =====================================================
   LETTER NEXT
===================================================== */

function nextLetterPage() {

    if (
        letterNext.disabled
    ) {

        return;

    }


    /*
        End.
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


/* =====================================================
   LETTER BACK
===================================================== */

function previousLetterPage() {

    /*
        If she's at the beginning
        of the letter, return to music.
    */

    if (letterPage === 0) {

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


/* =====================================================
   FINAL PAGE
===================================================== */

function finishLetter() {

    letterText.classList.remove(
        "confession"
    );


    letterText.textContent =
`Thank you for reading this.

And thank you for being someone worth writing it for.

— Me`;


    letterNext.style.display =
        "none";

    letterBack.style.display =
        "none";

    gateMessage.textContent =
        "";

}


/* =====================================================
   EVENTS
===================================================== */

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
    checkLetterScroll
);


/* =====================================================
   START
===================================================== */

showStoryPage();