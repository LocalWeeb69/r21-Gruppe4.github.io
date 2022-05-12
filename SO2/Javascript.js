//logbog kode
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//quiz kode
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
      
	  var output = [];
	  var answers;

	  // for hvert spørgsmål...
	  for(var i=0; i<questions.length; i++){
    
		  // først reset listen af svar
		  answers = [];

		  // for hvert ledigt svar for det spørgsmål
		  for(letter in questions[i].answers){

			  // tilføj en html radio knap
			  answers.push(
				  '<label>'
					  + '<input type="radio" name="question'+i+'" value="'+letter+'">'
					  + letter + ': '
					  + questions[i].answers[letter]
				  + '</label>'
			  );
		  }

		  // tilføj spørgsmålet og dens svar til output 
		  output.push(
			  '<div class="question">' + questions[i].question + '</div>'
			  + '<div class="answers">' + answers.join('') + '</div>'
		  );
	  }

	  // finally combine our output list into one string of html and put it on the page
	  quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		  // få fat i quizcontainers
	  var answerContainers = quizContainer.querySelectorAll('.answers');
	
	  // hold øje med svar
	  var userAnswer = '';
	  var numCorrect = 0;
	
	  // for hvært spørgsmål
	  for(var i=0; i<questions.length; i++){

		  // find svaret der er valgt
		  userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		  // hvis svaret er korrekt
		  if(userAnswer===questions[i].correctAnswer){
			  // tilføj til antallet af rigtige svar
			  numCorrect++;
			
			  // farv svaret grønt
			  answerContainers[i].style.color = 'green';
		  }
		  // hvis svaret er forket
		  else{
			  // farv svarene røde
			  answerContainers[i].style.color = 'red';
		  }
	  }

	  // vis antallet af rigtige svar
	  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// vis spørgsmålene
	showQuestions(questions, quizContainer);

	// vis svarene
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
    {
    question: "Hvilke øer fandt Darwin sine finker?",
    answers: {
      a: 'Solomon øerne',
      b: 'Galapagos øerne',
      c: 'De Caribiske øer',
      d: 'Bornholm',
      e: 'De canariske øer'
    },
    correctAnswer: 'b'
  },
  {
    question: "Hvad var det tredje menneske i vores slider, på evolution siden?",
    answers: {
      a: 'Homo Sapiens',
      b: 'Australopithecus',
      c: 'Homo Neanderthalensis',
      d: 'Homo Erectus',
      e: 'Homo Habilis'

    },
    correctAnswer: 'd'
  },
  {
	question: "I hvilket årstal blev Darwin inviteret til sin jordomrejse på HMS-Beagle?",
	answers: {
	  a: '1811',
 	  b: '1821',
	  c: '1831',
	  d: '1841',
	  e: '1851'
	},
	correctAnswer: 'c'
  },
  {
	question: "Hvor lang tid siden startede menneskets udvikling?",
	answers: {
	  a: '4,86 millioner år siden',
	  b: '5,37 millioner år siden',
	  c: '5,64 millioner år siden',
	  d: '6 millioner år siden',
	  e: '7 millioner år siden'
	},
	correctAnswer: 'e'  
  },
  {
	question: "Hvor mange fosiller er blevet fundet af forskellige menneskearter?",
	answers: {
	  a: '19',
	  b: '20',
	  c: '21',
	  d: '22',
	  e: '23'
	},
	correctAnswer: 'b'  
  },
];

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);