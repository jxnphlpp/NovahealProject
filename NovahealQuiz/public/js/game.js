console.log("hello world!")

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Beispielfragen:
let questions = [
    {
        question: "Was muss man bei einer Wiederbelebung beachten?",
        choice1: "nichts",
        choice2: "nichts",
        choice2: "nichts",
        choice2: "viel",
        answer: 4
    },
    {
        question: "Warum pflege attraktiver?",
        choice1: "Beifall von Politikern",
        choice2: "Geld",
        choice2: "Durch die Einführung eines generalistischen Pflegestudiums werden zusätzliche Qualifizierungs- und Karrieremöglichkeiten eröffnet.",
        choice2: "Geld",
        answer: 1
    },
    {
        question: "Was muss man bei einer Wie lange dauert der 30-jährige Krieg?",
        choice1: "22 Jahre",
        choice2: "30 Jahre",
        choice2: "25 Jahre",
        choice2: "28 Jahre",
        answer: 2
    },
    {
        question: "Wie nennt man die Steigerung von Buchstabensuppe?",
        choice1: "Wörter-See.",
        choice2: "nichts",
        choice2: "Viel Buchstabensuppe",
        choice2: "Mehr Buchstabensuppe",
        answer: 1
    }




]