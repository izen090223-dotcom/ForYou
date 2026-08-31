/* =========================================================
   STORY PAGES
========================================================= */

const storyPages = [

    {
        type: "normal",

        title: "For you.",

        message:
            "Whenever you're ready.",

        button: "Begin",

        gate: "none"
    },


    {
        type: "normal",

        title: "",

        message:
            "There's something I've been wanting to tell you.",

        button: "Continue",

        gate: "none"
    },


    {
        type: "normal",

        title: "",

        message:
            "I've thought about how to say it more times than I can count.",

        button: "Continue",

        gate: "delay",

        delay: 3000
    },


    {
        type: "normal",

        title: "",

        message:
            "And somehow, none of the words ever felt quite right.",

        button: "Continue",

        gate: "none"
    },


    {
        type: "memory",

        title:
            "Do you remember this?",

        message:
            "I do.",

        image:
            "",

        caption:
            "Put your first memory here.",

        button:
            "Continue",

        gate:
            "none"
    },


    {
        type: "normal",

        title: "",

        message:
            "There are so many little things about you that you probably don't realize I've noticed.",

        button:
            "Continue",

        gate:
            "none"
    },


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


/* =========================================================
   LETTER PAGES
========================================================= */

const letterPages = [

    {
        text:
`Dear you,

I've been trying to figure out how to say this.

I don't really know where to start.

So maybe I'll start with something small.`,

        gate:
            "none"
    },


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


    {
        text:
`I like you.`,

        gate:
            "none",

        confession:
            true
    },


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


    {
        text:
`Thank you for reading this.

And thank you for being someone worth writing it for.

— Me`,

        gate:
            "none"
    }

];


/* =========================================================
   STATE
========================================================= */

let storyPage = 0;

let letterPage = 0;


/*
    Remember completed gates.

    This means if she goes Back,
    she won't have to repeat them.
*/

const unlockedStory =
    new Array(
        storyPages.length
    ).fill(false);


const unlockedLetter =
    new Array(
        letterPages.length
    ).fill(false);


/* =========================================================
   MEMORY CARD STATE
========================================================= */

const cardsOpened = [
    false,
    false,
    false
];


/* =========================================================
   SECRET STATE
========================================================= */

let secretOpened = false;


/* =========================================================
   GET ELEMENTS
========================================================= */

const storyScreen =
    document.getElementById(
        "storyScreen"
    );

const storyContent =
    document.querySelector(
        ".storyContent"
    );

const storyTitle =
    document.getElementById(
        "storyTitle"
    );

const storyMessage =
    document.getElementById(
        "storyMessage"
    );

const pageNumber =
    document.getElementById(
        "pageNumber"
    );

const storyNext =
    document.getElementById(
        "storyNext"
    );

const storyBack =
    document.getElementById(
        "storyBack"
    );


const memoryContainer =
    document.getElementById(
        "memoryContainer"
    );

const memoryPlaceholder =
    document.getElementById(
        "memoryPlaceholder"
    );

const memoryImage =
    document.getElementById(
        "memoryImage"
    );

const memoryCaption =
    document.getElementById(
        "memoryCaption"
    );


const memoryCards =
    document.getElementById(
        "memoryCards"
    );

const cardReveal =
    document.getElementById(
        "cardReveal"
    );


const secretArea =
    document.getElementById(
        "secretArea"
    );

const secretButton =
    document.getElementById(
        "secretButton"
    );

const secretText =
    document.getElementById(
        "secretText"
    );


const musicScreen =
    document.getElementById(
        "musicScreen"
    );

const musicBack =
    document.getElementById(
        "musicBack"
    );

const readLetter =
    document.getElementById(
        "readLetter"
    );


const letterScreen =
    document.getElementById(
        "letterScreen"
    );

const letterScroll =
    document.getElementById(
        "letterScroll"
    );

const letterText =
    document.getElementById(
        "letterText"
    );

const letterNext =
    document.getElementById(
        "letterNext"
    );

const letterBack =
    document.getElementById(
        "letterBack"
    );

const gateMessage =
    document.getElementById(
        "gateMessage"
    );


/* =========================================================
   SHOW STORY PAGE
========================================================= */

function showStory() {

    const page =
        storyPages[storyPage];


    /* -----------------------------------------
       TEXT
    ----------------------------------------- */

    storyTitle.textContent =
        page.title;

    storyMessage.textContent =
        page.message;


    /* -----------------------------------------
       PAGE NUMBER
    ----------------------------------------- */

    if (storyPage === 0) {

        pageNumber.textContent =
            "";

    } else {

        pageNumber.textContent =
            String(
                storyPage
            ).padStart(
                2,
                "0"
            );

    }


    /* -----------------------------------------
       HIDE SPECIAL ELEMENTS
    ----------------------------------------- */

    memoryContainer.classList.add(
        "hidden"
    );

    memoryCards.classList.add(
        "hidden"
    );

    cardReveal.classList.add(
        "hidden"
    );

    secretArea.classList.add(
        "hidden"
    );


    /* -----------------------------------------
       MEMORY PAGE
    ----------------------------------------- */

    if (
        page.type === "memory"
    ) {

        memoryContainer.classList.remove(
            "hidden"
        );


        memoryCaption.textContent =
            page.caption;


        if (
            page.image !== ""
        ) {

            memoryImage.src =
                page.image;

            memoryImage.classList.remove(
                "hidden"
            );

            memoryPlaceholder.classList.add(
                "hidden"
            );

        } else {

            memoryImage.classList.add(
                "hidden"
            );

            memoryPlaceholder.classList.remove(
                "hidden"
            );

        }

    }


    /* -----------------------------------------
       CARD PAGE
    ----------------------------------------- */

    if (
        page.type === "cards"
    ) {

        memoryCards.classList.remove(
            "hidden"
        );

    }


    /* -----------------------------------------
       SECRET PAGE
    ----------------------------------------- */

    if (
        page.type === "secret"
    ) {

        secretArea.classList.remove(
            "hidden"
        );

    }


    /* -----------------------------------------
       BACK BUTTON

       THIS IS THE IMPORTANT FIX.

       display:none means the button
       occupies absolutely NO SPACE.
    ----------------------------------------- */

    if (
        storyPage === 0
    ) {

        storyBack.style.display =
            "none";

    } else {

        storyBack.style.display =
            "inline-block";

    }


    /* -----------------------------------------
       HANDLE PAGE GATE
    ----------------------------------------- */

    if (
        unlockedStory[storyPage]
    ) {

        unlockStory();

    } else {

        handleStoryGate();

    }

}


/* =========================================================
   STORY GATES
========================================================= */

function handleStoryGate() {

    const page =
        storyPages[storyPage];


    /* -----------------------------------------
       NO GATE
    ----------------------------------------- */

    if (
        page.gate === "none"
    ) {

        unlockStory();

        return;

    }


    /* -----------------------------------------
       DELAY
    ----------------------------------------- */

    if (
        page.gate === "delay"
    ) {

        startStoryDelay(
            page.delay
        );

        return;

    }


    /* -----------------------------------------
       CARDS
    ----------------------------------------- */

    if (
        page.gate === "cards"
    ) {

        storyNext.disabled =
            true;

        storyNext.classList.add(
            "locked"
        );

        storyMessage.textContent =
            `${page.message}\n\nOpen all three.`;

        return;

    }


    /* -----------------------------------------
       SECRET
    ----------------------------------------- */

    if (
        page.gate === "secret"
    ) {

        storyNext.disabled =
            true;

        storyNext.classList.add(
            "locked"
        );

        return;

    }

}


/* =========================================================
   UNLOCK STORY
========================================================= */

function unlockStory() {

    unlockedStory[storyPage] =
        true;

    storyNext.disabled =
        false;

    storyNext.classList.remove(
        "locked"
    );

}


/* =========================================================
   STORY DELAY
========================================================= */

function startStoryDelay(
    milliseconds
) {

    storyNext.disabled =
        true;

    storyNext.classList.add(
        "locked"
    );


    const originalMessage =
        storyPages[
            storyPage
        ].message;


    let seconds =
        Math.ceil(
            milliseconds / 1000
        );


    storyMessage.textContent =
        `${originalMessage}\n\nTake a moment... ${seconds}`;


    const timer =
        setInterval(
            () => {

                seconds--;


                if (
                    seconds > 0
                ) {

                    storyMessage.textContent =
                        `${originalMessage}\n\nTake a moment... ${seconds}`;

                } else {

                    clearInterval(
                        timer
                    );

                    storyMessage.textContent =
                        originalMessage;

                    unlockStory();

                }

            },
            1000
        );

}


/* =========================================================
   NEXT STORY PAGE
========================================================= */

function nextStory() {

    if (
        storyNext.disabled
    ) {

        return;

    }


    /* -----------------------------------------
       LAST STORY PAGE → MUSIC
    ----------------------------------------- */

    if (
        storyPage >=
        storyPages.length - 1
    ) {

        openMusic();

        return;

    }


    /* -----------------------------------------
       FADE
    ----------------------------------------- */

    storyContent.classList.add(
        "fade"
    );


    setTimeout(
        () => {

            storyPage++;

            showStory();

            storyContent.classList.remove(
                "fade"
            );

        },
        650
    );

}


/* =========================================================
   PREVIOUS STORY PAGE
========================================================= */

function previousStory() {

    if (
        storyPage === 0
    ) {

        return;

    }


    storyContent.classList.add(
        "fade"
    );


    setTimeout(
        () => {

            storyPage--;

            showStory();

            storyContent.classList.remove(
                "fade"
            );

        },
        650
    );

}


/* =========================================================
   MEMORY CARDS
========================================================= */

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
    .querySelectorAll(
        ".memoryCard"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            this.dataset.card
                        );


                    if (
                        cardsOpened[index]
                    ) {

                        return;

                    }


                    cardsOpened[index] =
                        true;


                    this.classList.add(
                        "opened"
                    );


                    cardReveal.textContent =
                        cardTexts[index];


                    cardReveal.classList.remove(
                        "hidden"
                    );


                    /* -------------------------
                       ALL CARDS OPENED
                    ------------------------- */

                    if (
                        cardsOpened.every(
                            value => value
                        )
                    ) {

                        unlockedStory[
                            storyPage
                        ] = true;


                        storyNext.disabled =
                            false;


                        storyNext.classList.remove(
                            "locked"
                        );


                        storyMessage.textContent =
                            "Maybe now you understand a little.";

                    }

                }
            );

        }
    );


