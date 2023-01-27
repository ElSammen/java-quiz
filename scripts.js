const questions = [
    {
        question: "What is the first day of lent known as?",
        answers: [
            {text: "Ash Wednesday", correct: true},
            {text: "Easter", correct: false},
            {text: "Pancake Day", correct: false},
            {text: "Christmas", correct: false}
    ]
    },
    {
        question: "In which part of your body would you find the cruciate ligament?", answers: [
            {text: "elbow", correct: false},
            {text: "back", correct: false},
            {text: "knee", correct: true},
            {text: "foot", correct: false}
        ]
    },
    {
        question: "Ganymede is the largest moon of which planet?",
        answers: [
            {text: "Neptune", correct: false},
            {text: "Saturn", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Uranus", correct: false}
        ]
    },
    {
        question: "Which ex-Beatle was born Richard Starkey in July 1940?",
        answers: [
            {text: "John Lennon", correct: false},
            {text: "Ringo Starr", correct: true},
            {text: "George Harrison", correct: false},
            {text: "Paul McCartney", correct: false}
        ]
    },
    {
        question: "In Greek mythology, what was the name of the three headed dog that guarded the gate to the underworld?",
        answers: [
            {text: "Clifford", correct: false},
            {text: "Fido", correct: false},
            {text: "Hades", correct: false},
            {text: "Cerberus", correct: true}
        ]
    },
    {
        question: "How many Labours did Hercules undertake?",
        answers: [
            {text: "9", correct: false},
            {text: "12", correct: true},
            {text: "10", correct: false},
            {text: "8", correct: false}
        ]
    },
    {
        question: "What is the capital city of Switzerland?",
        answers: [
            {text: "Stockholm", correct: false},
            {text: "Davos", correct: false},
            {text: "Bern", correct: true},
            {text: "Zurich", correct: false}
        ]
    },
    {   
        question: "A 17ft tall marble statue of David is found in the Italian city Florence. Which renaissance sculptor created the work?",
        answers: [
            {text: "Raphael", correct: false},
            {text: "Donatello", correct: false},
            {text: "Michaelangelo", correct: true},
            {text: "Leonardo", correct: false}
        ]
    },
    {   
        question: "The city of Boston, is located in which American state?",
        answers: [
            {text: "New York", correct: false},
            {text: "Massachusetts", correct: true},
            {text: "California", correct: false},
            {text: "Texas", correct: false}
        ]
    },
    {
        question: "What is the meaning of the latin phrase Carpe diem?",
        answers: [
            {text: "Catch the fish", correct: false},
            {text: "In good faith", correct: false},
            {text: "Seize the day", correct: true},
            {text: "Something for something", correct: false}
        ]
    },
    {
        question: "Which of the following was not a member of the famed '27 club'?",
        answers: [
            {text: "Kurt Cobain", correct: false},
            {text: "Amy Winehouse", correct: false},
            {text: "John Lennon", correct: true},
            {text: "Jimi Hendrix", correct: false}
        ]
    },
    {   question: "How many cities are there in England? ",
        answers: [
            {text: "51", correct: true},
            {text: "55", correct: false},
            {text: "61", correct: false},
            {text: "65", correct: false}
        ]
    },
    {
        question: "Which of these actors has NOT played the Joker?",
        answers: [
            {text: "Heath Ledger", correct: false},
            {text: "Jack Nicholson", correct: false},
            {text: "Jared Leto", correct: false},
            {text: "Jim Carrey", correct: true}
        ]
    },
    {
        question: "The French word 'lapin' translates to which animal in English?",
        answers: [
            {text: "Seal", correct: false},
            {text: "Cow", correct: false},
            {text: "Rabbit", correct: true},
            {text: "Leopard", correct: false}
        ]
    },
    {
        question: "In which year did The Battle of Hastings take place?",
        answers: [
            {text: "1066", correct: true},
            {text: "1076", correct: false},
            {text: "1086", correct: false},
            {text: "1415", correct: false}
        ]
    },
    {
        question: "The White Cliffs of Dover are found within which English county?",
        answers: [
            {text: "Devon", correct: false},
            {text: "Kent", correct: true},
            {text: "Dorset", correct: false},
            {text: "Norfolk", correct: false}
        ]
    },
    {
        question: "'Discworld' is a fictional land found in the works of which author?",
        answers: [
            {text: "Terry Pratchett", correct: true},
            {text: "J. R. R. Tolkien", correct: false},
            {text: "Douglas Adams", correct: false},
            {text: "Roald Dahl", correct: false}
        ]
    },
    {
        question: "'The Taoiseach' serves as head of state in which country?",
        answers: [
            {text: "Taiwan", correct: false},
            {text: "Thailand", correct: false},
            {text: "Korea", correct: false},
            {text: "Republic of Ireland", correct: true}
        ]
    },
    {
        question: "Opposite to the Queen, who is featured on the £50 bank note?",
        answers: [
            {text: "Florence Nightingale", correct: false},
            {text: "Jedward", correct: false},
            {text: "Alan Turing", correct: true},
            {text: "David Attenborough", correct: false}
        ]
    },
    {
        question: "Opposite to the Queen, who is featured on the £10 bank note?",
        answers: [
            {text: "J.K. Rowling", correct: false},
            {text: "Mary Shelley", correct: false},
            {text: "Agatha Christie", correct: false},
            {text: "Jane Austen", correct: true}
        ]
    },
    {
        question: "The Spanish Civil War of 1936 ended in which year?",
        answers: [
            {text: "1936", correct: false},
            {text: "1937", correct: false},
            {text: "1938", correct: false},
            {text: "1939", correct: true}
        ]
    },
    {
        question: "Which boxer was known as the ‘Louisville Lip’?",
        answers: [
            {text: "Mike Tyson", correct: false},
            {text: "Muhammad Ali", correct: true},
            {text: "Joe Frazier", correct: false},
            {text: "Rocky Marciano", correct: false}
        ]
    },
    {
        question: "Approximately how many muscles are there in the human body?",
        answers: [
            {text: "550", correct: false},
            {text: "600", correct: false},
            {text: "650", correct: true},
            {text: "700", correct: false}
        ]
    },
    {
        question: "In the USA this vegetable is known as Zucchini but what is called what in the UK?",
        answers: [
            {text: "Cucumber", correct: false},
            {text: "Aubergine", correct: false},
            {text: "Spring Onion", correct: false},
            {text: "Courgette", correct: true}
        ]
    },
    {
        question: "How many Great British colonies declared independence and formed the United States of America in 1776?",
        answers: [
            {text: "13", correct: true},
            {text: "18", correct: false},
            {text: "15", correct: false},
            {text: "51", correct: false}
        ]
    }
]
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const introPage = document.getElementById("intro-panel")
let correctAnswer = true

let questionsRight = 0
let currentQuestionIndex 

let randomQuest = Math.floor(Math.random)*questions.length; //used in variable if statement below



let questList = []; //picks from above questions at random to produce new array of random questions from list
while(questList.length<8){   //
    let randomQuest = Math.floor(Math.random()*questions.length);
    if (!questList.includes(questions[randomQuest])){
        questList.push(questions[randomQuest])
    }
}


startButton.addEventListener('click', startGame) //////////////////////////////////////////////////////////////////
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {     // prints out question list in console, hides start button & intropage. shuffles questions for printing buttons and sets currentQuestionIndex to 0.
    console.log("start")
    console.log(questList)
    startButton.classList.add("hide")
    introPage.classList.add("hide")
    questList = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {  // clear buttons and reprint them with function below ///////////////////////////////////////////////
    resetState()
    showQuestion(questList[currentQuestionIndex])
}


function showQuestion(question) {  // question VVVVV
    if (question >= questList.length) {   //
      console.error("Invalid question index") //
      return                                    //
    }                                           // 
console.log(question.question)                           //
 questionElement.innerText = question.question
/////////////////////////////////////////////////////// answers VVVVV
 console.log(questList[currentQuestionIndex].answers)
 questList[currentQuestionIndex].answers.forEach(answer => {    
    console.log(answer)
    document.getElementById("answer-buttons").insertAdjacentHTML("beforeend", `<button class="btn answer" onclick="selectAnswer(event);">${answer.text}</button>`)          //data-correct="${answer.correct}">${answer.text}
//     let correct = questList.some(function(correct) {    /// I tried a lot of different methods to target the provided answers and see whether they had the correct: true value when the button is selected but I couldn't get it to work in the end.
//         return correct === true;
//     })
//    console.log(correct + "I'm not working!")
//     if(correct){
//         questionsRight++;       // for tracking correct answers
//         console.log(questionsRight)    }
    // if (answer.correct) {       // if answer selected matches, running total in console increases
    //     button.dataset.correct = answer.correct     
    //     console.log("Questions right: " + questionsRight)   //
    // }
 })
}                   //

// function testTest() {
//     questionsRight++;
//     console.log(questionsRight)
// }

function resetState() {             // resets css to default, hides nextButton
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) { // tracks button clicked is right or wrong etc
const selectedButton = e.target
const correct = selectedButton.correct //// does not pick up correct answers
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => { ///////////////////////////////////////////////////
    setStatusClass(button, button.dataset.correct)
 })
 if (questList.length > currentQuestionIndex + 1) {   
   nextButton.classList.remove("hide") 
 } else {
    document.getElementById("results-page").classList.remove("hide")  // for printing results after last question on array
    document.getElementsByClassName("result").innerText = questionsRight;   //
    startButton.innerText = "Restart" // restart button
    startButton.classList.remove("hide")
 }
 
}

function setStatusClass(element, correct) { // tailors the css depending on right and wrong answers
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
    }

function clearStatusClass(element) {    // clears css classes between questions
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
    
