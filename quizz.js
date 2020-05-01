// QUIZZ CONTROLLER
var quizzController = (function() {


	var data = {
		progress_bar_box: {
			number_of_question_attempted: 0,
			total_number_questions: 3,
			percentage_questions_answered: 0
		},
		question_box: {
			storage: [
				["snake.png", "bird.png", "lizard.png", "ostrich.png"], /*animal kingdom that is least closely related to humans*/			
				["koala.png", "kangaroo.png", "wombat.png", "opossum.png"],				
				["bear.png", "leopard.png", "wolf.png", "panther.png"],				
				["tree_shrew.png", "capybara.png", "mouse.png", "lagomorpha.png"],				
				["tarsier.png", "loris.png", "potto.png", "bush_baby.png"],				
				["vervet_monkey.png", "orangutan.png", "spider_monkey.png", "squirrel_monkey.png"] /*animal kingdom that is most closely related to humans*/
				],
			storage_inverted: [
				["vervet_monkey.png", "orangutan.png", "spider_monkey.png", "squirrel_monkey.png"], /*animal kingdom that is most closely related to humans*/
				["tarsier.png", "loris.png", "potto.png", "bush_baby.png"],
				["tree_shrew.png", "capybara.png", "mouse.png", "lagomorpha.png"],
				["bear.png", "leopard.png", "wolf.png", "panther.png"],
				["koala.png", "kangaroo.png", "wombat.png", "opossum.png"],
				["snake.png", "bird.png", "lizard.png", "ostrich.png"]

			],
			correct_bracket: {
				correct_bracket_indices: [5, 1], /*index of storage, length*/
				correct_bracket: [],
				correct_bracket_new: []
			},
			incorrect_bracket: {
				incorrect_bracket_indices: [1, 5], /*index of storage, length*/
				incorrect_bracket_indices_new: [5, 1],
				incorrect_bracket_new: [],
				incorrect_bracket: [],
			},
			correct_answer: 0,
			correct_answer_new: 0,
			incorrect_answers: [],
			correctButtonHolder: 0,
			end: {
				question_text: "Well done!",
				new_image: '<div class="col-12 text-center"><img src="rocket.png"></div>',
				id_new_image: 'btn-given-0'
			}
		},
		feedback_box: {
			buttonContent: {
				incorrect: {
					id: 'hello-word',
					src: 'wrong.png'
				},
				correct: {
					id: 'answer-correct-button',
					src: 'next.png'
				},
				nothing: {
					id: "",
					src: ""
				},
				five_of_five: {
					id: 'five-button',
					src: 'next.png'
				},
				six_of_six: {
					id: 'six-button',
					src: 'next.png'
				},
			},
			correctOrNot: 0
		}		

	};

	return {

		getData: function() {
			return data;
		},

		percentageOfQuestionsAnswered: function() {

			var percentage;

			data.progress_bar_box.number_of_question_attempted += 1;
			percentage = (data.progress_bar_box.number_of_question_attempted / data.progress_bar_box.total_number_questions) * 100; 
			data.progress_bar_box.percentage_questions_answered = percentage;
		},

		changeBracketSize: function() {

			var correct_bracket_indices;	

			correct_bracket_indices = data.question_box.correct_bracket.correct_bracket_indices;

			// change the size of the correct bracket
			if (correct_bracket_indices[0] > 1) {
				correct_bracket_indices[0] -= (number_of_question_attempted + 1);
				correct_bracket_indices[1] += 1;
			}

			console.log("correct_bracket_indices: " + correct_bracket_indices);

		},

		changeBracketSizeIncorrect: function(animalKingdomCorrect) {
			var storage_inverted, correct_bracket_indices, indexCorrectInInverted, indexIncorrectInInverted;

			storage_inverted = data.question_box.storage_inverted;
			correct_bracket_indices = data.question_box.correct_bracket.correct_bracket_indices;
			incorrect_bracket_indices_new = data.question_box.incorrect_bracket.incorrect_bracket_indices_new;
			number_of_question_attempted = data.progress_bar_box.number_of_question_attempted;
			total_number_questions = data.progress_bar_box.total_number_questions;

			// The incorrect_bracket must start 1 after the correct_bracket and its length must decrease every question after the mid point of the quiz
			// before that it must start at last item of the quiz and increase every question

			if (number_of_question_attempted > 1) {

				// 1. find the index of the animal kingdom chosen for the correct answer in the storage_inverted
				indexCorrectInInverted = (storage_inverted.length - 1) - (correct_bracket_indices[0] + animalKingdomCorrect);

				// 2. Find the index of the animal kingdom chosen for the beginning of the incorrect_bracket
				indexIncorrectInInverted = (storage_inverted.length - 1) - (correct_bracket_indices[0] + animalKingdomCorrect) + 1;

				// 3. Change the starting index of the incorrect_bracket (incorrect_bracket_indices[0])
				incorrect_bracket_indices_new[0] = (storage_inverted.length - 1) - (correct_bracket_indices[0] + animalKingdomCorrect) + 1;

				// 4. Change the length of the incorrect bracket (reducing every question) - this must only happen after the init function
				if (correct_bracket_indices[0] < 5) {
					incorrect_bracket_indices_new[1] -= 2;
				}	
			} else {
				// this must only happen after the init function
				if (correct_bracket_indices[0] < 5) {
					// 1. Make index of start of array smaller so that array becomes larger making question more difficult
					incorrect_bracket_indices_new[0] -= 2;

					// 2. Make length of array bigger so that incorrect answers are less clear cut making question more difficult
					incorrect_bracket_indices_new[1] += 2;				
				}

			}



		},

		newAddToBracket: function(bracket, index, length) {
			var correct_bracket, incorrect_bracket_indices, incorrect_bracket, storage, storage_inverted;

			correct_bracket = data.question_box.correct_bracket.correct_bracket_new;
			incorrect_bracket_indices = data.question_box.incorrect_bracket.incorrect_bracket_indices_new;
			incorrect_bracket = data.question_box.incorrect_bracket.incorrect_bracket_new;
			storage = data.question_box.storage;
			storage_inverted = data.question_box.storage_inverted;

			if (bracket === "correct") {
				// Adding to the correct_bracket the elements of storage defined by correct_bracket_indices

				// 1. Empty the array correct_bracket as the function works by resetting itself everytime rather than pushing elements
				correct_bracket.splice(0, correct_bracket.length);

				// 2. Add the elements to the correct_bracket

				/* For each question, the index will become smaller (as this is in storage and not storage_inverted). The difference between i (= index) and 
				storage.length will therefore increase for each question*/

				for (var i = index; i < storage.length; i++) {
					correct_bracket.push(storage[i]);
				}				
			} else {
				// Add to the incorrect_bracket the elements of storage_inverted defined by the incorrect_bracket_indices

				// 1. Empty the array incorrect_bracket as the function works by resetting itself everytime rather than pushing elements
				incorrect_bracket.splice(0, incorrect_bracket.length);

				// 2. Add the elements to the incorrect_bracket
				for (var p = 0; p < (incorrect_bracket_indices[1]); p++) {
					if ((incorrect_bracket_indices[0] + p) < 6) {
						incorrect_bracket.push(storage_inverted[incorrect_bracket_indices[0] + p]);
					}
				}
			}


		},


		getAnimalKindomCorrect: function() {
			var correct_bracket, animalKingdomIndex;

			correct_bracket = data.question_box.correct_bracket.correct_bracket_new;

			// To get the animal kingdom from which the correct answer will be selected. It will be selected at random from the correct_bracket that has been created
			// 1. Select at random the animal kingdom from the correct_bracket
			animalKingdomIndex = Math.floor(Math.random() * correct_bracket.length);

			// 2. The animalKingdomIndex will be used to create the incorrect_bracket_indices as the start of the incorrect_bracket 
			return animalKingdomIndex;
		},


		getAnimalCorrect: function(correct) {
			var correct_bracket, correctAnswerIndex, correctAnswer;

			correct_bracket = data.question_box.correct_bracket.correct_bracket_new;
			correct_bracket_indices = data.question_box.correct_bracket.correct_bracket_indices;
			storage = data.question_box.storage;

			// Getting the correct answer randomly from animal kingdom that was chosen from the correct_bracket
			// 1. Getting the correct answer randomly
			correctAnswerIndex = Math.floor(Math.random() * correct_bracket[correct].length);
			correctAnswer = correct_bracket[correct][correctAnswerIndex];

			data.question_box.correct_answer_new = correctAnswer;

			// 2. Removing the correct answer from the storage so that it is not used again
			storage[(correct_bracket_indices[0] + correct)].splice(correctAnswerIndex, 1);


		},


		getRandomIncorrectAnswers: function() {

			var incorrect_answers_indices, randomAnswerIncorrect2, incorrect_bracket, number, arraySplit, arraySplitNumber, randomAnswerIndexIncorrect, randomAnswerIndexIncorrect2, randomAnswerIndex2, status, indicesUsed, amountAdded, randomAnswerIncorrect, incorrect_answers, indicesToBeRemoved, indexToBeSelected, indexToBeRemoved, indexToBeAdded, whereAdded, whatAdded;


			incorrect_bracket = data.question_box.incorrect_bracket.incorrect_bracket_new;
			incorrect_answers = data.question_box.incorrect_answers;
			indicesToBeRemoved = [];
			indicesToBeSelected = [];
			amountAdded = 0;
			indicesUsed = [];
			whatAdded = [];
			status = 0;
			incorrect_answers_indices = [];

			/* 1. Get the animal kingdoms that will be used for the incorrect answers if the number of 
			animal kingdoms exceedes the number of incorrect answers possible or the opposite */
			fnController.emptyArray(indicesToBeRemoved);
			fnController.emptyArray(indicesToBeSelected);
			if (incorrect_bracket.length > 3) {
				for (var l = 0; l < incorrect_bracket.length; l++) {
					indicesToBeRemoved.push(l);
				}

				number = incorrect_bracket.length - 3;

				for (var i = 0; i < number; i++) {
					indexToBeRemoved = Math.floor(Math.random() * indicesToBeRemoved.length);
					incorrect_bracket.splice(indexToBeRemoved, 1);
					indicesToBeRemoved.splice(indexToBeRemoved, 1);
				}

			} else if (incorrect_bracket.length < 3) {
				for (var p = incorrect_bracket.length; p < 3; p++) {
					amountAdded += 1;
					indexToBeAdded = Math.floor(Math.random() * incorrect_bracket.length);
					incorrect_bracket.push(incorrect_bracket[indexToBeAdded]);
					whatAdded.push(indexToBeAdded);
				}

				status += 1;

			}


			// 2. Empty the previous array with the incorrect answers
			fnController.emptyArray(incorrect_answers);

			// 3. Fill the array with the new incorrect answers and avoid repeats if two animal kingdoms are being used (if incorrect_bracket.length < 3 or if status = 1)
			if (status === 0) {
				for (var i = 0; i < 3; i++) {
					randomAnswerIndexIncorrect = Math.floor(Math.random() * incorrect_bracket[i].length);
					randomAnswerIncorrect = incorrect_bracket[i][randomAnswerIndexIncorrect];

					incorrect_answers.push(randomAnswerIncorrect);
				}												
			} else {
 				// get the incorrect answers for the ones that were not added extra (3 - 1)
 				for (var m = 0; m < (3 - amountAdded); m++) {
 					randomAnswerIndexIncorrect = Math.floor(Math.random() * incorrect_bracket[m].length);
 					randomAnswerIncorrect = incorrect_bracket[m][randomAnswerIndexIncorrect];

 					// push to the incorrect_answers the answers
 					incorrect_answers.push(randomAnswerIncorrect);
 					incorrect_answers_indices.push(randomAnswerIndexIncorrect);

 				}


 				// refining the incorrect_bracket
 				for (var p = 1; p < (amountAdded + 1); p++) {
 					if (amountAdded === 1) {
 						incorrect_bracket[2].splice(incorrect_answers_indices[(whatAdded[(p-1)])], 1); 
 					} else {
 						if (p === 1) {
	 						incorrect_bracket[2].splice(incorrect_answers_indices[(whatAdded[(p-1)])], 1); 
 						} else {
 							incorrect_bracket[2].splice(incorrect_answers_indices[1], 1);
 						}
 					}
 					

 					randomAnswerIndexIncorrect2 = Math.floor(Math.random() * incorrect_bracket[2].length); 
 					randomAnswerIncorrect2 = incorrect_bracket[2][randomAnswerIndexIncorrect2];

 					incorrect_answers.push(randomAnswerIncorrect2);
 					incorrect_answers_indices.push(randomAnswerIndexIncorrect2);

 				}

				}
		},

		getHolderCorrect: function() {

			var buttonIndex;

			buttonIndex = Math.floor(Math.random() * 4);
			data.question_box.correctButtonHolder = buttonIndex;
			return buttonIndex;
		},

		getHolderIncorrect: function(correctButton) {
			var buttonIndices = [];
			var randomButtonIndex;
			var randomButtonIndices = [];
			var storage = [0, 1, 2, 3];

			// 1. Remove the index that is being used by the correct answer
			storage.splice(correctButton, 1);


			// 2. Add each of the indices from the storage randomly to the final array of button indices that will be used by the algorithm
			for (var i = 0; i < 3; i++) {
				randomButtonIndex = Math.floor(Math.random() * storage.length);
				randomButtonIndices.push(storage[randomButtonIndex]);
				storage.splice(randomButtonIndex, 1);
			}

			// 3. Return the produced array
			return randomButtonIndices;
		}		

	}

}) ();

