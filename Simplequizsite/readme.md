 const currentQuestion = questions[currentQuestionIndex];
questionElement.textContent = currentQuestion.question;  // Update the question text
answerButton.textContent = "Show Answers";    // Update the button text to the answer
answerButton.onclick = () => {
    alert(`Answer: ${currentQuestion.answers}`);
    currentQuestionIndex++;
    updateQuestion(); // Go to the next question
};
}) else {
 End of quiz
questionElement.textContent = "Quiz Finished!";
answerButton.textContent = "Restart Quiz";
answerButton.onclick = () => {
    currentQuestionIndex = 0;
    updateQuestion();
};
}

document.getElementById("answerButton").addEventListener("click", updateQuestion); -->


questionElement.textContent = currentQuestion.question;
 for(let i=0; i<4;i++){
     const button= document.getElementById('btn${i+1})');
     button.textContent= currentQuestion.options[i];

 document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
         showQuestion(currentQuestionIndex); 
    } else {
        alert("Quiz finished!");
       currentQuestionIndex = 0; // Reset for replay
      showQuestion(currentQuestionIndex);
    }
});
showQuestion(currentQuestionIndex);

let currentQuestionIndex=0;
let answered= false;
function updateQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    const questionElement=document.getElementById("question");
    const nextButton= document.getElementById("next-btn");
    answered=false;
    nextButton.disabled=true;
    nextButton.classList.remove("active");
    questionElement.textContent= currentQuestion.question;
    for( let i=0;i<4;i++){
        const button= document.getElementsByClassName(`btn{i+1)}`);
        button.textContent= currentQuestion.answers[i];
        button.disabled=false;
        button.onclick= ((index)=>()=>{
            const answer = currentQuestion.answers[index];
            answered= true;
            button.style.backgroundColor= answer.correct ? "green" : "red";         
                        // Show correct answer if wrong
                        if (!answer.correct) {
                            const correctButton = Array.from(document.querySelectorAll(".btn"))
                                .find(btn => btn.textContent === currentQuestion.answers.find(a => a.correct).text);
                            correctButton.style.backgroundColor = "green";
                        }                 
                        // Disable all buttons
                        document.querySelectorAll(".btn").forEach(btn => btn.disabled = true);
                        // Enable the Next button
                        nextButton.disabled = false;
                        nextButton.classList.add("active");
                        answerButton.appendChild(button);
                    })
                };
                // Reset button styles
                button.style.backgroundColor = "#007bff";
            }
            document.getElementById("next-btn").addEventListener("click", () => {
                currentQuestionIndex++; 
                // If no more questions, reset or end quiz
                if (currentQuestionIndex >= questions.length) {
                    alert("Quiz Finished!");
                    currentQuestionIndex = 0; // Restart the quiz
                } 
                updateQuestion();
            }); 
            // Initialize the first question
            updateQuestion();