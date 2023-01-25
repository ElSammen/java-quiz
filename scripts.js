function startQuiz() {
    document.getElementById("quizstart").classList.add("hide");
    document.getElementById("question1").classList.remove("hide");
    document.getElementById("question1").setAttribute("currQuestion", "")
}

function nextQuest() {
    document.getElementById("currQuestion").classList.add("hide");
    

}

function answer() {

}

function Results() {

}

const questions = {
    "test":  [a, b, c, d],
    "test2": [a, b, c, d],
    "test3": [a, b, c, d],
    "test4": [a, b, c, d],
    "test5": [a, b, c, d]
}