// FUNCTIONALITY CONTROLLER
var fnController = (function() {

	var fnData = quizzController.getData();

	return {

		getID: function(item, index) {

			var splitID, imageNumberString, imageNumber;

			splitID = item.split('-');
			imageNumberString = splitID[index];
			imageNumber = parseFloat(imageNumberString);
			return imageNumber;			
		},

		getElement: function(item, index) {
			var splitID, elementString;

			splitID = item.split('-');
			elementString = splitID[index];
			return elementString;
		},

		emptyArray: function(array) {

			var length;

			length = array.length;

			array.splice(0, length);

		}



	}

}) ();


// UI CONTROLLER
var UIController = (function() {

	var UIData = quizzController.getData();
	var width = 0;
	var counter = 0;
	var counter2 = 20;
	var counter3 = -20;
	var counter4 = 0;
	var counterCorrect0 = 0;
	var counterCorrect1 = -40;
	var counterCorrect2 = -20;


	var DOMStrings = {
		progress_bar_box: {
			name_of_box: "progress-bar-box",
			progress_bar: "#progress-bar",
			my_progress_bar: "my-progress-bar",
			buttons: {
				dummy_button: "#dummy-button"
			}
		},
		question_box: {
			name_of_box: "#question-box",
			question_text: "question-text",
			question_number: "question-number",
			buttons: {
				given_answers: ["btn-given-0", "btn-given-1", "btn-given-2", "btn-given-3"],
				given_answers_ids: ["#btn-given-0", "#btn-given-1", "#btn-given-2", "#btn-given-3"]				
			},
			images: {
				given_answers: ["answer-img-0", "answer-img-1", "answer-img-2", "answer-img-3"],
				given_answers_ids: ["#answer-img-0", "#answer-img-1", "#answer-img-2", "#answer-img-3"]								
			},
			row_to_change: "row-to-change"
		},
		feedback_box: {
			name_of_box: "#feedback_box",
			buttons: {
				next_question_id: "#next-question",
				next_question: "next-question",
				five_of_five_id: "#five-of-five",
				five_of_five: "five-of-five"
			}
		}
	};

	return {
		getDOMStrings: function() {
			return DOMStrings;
		},

		displayPercentageCompleted: function() {
			var id = setInterval(frame, 10);
			function frame () {
				if (width >= UIData.progress_bar_box.percentage_questions_answered) {
					clearInterval(id);
					width = UIData.progress_bar_box.percentage_questions_answered;
				} else {
					width++;
					UIController.colorProgress(width);
				}
			}
		},

		colorProgress: function(width) {
			document.getElementById(DOMStrings.progress_bar_box.my_progress_bar).style.width = width + "%";
			if (width > 99) {
				document.getElementById(DOMStrings.progress_bar_box.my_progress_bar).style.backgroundColor = "rgb(0, 221, 136)";
			}
		},

		changeNumberOfQuestion: function() {
			if ((UIData.progress_bar_box.number_of_question_attempted + 1) <= UIData.progress_bar_box.total_number_questions) {
				document.getElementById(DOMStrings.question_box.question_number).innerHTML = "Question " + (UIData.progress_bar_box.number_of_question_attempted + 1) + " of " + UIData.progress_bar_box.total_number_questions;
			} else {
				document.getElementById(DOMStrings.question_box.question_number).style.display = "none";
			}
		},

		displayAnswer: function(buttonNumber, item) {
			document.getElementById(DOMStrings.question_box.images.given_answers[buttonNumber]).src = item;
		},

		errorButtonWiggleForward: function(item) {

			var id = setInterval(frame, 1);
			function frame() {
				if (counter >= 20) {
					clearInterval(id);
					counter = 0;
					UIController.errorButtonWiggleBackward(item);
				} else if (counter < 20) {
					counter++;
					UIController.movePictureForward(counter, item);
				}
			}

		},

		errorButtonWiggleBackward: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counter2 <= -20) {
					clearInterval(id);
					counter2 = 20;
					UIController.errorButtonWiggleForwardAgain(item);
				} else {
					counter2--;
					UIController.movePictureForward(counter2, item);
				}
			}
		},

		correctButtonWiggleUp: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect0 <= -40) {
					clearInterval(id);
					counterCorrect0 =  0;
					UIController.correctButtonWiggleDown(item);
				} else {
					counterCorrect0--;
					UIController.movePictureUp(counterCorrect0, item);
				}
			}
		},	

		correctButtonWiggleDown: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect1 >= 0) {
					clearInterval(id);
					counterCorrect1 = -40;
					UIController.correctButtonWiggleUpAgain(item);
				} else {
					counterCorrect1++;
					UIController.movePictureUp(counterCorrect1, item);
				}
			}
		},

		correctButtonWiggleUpAgain: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect0 <= -20) {
					clearInterval(id);
					counterCorrect0 = 0;
					UIController.correctButtonWiggleDownAgain(item);
				} else {
					counterCorrect0--;
					UIController.movePictureUp(counterCorrect0, item);
				}
			}
		},

		correctButtonWiggleDownAgain: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect2 >= 0) {
					clearInterval(id);
					counterCorrect2 = -20;
				} else {
					counterCorrect2++;
					UIController.movePictureUp(counterCorrect2, item);
				}
			}
		},

		errorButtonWiggleForwardAgain: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counter3 >= 20) {
					clearInterval(id);
					counter3 = -20;
					UIController.errorButtonWiggleBackwardAgain(item);
				} else {
					counter3++;
					UIController.movePictureForward(counter3, item);
				}
			}
		},

		errorButtonWiggleBackwardAgain: function(item) {
			var id = setInterval(frame, 1);
			function frame() {
				if (counter4 <= 0) {
					clearInterval(id);
					counter4 = 20;
				} else {
					counter4--;
					UIController.movePictureForward(counter4, item);
				}
			}
		},

		finalButtonWiggleUp: function() {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect0 <= -40) {
					clearInterval(id);
					counterCorrect0 =  0;
					UIController.finalButtonWiggleDown();
				} else {
					counterCorrect0--;
					UIController.moveFinalPictureUp(counterCorrect0, UIData.feedback_box.buttonContent.six_of_six.id);
				}
			}
		},

		finalButtonWiggleDown: function() {
			var id = setInterval(frame, 1);
			function frame() {
				if (counterCorrect1 >= 0) {
					clearInterval(id);
					counterCorrect1 = -40;
				} else {
					counterCorrect1++;
					UIController.moveFinalPictureUp(counterCorrect1, UIData.feedback_box.buttonContent.six_of_six.id);
				}
			}			
		},

		movePictureForward: function(counter, item) {
			document.getElementById(item).style.marginLeft = counter + "px";
		},

		movePictureUp: function(counter, item) {
			document.getElementById(item).style.marginTop = counter + "px";
			// if ((number + 1) < DOMStrings.question_box.images.given_answers.length) {
			// 	document.getElementById(DOMStrings.question_box.buttons.given_answers[number + 1]).style.marginTop = ((-1) * counter) + "px";
			// } else {
			// 	document.getElementById(DOMStrings.feedback_box.buttons.next_question).style.marginTop = ((-1) * counter) + "px";
			// }
		},

		moveFinalPictureUp: function(counter, item) {
			document.getElementById(item).style.marginTop = counter + "px";
		},

		colorButton: function(success) {

			var html, newHtml, replacement, number_of_question_attempted;

			number_of_question_attempted = UIData.progress_bar_box.number_of_question_attempted;
			total_number_questions = UIData.progress_bar_box.total_number_questions;

			// Create HTML string with placeholder text
			html = "<button class='btn btn-default' id='%idButton%'><img class='make-image-small' src = '%src%' id = %id%></i></button>";


			// Replace placholder text with some actual data
			if (number_of_question_attempted < (total_number_questions - 1)) {
				if (success === "incorrect") {
					replacement = UIData.feedback_box.buttonContent.incorrect;
				} else if (success === "correct") {
					replacement = UIData.feedback_box.buttonContent.correct;
				} else {
					replacement = UIData.feedback_box.buttonContent.nothing;
				}				
			} else if (number_of_question_attempted === (total_number_questions - 1)) {
				if (success === "incorrect") {
					replacement = UIData.feedback_box.buttonContent.incorrect;
				} else if (success === "correct") {
					replacement = UIData.feedback_box.buttonContent.five_of_five;
				} else {
					replacement = UIData.feedback_box.buttonContent.nothing;
				}
			} else if (number_of_question_attempted > (total_number_questions - 1)) {
				replacement = UIData.feedback_box.buttonContent.six_of_six;
			}


			newHtml = html.replace('%src%', replacement.src);
			newHtml = newHtml.replace('%id%', replacement.id);


			// Insert the appropriate button in the DOM
			document.getElementById(DOMStrings.feedback_box.buttons.next_question).innerHTML = newHtml;

		},

		changeTextOfQuestion: function() {
			document.getElementById(DOMStrings.question_box.question_text).innerHTML = UIData.question_box.end.question_text;
			document.getElementById(DOMStrings.question_box.question_text).style.color = "rgb(0, 221, 136)";
			document.getElementById(DOMStrings.question_box.question_text).style.fontWeight = "bold";
		},

		hideImages: function() {
			for (var i = 1; i < DOMStrings.question_box.buttons.given_answers.length; i++) {
				document.getElementById(DOMStrings.question_box.buttons.given_answers[i]).style.display = "none";
			}
		},

		changeImage: function() {
			document.getElementById(DOMStrings.question_box.row_to_change).innerHTML = UIData.question_box.end.new_image; 
			document.getElementById(DOMStrings.question_box.row_to_change).style.paddingTop = "100px";
			document.getElementById(DOMStrings.question_box.row_to_change).style.paddingBottom = "100px";			
		}
	}

}) ();