/* =========================================================
   SECRET
========================================================= */

secretButton.addEventListener(
    "click",
    function () {

        if (
            secretOpened
        ) {

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


        unlockedStory[
            storyPage
        ] = true;


        storyNext.disabled =
            false;


        storyNext.classList.remove(
            "locked"
        );

    }
);


/* =========================================================
   OPEN MUSIC SCREEN
========================================================= */

function openMusic() {

    storyScreen.classList.remove(
        "active"
    );


    setTimeout(
        () => {

            musicScreen.classList.add(
                "active"
            );

        },
        500
    );

}


/* =========================================================
   RETURN TO STORY
========================================================= */

function backToStory() {

    musicScreen.classList.remove(
        "active"
    );


    setTimeout(
        () => {

            storyScreen.classList.add(
                "active"
            );

        },
        500
    );

}


/* =========================================================
   OPEN LETTER
========================================================= */

function openLetter() {

    musicScreen.classList.remove(
        "active"
    );


    setTimeout(
        () => {

            letterScreen.classList.add(
                "active"
            );


            letterPage =
                0;


            letterNext.style.display =
                "inline-block";

            letterBack.style.display =
                "inline-block";


            showLetter();

        },
        500
    );

}


/* =========================================================
   SHOW LETTER PAGE
========================================================= */

function showLetter() {

    const page =
        letterPages[
            letterPage
        ];


    /* -----------------------------------------
       ALWAYS START AT TOP
    ----------------------------------------- */

    letterScroll.scrollTop =
        0;


    /* -----------------------------------------
       LETTER TEXT
    ----------------------------------------- */

    letterText.textContent =
        page.text;


    /* -----------------------------------------
       CONFESSION STYLE
    ----------------------------------------- */

    if (
        page.confession
    ) {

        letterText.classList.add(
            "confession"
        );

    } else {

        letterText.classList.remove(
            "confession"
        );

    }


    /* -----------------------------------------
       LETTER BACK BUTTON
    ----------------------------------------- */

    if (
        letterPage === 0
    ) {

        letterBack.style.visibility =
            "hidden";

    } else {

        letterBack.style.visibility =
            "visible";

    }


    /* -----------------------------------------
       GATE
    ----------------------------------------- */

    if (
        unlockedLetter[
            letterPage
        ]
    ) {

        unlockLetter();

    } else {

        handleLetterGate();

    }

}


/* =========================================================
   LETTER GATES
========================================================= */

function handleLetterGate() {

    const page =
        letterPages[
            letterPage
        ];


    /* -----------------------------------------
       NO GATE
    ----------------------------------------- */

    if (
        page.gate === "none"
    ) {

        unlockLetter();

        return;

    }


    /* -----------------------------------------
       DELAY
    ----------------------------------------- */

    if (
        page.gate === "delay"
    ) {

        startLetterDelay(
            page.delay
        );

        return;

    }


    /* -----------------------------------------
       SCROLL
    ----------------------------------------- */

    if (
        page.gate === "scroll"
    ) {

        letterNext.disabled =
            true;

        letterNext.classList.add(
            "locked"
        );

        gateMessage.textContent =
            "Read to the bottom.";

    }

}


/* =========================================================
   UNLOCK LETTER
========================================================= */

function unlockLetter() {

    unlockedLetter[
        letterPage
    ] = true;


    letterNext.disabled =
        false;


    letterNext.classList.remove(
        "locked"
    );


    gateMessage.textContent =
        "";

}


/* =========================================================
   LETTER DELAY
========================================================= */

function startLetterDelay(
    milliseconds
) {

    letterNext.disabled =
        true;

    letterNext.classList.add(
        "locked"
    );


    let seconds =
        Math.ceil(
            milliseconds / 1000
        );


    gateMessage.textContent =
        `Take a moment... ${seconds}`;


    const timer =
        setInterval(
            () => {

                seconds--;


                if (
                    seconds > 0
                ) {

                    gateMessage.textContent =
                        `Take a moment... ${seconds}`;

                } else {

                    clearInterval(
                        timer
                    );

                    unlockLetter();

                }

            },
            1000
        );

}


/* =========================================================
   LETTER SCROLL DETECTION
========================================================= */

letterScroll.addEventListener(
    "scroll",
    function () {

        const page =
            letterPages[
                letterPage
            ];


        /*
            Only scroll-gated pages
            need scroll detection.
        */

        if (
            page.gate !== "scroll"
        ) {

            return;

        }


        /*
            If already completed,
            do nothing.
        */

        if (
            unlockedLetter[
                letterPage
            ]
        ) {

            return;

        }


        const scrollTop =
            letterScroll.scrollTop;


        const visibleHeight =
            letterScroll.clientHeight;


        const totalHeight =
            letterScroll.scrollHeight;


        const distanceFromBottom =
            totalHeight -
            (
                scrollTop +
                visibleHeight
            );


        /*
            Reached the bottom.
        */

        if (
            distanceFromBottom <= 15
        ) {

            unlockLetter();

            gateMessage.textContent =
                "You made it.";

        }

    }
);


/* =========================================================
   NEXT LETTER
========================================================= */

function nextLetter() {

    if (
        letterNext.disabled
    ) {

        return;

    }


    /* -----------------------------------------
       LAST LETTER PAGE
    ----------------------------------------- */

    if (
        letterPage >=
        letterPages.length - 1
    ) {

        finishLetter();

        return;

    }


    letterPage++;

    showLetter();

}


/* =========================================================
   PREVIOUS LETTER
========================================================= */

function previousLetter() {

    /*
        If she's on the first letter page,
        Back returns to the music screen.
    */

    if (
        letterPage === 0
    ) {

        letterScreen.classList.remove(
            "active"
        );


        setTimeout(
            () => {

                musicScreen.classList.add(
                    "active"
                );

            },
            500
        );


        return;

    }


    letterPage--;

    showLetter();

}


/* =========================================================
   FINISH LETTER
========================================================= */

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


/* =========================================================
   BUTTON EVENTS
========================================================= */

storyNext.addEventListener(
    "click",
    nextStory
);


storyBack.addEventListener(
    "click",
    previousStory
);


musicBack.addEventListener(
    "click",
    backToStory
);


readLetter.addEventListener(
    "click",
    openLetter
);


letterNext.addEventListener(
    "click",
    nextLetter
);


letterBack.addEventListener(
    "click",
    previousLetter
);


/* =========================================================
   START
========================================================= */

showStory();