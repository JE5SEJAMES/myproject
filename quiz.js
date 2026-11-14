// === Timer ===
let timeRemaining = 600;
let timerInterval;

// Start the timer when the page finishes loading
window.addEventListener("load", function() {
    startTimer();
});

// === Timer Functions ===
function startTimer() {
    // setInterval runs every second
    timerInterval = setInterval(function() {
        
        // Subtract 1 second
        timeRemaining = timeRemaining - 1;

        // Calculate how much time is left
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;

        // Add a leading zero for better formatting (9 seconds becomes 09)
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // Update the Time Remaining text on the page
        document.getElementById("timer-display").innerHTML = "<h3>Time Remaining: " + minutes + ":" + seconds + "</h3>";

        // When time runs out, stop the timer, display message and submit the quiz
        if (timeRemaining <= 0) {
            clearInterval(timerInterval); 
            document.getElementById("timer-display").innerHTML = "<h3>Time is up!</h3>";
            gradeQuiz();
        }
        
    }, 1000);   
}

// === Grade Quiz when Submit Button is Clicked ===
window.addEventListener("load", function() {
    document.getElementById("submitBtn").addEventListener("click", gradeQuiz);
});

// === Grading Function ===
function gradeQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
    
    // Variable used to keep track of the score
    let score = 0;

    // --- Grade Radio Button Questions ---

    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 != null && q1.value == "Uniform Resource Locator") {
        document.getElementById("feedback1").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1; // Add 1 to the score
    } else {
        document.getElementById("feedback1").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is Uniform Resource Locator.</span>";
    }

    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 != null && q2.value == "DNS") {
        document.getElementById("feedback2").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback2").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is DNS.</span>";
    }

    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 != null && q3.value == "Browser Cache") {
        document.getElementById("feedback3").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback3").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is Browser Cache.</span>";
    }
    
    // Question 7
    let q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 != null && q7.value == "Extensions") {
        document.getElementById("feedback7").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback7").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is Extensions.</span>";
    }

    // Question 9
    let q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 != null && q9.value == "Session Storage") {
        document.getElementById("feedback9").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback9").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is Session Storage.</span>";
    }

    // --- Grade Text Box Questions ---
    // Use trim to remove spaces and toLowerCase to ignore capitalization

    // Question 4
    let q4 = document.getElementById("q4").value.trim().toLowerCase();
    if (q4 == "rendering engine") {
        document.getElementById("feedback4").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback4").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is Rendering Engine.</span>";
    }

    // Question 5
    let q5 = document.getElementById("q5").value.trim().toLowerCase();
    if (q5 == "javascript") {
        document.getElementById("feedback5").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback5").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is JavaScript.</span>";
    }

    // Question 8
    let q8 = document.getElementById("q8").value.trim().toLowerCase();
    if (q8 == "http") {
        document.getElementById("feedback8").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback8").innerHTML = "<span class='incorrect-text'>Incorrect. The right answer is HTTP.</span>";
    }

    // --- Grade Checkbox Questions ---

    // Question 6
    let q6_checked = document.querySelectorAll('input[name="q6"]:checked');
    let q6_correctCount = 0;
    let q6_wrongCount = 0;

    // Loop through all the boxes that were checked and count how many were correct or wrong
    for (let i = 0; i < q6_checked.length; i++) {
        if (q6_checked[i].value == "Browser Cache" || q6_checked[i].value == "Cookies" || q6_checked[i].value == "Session Storage") {
            q6_correctCount = q6_correctCount + 1;
        } else {
            q6_wrongCount = q6_wrongCount + 1;
        }
    }

    // A point is given only if all 3 correct boxes were checked AND 0 incorrect boxes were checked
    if (q6_correctCount == 3 && q6_wrongCount == 0) {
        document.getElementById("feedback6").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback6").innerHTML = "<span class='incorrect-text'>Incorrect. The right answers are Browser Cache, Cookies, and Session Storage.</span>";
    }

    // Question 10
    let q10_checked = document.querySelectorAll('input[name="q10"]:checked');
    let q10_correctCount = 0;
    let q10_wrongCount = 0;

    // Loop through all the boxes that were checked and count how many were correct or wrong
    for (let i = 0; i < q10_checked.length; i++) {
        if (q10_checked[i].value == "JavaScript" || q10_checked[i].value == "Extensions") {
            q10_correctCount = q10_correctCount + 1;
        } else {
            q10_wrongCount = q10_wrongCount + 1;
        }
    }

    // A point is given only if the 2 correct boxes were checked AND 0 incorrect boxes were checked
    if (q10_correctCount == 2 && q10_wrongCount == 0) {
        document.getElementById("feedback10").innerHTML = "<span class='correct-text'>Correct!</span>";
        score = score + 1;
    } else {
        document.getElementById("feedback10").innerHTML = "<span class='incorrect-text'>Incorrect. The right answers are JavaScript and Extensions.</span>";
    }


    // === Final Results Display ===

    // Calculate how much time was spent on the quiz
    let timeSpent = 600 - timeRemaining;
    let spentMinutes = Math.floor(timeSpent / 60);
    let spentSeconds = timeSpent % 60;

    // Add a leading zero for better formatting (9 seconds becomes 09)
    if (spentSeconds < 10) {
        spentSeconds = "0" + spentSeconds;
    }

    // Unhide the results summary
    document.getElementById("results-summary").style.display = "block";

    // Update the result-score and result-time text
    document.getElementById("result-score").innerHTML = "<strong>Total Score:</strong> " + score + " / 10";
    document.getElementById("result-time").innerHTML = "<strong>Time Spent:</strong> " + spentMinutes + ":" + spentSeconds;

    // Determine Pass or Fail and update the result-pass-fail text
    if (score >= 7) {
        document.getElementById("result-pass-fail").innerHTML = "<strong>Result:</strong> <span class='correct-text'>PASS</span>";
    } else {
        document.getElementById("result-pass-fail").innerHTML = "<strong>Result:</strong> <span class='incorrect-text'>FAIL</span>";
    }

}

// === Reset the Quiz when the Reset Button is Clicked ===
window.addEventListener("load", function() {
    document.getElementById("resetBtn").addEventListener("click", resetQuiz);
});

// === Reset Function ===
function resetQuiz() {
    // Stop the timer and restart it back to 10 minutes
    clearInterval(timerInterval);
    timeRemaining = 600;
    startTimer();

    // Clear out all feedback containers
    for (let i = 1; i <= 10; i++) {
        let feedbackBox = document.getElementById("feedback" + i);
        if (feedbackBox != null) {
            feedbackBox.innerHTML = "";
        }
    }

    // Hide the results summary box
    document.getElementById("results-summary").style.display = "none";
}