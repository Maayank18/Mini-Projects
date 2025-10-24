const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];

const compliments = [
    "You have a great mind",
    "You are very good",
    "You have a great sense of humor",
    "You are incredibly thoughtful",
    "You are a great listener",
    "You have a kind heart",
    "You are very creative",
    "You are inspiring",
    "You make people smile",
    "You are very talented",
    "You are confident and strong",
    "You have amazing ideas",
    "You are so reliable",
    "You bring out the best in people",
    "You are very generous",
    "You have a beautiful soul",
    "You are wise beyond your years",
    "You are very hardworking",
    "You are very compassionate",
    "You have an infectious energy",
    "You are a problem solver",
    "You are very patient",
    "You are courageous",
    "You are very adaptable",
    "You are very understanding",
    "You are very respectful",
    "You are very ambitious",
    "You have a great sense of style",
    "You are very honest",
    "You are very dependable",
    "You make the world better"
  ];
  
const victimcardcompliments = [
    "You survived my sarcasm, impressive!",
    "You have a PhD in patience",
    "You’re legally allowed to complain, and you do it well",
    "You make losing look stylish",
    "You’re a legend in enduring chaos",
    "You always take the blame like a pro",
    "You turn misfortune into an art form",
    "You survive Mondays like a champ",
    "You have a black belt in bad luck handling",
    "You always find the hardest way… and make it look easy",
    "You’re the CEO of ‘oops’ moments",
    "You make disasters adorable",
    "You turn setbacks into plot twists",
    "You have a magnetic attraction to chaos",
    "You always make the most of the victim role",
    "You’re the undefeated champion of ‘oops’",
    "You somehow survive life’s curveballs",
    "You make drama look effortless",
    "You could teach a masterclass in awkward situations",
    "You handle bad luck like it’s a lifestyle"
  ];

const recommendations = [
    "Feed the dog",
    "Always do prayer in the temple on Tuesday",
    "Drink at least 8 glasses of water daily",
    "Take a 10-minute walk after lunch",
    "Read a book for 20 minutes before bed",
    "Call a family member once a week",
    "Practice gratitude every morning",
    "Write down your goals for the day",
    "Meditate for 5 minutes daily",
    "Compliment someone every day",
    "Organize your workspace once a week",
    "Avoid using your phone 30 minutes before sleep",
    "Try cooking a new recipe once a week",
    "Take deep breaths when stressed",
    "Spend 15 minutes outside daily",
    "Limit sugar intake",
    "Plan your week every Sunday",
    "Donate unused items to charity",
    "Practice a hobby for 30 minutes daily",
    "Smile at strangers",
    "Journal your thoughts before bed",
    "Stretch for 10 minutes every morning",
    "Listen to a podcast or TED talk",
    "Practice mindful eating",
    "Keep a to-do list",
    "Unplug from social media for a day",
    "Learn one new word daily",
    "Compliment yourself in the mirror",
    "Set a budget and track your expenses",
    "Reflect on one positive thing daily"
  ];

const predictions = [
    "You will become a good father",
    "You will become a crorepati",
    "You will travel to an exotic country soon",
    "You will discover a hidden talent",
    "You will meet someone who changes your life",
    "You will achieve your biggest dream",
    "You will make a new lifelong friend",
    "You will get a promotion or recognition at work",
    "You will find true love",
    "You will have a joyful celebration soon",
    "You will make someone smile today",
    "You will learn something that changes your perspective",
    "You will overcome a challenge effortlessly",
    "You will inspire others around you",
    "You will receive unexpected good news",
    "You will make a wise investment",
    "You will enjoy a moment of pure happiness",
    "You will discover something valuable about yourself",
    "You will make a positive impact on someone’s life",
    "You will achieve a personal goal you thought impossible"
  ];

const form = document.getElementById('astraforms');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const surname = document.getElementById('surname').value;
//     const day = parseInt(document.getElementById('day').value);
//     const month = parseInt(document.getElementById('month').value);
//     const year = parseInt(document.getElementById('year').value);

//     const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiacSigns[month-1]}.
//     ${compliments[day-1]}. ${victimcardcompliments[year%20]}. ${recommendations[(day*month)%month]}.
//     ${predictions[(name.length*surname.length)%20]}`;

//     document.getElementById('result').textContent = text;
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const zodiac = zodiacSigns[month - 1];
    const compliment = compliments[(day - 1) % compliments.length];
    const victimCompliment = victimcardcompliments[year % victimcardcompliments.length];
    const recommendation = recommendations[(day * month) % recommendations.length];
    const prediction = predictions[(name.length * surname.length) % predictions.length];

    const text = `Hi ${name} ${surname}, Your Zodiac sign is ${zodiac}.
${compliment}. ${victimCompliment}. ${recommendation}.
${prediction}`;

    document.getElementById('result').textContent = text;
});

  
  
  