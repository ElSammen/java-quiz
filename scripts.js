let answersArr = [
    {qid: 0, question: "What is your favourite colour?",  answers:["Maroon", "Blue", "Green", "Blue (German)"]},
    {qid: 1, question: "How do you feel about loyalty cards?", answers:["They're a real buzz", "People without them are second class citizens", "Don't care for them", "Don't care for them (German)"]},
    {qid: 2, question: "How would people describe you?" ,answers:["You can really taste the difference", "Just the finest", "Extra Special", "Middle Aisle"]},
    {qid: 3, question: "Who are you wearing?" ,answers:["Tu", "F&F", "George", "Middle Aisle"]},
    {qid: 4, question: "Who's your favourite celebrity chef?" ,answers:["Well, it used to be Jamie Oliver...", "Jamie Oliver", "c", "You wouldn't know him"]}
]
let answersGiven = []
let question = document.getElementsByClassName("question")
let currQuestion = document.getElementsByClassName("currQuestion")



function startQuiz() {
    document.getElementById("quizstart").classList.add("hide");
    document.getElementById("question1").classList.remove("hide");
    question.innerHTML = answersArr.question;    
    answersArr[0].answers.forEach(element => {
        document.getElementById("answer-btn").insertAdjacentHTML("beforeend", `<button class="btn answer" onclick="answerPick()">${element}</button>`)
        
    });
    
}

function addQuestion() {

}

function answerPick() {
// answer-btn.addEventListener('click', () => answersArr(question.id, answer.text))

nextQuest()
}

function nextQuest() {
    document.getElementById("question1").classList.add("hide");
    document.getElementById("question2").classList.remove("hide");

}









function Results() {

}


