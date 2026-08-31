/* =========================================================
   STORY PAGES
========================================================= */

const storyPages = [

    {
        type: "normal",

        title: "For you.",

        message:
            "For my Greatest.",

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

        gate: "none"
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
            "photos/memory1.png",

        caption:
            "Before the spark, I have always admired you. You were so thoughtful, always so considerate of your friends. Here, you spent money to buy robux, and spent the robux you bought to match with me.",

        button:
            "Continue",

        gate:
            "none"
    },


    {
        type: "normal",

        title: "",

        message:
            "As a way of showing my love to you, I have always paid attention and always made you feel seen. There are so many little things about you that you probably don't realize I've noticed.",

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
            "Ever since we met, you always felt lonely, well, rather empty. You had friends, you had family, you have so many people to turn to. However, you seemed independent, too independent. I have always wanted to show you that you can be weak as well. In the end, we are all humans. So, I wanted to be your safe space.",

        image:
            "photos/mybeloved.jpg",

        caption:
            "I love you 3000",

        button:
            "Continue",

        gate:
            "scroll"
    },


    {
        type: "cards",

        title:
            "There's so much I want to tell you.",

        message:
            "I love you more than words can describe",

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
`Dear Jhihan,

Today is the last day of August, and exactly a week ago, we met. I'm so lucky to have gotten to know such a wonderful person like you. <br> It was sudden, I wasn't even looking for anything. Although, fate had other plans. <br> I wasn't looking for love. Ironic looking where I am now, in call with you, listening while you read this.

In the seven days where I have gotten the honor to familiarize myself with you, I cannot deny that I have developed quite the strongest, sincerest feelings for you.

But I cannot, I'm really sorry. I can not love you as I am <em>now</em>`,

        gate:
            "none"
    },


    {
        text:
`I am <em>not</em> Izen.

The person who you've admired up until this point wasn't true.

This account was a social experiment.

But my love for you wasn't.`,

        gate:
            "delay",

        delay:
            5000
    },


    {
        text:
`I love you,

so let me tell you the truth.

I'm Raizen, that's my real name.

I was born on April 19, 2011. Yes, I'm younger than you. Yes we're both in grade 10

I didn't wanna hurt you, so I'm gonna tell you now rather than let you love the wrong person all this time.

Now, my heart can rest having said that.

Truth is, I am not Chineese, I'm full Filipino. And the person in those photos weren't me.

I'm sorry if this disappointed you.

I am not that handsome guy in the photos, I am just ordinary me.

I'm sure things will be trivial now because you have already told your friends about the Chinese guy you fell in love with, but having ended up with me instead.

Although,

I am still the person who has loved you for these past few days.

I am still the persoon who is willing to devote my time to you.

I am still the guy who is willing to love you forever.

But in order to do so, I must tell you the truth.`,

        gate:
            "scroll"
    },


    {
        text:
`Now, I ask,

did you love the guy you thought was behind the screen, or the guy you were talking to?

Let me put it simply,

did you love Izen? The Chinese, 6ft, handsome and rich guy..

or 

did you love Raizen? Who made you feel loved, noticed little things about you, and is on the other end of the call right now, with his heart pumping so fast while waiting for your answer.

End the call if you choose Izen. If not, stay.`,

        gate:
            "delay",

        delay:
            5000
    },


    {
        text:
`If you're here, I'm probably grinning from ear to ear from the other end of the call.

I'm happy you chose me,

it wouldn't be an exaggeration saying that I am the happiest man right now.

I'm sorry for not saying the truth, had you not chosen me, not telling you the truth the moment we met would probably be my biggest regret.


Thank you, 

please bear with me and get to know me again, 

this time, as the real me.

Actually, the person you were getting to know was really me.

The only thing different was my identity.

My experiences, my achievements, most of them were true, while some might be exaggerated.

The one you are talking to now, the me inside your head now, the <em>real</em> me, the real me isn't too far off to the person you knew.`,

        gate:
            "scroll"
    },


    {
        text:
`Yesterday, you said that if I don't become careful, you might fall for me,

I said you shouldn't fall for me <strong><em>yet</em></strong>

Now, you may. Now that it's finally the real me.

I said that because I did not want you to fall for Izen, I wanted you to fall for <em>me</em>.

Now, let me finally say it..`,

        gate:
            "delay",

        delay:
            6000
    },


    {
        text:
`I love you.`,

        gate:
            "none",

        confession:
            true
    },


    {
        text:
`I love you, my greatest, dearest Jhihan.

Now, I can fully love you as me, not the person I'm pretending to be.

I hope nothing changes between us two.

I just wanted you to know who I really am.

Had I let it linger for longer, I know that will definitely hurt you.

I love you, to the moon and back.`,

        gate:
            "scroll"
    },


    {
        text:
`I'm glad I was able to finally say it, to finally confess.

I wrote and coded all of this specifically just for you,

I wanted to give this to you last night but you headed to sleep first and I wasn't able to finish it.

I made this specifically to fit you. I knew you'd cry, so I made sure you had the privellege to go at your own pace and have music in the background just to fully express my love for you.

I don't wanna be ordinary, I know exactly how much you are worth and I'm making sure I can reach even a fraction of the man you deserve.

We're too young for love, yes, but I will make sure this will work.

All for you, my beloved Jhihan.`,

        gate:
            "scroll"
    },


    {
        text:
`Thank you for reading this.

And thank you for being someone worth writing it for.

— <em>Raizen</em>`,

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

`Let me get to know you

The real you

You don't have to be anyone else. 

I love <strong><em>you</em></strong> `,

`I give you my full trust

I know you will always do what's right

I don't have to worry about you doing something I don't like

I <strong><em>love</em></strong> you`,

`Whenever, whereever, I will always choose you

You don't have to pretend

You do not have to impress me

<strong><em>I</em></strong> love you`

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


                    cardReveal.innerHTML =
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
`Thank you for having read all the way til here

I will always cherish you.

I didn't write this to seem impressive, 

I did because you deserve something sincere.

The time I spent writing this definitely is worth it, because it is for you.`;


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

    letterText.innerHTML =
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

— Raizen`;


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