import questionImage from '../assets/question1.png'
import questionTwoImage from '../assets/question2.png'; 
import questionTreeImage from '../assets/playlist.png'
import idealDateImage from '../assets/ideal_date.png'; 
import silliestThingImage from '../assets/silliest_thing.png'
import checkingPhoneImage from '../assets/love-message.png'; 
import spiritAnimalImage from '../assets/spirit-animal.png'; 
import heartImage from '../assets/heart.png';
import loveQuoteImage from '../assets/love-quote.png'
import loveImage from '../assets/love.png'
import moderateLevelImage from '../assets/giphy.gif';
import lowLevelImage from '../assets/low_level.gif';
import loveInAirImage from '../assets/love-in-air.gif'

export const loveOMeterSurveyQuestions = [
 {
        question: 'How often do you catch yourself daydreaming about your crush or significant other?',
        options: [
            "Every waking moment! 🌟",
            " Occasionally, when I'm bored. 🤔",
            " Nah, I daydream about pizza more often. 🍕",
        ],
        image: questionImage,
    },
    {
        question: "What's your go-to reaction when you see your crush walking towards you?",
        options: [
            "Smooth operator mode activated! 😎",
            "Panic stations! I turn into a clumsy oaf. 🙈",
            "Pretend to be busy with anything else to avoid awkwardness. 🚶‍♂️",
        ],
        image: questionTwoImage,
    }, {
        question: "How many love songs do you have on your playlist?",
        options: [
            "It's a love song festival! 🎵 ",
            "A few mixed in with other genres. 🎶 ",
            "Love songs ? My playlist is all about breakup anthems! 💔 "
        ],
        image: questionTreeImage,
    }, {
        question: "Describe your ideal date night:",
        options: [
            "Romantic candlelit dinner under the stars. 🌌 ",
            "Something adventurous and exciting! 🎢 ",
            "Netflix and pizza in PJs. 🍿"
        ],
        image: idealDateImage,
    }, {
        question: "What's the silliest thing you've done to impress someone you like?",
        options: [
            "Tried to do a backflip and failed spectacularly. 😅 ",
            "Wrote a love poem that made no sense whatsoever. 📝 ",
            "Sent a random GIF and hoped for the best. 🤷‍♀️ "
        ],
        image: silliestThingImage,
    },
    {
        question: "What's your reaction when someone flirts with you?",
        options: [
            "Confidence level 1000! 🔥 ",
            "Flustered and blushing. 😳",
            "I doubt anyone is flirting with me. 🙄"
        ],
        image: loveImage,
    },
    {
        question: "How often do you check your phone for a text from your crush?",
        options: [
            "Obsessively, it's practically glued to my hand. 📱",
            "Whenever I remember. 🤔",
            "Phone ? Who needs one ? 📵"
        ],
        image: checkingPhoneImage,
    },
    {
        question: "What's your spirit animal when you're in love?",
        options: [
            "Lovebird! 🕊️ ",
            "Awkward penguin. 🐧  ",
            "Grumpy cat. 😾",
        ],
        image: spiritAnimalImage,
    }, {
        question: "How do you handle a crush-related embarrassment?",
        options: [
            "Laugh it off like a pro. 😂 ",
            "Blush and run away. 🏃‍♀️",
            "Hide under a rock and never come out. 🙈",
        ],
        image: heartImage,
    }, {
        question: "Choose a funny love-related quote that best describes your current state:",
        options: [
            "Love is like a fart; if you have to force it, it's probably crap. 💨 ",
            "Love is sharing your popcorn.It's popcorn love. 🍿 ",
            "If you can't remember my name, just say 'chocolate' and I'll turn around. 🍫 ",
        ],
        image: loveQuoteImage,
    },


]

// Weightage for each option
export const weights = {
  "Every waking moment! 🌟": 3,
  " Occasionally, when I'm bored. 🤔": 2,
  " Nah, I daydream about pizza more often. 🍕": 1,
  "Smooth operator mode activated! 😎": 3,
  "Panic stations! I turn into a clumsy oaf. 🙈": 2,
  "Pretend to be busy with anything else to avoid awkwardness. 🚶‍♂️": 1,
  "It's a love song festival! 🎵 ": 3,
  "A few mixed in with other genres. 🎶 ": 2,
  "Love songs ? My playlist is all about breakup anthems! 💔 ": 1,
  "Romantic candlelit dinner under the stars. 🌌 ":3,
  "Something adventurous and exciting! 🎢 ":2,
  "Netflix and pizza in PJs. 🍿": 1,
  "Tried to do a backflip and failed spectacularly. 😅 ":3,
  "Wrote a love poem that made no sense whatsoever. 📝 ":2,
  "Sent a random GIF and hoped for the best. 🤷‍♀️ ":1,
  "Confidence level 1000! 🔥 ":3,
  "Flustered and blushing. 😳":2,
  "I doubt anyone is flirting with me. 🙄":1,
  "Obsessively, it's practically glued to my hand. 📱":3,
  "Whenever I remember. 🤔":2,
  "Phone ? Who needs one ? 📵":1,
  "Lovebird! 🕊️ ":3,
  "Awkward penguin. 🐧  ":2,
  "Grumpy cat. 😾":1,
  "Laugh it off like a pro. 😂 ":3,
  "Blush and run away. 🏃‍♀️":2,
  "Hide under a rock and never come out. 🙈":1,
  "Love is like a fart; if you have to force it, it's probably crap. 💨 ":3,
  "Love is sharing your popcorn.It's popcorn love. 🍿 ":2,
  "If you can't remember my name, just say 'chocolate' and I'll turn around. 🍫 ":1,
};

// Define the ranges for different levels of the love meter
export const levels = {
  10: { status: "Low", level: "1" , image: lowLevelImage },
  20: { status: "Moderate", level: "2", image: moderateLevelImage },
  30: { status: "Love is in the Air", level: "3" ,image: loveInAirImage},
};