// GLOBAL APP CONTROLLER
var globalController = (function(qzCtrl, fnCtrl, UICtrl) {

	var DOM, controllerData; 

	var DOM = UICtrl.getDOMStrings();
	var controllerData = qzCtrl.getData();



	var setUpEventListeners = function() {
		document.querySelector(DOM.feedback_box.buttons.next_question_id).addEventListener("click", addToProgress);
		document.querySelector(DOM.question_box.name_of_box).addEventListener("click", giveFeedback);
	};



	var addToProgress = function(event) {

		var itemID, verifier, correct_bracket_indices, status;
		itemID = event.target.id;
		correct_bracket_indices = controllerData.question_box.correct_bracket.correct_bracket_indices;

		// 1. Check what has been clicked and continue function only if a button has been clicked
		if (controllerData.feedback_box.correctOrNot === 1) {
			verifier = fnCtrl.getElement(itemID, 0);
			if (verifier === "btn" || verifier === "answer") {
				// 2. Calculate the numbers of questions answered and calculate percentage of total
				if (controllerData.progress_bar_box.percentage_questions_answered < 100) {
					qzCtrl.percentageOfQuestionsAnswered();			
				}

				// 3. Display the percentage as percentage of the progress bar in DOM
				UICtrl.displayPercentageCompleted();

				// 4. Display the number of question that the user is on
				// UICtrl.changeNumberOfQuestion();	

				if (controllerData.progress_bar_box.number_of_question_attempted < (controllerData.progress_bar_box.total_number_questions)) {

					// Change the future indices of the array 
					qzCtrl.changeBracketSize(); 


					// Add the random element to the correct bracket
					qzCtrl.newAddToBracket("correct", correct_bracket_indices[0], correct_bracket_indices[1]);

					// Get the correct answer for this round from the correct bracket and the resulting incorrect answers (dependent on correct answers)
					nextQuestionEnd();

				}

				// 5. Hide the button
				UICtrl.colorButton("nothing");

			} else if (verifier === "five") {
				endQuizz();
			} else if (verifier === "six") {
				window.location.href = "transition.html";
			}
		} 
	};


	var nextQuestionEnd = function() {
		var animalKingdomCorrect, incorrect_bracket_indices_new, buttonIndex, buttonIncorrectIndices;

		incorrect_bracket_indices_new = controllerData.question_box.incorrect_bracket.incorrect_bracket_indices_new;

		// 1. Get the animal kingdom that will be used for the correct answer
		animalKingdomCorrect = qzCtrl.getAnimalKindomCorrect();

		// 2. Update the incorrect_bracket indices according to the animal kingdom chosen
		qzCtrl.changeBracketSizeIncorrect(animalKingdomCorrect);			

		// 3. Change the incorrect bracket
		qzCtrl.newAddToBracket("incorrect", incorrect_bracket_indices_new[0], incorrect_bracket_indices_new[1]);

		// 4. Get animal correct
		qzCtrl.getAnimalCorrect(animalKingdomCorrect);

		// 5. Get animals incorrect
		qzCtrl.getRandomIncorrectAnswers();		

		// 6. Get random button indices to display the correct and incorrect answers
		buttonIndex = qzCtrl.getHolderCorrect();
		buttonIncorrectIndices = qzCtrl.getHolderIncorrect(buttonIndex);

		// 7. Display the images in the DOM at their correct (randomly chosen) positions 
		UICtrl.displayAnswer(buttonIndex, controllerData.question_box.correct_answer_new);	
		for (var p = 0; p < buttonIncorrectIndices.length; p++) {
			UICtrl.displayAnswer(buttonIncorrectIndices[p], controllerData.question_box.incorrect_answers[p]);
		}

		// 8. Reset the variable holding whether the user got the answer correct or not to 0 (the user has not found the answer yet)
		controllerData.feedback_box.correctOrNot = 0;

	};


	var giveFeedback = function(event) {
		var itemID, numberString, number, verifier, status;

		itemID = event.target.id;
		numberString = fnCtrl.getElement(itemID, 2);
		number = parseFloat(numberString);

		verifier = fnCtrl.getElement(itemID, 0);

		if (number === controllerData.question_box.correctButtonHolder) {
			// animate the buttons
			animateButtonsCorrect();

			// display the button clicked as correct
			UICtrl.colorButton("correct");

			// update the data as to whether the user got the question right or wrong
			controllerData.feedback_box.correctOrNot = 1;

		} else {
			if (verifier === "answer") {
				// animate the buttons
				animateButtonsIncorrect(number);

				// display the button clicked as incorrect
				UICtrl.colorButton("incorrect");

				// update the data as to whether the user got the question right or wrong
				controllerData.feedback_box.correctOrNot = 0;
			}
		}

		// Scroll into view of the next question button
		document.getElementById(DOM.feedback_box.buttons.next_question).scrollIntoView({ behavior: 'smooth' });		

	};


	var endQuizz = function() {

		// 1. Calculate the numbers of questions answered and calculate percentage of total
		if (controllerData.progress_bar_box.percentage_questions_answered < 100) {
			qzCtrl.percentageOfQuestionsAnswered();			
		}

		// 2. Display the percentage as percentage of the progress bar in DOM
		UICtrl.displayPercentageCompleted();

		// 3. Display the number of question that the user is on
		// UICtrl.changeNumberOfQuestion();			

		// 4. Change text of the question to end of quizz text
		UICtrl.changeTextOfQuestion();

		// 5. Hide the display of all but one image
		UICtrl.hideImages();

		// 6. Change image to winking face
		UICtrl.changeImage();

		// 7. Change button image to hand point right
		UICtrl.colorButton("success");

		// 8. Bob the button up with interval
		setInterval(UICtrl.finalButtonWiggleUp, 1500);

	};


	var animateButtonsIncorrect = function(number) {

		UICtrl.errorButtonWiggleForward(DOM.question_box.buttons.given_answers[number]);

	};

	var animateButtonsCorrect = function() {

		UICtrl.correctButtonWiggleUp(DOM.feedback_box.buttons.next_question);


	};

	return {
		init: function() {

			console.log("application has started successfully");

			var correct_bracket_indices, correct_bracket, storage, randomPossibility, buttonIndex, animalKingdomCorrect, incorrect_bracket_indices_new;
			correct_bracket_indices = controllerData.question_box.correct_bracket.correct_bracket_indices;
			console.log("correct_bracket_indices: " + correct_bracket_indices);

			setUpEventListeners();


			UICtrl.displayPercentageCompleted();
			// UICtrl.changeNumberOfQuestion();
			qzCtrl.newAddToBracket("correct", correct_bracket_indices[0], correct_bracket_indices[1]);
			nextQuestionEnd();

		}
	}

})(quizzController, fnController, UIController);

globalController.init();