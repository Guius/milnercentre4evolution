var controller = (function() {

	var setUpEventListeners = function() {

		document.querySelector("#follow-next").addEventListener("click", displayRestOfPage1);

	};

	var displayRestOfPage1 = function() {
		// display the answer
		document.getElementById("answer-box").style.display = "block";

		// scroll to the text
		document.getElementById("scrollToHere").scrollIntoView({ behavior: 'smooth' });		

	};

	return {
		init: function() {
			console.log("application has started successfully");
			setUpEventListeners();
		}
	}

}) ();

controller.init();