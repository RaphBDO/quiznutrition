//QUESTIONS AREAS
var question1 = {
    question: "Manger des glucides avant de dormir conduit à une prise de poids excessive",
    answers: [
        "Vrai",
        "Faux",
        "Seulement si combiné avec des graisses",
        "Cela dépend du métabolisme de la personne",
    ],
    correctAnswer: "Faux",
    myth: true,
};
var question2 = {
    question: "La détoxification du corps via des régimes ou des jus est efficace",
    answers: [
        "Vrai",
        "Faux",
        "Efficace uniquement pour le foie",
        "Efficace uniquement pour les reins",
    ],
    correctAnswer: "Faux",
    myth: true,
};
var question3 = {
    question: "Quel est l'effet de la consommation d'antioxydants après l'exercice sur l'adaptation musculaire ?",
    answers: [
        "Accélère la récupération",
        "Réduit l'adaptation musculaire",
        "Améliore l'hypertrophie",
        "Accroît l'endurance",
    ],
    correctAnswer: "Réduit l'adaptation musculaire",
    myth: false,
};
var question4 = {
    question: "La supplémentation en vitamine C permet de prévenir le rhume",
    answers: [
        "Vrai",
        "Faux",
        "Seulement en hiver",
        "Uniquement chez les sportifs",
    ],
    correctAnswer: "Faux",
    myth: true,
};
var question5 = {
    question: "Quelle est l'influence de la supplémentation en acides aminés à chaîne ramifiée (BCAA) sur la synthèse protéique musculaire après l'exercice ?",
    answers: [
        "Accélère la synthèse des protéines musculaires",
        "Inhibe la synthèse des protéines",
        "Ne stimule pas pleinement la synthèse sans autres acides aminés",
        "Augmente le taux de dégradation musculaire",
    ],
    correctAnswer: "Ne stimule pas pleinement la synthèse sans autres acides aminés",
    myth: false,
};
var question6 = {
    question: "Quelle est l'influence de la consommation d'acides gras trans sur le risque de maladies cardiovasculaires ?",
    answers: [
        "Réduit le risque",
        "Augmente considérablement le risque",
        "Aucun effet",
        "Cela dépend des niveaux de cholestérol",
    ],
    correctAnswer: "Augmente considérablement le risque",
    myth: false,
};
var question7 = {
    question: "Quel est le rôle de la caféine dans l'amélioration de la performance sportive ?",
    answers: [
        "Augmente la production d'acide lactique",
        "Accélère la dégradation des protéines",
        "Augmente la concentration et la vigilance",
        "Diminue le métabolisme",
    ],
    correctAnswer: "Augmente la concentration et la vigilance",
    myth: false,
};
var question8 = {
    question: "Les régimes pauvres en glucides sont les plus efficaces pour perdre du gras sur le long terme",
    answers: [
        "Vrai",
        "Faux",
        "Seulement dans les premiers mois",
        "Cela dépend du métabolisme individuel",
    ],
    correctAnswer: "Faux",
    myth: true,
};
var question9 = {
    question: "Les suppléments de collagène améliorent l'apparence de la peau de manière significative",
    answers: [
        "Vrai",
        "Faux",
        "Seulement avec une alimentation riche en protéines",
        "Seulement chez les personnes âgées",
    ],
    correctAnswer: "Faux",
    myth: true,
};
var question10 = {
    question: "Quel complément alimentaire est le plus recommandé pour les athlètes qui souhaitent augmenter leur force musculaire ?",
    answers: ["Acides gras oméga-3", "Multivitamines", "Créatine", "Whey"],
    correctAnswer: "Créatine",
    myth: false,
};
var allQuestions = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
];
var index = 0;
//PROGRESS BAR SECTION
var progressBar = document.getElementById("progression-bar");
var filledBar = document.getElementById("filled-bar");
var progressText = document.getElementById("progression-percentage");
var widthBar = 0;
if (window.innerWidth >= 900) {
    widthBar = window.innerWidth * 0.75 * 0.5;
}
else {
    widthBar = window.innerWidth * 0.75 * 0.8;
}
//BUTTONS DECLARATION
var answersButtons = document.querySelectorAll(".answers");
var beginButton = document.getElementById("begin-button");
var detailButton = document.getElementById("detail-button");
//TEXT DECLARATION
var totalScore = document.getElementById("totalScore");
var mythScore = document.getElementById("mythScore");
var commentScore = document.getElementById("comment");
var ctaButton = document.getElementById("cta-button");
var ctaHeadline = document.getElementById("cta-headline");
var ctaLink = document.getElementById("cta-link");
//BASIC SETUP
progressBar.style.display = "none";
detailButton.style.display = "none";
totalScore.style.display = "none";
ctaButton.style.display = "none";
ctaHeadline.style.display = "none";
answersButtons.forEach(function (button) {
    button.style.display = "none";
});
//HIDE QUIZ ELEMENT FUNCTION
function hideQuiz() {
    answersButtons.forEach(function (button) {
        button.style.display = "none";
    });
    quizQuestion.style.display = "none";
    progressBar.style.display = "none";
    progressText.style.display = "none";
}
//SHOW SCORE ELEMENT FUNCTION
function showScore() {
    detailButton.style.display = "block";
    totalScore.style.display = "block";
}
//BEGIN BUTTON
beginButton.addEventListener("click", function () {
    answersButtons.forEach(function (button) {
        button.style.display = "block";
        beginButton.style.display = "none";
        progressBar.style.display = "block";
    });
    showQuestion();
    showAnswer();
});
//ANSWERS AND QUESTIONS TEXT CONSTANTS
var quizQuestion = document.getElementById("question-quiz");
var answer1 = document.getElementById("possibility1");
var answer2 = document.getElementById("possibility2");
var answer3 = document.getElementById("possibility3");
var answer4 = document.getElementById("possibility4");
function showQuestion() {
    quizQuestion.innerHTML = allQuestions[index].question;
}
function showAnswer() {
    answer1.innerText = allQuestions[index].answers[0];
    answer2.innerText = allQuestions[index].answers[1];
    answer3.innerText = allQuestions[index].answers[2];
    answer4.innerText = allQuestions[index].answers[3];
}
var goodAnswer = 0;
var mythAnswer = 0;
var selectedAnswers = [];
//GOOD ANSWERS SCORE CALCULATION AND % OF PROGRESSION
answersButtons.forEach(function (answer) {
    answer.addEventListener("click", function () {
        selectedAnswers.push(answer.innerText);
        var currentAnswer = answer.innerHTML;
        var currentIndex = allQuestions[index].correctAnswer;
        if (index < allQuestions.length - 1) {
            index++;
            var percentageQuestion = index * (widthBar * 0.1);
            //___________________________________
            if (currentAnswer === currentIndex) {
                goodAnswer++;
                if (allQuestions[index].myth === true) {
                    mythAnswer++;
                }
            }
            //____________________________________
            filledBar.style.setProperty("width", percentageQuestion + "px");
            progressText.innerHTML = (index * 10).toString() + "%";
            showQuestion();
            showAnswer();
        }
        else if (currentAnswer === currentIndex &&
            index === allQuestions.length - 1) {
            goodAnswer++;
            if (allQuestions[index].myth === true) {
                mythAnswer++;
                mythScore.innerHTML =
                    mythAnswer.toString() + "/5 des mythes bien répondus";
            }
            hideQuiz();
            showScore();
            totalScore.innerHTML = goodAnswer.toString() + "/10";
            mythScore.innerHTML =
                mythAnswer.toString() + "/5 des mythes bien répondus";
            ctaButton.style.display = "block";
            ctaHeadline.style.display = "block";
            if (goodAnswer < 3) {
                commentScore.innerText =
                    "Tu as encore beaucoup à découvrir sur le sujet ! :)";
                ctaButton.innerText = "Obtiens mon guide sur le \"Pr\u00E9-workout\"";
            }
            else if ((goodAnswer = 3 | 4 | 5)) {
                commentScore.innerText = "Encore quelques lacunes à travailler! ;)";
                ctaButton.innerText =
                    "Suis mon cours sur les bases de la nutrition sportive";
            }
            else if ((goodAnswer = 6 | 7)) {
                commentScore.innerText = "Une bonne base !";
                ctaButton.innerText = "Réserve ton appel gratuit avec moi";
            }
            else if ((goodAnswer = 8 | 9)) {
                commentScore.innerText = "Presque un sans faute !";
                ctaButton.innerText = "Découvre mon podcast !";
            }
            else if ((goodAnswer = 10)) {
                commentScore.innerText = "Tu connais déjà tout !";
                ctaButton.innerText = "Viens me partager ton résultat !";
            }
            // FIND WAY TO FACTORIZE CODE TO DON'T HAVE 2 TIMES THE SAME CODE LINKED WITH COMMENT FOR THE SCORE
        }
        else if (index === allQuestions.length - 1) {
            hideQuiz();
            showScore();
            totalScore.innerHTML = goodAnswer.toString() + "/10";
            mythScore.innerHTML =
                mythAnswer.toString() + "/5 des mythes bien répondus";
            ctaButton.style.display = "block";
            ctaHeadline.style.display = "block";
            if (goodAnswer < 3) {
                commentScore.innerText =
                    "Tu as encore beaucoup à découvrir sur le sujet ! :)";
                ctaButton.innerText = "Obtiens mon guide sur le \"Pr\u00E9-workout\"";
            }
            else if ((goodAnswer = 3 | 4 | 5)) {
                commentScore.innerText = "Encore quelques lacunes à travailler! ;)";
                ctaButton.innerText =
                    "Suis mon cours sur les bases de la nutrition sportive";
            }
            else if ((goodAnswer = 6 | 7)) {
                commentScore.innerText = "Une bonne base !";
                ctaButton.innerText = "Réserve ton appel gratuit avec moi";
            }
            else if ((goodAnswer = 8 | 9)) {
                commentScore.innerText = "Presque un sans faute !";
                ctaButton.innerText = "Découvre mon podcast !";
            }
            else if ((goodAnswer = 10)) {
                commentScore.innerText = "Tu connais déjà tout !";
                ctaButton.innerText = "Viens me partager ton résultat !";
            }
        }
    });
});
function linkCTA() {
    if (ctaButton.innerText === "Obtiens mon guide sur le \"Pr\u00E9-workout\"") {
        ctaLink.href = "https://www.bedietonic.com/guide-repas-autour-des-seances/";
    }
    else if (ctaButton.innerText ===
        "Suis mon cours sur les bases de la nutrition sportive") {
        ctaLink.href =
            "https://www.bedietonic.com/courses/bases-nutrition-du-sportif/";
    }
    else if (ctaButton.innerText === "Réserve ton appel gratuit avec moi") {
        ctaLink.href = "https://forms.fillout.com/t/p4Ri2o6jXBus";
    }
    else if (ctaButton.innerText === "Découvre mon podcast !") {
        ctaLink.href = "https://pod.link/1544921257";
    }
    else if (ctaButton.innerText === "Viens me partager ton résultat !") {
        ctaLink.href = "https://www.instagram.com/bedietonic/";
    }
}
//CORRECTED ANSWERS SECTION
//WholeCorrection const
var WholeCorrection = document.getElementById("reviewWholeQuiz");
//Correction answer subsection
var correctionQ1 = document.getElementById("question1");
var correctionQ2 = document.getElementById("question2");
var correctionQ3 = document.getElementById("question3");
var correctionQ4 = document.getElementById("question4");
var correctionQ5 = document.getElementById("question5");
var correctionQ6 = document.getElementById("question6");
var correctionQ7 = document.getElementById("question7");
var correctionQ8 = document.getElementById("question8");
var correctionQ9 = document.getElementById("question9");
var correctionQ10 = document.getElementById("question10");
//Review question const
var reviewQ1 = document.getElementById("reviewQuestion1");
var reviewQ2 = document.getElementById("reviewQuestion2");
var reviewQ3 = document.getElementById("reviewQuestion3");
var reviewQ4 = document.getElementById("reviewQuestion4");
var reviewQ5 = document.getElementById("reviewQuestion5");
var reviewQ6 = document.getElementById("reviewQuestion6");
var reviewQ7 = document.getElementById("reviewQuestion7");
var reviewQ8 = document.getElementById("reviewQuestion8");
var reviewQ9 = document.getElementById("reviewQuestion9");
var reviewQ10 = document.getElementById("reviewQuestion10");
//Review answer const
var reviewA1 = document.getElementById("reviewAnswer1");
var reviewA2 = document.getElementById("reviewAnswer2");
var reviewA3 = document.getElementById("reviewAnswer3");
var reviewA4 = document.getElementById("reviewAnswer4");
var reviewA5 = document.getElementById("reviewAnswer5");
var reviewA6 = document.getElementById("reviewAnswer6");
var reviewA7 = document.getElementById("reviewAnswer7");
var reviewA8 = document.getElementById("reviewAnswer8");
var reviewA9 = document.getElementById("reviewAnswer9");
var reviewA10 = document.getElementById("reviewAnswer10");
//Review explanation const
var reviewE1 = document.getElementById("explanation1");
var reviewE2 = document.getElementById("explanation2");
var reviewE3 = document.getElementById("explanation3");
var reviewE4 = document.getElementById("explanation4");
var reviewE5 = document.getElementById("explanation5");
var reviewE6 = document.getElementById("explanation6");
var reviewE7 = document.getElementById("explanation7");
var reviewE8 = document.getElementById("explanation8");
var reviewE9 = document.getElementById("explanation9");
var reviewE10 = document.getElementById("explanation10");
//Review explanationButton const
var explanationButton1 = document.getElementById("explanationButton1");
var explanationButton2 = document.getElementById("explanationButton2");
var explanationButton3 = document.getElementById("explanationButton3");
var explanationButton4 = document.getElementById("explanationButton4");
var explanationButton5 = document.getElementById("explanationButton5");
var explanationButton6 = document.getElementById("explanationButton6");
var explanationButton7 = document.getElementById("explanationButton7");
var explanationButton8 = document.getElementById("explanationButton8");
var explanationButton9 = document.getElementById("explanationButton9");
var explanationButton10 = document.getElementById("explanationButton10");
var correctionQuestion = [
    correctionQ1,
    correctionQ2,
    correctionQ3,
    correctionQ4,
    correctionQ5,
    correctionQ6,
    correctionQ7,
    correctionQ8,
    correctionQ9,
    correctionQ10,
];
function detailButtonText(e) {
    var text = e.innerText;
    e.innerText = text === "Détail" ? "Réduire" : "Détail";
}
var reviewAllQuestions = [
    reviewQ1,
    reviewQ2,
    reviewQ3,
    reviewQ4,
    reviewQ5,
    reviewQ6,
    reviewQ7,
    reviewQ8,
    reviewQ9,
    reviewQ10,
];
var reviewAllAnswers = [
    reviewA1,
    reviewA2,
    reviewA3,
    reviewA4,
    reviewA5,
    reviewA6,
    reviewA7,
    reviewA8,
    reviewA9,
    reviewA10,
];
var reviewAllExplanation = [
    reviewE1,
    reviewE2,
    reviewE3,
    reviewE4,
    reviewE5,
    reviewE6,
    reviewE7,
    reviewE8,
    reviewE9,
    reviewE10,
];
var allExplanationButton = [
    explanationButton1,
    explanationButton2,
    explanationButton3,
    explanationButton4,
    explanationButton5,
    explanationButton6,
    explanationButton7,
    explanationButton8,
    explanationButton9,
    explanationButton10,
];
//Explanation button text
function switchTextExplanationButton(e) {
    var text = e.innerText;
    e.innerText = text === "Détail" ? "Réduire" : "Détail";
}
//Basic display of correction elements → replace in below code
WholeCorrection.style.display = "none";
//Explanation detail ON/OFF
allExplanationButton.forEach(function (item, index) {
    reviewAllExplanation.forEach(function (e) {
        e.style.display = "none";
        allExplanationButton[index].addEventListener("click", function () {
            var expla = reviewAllExplanation[index];
            expla.style.display = "none";
            if (item.innerText === "Détail") {
                expla.style.display = "none";
            }
            else if (item.innerText === "Réduire") {
                expla.style.display = "block";
            }
        });
    });
});
//Function to make the correction appears
function showCorrection() {
    //BASIC SETUP CORRECTION:
    WholeCorrection.style.display = "block";
    if (detailButton.innerText === "Détail") {
        WholeCorrection.style.display = "none";
    }
    else if (detailButton.innerText === "Réduire") {
        WholeCorrection.style.display = "block";
    }
    var _loop_1 = function (i) {
        var texttextReviewQuestions = (reviewAllQuestions[i].innerHTML =
            allQuestions[i].question);
        var textReviewAnswers = (reviewAllAnswers[i].innerHTML =
            allQuestions[i].answers[0] +
                " " +
                allQuestions[i].answers[1] +
                " " +
                allQuestions[i].answers[2] +
                " " +
                allQuestions[i].answers[3]);
        //FUNCTION TO PUT GOOD ANSWERS GREEN
        function colorAnswerGreenRed() {
            // Split answers and wrap the correct one with a span for styling in green
            var answers = allQuestions[i].answers.map(function (ans) {
                if (ans === allQuestions[i].correctAnswer) {
                    return "<span style=\"color: green; font-weight:600\">".concat(ans, "</span>");
                }
                else if (ans !== allQuestions[i].correctAnswer &&
                    ans === selectedAnswers[i]) {
                    return "<span style=\"color: red; font-weight:600\">".concat(ans, "</span>");
                }
                return ans;
            });
            // Join the answers with spaces and set the HTML
            reviewAllAnswers[i].innerHTML = answers.join(" | ");
        }
        //Displaying the explanation (inhide it)
        reviewAllExplanation[i];
        var currentAnswerArr = [
            allQuestions[i].answers[0],
            allQuestions[i].answers[1],
            allQuestions[i].answers[2],
            allQuestions[i].answers[3],
        ];
        colorAnswerGreenRed();
    };
    //SHOW CORRECTION ANSWERS AND QUESTIONS
    for (var i = 0; i < correctionQuestion.length; i++) {
        _loop_1(i);
    }
}
//DETAIL BUTTON SECTION
detailButton.addEventListener("click", function () {
    showCorrection();
});
